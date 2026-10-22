/** Logoları kırpmadan, farklı en-boy oranlarında yaklaşık eşit görsel ağırlıkta gösterecek kutu ölçüsü */
export function logoBox(w: number | null, h: number | null) {
  const r = w && h ? w / h : 2.5;
  const AREA = 4600; // px² — görsel ağırlık hedefi
  let height = Math.sqrt(AREA / r);
  height = Math.min(56, Math.max(22, height));
  let width = height * r;
  if (width > 168) {
    width = 168;
    height = width / r;
  }
  return { width: Math.round(width), height: Math.round(height) };
}
