"use client";
import { useMemo, useState } from "react";
import Card from "./ui/Card";
import Button from "./ui/Button";
import { calculate, type CalcInput } from "@/lib/calc";

const districts = ["Центр","Адлер","Сириус","Красная Поляна","Дагомыс"] as const;
const modes = ["Посуточно","Долгосрок","Сезон"] as const;

export default function Calculator() {
  const [form, setForm] = useState<CalcInput>({ area: 32, beds: 2, district: "Адлер", mode: "Посуточно" });
  const result = useMemo(()=>calculate(form), [form]);

  return (
    <section id="calc" className="scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Калькулятор дохода</h2>
      <Card className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Select label="Район" value={form.district} onChange={v=>setForm({...form, district: v as any})} options={districts as any} />
          <Select label="Формат сдачи" value={form.mode} onChange={v=>setForm({...form, mode: v as any})} options={modes as any} />
          <Range label="Площадь, м²" min={18} max={120} step={1} value={form.area} onChange={v=>setForm({...form, area: v})} />
          <Range label="Спальных мест" min={1} max={6} step={1} value={form.beds} onChange={v=>setForm({...form, beds: v})} />
          <Button className="w-full">Получить полный прогноз в PDF</Button>
        </div>
        <div className="glass rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4">Прогноз</h3>
          <ul className="space-y-2 text-white/85">
            <li>ADR (средняя цена): <b>{result.adr.toLocaleString()} ₽</b></li>
            <li>Заполняемость: <b>{Math.round(result.occupancy*100)}%</b></li>
            <li>Валовый доход/мес: <b>{result.gross.toLocaleString()} ₽</b></li>
            <li>Наша комиссия (30%): <b>−{result.fee.toLocaleString()} ₽</b></li>
            <li>Операционные: <b>−{result.ops.toLocaleString()} ₽</b></li>
            <li className="pt-2 border-t border-white/10 text-emerald-300">Чистый доход: <b>{result.net.toLocaleString()} ₽</b></li>
          </ul>
          <p className="mt-4 text-sm text-white/60">* Оценка ориентировочная. Точный прогноз пришлём после экспресс-аудита (24 часа).</p>
        </div>
      </Card>
    </section>
  );
}

function Select({ label, value, onChange, options }:{ label:string; value:string; onChange:(v:string)=>void; options:string[] }){
  return (
    <label className="block">
      <div className="mb-1 text-white/70">{label}</div>
      <select value={value} onChange={e=>onChange(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:outline-none">
        {options.map(o=><option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}
function Range({ label, min, max, step, value, onChange }:{ label:string; min:number; max:number; step:number; value:number; onChange:(v:number)=>void; }){
  return (
    <label className="block">
      <div className="flex items-center justify-between mb-1 text-white/70">
        <span>{label}</span><span className="text-white/60">{value}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={e=>onChange(Number(e.target.value))} className="w-full accent-emerald-400" />
    </label>
  );
}
