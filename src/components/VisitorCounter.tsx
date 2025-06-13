import { useState, useEffect } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState(1337);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center py-6">
      <div className="visitor-counter">
        <div className="text-sm mb-2">*** СЧЕТЧИК ПОСЕТИТЕЛЕЙ ***</div>
        <div className="text-3xl font-bold blink">{count.toLocaleString()}</div>
        <div className="text-xs mt-2">ПОСЕТИТЕЛЕЙ С 1999 ГОДА</div>
      </div>

      <div className="mt-4">
        <span className="text-lg" style={{ color: "var(--neon-pink)" }}>
          🎉 ТЫ ПОСЕТИТЕЛЬ НОМЕР {count}! 🎉
        </span>
      </div>
    </div>
  );
};

export default VisitorCounter;
