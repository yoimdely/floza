import Button from "./ui/Button";

export default function Header() {
  return (
    <header className="container py-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-white/10 grid place-items-center">🌿</div>
        <span className="text-white/90 font-semibold">Flora Home</span>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-white/70">
        <a href="#calc" className="hover:text-white">Калькулятор</a>
        <a href="#how" className="hover:text-white">Как работаем</a>
        <a href="#faq" className="hover:text-white">FAQ</a>
      </nav>
      <Button onClick={() => document.getElementById('calc')?.scrollIntoView({behavior:'smooth'})}>
        Прогноз за 24 часа
      </Button>
    </header>
  );
}
