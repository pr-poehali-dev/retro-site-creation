import { useState } from "react";

const Guestbook = () => {
  const [entries, setEntries] = useState([
    { name: "Анна", message: "Супер сайт! 🌟", date: "12.03.1999" },
    { name: "Максим", message: "Очень крутой дизайн!", date: "15.03.1999" },
    {
      name: "Лена",
      message: "Когда следующее обновление?",
      date: "18.03.1999",
    },
  ]);

  const [newName, setNewName] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const addEntry = () => {
    if (newName && newMessage) {
      const newEntry = {
        name: newName,
        message: newMessage,
        date: new Date().toLocaleDateString("ru-RU"),
      };
      setEntries([newEntry, ...entries]);
      setNewName("");
      setNewMessage("");
    }
  };

  return (
    <section className="guestbook acid-border m-4">
      <h2
        className="text-4xl font-bold text-center mb-6"
        style={{ color: "var(--neon-yellow)" }}
      >
        📝 ГОСТЕВАЯ КНИГА 📝
      </h2>

      <div
        className="acid-border mb-6 p-4"
        style={{ borderColor: "var(--neon-green)" }}
      >
        <h3
          className="text-xl font-bold mb-4"
          style={{ color: "var(--neon-pink)" }}
        >
          ОСТАВЬ СВОЙ СЛЕД:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Твое имя"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="p-2 bg-black text-green-400 border-2 border-cyan-400 font-mono"
          />
          <input
            type="text"
            placeholder="Твое сообщение"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="p-2 bg-black text-green-400 border-2 border-cyan-400 font-mono"
          />
        </div>
        <button onClick={addEntry} className="retro-button">
          ДОБАВИТЬ ЗАПИСЬ
        </button>
      </div>

      <div className="space-y-3">
        {entries.map((entry, index) => (
          <div
            key={index}
            className="acid-border p-3"
            style={{ borderColor: "var(--neon-blue)" }}
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="font-bold rainbow-text">{entry.name}</span>
                <span className="ml-4" style={{ color: "var(--neon-yellow)" }}>
                  {entry.message}
                </span>
              </div>
              <span className="text-sm" style={{ color: "var(--neon-green)" }}>
                {entry.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Guestbook;
