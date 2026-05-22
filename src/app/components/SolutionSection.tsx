import { MapPin, Search, CheckCircle, Smartphone, Star } from "lucide-react";

const steps = [
  { icon: MapPin, num: "01", title: "Водитель указывает маршрут", desc: "Водитель вводит пункт назначения — никаких объездов и изменений маршрута." },
  { icon: Search, num: "02", title: "Система находит совпадения", desc: "Алгоритм за секунды находит пассажиров с похожими маршрутами и временем." },
  { icon: CheckCircle, num: "03", title: "Пассажир бронирует место", desc: "Пассажир выбирает подходящий вариант и мгновенно бронирует через приложение." },
  { icon: Smartphone, num: "04", title: "Поездка и оплата в приложении", desc: "Навигация, общение и безналичная оплата — всё в одном приложении." },
  { icon: Star, num: "05", title: "Отзывы и оценки", desc: "Обе стороны оценивают друг друга, формируя доверенное сообщество проверенных пользователей." },
];

export function SolutionSection() {
  return (
    <section id="solution" className="py-24 px-4" style={{ background: "linear-gradient(180deg, #080018 0%, #0c001a 100%)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(168,85,247,0.5))" }} />
          <span style={{ fontSize: "0.75rem", letterSpacing: "0.2em", color: "#a855f7", fontWeight: 600 }}>КАК ЭТО РАБОТАЕТ</span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, rgba(168,85,247,0.5))" }} />
        </div>

        <h2 className="text-center mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#f1f5f9" }}>
          Умное совпадение,{" "}
          <span style={{ background: "linear-gradient(135deg, #a855f7, #e879f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            без изменений маршрута
          </span>
        </h2>
        <p className="text-center mb-16" style={{ color: "#64748b", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 4rem" }}>
          EasyGO связывает водителей и пассажиров с похожими маршрутами — не меняя маршрут водителя ни на метр.
        </p>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(168,85,247,0.3) 20%, rgba(232,121,249,0.3) 80%, transparent)" }} />

          <div className="grid lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative group">
                <div
                  className="rounded-2xl p-5 h-full transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(168,85,247,0.15)", cursor: "default" }}
                >
                  {/* Step number circle */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto transition-all duration-300 group-hover:scale-110" style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(232,121,249,0.2))", border: "1px solid rgba(168,85,247,0.4)" }}>
                    <step.icon size={20} style={{ color: "#c084fc" }} />
                  </div>

                  <div style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "#7c3aed", fontWeight: 700, textAlign: "center", marginBottom: "8px" }}>
                    ШАГ {step.num}
                  </div>
                  <h3 style={{ color: "#e2e8f0", fontWeight: 700, textAlign: "center", fontSize: "0.95rem", marginBottom: "8px" }}>
                    {step.title}
                  </h3>
                  <p style={{ color: "#64748b", fontSize: "0.82rem", lineHeight: 1.6, textAlign: "center" }}>
                    {step.desc}
                  </p>
                </div>

                {/* Arrow connector */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-6 -right-3 z-10 w-6 h-6 rounded-full items-center justify-center" style={{ background: "#0c001a" }}>
                    <span style={{ color: "#7c3aed", fontSize: "1rem" }}>→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center p-8 rounded-2xl" style={{ background: "rgba(168,85,247,0.05)", border: "1px solid rgba(168,85,247,0.15)" }}>
          <p style={{ color: "#94a3b8", fontSize: "1rem" }}>
            Водитель едет туда, куда и планировал.{" "}
            <span style={{ color: "#c084fc", fontWeight: 600 }}>Пассажиры экономят деньги.</span>{" "}
            <span style={{ color: "#e879f9", fontWeight: 600 }}>Город дышит свободнее.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
