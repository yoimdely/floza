"use client";
import { motion } from "framer-motion";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_10%_10%,rgba(48,208,134,0.15),transparent_60%)]" />
      <div className="container relative pt-20 pb-28">
        <motion.h1
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: .7 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Сдадим вашу квартиру в Сочи за <span className="gradient-text">5 дней</span> — под ключ
        </motion.h1>
        <p className="mt-5 max-w-2xl text-white/70">
          Комиссия 30%, но чистый доход выше: динамическое ценообразование, премиальный сервис и еженедельные отчёты.
        </p>
        <div className="mt-8 flex gap-4">
          <Button onClick={() => document.getElementById('calc')?.scrollIntoView({behavior:'smooth'})}>
            Рассчитать доход
          </Button>
          <a href="#how" className="px-5 py-3 rounded-2xl glass">Как мы работаем</a>
        </div>
      </div>
    </section>
  );
}
