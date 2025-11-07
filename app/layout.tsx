import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Flora Home — Доверительное управление в Сочи",
  description: "Сдадим вашу квартиру в Сочи/Адлере/Красной Поляне за 5 дней. Комиссия 30%, премиальный сервис, еженедельные отчёты.",
  openGraph: {
    title: "Flora Home — Доверительное управление в Сочи",
    description: "Запуск за 5 дней. Комиссия 30%. Премиальный сервис.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={manrope.className}>
      <body>{children}</body>
    </html>
  );
}
