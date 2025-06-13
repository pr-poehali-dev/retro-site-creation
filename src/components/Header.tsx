const Header = () => {
  return (
    <header className="text-center py-8 relative">
      <div className="scrolling-text absolute top-0 left-0 w-full">
        <span className="text-xl">
          ✨ Добро пожаловать на мой сайт! ✨ Лучший сайт в интернете! ✨ 1999
          год! ✨
        </span>
      </div>

      <div className="mt-12">
        <h1 className="text-6xl font-bold rainbow-text mb-4">
          🌟 МОЙ ЛИЧНЫЙ САЙТ 🌟
        </h1>
        <p className="text-2xl blink" style={{ color: "var(--neon-yellow)" }}>
          *** ДОБРО ПОЖАЛОВАТЬ В МОЙ УГОЛОК ИНТЕРНЕТА ***
        </p>
        <div className="mt-4">
          <span className="under-construction">🚧 САЙТ В РАЗРАБОТКЕ 🚧</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
