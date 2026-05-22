import { Shield, Star, CreditCard, UserCheck } from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Верификация через «Тундук»",
    desc: "Все пользователи проверяются через национальную систему идентификации «Тундук» — только реальные личности.",
    color: "#a855f7",
  },
  {
    icon: Star,
    title: "Прозрачная рейтинговая система",
    desc: "После каждой поездки водители и пассажиры оценивают друг друга. Нарушители удаляются автоматически.",
    color: "#e879f9",
  },
  {
    icon: CreditCard,
    title: "Безопасные безналичные платежи",
    desc: "Все платежи проходят через зашифрованные токены. Никаких наличных, никаких споров.",
    color: "#60a5fa",
  },
  {
    icon: Shield,
    title: "Доверие сообщества",
    desc: "80% опрошенных пользователей назвали безопасность главным фактором. EasyGO создан с учётом этого.",
    color: "#34d399",
  },
];

export function SafetySection() {
  return (
    <section id="safety" className="py-24 px-4" style={{ background: "linear-gradient(180deg, #0a0015 0%, #080012 100%)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(168,85,247,0.5))" }} />
          <span style={{ fontSize: "0.75rem", letterSpacing: "0.2em", color: "#a855f7", fontWeight: 600 }}>БЕЗОПАСНОСТЬ И ДОВЕРИЕ</span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, rgba(168,85,247,0.5))" }} />
        </div>

        <h2 className="text-center mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#f1f5f9" }}>
          Построено на{" "}
          <span style={{ background: "linear-gradient(135deg, #a855f7, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            доверии
          </span>
          , защищено{" "}
          <span style={{ background: "linear-gradient(135deg, #34d399, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            технологиями
          </span>
        </h2>
        <p className="text-center mb-16" style={{ color: "#64748b", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 4rem" }}>
          Исследования показывают, что 80% потенциальных пользователей считают безопасность главным приоритетом. EasyGO был разработан с учётом этого с первого дня.
        </p>

        {/* Trust meter */}
        <div className="rounded-2xl p-6 mb-12" style={{ background: "rgba(168,85,247,0.05)", border: "1px solid rgba(168,85,247,0.2)" }}>
          <div className="flex items-center justify-between mb-3">
            <span style={{ color: "#94a3b8", fontSize: "0.9rem" }}>Индекс доверия к безопасности</span>
            <span style={{ color: "#c084fc", fontWeight: 700 }}>80%</span>
          </div>
          <div className="h-3 rounded-full overflow-hidden" style={{ background: "rgba(168,85,247,0.1)" }}>
            <div
              className="h-full rounded-full"
              style={{ width: "80%", background: "linear-gradient(to right, #a855f7, #e879f9)", boxShadow: "0 0 12px rgba(168,85,247,0.5)" }}
            />
          </div>
          <p style={{ color: "#475569", fontSize: "0.8rem", marginTop: "8px" }}>
            По данным исследования EasyGO — безопасность является приоритетом №1 для пользователей, рассматривающих совместные поездки.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 group"
              style={{ background: "rgba(255,255,255,0.02)", border: `1px solid rgba(${feature.color === "#a855f7" ? "168,85,247" : feature.color === "#e879f9" ? "232,121,249" : feature.color === "#60a5fa" ? "96,165,250" : "52,211,153"},0.2)` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${feature.color}18` }}
              >
                <feature.icon size={22} style={{ color: feature.color }} />
              </div>
              <h3 style={{ color: "#e2e8f0", fontWeight: 700, marginBottom: "8px" }}>{feature.title}</h3>
              <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.6 }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
