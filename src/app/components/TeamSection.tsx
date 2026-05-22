import { Briefcase, Code2, Megaphone, Palette } from "lucide-react";

const team = [
  {
    name: "Айдин",
    role: "Менеджер проекта",
    icon: Briefcase,
    color: "#a855f7",
    desc: "Руководит стратегией, координирует команду и держит курс на цель.",
  },
  {
    name: "Оятилло",
    role: "Fullstack-разработчик",
    icon: Code2,
    color: "#60a5fa",
    desc: "Строит платформу от и до — от алгоритмов подбора до мобильного интерфейса.",
  },
  {
    name: "Улукбек",
    role: "Маркетинг",
    icon: Megaphone,
    color: "#e879f9",
    desc: "Отвечает за рост аудитории, узнаваемость бренда и вовлечённость сообщества.",
  },
  {
    name: "Камиль",
    role: "Дизайн",
    icon: Palette,
    color: "#34d399",
    desc: "Создаёт визуальную идентичность и пользовательский опыт, делающий EasyGO интуитивным.",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-24 px-4" style={{ background: "linear-gradient(180deg, #0a0015 0%, #0a0010 100%)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(168,85,247,0.5))" }} />
          <span style={{ fontSize: "0.75rem", letterSpacing: "0.2em", color: "#a855f7", fontWeight: 600 }}>КОМАНДА</span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, rgba(168,85,247,0.5))" }} />
        </div>

        <h2 className="text-center mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#f1f5f9" }}>
          Познакомьтесь с теми,{" "}
          <span style={{ background: "linear-gradient(135deg, #a855f7, #e879f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            кто создаёт EasyGO
          </span>
        </h2>
        <p className="text-center mb-16" style={{ color: "#64748b", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 4rem" }}>
          Сфокусированная, амбициозная команда с завершённым исследованием, реальной валидацией и рабочим прототипом — уже впереди конкурентов.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl p-6 text-center transition-all duration-300 hover:scale-[1.04] hover:-translate-y-2 group"
              style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${member.color}22` }}
            >
              {/* Avatar */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ background: `linear-gradient(135deg, ${member.color}25, ${member.color}10)`, border: `1px solid ${member.color}35` }}
              >
                <member.icon size={32} style={{ color: member.color }} />
              </div>

              <h3 style={{ color: "#f1f5f9", fontWeight: 800, fontSize: "1.15rem", marginBottom: "4px" }}>{member.name}</h3>
              <div
                className="inline-block px-3 py-1 rounded-full mb-3"
                style={{ background: `${member.color}15`, color: member.color, fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.05em" }}
              >
                {member.role}
              </div>
              <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.6 }}>{member.desc}</p>
            </div>
          ))}
        </div>

        {/* Achievement banner */}
        <div className="mt-16 rounded-2xl p-8 relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.1), rgba(232,121,249,0.05))", border: "1px solid rgba(168,85,247,0.25)" }}>
          <div className="absolute inset-0 opacity-5" style={{ background: "linear-gradient(135deg, #a855f7, #e879f9)" }} />
          <div className="relative z-10 grid sm:grid-cols-3 gap-6 text-center">
            {[
              { value: "✓", label: "Исследование завершено", sub: "Опросы пользователей и анализ рынка" },
              { value: "✓", label: "Прототип готов", sub: "Рабочий MVP в активной разработке" },
              { value: "→", label: "Пилотный запуск", sub: "Через 3–6 месяцев" },
            ].map((item) => (
              <div key={item.label}>
                <div style={{ fontSize: "1.5rem", color: "#a855f7", fontWeight: 900, marginBottom: "4px" }}>{item.value}</div>
                <div style={{ color: "#e2e8f0", fontWeight: 700 }}>{item.label}</div>
                <div style={{ color: "#64748b", fontSize: "0.8rem", marginTop: "4px" }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
