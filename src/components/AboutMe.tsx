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
          <img
            src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=100&h=100&fit=crop&auto=format&q=30"
            alt="Компьютер 90-х"
            className="w-24 h-24 rounded-full border-2 border-neon-pink pixelated"
          />
        </div>

        <div className="text-center max-w-2xl">
          <p className="text-lg mb-4" style={{ color: "var(--neon-yellow)" }}>
            😊 я поиграл в Progressbar95 и проникся эстетикой сайтов 90-х,
            поэтому стиль такой, особенно учитывая, что кодить для меня довольно
            сложно, решил, что раз тётки в 90-х делали свои сайты, то и я смогу
            😎
          </p>
          <div className="bounce">
            <span className="text-2xl">⭐ НОСТАЛЬГИЯ ПО 90-м ⭐</span>
          </div>
        </div>

        <div className="gif-container">
          <img
            src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=100&h=100&fit=crop&auto=format&q=30"
            alt="Ретро компьютер"
            className="w-24 h-24 rounded-full border-2 border-neon-green pixelated sparkle"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
