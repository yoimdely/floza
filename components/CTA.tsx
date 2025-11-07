export default function CTA(){
  return (
    <section className="container my-20">
      <div className="glass rounded-2xl p-8 md:p-12 text-center">
        <h3 className="text-2xl md:text-3xl font-bold">Узнайте доход своей квартиры за 24 часа</h3>
        <p className="text-white/70 mt-2">Оставьте контакты — пришлём прогноз и список улучшений с окупаемостью.</p>
        <form className="grid md:grid-cols-3 gap-4 mt-6 max-w-3xl mx-auto">
          <input placeholder="Имя" className="bg-white/5 border border-white/10 rounded-xl p-3 outline-none" />
          <input placeholder="Телефон" className="bg-white/5 border border-white/10 rounded-xl p-3 outline-none" />
          <input placeholder="Район/ЖК" className="bg-white/5 border border-white/10 rounded-xl p-3 outline-none" />
          <button className="md:col-span-3 bg-gradient-to-r from-emerald-300 to-emerald-500 text-ink rounded-xl py-3 font-medium">Получить прогноз</button>
        </form>
      </div>
    </section>
  );
}
