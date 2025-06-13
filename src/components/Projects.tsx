const Projects = () => {
  const projects = [
    { name: "Курсовая работа", status: "В процессе", cool: "⭐⭐⭐" },
    { name: "Веб-сайт", status: "Готово", cool: "⭐⭐⭐⭐⭐" },
    { name: "Игра на Pascal", status: "Секретно", cool: "⭐⭐⭐⭐" },
    { name: "База данных", status: "Скоро", cool: "⭐⭐" },
  ];

  return (
    <section className="neon-border p-6 m-4 bg-black/50">
      <h2 className="text-4xl font-bold text-center mb-6 rainbow-text">
        🔥 МОИ ПРОЕКТЫ 🔥
      </h2>

      <div className="overflow-x-auto">
        <table className="retro-table w-full">
          <thead>
            <tr>
              <td className="text-center font-bold">ПРОЕКТ</td>
              <td className="text-center font-bold">СТАТУС</td>
              <td className="text-center font-bold">КРУТОСТЬ</td>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index}>
                <td className="text-center">
                  <span className="bounce">{project.name}</span>
                </td>
                <td className="text-center">
                  <span
                    className={project.status === "В процессе" ? "blink" : ""}
                  >
                    {project.status}
                  </span>
                </td>
                <td className="text-center sparkle">{project.cool}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-6">
        <button className="retro-button">ПОКАЗАТЬ ВСЕ ПРОЕКТЫ</button>
      </div>
    </section>
  );
};

export default Projects;
