const AboutMe = () => {
  return (
    <section className="neon-border p-6 m-4 bg-black/50">
      <h2
        className="text-4xl font-bold text-center mb-6"
        style={{ color: "var(--neon-pink)" }}
      >
        💫 ОБО МНЕ 💫
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-6">
        <div className="gif-container">
          <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-4xl">
            😎
          </div>
        </div>

        <div className="text-center max-w-2xl">
          <p className="text-xl mb-4" style={{ color: "var(--neon-yellow)" }}>
            Привет! Меня зовут <span className="rainbow-text">СТУДЕНТ</span>
          </p>
          <p className="text-lg mb-4" style={{ color: "var(--neon-green)" }}>
            🎓 Учусь в университете
            <br />
            💻 Изучаю программирование
            <br />
            🎵 Люблю музыку и игры
            <br />
            🌍 Мечтаю изменить мир!
          </p>
          <div className="bounce">
            <span className="text-2xl">⭐ ЛУЧШИЙ СТУДЕНТ 1999 ГОДА ⭐</span>
          </div>
        </div>

        <div className="gif-container">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-4xl sparkle">
            🚀
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
