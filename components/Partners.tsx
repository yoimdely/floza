import Card from "./ui/Card";

export default function Partners(){
  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Партнёрам</h2>
      <Card>
        <p className="text-white/80">
          Риэлторы, застройщики, дизайнеры — за каждого владельца: <b>10 000 ₽</b>
          или <b>50% нашей комиссии за первый месяц</b>. Получите партнёрский пакет — напишите нам.
        </p>
      </Card>
    </section>
  );
}
