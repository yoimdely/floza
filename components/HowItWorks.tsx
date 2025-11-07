import Card from "./ui/Card";

const steps = [
  ["Оставляете адрес и фото", "Экспресс-аудит и прогноз за 24 часа."],
  ["Подписываем договор", "Согласуем SLA, доступы и подготовку."],
  ["Готовим объект", "Фото/листинг/цены, подключаем каналы бронирования."],
  ["Запускаем за 5 дней", "Первые брони и отчёт — в вашу почту/мессенджер."]
];

export default function HowItWorks(){
  return (
    <section id="how" className="scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Как мы работаем</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {steps.map(([t,d],i)=>(
          <Card key={i}>
            <div className="text-4xl font-extrabold text-emerald-300 mb-2">0{i+1}</div>
            <div className="font-semibold mb-1">{t}</div>
            <div className="text-white/70">{d}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}
