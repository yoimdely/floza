import Card from "./ui/Card";

const items = [
  { name: "Александр, Москва", text: "Flora Home запустили за 4 дня. Теперь просто получаю отчёт и выплату. Доход выше, чем сдавал сам." },
  { name: "Мария, СПб", text: "Квартира в Адлере наконец-то перестала 'лежать'. Заполняемость стабильно высокая." },
  { name: "Иван, Екатеринбург", text: "Договор прозрачный, отчёт каждую неделю. Рекомендую ребят." },
];

export default function Testimonials(){
  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Отзывы владельцев</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t,i)=>(
          <Card key={i}>
            <div className="font-semibold mb-1">{t.name}</div>
            <div className="text-white/70">{t.text}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}
