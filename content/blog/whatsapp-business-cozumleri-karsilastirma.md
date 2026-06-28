---
title: "WhatsApp Business Çözümleri: WATI, Trengo, Respond.io, Custom AI Karşılaştırma"
slug: "whatsapp-business-cozumleri-karsilastirma"
category: "karsilastirma"
description: "WATI, Trengo, Respond.io ve özel AI WhatsApp çözümleri karşılaştırması: fiyat, AI desteği, BSP ve KOBİ için karar rehberi 2026."
keywords: ["wati alternatifi", "whatsapp business api", "trengo karsilastirma", "respond.io", "whatsapp ai bot"]
publishedAt: "2026-06-24"
author: "Arda Kaya"
readingTime: "13 dakika"
relatedServices: ["ai-bot", "crm-otomasyonu"]
ogImage: "/blog/og/whatsapp-business-cozumleri-karsilastirma.png"
---

# WhatsApp Business Çözümleri: WATI, Trengo, Respond.io, Custom AI Karşılaştırma

WhatsApp, Türkiye'de 55 milyondan fazla aktif kullanıcısıyla işletmelerin müşteriyle iletişim kurduğu en kritik kanal haline geldi. 2026 itibarıyla yalnızca WhatsApp Business uygulamasıyla yetinen KOBİ'ler, ölçeklenme, çoklu agent yönetimi, otomasyon ve AI entegrasyonu gibi temel ihtiyaçlarda duvara çarpıyor. Bu noktada devreye WhatsApp Business API ve onun üzerine inşa edilen üçüncü parti platformlar (BSP, yani Business Solution Provider) giriyor. WATI, Trengo, Respond.io gibi global oyuncular ve giderek yaygınlaşan özel AI bot kurulumları, KOBİ'lerin önündeki en popüler seçenekler arasında.

Ancak bu kararı vermek göründüğü kadar kolay değil. Her platformun farklı bir konumlandırması, farklı bir fiyat modeli ve farklı bir teknik mimarisi var. Yanlış seçilen bir araç; aylık 200 USD ekstra masraf, Türkçe NLP'de zayıf performans, ekibinizin yıllarca uğraşacağı zayıf bir entegrasyon ya da Meta tarafından askıya alınan bir hesap olarak geri dönebiliyor. Üstelik konuşma başı (conversation-based) Meta ücretlendirmesi, KOBİ'ler için sabit aboneliklerden çok daha kritik bir kalemi oluşturuyor.

Bu yazıda; WATI, Trengo, Respond.io ve özel AI çözümlerini (n8n + LLM tabanlı custom kurulumlar) BSP partnership, AI/NLP desteği, Türkçe yetkinlik, fiyat, çoklu agent, otomasyon ve entegrasyon açılarından detaylıca karşılaştıracağız. 360dialog, Twilio ve Infobip gibi alternatiflere de kısaca değineceğiz. Yazının sonunda 7 farklı senaryoya özel karar matrisi, bütçe planlaması ve sık sorulan sorular ile birlikte; sizin için doğru çözümü seçebilecek pratik bir karar rehberi elde etmiş olacaksınız. Eğer WhatsApp API altyapısına yeniyseniz, [WhatsApp Business API kurulum rehberini](/blog/whatsapp-business-api-kurulum) ve [WhatsApp Business vs API farklarını](/blog/whatsapp-business-vs-api-karsilastirma) önce okumanızı öneririz.

## WhatsApp Business Çözümünde Aranan 7 Kritik Kriter

Doğru platformu seçmeden önce, bir KOBİ olarak hangi kriterleri masaya yatırmanız gerektiğini netleştirelim. Aşağıdaki 7 başlık, hem global ölçekte hem de Türkiye pazarında en sık öne çıkan değerlendirme noktalarıdır.

- BSP partnership (Meta yetkili iş ortağı statüsü): Platformun Meta ile doğrudan BSP anlaşmasının olması, hesap onayları, mavi tik başvurusu ve template message süreçlerinde size haftalar kazandırır. WATI, Respond.io ve Trengo'nun resmi BSP statüsü var. Custom AI çözümlerinde ise 360dialog, Twilio ya da Gupshup gibi bir BSP üzerinden bağlantı kurulur.

- AI/NLP ve LLM desteği: Klasik kural tabanlı (rule-based) botlar, müşterinin "siparişim nerede" demesini tahmin etmek için onlarca varyant yazmanızı gerektirir. LLM (Large Language Model) tabanlı çözümler ise doğal dilde gelen soruları anlayıp, ürün kataloğunuza ya da CRM verinize göre cevap verebilir. 2026'da rekabette kalmak isteyen KOBİ için bu özellik artık opsiyonel değil.

- Türkçe destek ve dil performansı: Arayüz Türkçesi bir konu, fakat asıl mesele NLP motorunun Türkçeyi ne kadar iyi anladığı. Özellikle ek alan Türkçe gibi sondan eklemeli dillerde, modelin doğru intent (niyet) çıkarması platformdan platforma değişiyor.

- Fiyat modeli: Sabit aylık (flat fee), kullanıcı (agent) başı, MAU (monthly active user) başı ve konuşma (conversation) başı olarak 4 ana model var. Hesabınızın hacmine göre aynı platform bazen ucuz, bazen son derece pahalı çıkabilir.

- Çoklu agent ve ekip yönetimi: 3 kişilik bir destek ekibi için işe yarayan araç, 15 kişilik bir çağrı merkezi için yetersiz kalabilir. Konuşma yönlendirme (routing), iç notlar, rol bazlı yetkilendirme ve performans raporlaması kritik.

- Otomasyon ve workflow: Sipariş takibi, randevu hatırlatma, kargo bilgilendirmesi gibi senaryoların kod yazmadan kurulabilmesi (no-code/low-code) zaman kazandırır. n8n, Zapier ya da yerleşik workflow editörleri burada öne çıkar.

- Entegrasyon ekosistemi: CRM (HubSpot, Salesforce, Pipedrive), e-ticaret (Shopify, WooCommerce, Ikas, ideasoft), ERP (Logo, Mikro, Netsis) ve ödeme sistemleriyle (iyzico, PayTR) hazır konnektör olup olmadığı, projenin maliyetini ciddi ölçüde değiştirir.

Şimdi bu kriterler ışığında her platformu tek tek inceleyelim.

## WATI Detaylı İnceleme

WATI, 2020 yılında Hindistan merkezli Clare.AI tarafından kurulmuş, KOBİ odaklı bir WhatsApp Business API platformudur. Kuruluşundan itibaren agresif fiyat politikasıyla küçük ve orta ölçekli işletmeleri hedeflemiş ve 2026 itibarıyla 8.000'den fazla müşteriyle global pazarda WATI, WhatsApp ekosistemindeki en bilinen markalardan biri haline gelmiştir.

Güçlü yönler:
- Hızlı onboarding: Meta business hesabınız hazırsa, 24-48 saat içinde aktif çalışan bir hesap kurabilirsiniz.
- Görsel chatbot builder: Sürükle bırak mantığıyla çalışan no-code akış editörü, teknik bilgisi olmayan ekip üyeleri için oldukça erişilebilir.
- Shopify ve WooCommerce entegrasyonu: E-ticaret senaryolarında sepet hatırlatma, sipariş takibi gibi şablonlar hazır geliyor.
- Broadcast yönetimi: Toplu mesaj gönderimi ve template message onayı süreci kullanıcı dostu.

Zayıf yönler:
- AI motoru sınırlı: Yerleşik AI özellikleri 2025 sonrasında geliştirilmiş olsa da, gerçek anlamda LLM bazlı serbest konuşma için OpenAI entegrasyonunu kendiniz kurmanız gerekiyor.
- Türkçe NLP desteği zayıf: Intent algılama Türkçede İngilizceye göre belirgin biçimde geride.
- Türkiye'de yerel destek yok: Sorun yaşandığında Hindistan zaman dilimine bağlısınız.
- Agent başı fiyatlama ölçeklenirken artıyor: Growth planında 5 kullanıcıdan sonra ek kullanıcı başı 12 USD eklenir.

WATI, 5 agent altında çalışan, ağırlıklı kural tabanlı akışla yetinebilecek ve hızlıca devreye almak isteyen e-ticaret ve hizmet KOBİ'leri için iyi bir başlangıç noktasıdır. Ancak ileri AI ihtiyacı olan ya da Türkiye'de yerel destek arayan firmalar için sınırlayıcı olabilir.

## Trengo Detaylı İnceleme

Trengo, Hollanda menşeli bir omni-channel iletişim platformu. WhatsApp'ın yanı sıra Instagram DM, Facebook Messenger, e-posta, SMS, canlı sohbet ve Telegram gibi 10'dan fazla kanalı tek bir gelen kutusunda (unified inbox) topluyor. Yani Trengo'yu sadece "WhatsApp aracı" olarak değil, "tüm dijital kanalların kontrol merkezi" olarak konumlandırmak gerekir.

Güçlü yönler:
- Omni-channel inbox: WhatsApp dışında 10+ kanal aynı arayüzde yönetilir. Müşteri Instagram'dan başlayıp WhatsApp'tan devam ettiğinde aynı konuşmayı görmeye devam edersiniz.
- Güçlü ekip işbirliği: İç notlar, mention, müşteri kartı, atama (assignment) ve etiketleme özellikleri kurumsal seviyede.
- Avrupa veri merkezi: GDPR ve KVKK uyumu açısından AB merkezli olması önemli bir avantaj.
- AI Journeys modülü: 2025 sonrasında eklenen AI özellikleri, otomatik yanıt önerileri ve özet çıkarma için kullanılabilir.

Zayıf yönler:
- Fiyat KOBİ için yüksek: Boost planı kullanıcı başı 75 EUR'dan başlıyor; 5 agent için aylık 375 EUR + KDV gibi bir maliyet çıkıyor.
- WhatsApp odaklı değil: Trengo'nun WhatsApp özellikleri iyidir, fakat WATI gibi WhatsApp'a özel derinlikli template yönetimi sunmaz.
- AI motoru genel amaçlı: Türkçe LLM optimizasyonu zayıf, özelleştirme için harici workflow gerekir.
- Türk pazarına özel entegrasyon az: Ikas, ideasoft, T-Soft gibi yerel e-ticaret platformları için hazır konnektör yok.

Trengo, WhatsApp dışında Instagram ve canlı sohbet trafiğinin de yoğun olduğu, ekip işbirliği önceliği olan ve bütçesi göreceli olarak rahat (10K TL+/ay) kurumsallaşmış KOBİ'ler için iyi bir tercih.

## Respond.io Detaylı İnceleme

Respond.io, Singapur merkezli ve kurumsal segmenti hedefleyen güçlü bir omni-channel mesajlaşma platformu. WhatsApp Business API, Telegram, LINE, WeChat, Viber, SMS gibi 10+ kanalı destekler. Özellikle Asya pazarında güçlü olan platform, son yıllarda Avrupa ve Latin Amerika'da da hızla büyüyor.

Güçlü yönler:
- Güçlü workflow editörü: Sürükle bırak mantığıyla son derece karmaşık otomasyonlar kurulabilir. Koşullu dallanma (conditional branching), bekleme, döngü gibi kavramlar yerleşik.
- API ve webhook: Geliştirici dostu yapı; harici sistemlerle entegrasyonu kolaylaştırır.
- Respond AI: GPT tabanlı agent otomasyonu, müşteri yanıtlarını taslak olarak hazırlayabilir, konuşma özeti çıkarabilir.
- Çoklu numara desteği: Birden fazla WhatsApp numarasını aynı hesap altında yönetmek mümkün.

Zayıf yönler:
- Öğrenme eğrisi dik: 1-2 kişilik küçük ekipler için fazla karmaşık olabilir.
- Fiyat ölçeklenirken hızla artar: Business planı 159 USD'den başlasa da, MAU (monthly active contact) sınırı aşıldığında ek paketler ciddi maliyet yaratır.
- Türkçe arayüz sınırlı: Türkçe çevirileri kısmen mevcut, fakat dokümantasyon İngilizce ağırlıklı.
- Türk yerel ödeme/CRM entegrasyonları zayıf: Logo, Mikro, iyzico gibi yerel araçlarla doğrudan konnektör yok; ara katman gerekir.

Respond.io; 10+ agent çalıştıran, birden fazla numarayı yöneten, çok adımlı satış hunisi otomasyonu kuran ve teknik ekibe sahip (in-house developer) kurumsal firmalar için en güçlü seçeneklerden biridir.

## Custom AI Bot Detaylı İnceleme (n8n + LLM)

Hazır SaaS platformlar yerine, BSP üzerinden alınan WhatsApp Cloud API ya da on-premise API'yi; n8n, Node.js ve LLM (OpenAI, Anthropic Claude, Google Gemini) ile birleştirerek özel bir çözüm kurmak son 2 yılda Türkiye'de hızla yaygınlaşan bir yaklaşım. PORTZEN'in de odaklandığı bu modeli detaylı inceleyelim. Konuyu daha derinlemesine işleyen [WhatsApp AI asistanı nedir](/blog/whatsapp-ai-asistani-nedir) yazımız bu yapının teknik detaylarını içeriyor.

Mimari özet:
- BSP olarak 360dialog ya da Meta Cloud API tercih edilir.
- Gelen mesajlar webhook üzerinden n8n ya da Node.js sunucusuna düşer.
- Mesaj LLM'e (örneğin GPT-4o ya da Claude) gönderilir; context olarak ürün kataloğu, CRM verisi, sipariş bilgisi eklenir.
- Yanıt WhatsApp Cloud API üzerinden müşteriye iletilir.
- Tüm konuşmalar PostgreSQL ya da MongoDB'ye kaydedilir; isteğe bağlı CRM'e (HubSpot, Pipedrive, Hub-tip yerel araçlar) push edilir.

Güçlü yönler:
- Tam özelleştirme: Müşterinin sesini, marka tonunu, hatta ürün kataloğunuza özel davranışı tasarlayabilirsiniz.
- Türkçe LLM yetkinliği: GPT-4o ve Claude 3.5+ Türkçeyi neredeyse anadil seviyesinde anlıyor; intent çıkarımı SaaS platformlardan belirgin biçimde daha iyi.
- Ölçeklenirken maliyet düşer: Sabit aylık kullanıcı ücreti yoktur; sadece sunucu + LLM + Meta konuşma maliyetleri vardır.
- Veri sahipliği sizde: Müşteri verileri kendi sunucunuzda kalır; KVKK uyumu için tam kontrol.
- ERP/CRM entegrasyonu sınırsız: Logo, Mikro, Netsis, ideasoft, iyzico gibi yerel sistemlerle doğrudan konuşur.

Zayıf yönler:
- İlk kurulum maliyeti yüksek: 25-100K TL bandında tek seferlik kurulum yatırımı gerekir.
- Teknik destek gerektirir: Kendi ekibiniz yoksa, devamlı destek anlaşması yapacağınız bir partner şarttır.
- Hazır arayüz yok: Agent inbox, raporlama gibi modülleri açık kaynaklı (Chatwoot gibi) ya da özel olarak geliştirmek gerekir.

Custom AI bot; aylık 500+ konuşma yapan, kendi sektörüne özel akış kuran, ERP/CRM ile derin entegrasyon isteyen ve uzun vadede ölçeklenmeyi planlayan KOBİ ve kurumsal firmalar için en yüksek ROI'yi (yatırım getirisi) sağlayan modeldir.

## Diğer Alternatifler: 360dialog, Twilio, Infobip

Yukarıdaki dört ana grup dışında, Türkiye pazarında karşınıza çıkabilecek üç önemli oyuncu daha var.

- 360dialog: Almanya merkezli, "pure-play BSP" modelinde çalışan bir sağlayıcı. Kendi front-end arayüzünden çok, diğer çözümlere altyapı sağlar. Aylık 49 EUR sabit ücretle WhatsApp Cloud API erişimi sunar; konuşma başı maliyet doğrudan Meta tarifesi üzerinden işler. Custom AI projeler için en popüler tercihtir.

- Twilio: ABD merkezli geliştirici dostu CPaaS (Communication Platform as a Service) devi. WhatsApp dışında SMS, ses, e-posta servisleri vardır. Aylık sabit ücret yok, kullandıkça öde modelinde çalışır. Programmable Messaging API güçlüdür; fakat Türkiye'de Cloud API'ye göre konuşma başı maliyeti %15-30 daha yüksektir.

- Infobip: Hırvat menşeli, kurumsal çağrı merkezleri için tasarlanmış global CPaaS. SMS gönderiminde Türkiye'de yıllardır lider konumda. WhatsApp tarafında da güçlüdür, fakat KOBİ için pahalı ve sözleşme süreci uzundur. Genelde 500K+ aylık konuşma yapan büyük kurumlar tercih eder.

## Özellik Karşılaştırma Tablosu

| Özellik | WATI | Trengo | Respond.io | Custom AI |
|---|---|---|---|---|
| BSP partnership | Var (resmi) | Var (resmi) | Var (resmi) | 360dialog/Meta üzerinden |
| Türkçe NLP performansı | Orta | Orta | Orta-İyi | Çok İyi (LLM bazlı) |
| AI/LLM yerleşik | Sınırlı | Sınırlı | İyi (Respond AI) | Tam özelleştirilebilir |
| Çoklu agent | Var (planlı) | Çok İyi | Çok İyi | Özel geliştirme |
| CRM entegrasyonu | HubSpot, Zoho | HubSpot, Salesforce | 50+ konnektör | Sınırsız (özel) |
| Template yönetimi | Çok İyi | İyi | Çok İyi | Manuel/API |
| Broadcast | Var | Var | Var | Özel script |
| Raporlama | Temel | İyi | Çok İyi | Özel dashboard |
| Ekip işbirliği | Orta | Çok İyi | Çok İyi | Chatwoot ile |
| Ses/dosya desteği | Var | Var | Var | Var |
| Yerel ödeme (iyzico, PayTR) | Yok | Yok | Yok | Var |
| ERP entegrasyonu (Logo, Mikro) | Yok | Yok | Yok | Var |
| Türkiye destek | Yok | Yok | Yok | Var (PORTZEN) |

## Fiyat Karşılaştırma (Aylık + Meta Konuşma Maliyetleri)

Aşağıdaki fiyatlar 2026 ikinci çeyrek verileriyle hazırlanmıştır. Meta konuşma ücretleri her 24 saatlik konuşma penceresi için ülke bazında ayrı tarifelidir. Türkiye için yaklaşık değerler verilmiştir. 1 USD = 38 TL kabulü ile hesaplanmıştır.

| Platform | Başlangıç Planı (USD) | Aylık TL Karşılığı | Konuşma Başı Ek Maliyet | Notlar |
|---|---|---|---|---|
| WATI Growth | 49 USD/ay (5 agent) | ~1.860 TL | Meta tarifesi + %0 markup | 6 agent sonrası kullanıcı başı 12 USD |
| WATI Pro | 99 USD/ay | ~3.760 TL | Meta tarifesi + %0 markup | Gelişmiş otomasyon |
| Trengo Boost | 75 EUR/kullanıcı | ~3.000 TL (5 agent için 15.000 TL) | Meta tarifesi | Kullanıcı başı fiyat |
| Respond.io Business | 159 USD/ay | ~6.040 TL | Meta tarifesi + %5-10 markup | 5K MAU dahil |
| Respond.io Enterprise | 499 USD/ay | ~18.960 TL | Meta tarifesi | 10K MAU + öncelikli destek |
| 360dialog | 49 EUR/ay | ~1.960 TL | Meta tarifesi (markup yok) | Sadece API, arayüz yok |
| Custom AI (PORTZEN) | 5-15K TL/ay bakım | 5.000-15.000 TL | Meta + LLM (~0.10-0.30 TL/konuşma) | + 25-100K TL tek seferlik kurulum |
| Twilio | Sabit ücret yok | Değişken | Meta + ~%20-30 markup | Pay-as-you-go |
| Infobip | Sözleşmeli | 20.000+ TL | Negotiable | Kurumsal odaklı |

Meta konuşma ücretleri (Türkiye, 2026 Q2 yaklaşık):
- Pazarlama (marketing): ~0,30-0,40 TL/konuşma
- Yardımcı (utility) - sipariş güncellemesi vb: ~0,10-0,15 TL/konuşma
- Doğrulama (authentication): ~0,12 TL/konuşma
- Hizmet (service) - müşteri başlatmış konuşma: ücretsiz (24 saatlik pencere)

Kritik nokta: SaaS platformların aylık sabit ücretini değerlendirirken, ölçek büyüdüğünde konuşma başı maliyetin nasıl davrandığına bakmak şart. 10.000 konuşma/ay yapan bir hesapta Custom AI çözümü, Trengo'ya göre toplamda %50-70 daha düşük maliyetli olabilir.

## Türk KOBİ İçin Pratik Senaryolar

Türkiye'deki KOBİ'lerin gerçek hayatta karşılaştığı 3 tipik tabloyu üzerinden gidelim.

Senaryo 1: 50 sipariş/gün alan Shopify mağazası
WATI Growth planı + Shopify entegrasyonu burada en hızlı çözüm. Aylık ~1.800 TL + 1.500 TL Meta konuşma maliyeti = toplam ~3.300 TL. Custom AI çözümü ise kurulum yatırımı yüksek olduğundan ilk yıl daha pahalı çıkar. Ancak ek hizmet (AI ürün önerisi, mağaza içi sepet kurtarma) eklenmek isteniyorsa Custom AI önerilir.

Senaryo 2: 3 şubeli klinik (estetik/diş)
Randevu rezervasyonu, ön bilgilendirme, hatırlatma gibi senaryolar var. Respond.io workflow editörü güçlü olduğundan ilk tercih olabilir, fakat aylık 6.000 TL + ek maliyetlerle KOBİ bütçesini zorlar. PORTZEN gibi bir partnerle kurulacak Custom AI, hem klinik yönetim yazılımıyla (Klinik365, Vetera gibi) doğrudan konuşur hem de uzun vadede %40 daha ekonomik olur.

Senaryo 3: B2B yedek parça satıcısı, 15 saha satış temsilcisi
Trengo'nun çoklu agent ve ekip işbirliği tarafı bu senaryoda öne çıkar. Aylık 12.000-15.000 TL bandında bir maliyetle 15 kullanıcı yönetilir. Custom AI çözümünde ise Chatwoot tabanlı bir agent panel kurularak agent başı sabit ücret ödemeden 15+ kullanıcı yönetilebilir; toplam maliyet 1. yıldan sonra ciddi şekilde düşer.

## Karar Matrisi: 7 Senaryo İçin Hangi Platform?

| Senaryo | En Uygun Çözüm | İkinci Tercih | Neden? |
|---|---|---|---|
| E-ticaret destek (Shopify, WooCommerce, 0-500 sipariş/ay) | WATI Growth | Custom AI | Hızlı kurulum, e-ticaret konnektörleri hazır |
| Restoran / kafe randevu, rezervasyon | Custom AI (PORTZEN) | WATI Pro | Türkçe NLP + iyzico/POS entegrasyonu kritik |
| B2B satış, 10+ saha temsilcisi | Trengo | Respond.io | Ekip işbirliği ve omni-channel kritik |
| Klinik / sağlık (randevu + hatırlatma + KVKK) | Custom AI (PORTZEN) | Respond.io | KVKK için veri sahipliği ve klinik yazılım entegrasyonu |
| Emlak ofisi (lead nitelendirme, görüntüleme planı) | Custom AI (PORTZEN) | WATI Pro | CRM (Pipedrive/HubSpot) + LLM lead skorlama |
| Eğitim / online kurs (öğrenci takibi, ödev hatırlatma) | WATI Pro | Custom AI | Toplu mesaj + temel otomasyon yeterli |
| Kurumsal çağrı merkezi (50+ agent, çoklu numara) | Respond.io Enterprise | Infobip | Workflow + çoklu numara + raporlama derinliği |

## Bütçe Senaryoları

Aşağıdaki tablo, bütçenize göre hangi yaklaşımın daha doğru olduğunu özetler.

- 2.000-5.000 TL/ay bütçe: WATI Growth + 360dialog yönlü tercih. Sıkı bütçeyle WhatsApp API'ye giriş yapan KOBİ için en hızlı yol.
- 5.000-10.000 TL/ay bütçe: WATI Pro ya da Custom AI (entry-level n8n + GPT-4o-mini). Türkçe AI yetkinliği için bu seviye Custom AI'a geçmenin mantıklı olduğu eşiktir.
- 10.000-20.000 TL/ay bütçe: Respond.io Business ya da kurumsal seviye Custom AI (Claude 3.5 Sonnet, GPT-4o + Chatwoot inbox + ERP entegrasyon). Bu bant uzun vadeli ROI açısından en sağlıklı olanıdır.
- 20.000+ TL/ay bütçe: Respond.io Enterprise, Infobip ya da çoklu numara/çoklu marka yöneten Custom AI. Genelde 100+ konuşma/gün hacmi olan, dijital olgunluğu yüksek firmalar bu bandadır.

Kurulum maliyetlerini de hesaba katmak şart. SaaS platformlarda kurulum 0-1.000 USD bandında değişir. Custom AI kurulumu sektör ve entegrasyon derinliğine göre 25.000-100.000 TL bandındadır; fakat tek seferlik ödenir ve aylık ücret üzerinden sürekli tasarruf sağlar.

İlgili konular için [yapay zeka müşteri hizmetleri](/blog/yapay-zeka-musteri-hizmetleri) ve [ManyChat vs AI chatbot karşılaştırması](/blog/manychat-vs-ai-chatbot-karsilastirma) yazılarımızı inceleyebilirsiniz.

## Sıkça Sorulan Sorular

WATI yerine doğrudan Meta Cloud API kullanabilir miyim?
Evet, teknik ekibiniz varsa Meta Cloud API'ye doğrudan başvurabilirsiniz. Ancak template message onayı, mavi tik, hata yönetimi ve agent inbox gibi kritik konularda kendiniz çözüm geliştirmeniz gerekir. Çoğu KOBİ için bu, WATI gibi bir BSP üzerinden gitmekten daha pahalı bir yol olur. Tam olarak ne yaptığınızı biliyorsanız ya da PORTZEN gibi bir partner ile çalışacaksanız Cloud API en esnek çözümdür.

WhatsApp Business uygulaması ile WhatsApp Business API arasındaki fark nedir?
WhatsApp Business uygulaması; tek telefonda, tek kullanıcıda, sınırlı otomasyonla çalışır. Maksimum 4 cihaza bağlanabilir ve API'si yoktur. WhatsApp Business API ise sunucu üzerinden çalışır, sınırsız agent destekler, otomasyon ve AI entegrasyonu sağlar. KOBİ ölçeği büyüdükçe API'ye geçiş zorunlu hale gelir. Detaylı karşılaştırma için [WhatsApp Business vs API yazımıza](/blog/whatsapp-business-vs-api-karsilastirma) göz atabilirsiniz.

Meta'nın template message onayı neden bu kadar uzun sürüyor?
Pazarlama amaçlı template'lerin Meta tarafından manuel incelemesi 24-72 saat sürer. Reddedilme nedenleri arasında en yaygın olanlar: spam algısı yaratan dil, izin (opt-in) belirsizliği, kişisel olmayan metinler. WATI ve Respond.io gibi olgun BSP'ler, redde uğrama oranınızı düşürecek template önerileri sunar. Custom AI çözümlerinde PORTZEN gibi partnerlerle çalışmak, template başvuru sürecini deneyim sayesinde hızlandırır.

KVKK ve veri yerelliği açısından hangi çözüm daha uygun?
Custom AI çözümleri sunucularınız Türkiye ya da AB'de barındırıldığında en yüksek KVKK uyumunu sağlar; veri sahipliği tamamen sizdedir. Trengo Avrupa veri merkezini kullanır, GDPR/KVKK uyumlu sayılır. WATI ve Respond.io ABD/Hindistan/Singapur sunucularını kullandığından, KVKK uyumu için sözleşme ekleri ve aktarım izinleri gereklidir. Sağlık ve finans sektörü için Custom AI yüksek önerilir.

LLM tabanlı AI bot'un yanlış cevap verme riski nasıl yönetilir?
İyi tasarlanmış bir Custom AI bot; system prompt katı kurallar, RAG (Retrieval Augmented Generation), confidence skoru, insan-agent devri (handover) ve günlük log izleme ile çalışır. Hassas bir konu (örneğin fiyat teklifi, tıbbi tavsiye) algılandığında bot otomatik olarak insana devreder. PORTZEN'in kurduğu sistemlerde bu güvenlik katmanları varsayılan olarak yer alır.

## PORTZEN ile WhatsApp AI Çözümü

WhatsApp Business çözümünüzü seçerken sektörünüze, ekip büyüklüğünüze ve bütçe sınırlarınıza özel bir değerlendirme yapmanız gerekiyor. PORTZEN olarak biz; hazır SaaS araçların sunamadığı Türkçe LLM derinliği, ERP/CRM entegrasyonu ve veri sahipliği avantajıyla, KOBİ'lere özel WhatsApp AI bot çözümleri kuruyoruz. n8n + GPT-4o/Claude 3.5 tabanlı altyapımız sayesinde, kurulumdan itibaren 2-4 hafta içinde sektörünüze özel çalışan, Türkçe konuşan ve ERP'nizle entegre bir asistana sahip olabilirsiniz.

Ücretsiz bir keşif görüşmesi için [iletişim sayfamızı ziyaret edin](/iletisim) ya da [AI Bot hizmetimiz](/ai-bot) hakkında detaylı bilgi alın. İhtiyacınızı dinleyip, size en uygun çözümü (kendi platformumuz, hazır SaaS önerisi veya hibrit yaklaşım) tarafsız biçimde önereceğiz.
