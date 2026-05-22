import { AlertTriangle, TrendingUp, Wind, Clock, DollarSign } from "lucide-react";

const problems = [
  { icon: TrendingUp, title: "Перегруженные дороги", desc: "700 000+ машин на дорогах, рассчитанных на ~350 000. Вдвое больше нормы — каждый день." },
  { icon: AlertTriangle, title: "Неэффективное использование", desc: "60–65% автомобилей везут только 1–2 человека. Огромная трата дорожного пространства и топлива." },
  { icon: Wind, title: "Загрязнение воздуха", desc: "Автомобили создают до 30% городского смога. Каждая лишняя поездка обходится всем здоровьем." },
  { icon: Clock, title: "Потеря времени", desc: "Часы в пробках. Общественный транспорт перегружен, а тарифы такси постоянно растут." },
  { icon: DollarSign, title: "Рост расходов", desc: "Цены на такси продолжают расти. Горожане платят больше за более медленный и ненадёжный транспорт." },
];

export function ProblemSection() {
  return (
    <section id="problem" className="py-24 px-4" style={{ background: "linear-gradient(180deg, #0a0010 0%, #080018 100%)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(168,85,247,0.5))" }} />
          <span style={{ fontSize: "0.75rem", letterSpacing: "0.2em", color: "#a855f7", fontWeight: 600 }}>КРИЗИС</span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, rgba(168,85,247,0.5))" }} />
        </div>

        <h2 className="text-center mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#f1f5f9" }}>
          Бишкек на{" "}
          <span style={{ background: "linear-gradient(135deg, #f43f5e, #e879f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            пределе
          </span>
        </h2>
        <p className="text-center mb-16" style={{ color: "#64748b", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto 4rem" }}>
          Транспортный кризис — это не просто неудобство. Это нарастающая чрезвычайная ситуация, влияющая на здоровье, экономику и качество жизни.
        </p>

        {/* Big stat */}
        <div className="rounded-2xl p-8 mb-12 relative overflow-hidden" style={{ background: "rgba(168,85,247,0.05)", border: "1px solid rgba(168,85,247,0.2)" }}>
          <div className="absolute inset-0 opacity-5" style={{ background: "linear-gradient(135deg, #a855f7, #e879f9)" }} />
          <div className="relative z-10 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div style={{ fontSize: "3.5rem", fontWeight: 900, background: "linear-gradient(135deg, #f43f5e, #e879f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>700K+</div>
              <div style={{ color: "#94a3b8", marginTop: "4px" }}>машин на дорогах</div>
              <div style={{ color: "#475569", fontSize: "0.85rem" }}>вместимость: ~350 000</div>
            </div>
            <div>
              <div style={{ fontSize: "3.5rem", fontWeight: 900, background: "linear-gradient(135deg, #f97316, #e879f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>65%</div>
              <div style={{ color: "#94a3b8", marginTop: "4px" }}>поездок с 1–2 пассажирами</div>
              <div style={{ color: "#475569", fontSize: "0.85rem" }}>только 1–2 человека в машине</div>
            </div>
            <div>
              <div style={{ fontSize: "3.5rem", fontWeight: 900, background: "linear-gradient(135deg, #a855f7, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>30%</div>
              <div style={{ color: "#94a3b8", marginTop: "4px" }}>городского смога</div>
              <div style={{ color: "#475569", fontSize: "0.85rem" }}>создают автомобили</div>
            </div>
          </div>
        </div>

        {/* Problem cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((item, i) => (
            <div
              key={item.title}
              className="rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] group"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(168,85,247,0.15)", animationDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110" style={{ background: "rgba(168,85,247,0.15)" }}>
                <item.icon size={20} style={{ color: "#c084fc" }} />
              </div>
              <h3 style={{ color: "#e2e8f0", fontWeight: 700, marginBottom: "8px" }}>{item.title}</h3>
              <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
          {/* Last card - call to action */}
          <div className="rounded-xl p-6" style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(232,121,249,0.1))", border: "1px solid rgba(168,85,247,0.3)" }}>
            <p style={{ color: "#c084fc", fontWeight: 700, fontSize: "1.1rem", lineHeight: 1.5 }}>
              «Это затрагивает здоровье, производительность и будущее каждого.»
            </p>
            <p style={{ color: "#7c3aed", marginTop: "12px", fontSize: "0.85rem" }}>— Исследовательский отчёт EasyGO, 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}
