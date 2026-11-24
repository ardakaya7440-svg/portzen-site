import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...nextCoreWebVitals,
  {
    // eslint-config-next 16 ile gelen React Compiler kuralları mevcut animasyon bileşenlerinde
    // (davranış hatası değil, stil/performans uyarısı) çok sayıda bulgu üretiyor. Güvenlik
    // güncellemesini davranış değişikliğinden ayırmak için şimdilik uyarı seviyesinde tutuluyor.
    rules: {
      "react-hooks/refs": "warn",
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/immutability": "warn"
    }
  },
  { ignores: [".next/**", "node_modules/**", "out/**", "build/**", ".data/**", "next-env.d.ts"] }
];

export default config;
