const Footer = () => {
  return (
    <footer className="text-center py-8 mt-8">
      <div className="neon-border p-4 bg-black/70 mx-4">
        <div className="mb-4">
          <span className="rainbow-text text-xl font-bold">
            *** ЛУЧШИЙ САЙТ 2025 ГОДА ***
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <h4
              className="font-bold mb-2"
              style={{ color: "var(--neon-yellow)" }}
            >
              КРУТЫЕ ССЫЛКИ:
            </h4>
            <div className="space-y-1">
              <div className="sparkle">
                <a
                  href="mailto:chfrchko03@gmail.com"
                  className="text-neon-yellow hover:text-neon-pink transition-colors"
                  style={{ color: "var(--neon-yellow)" }}
                >
                  🌟 Мой Email
                </a>
              </div>
              <div className="sparkle">
                <a
                  href="https://music.yandex.ru/users/E.goryas/playlists/3?utm_source=web&utm_medium=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-yellow hover:text-neon-pink transition-colors"
                  style={{ color: "var(--neon-yellow)" }}
                >
                  🎵 Любимая музыка
                </a>
              </div>
              <div className="sparkle">
                <a
                  href="https://steamcommunity.com/id/E_goryas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-yellow hover:text-neon-pink transition-colors"
                  style={{ color: "var(--neon-yellow)" }}
                >
                  🎮 Игры
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4
              className="font-bold mb-2"
              style={{ color: "var(--neon-pink)" }}
            >
              ВЕБКОЛЬЦО:
            </h4>
            <div className="space-y-1">
              <div className="bounce">← Предыдущий сайт</div>
              <div className="bounce">→ Следующий сайт</div>
              <div className="bounce">↑ Случайный сайт</div>
            </div>
          </div>

          <div>
            <h4
              className="font-bold mb-2"
              style={{ color: "var(--neon-green)" }}
            >
              СДЕЛАНО В:
            </h4>
            <div className="space-y-1">
              <div>🏠 Блокнот Windows 98</div>
              <div>🌐 Internet Explorer 4.0</div>
              <div>💾 На 56k модеме</div>
            </div>
          </div>
        </div>

        <div
          className="border-t-2 pt-4"
          style={{ borderColor: "var(--neon-blue)" }}
        >
          <div className="blink text-lg">
            © 2025 МОЙ СУПЕР САЙТ - ВСЕ ПРАВА ЗАЩИЩЕНЫ
          </div>
          <div className="mt-2 text-sm" style={{ color: "var(--neon-yellow)" }}>
            Лучше всего смотрится в Netscape Navigator 📼
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
