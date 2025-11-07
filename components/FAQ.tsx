"use client";
import { useState } from "react";
import Card from "./ui/Card";

const data = [
  ["Почему комиссия 30%?", "Берём полный цикл и повышаем чистый доход за счёт динамических цен и загрузки. Если первый месяц ниже нашего прогноза — комиссия 20% на этот месяц."],
  ["Как приходят отчёты и выплаты?", "Еженедельный отчёт в мессенджер и кабинет, выплаты 1–2 раза в месяц по договору."],
  ["Насколько безопасно?", "Депозит/пре-авторизация, правила, фотофиксация состояния и быстрое урегулирование."],
  ["Нужно ли ИП/самозанятость?", "Поможем выбрать и оформить оптимальный вариант налогообложения — прозрачно и законно."],
  ["Что входит в 30%?", "Фото/листинг, прайсинг, каналы, клининг-менеджмент, гостевой саппорт 8:00-24:00, отчёты, аналитика, апселлы."]
];

export default function FAQ(){
  return (
    <section id="faq" className="scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">FAQ</h2>
      <div className="space-y-4">
        {data.map(([q,a]) => <Item key={q} q={q} a={a} />)}
      </div>
    </section>
  );
}

function Item({ q, a }:{ q:string; a:string }){
  const [open, setOpen] = useState(false);
  return (
    <Card>
      <button className="w-full text-left" onClick={()=>setOpen(!open)}>
        <div className="flex items-center justify-between">
          <div className="font-semibold">{q}</div>
          <div className={`transition ${open ? "rotate-180" : ""}`}>⌄</div>
        </div>
      </button>
      {open && <div className="mt-3 text-white/70">{a}</div>}
    </Card>
  );
}
