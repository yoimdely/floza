import Card from "./ui/Card";
import { LineChart, ShieldCheck, Sparkles, Clock, Handshake, ListChecks } from "lucide-react";

const items = [
  { icon: LineChart, title: "Больше чистого дохода", text: "Динамическое ценообразование и сезонные события повышают ADR и загрузку." },
  { icon: Sparkles, title: "Премиальный сервис", text: "Фото/листинги, бесключевой доступ, клининг по чек-листам." },
  { icon: Clock, title: "Запуск за 5 дней", text: "От аудита до первых броней — быстро и под ключ." },
  { icon: ShieldCheck, title: "Безопасность", text: "Депозит/пре-авторизация, правила, фотофиксация, быстрые урегулирования." },
  { icon: ListChecks, title: "Прозрачность", text: "Еженедельные отчёты, выплаты 1–2 раза в месяц." },
  { icon: Handshake, title: "Гарантия", text: "Если месяц ниже прогноза — комиссия 20% на этот месяц." }
];

export default function Benefits(){
  return (
    <section className="">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Почему Flora Home</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map(({icon:Icon,title,text}) => (
          <Card key={title}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/10"><Icon /></div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{title}</h3>
                <p className="text-white/70">{text}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
