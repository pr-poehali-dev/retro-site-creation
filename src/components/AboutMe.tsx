const AboutMe = () => {
  return (
    <section className="acid-border p-6 m-4 bg-black/50">
      <h2
        className="text-4xl font-bold text-center mb-6"
        style={{ color: "var(--neon-pink)" }}
      >
        💫 ОБО МНЕ 💫
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-6">
        <div className="gif-container">
          <img
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=150&h=100&fit=crop&auto=format&q=60"
            alt="Котик за компьютером"
            className="w-32 h-20 border-2 border-neon-pink pixelated"
          />
        </div>

        <div className="text-center max-w-2xl">
          <p className="text-lg mb-4" style={{ color: "var(--neon-yellow)" }}>
            😊 я поиграл в Progressbar95 и проникся эстетикой сайтов 90-х,
            поэтому стиль такой, особенно учитывая, что кодить для меня довольно
            сложно, решил, что раз тётки в 90-х делали свои сайты, то и я смогу
            😎
          </p>
        </div>

        <div className="gif-container">
          <img
            src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=150&h=100&fit=crop&auto=format&q=60"
            alt="Ретро котик"
            className="w-32 h-20 border-2 border-neon-green pixelated sparkle"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
