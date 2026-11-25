#!/usr/bin/env python3
"""
Dağıtım sonrası ısıtma/doğrulama (bağımlılıksız Python 3, salt okuma GET).

  python3 scripts/fiyat-isit.py http://127.0.0.1:3000
  python3 scripts/fiyat-isit.py http://127.0.0.1:3000 --host portzenai.com --rate 4

Ne yapar: <taban>/sitemap.xml okunur; içindeki HER URL'nin yolu <taban>'a karşı GET edilir (en çok --rate istek/sn, varsayılan 4,
üst sınır 4). Build DB'siz fiyatsız üretildiğinden ilk istek bayat sayfa döner ve arka planda yenilenir; ikinci turda doğrulanır.
  tur 1: ısıtma (yanıtlar yok sayılır, yalnız hata sayılır)
  bekleme (--wait, varsayılan 7 sn): bayat sayfaların arka plan yenilemesi
  tur 2: doğrulama - HTTP 200 olmayan veya "data-fiyat-yok" (fiyatsız) işareti taşıyan sayfa.
--host: Host başlığı (taban loopback iken sitemap/yönlendirmeler için, ör. portzenai.com).
Çıkış kodu: 0 = tüm sayfalar 200 ve fiyatlı; 1 = en az bir sayfa 200 değil / sitemap okunamadı; 3 = 200 ama fiyatsız sayfa var.
"""
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request


def parse(argv):
    base, host, rate, wait = None, None, 4.0, 7.0
    i = 0
    while i < len(argv):
        a = argv[i]
        if a == "--host":
            host = argv[i + 1]; i += 2
        elif a == "--rate":
            rate = min(4.0, max(0.1, float(argv[i + 1]))); i += 2
        elif a == "--wait":
            wait = float(argv[i + 1]); i += 2
        elif base is None and re.match(r"^https?://", a):
            base = a.rstrip("/"); i += 1
        else:
            sys.exit(__doc__)
    if not base:
        sys.exit(__doc__)
    return base, host, rate, wait


def main():
    base, host, rate, wait = parse(sys.argv[1:])
    gap = 1.0 / rate

    def get(path):
        req = urllib.request.Request(base + path, headers={"User-Agent": "portzen-fiyat-isit/1"})
        if host:
            req.add_header("Host", host)
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                return r.status, r.read().decode("utf-8", "replace")
        except urllib.error.HTTPError as e:
            return e.code, ""
        except Exception as e:  # bağlantı hatası vb.
            return 0, str(e)

    st, body = get("/sitemap.xml")
    if st != 200:
        print(f"HATA: sitemap.xml okunamadı (HTTP {st})")
        return 1
    paths = []
    for loc in re.findall(r"<loc>([^<]+)</loc>", body):
        p = urllib.parse.urlsplit(loc.strip())
        path = p.path or "/"
        if p.query:
            path += "?" + p.query
        paths.append(urllib.parse.quote(path, safe="/%?=&:@,+~"))
    paths = list(dict.fromkeys(paths))
    print(f"Isıtma: {len(paths)} sayfa ({base}), en çok {rate:g} istek/sn")

    for p in paths:
        get(p)
        time.sleep(gap)
    time.sleep(wait)

    bad, neutral = 0, 0
    for p in paths:
        st, body = get(p)
        if st != 200:
            bad += 1
            print(f"HTTP {st} {p}")
        elif "data-fiyat-yok" in body:
            neutral += 1
            print(f"FİYATSIZ {p}")
        time.sleep(gap)
    print(f"Sonuç: {len(paths) - bad - neutral} tamam, {bad} non-200, {neutral} fiyatsız.")
    if bad:
        return 1
    return 3 if neutral else 0


if __name__ == "__main__":
    sys.exit(main())
