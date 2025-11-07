export default function Footer(){
  return (
    <footer className="container py-12 text-white/60">
      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between gap-4">
        <div>© {new Date().getFullYear()} Flora Home — сочи-в-аренду.рф</div>
        <div className="flex gap-6">
          <a href="#calc">Калькулятор</a>
          <a href="#faq">FAQ</a>
        </div>
      </div>
    </footer>
  );
}
