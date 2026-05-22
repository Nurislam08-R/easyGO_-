import { Code, Rocket, Globe } from "lucide-react";

const phases = [
  {
    icon: Code,
    phase: "Фаза 1",
    timeline: "0–3 месяца",
    title: "Завершение MVP",
    status: "В процессе",
    statusColor: "#34d399",
    items: ["Основной алгоритм подбора", "Мобильные приложения для водителей и пассажиров", "Платёжная инфраструктура", "Панель администратора"],
    color: "#a855f7",
  },
  {
    icon: Rocket,
    phase: "Фаза 2",
    timeline: "3–6 месяцев",
    title: "Пилотный запуск",
    status: "Запланировано",
    statusColor: "#e879f9",
    items: ["Пилот в Бишкеке с ранними пользователями", "Интеграция верификации «Тундук»", "Система рейтингов и отзывов", "Первый маркетинговый запуск"],
    color: "#e879f9",
  },
  {
    icon: Globe,
    phase: "Фаза 3",
    timeline: "6–12 месяцев",
    title: "Масштабирование",
    status: "Дорожная карта",
    statusColor: "#60a5fa",
    items: ["Партнёрства с компаниями и университетами", "Бонусные программы для водителей", "Расширение на другие города КР", "Платформа аналитики данных"],
    color: "#60a5fa",
  },
];

export function RoadmapSection() {
  return (
    <section className="py-24 px-4" style={{ background: "linear-gradient(180deg, #08001a 0%, #0a0015 100%)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(168,85,247,0.5))" }} />
          <span style={{ fontSize: "0.75rem", letterSpacing: "0.2em", color: "#a855f7", fontWeight: 600 }}>ДОРОЖНАЯ КАРТА</span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, rgba(168,85,247,0.5))" }} />
        </div>

        <h2 className="text-center mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#f1f5f9" }}>
          Наш план{" "}
          <span style={{ background: "linear-gradient(135deg, #a855f7, #e879f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            развития
          </span>
        </h2>
        <p className="text-center mb-16" style={{ color: "#64748b", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 4rem" }}>
          От рабочего прототипа до общегородского масштаба — чёткий поэтапный путь вперёд.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, rgba(168,85,247,0.5), rgba(96,165,250,0.3))", transform: "translateX(-50%)" }} />

          <div className="grid md:grid-cols-3 gap-8">
            {phases.map((phase, i) => (
              <div key={phase.phase} className="relative">
                {/* Phase card */}
                <div
                  className="rounded-2xl p-6 h-full transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${phase.color}25` }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${phase.color}18` }}>
                      <phase.icon size={20} style={{ color: phase.color }} />
                    </div>
                    <span
                      className="px-3 py-1 rounded-full"
                      style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.05em", background: `${phase.statusColor}18`, color: phase.statusColor, border: `1px solid ${phase.statusColor}30` }}
                    >
                      {phase.status}
                    </span>
                  </div>

                  <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: phase.color, fontWeight: 700, marginBottom: "4px" }}>
                    {phase.phase} · {phase.timeline}
                  </div>
                  <h3 style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "1.2rem", marginBottom: "16px" }}>
                    {phase.title}
                  </h3>

                  <div className="h-px mb-4" style={{ background: `${phase.color}20` }} />

                  <ul className="space-y-2">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: phase.color }} />
                        <span style={{ color: "#64748b", fontSize: "0.85rem" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Phase number indicator */}
                <div
                  className="absolute -top-3 left-6 px-3 py-1 rounded-full"
                  style={{ background: "#0a0015", border: `1px solid ${phase.color}40`, fontSize: "0.7rem", color: phase.color, fontWeight: 700 }}
                >
                  0{i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Status note */}
        <div className="mt-12 text-center p-6 rounded-xl" style={{ background: "rgba(52,211,153,0.05)", border: "1px solid rgba(52,211,153,0.2)" }}>
          <span style={{ color: "#34d399", fontWeight: 600 }}>✓ Исследование завершено · Рабочий прототип готов</span>
          <span style={{ color: "#475569", marginLeft: "12px", fontSize: "0.9rem" }}>Команда уже протестировала основную концепцию с реальными пользователями в Бишкеке.</span>
        </div>
      </div>
    </section>
  );
}
