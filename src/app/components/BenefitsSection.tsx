import { Users, Car, Fuel, TrendingDown, Wallet, Route } from "lucide-react";

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 px-4" style={{ background: "linear-gradient(180deg, #0c001a 0%, #0a0015 100%)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(168,85,247,0.5))" }} />
          <span style={{ fontSize: "0.75rem", letterSpacing: "0.2em", color: "#a855f7", fontWeight: 600 }}>ЦЕННОСТНОЕ ПРЕДЛОЖЕНИЕ</span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, rgba(168,85,247,0.5))" }} />
        </div>

        <h2 className="text-center mb-16" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#f1f5f9" }}>
          В выигрыше{" "}
          <span style={{ background: "linear-gradient(135deg, #a855f7, #e879f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            все
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Passenger card */}
          <div className="rounded-2xl p-8 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300" style={{ background: "rgba(168,85,247,0.05)", border: "1px solid rgba(168,85,247,0.3)" }}>
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-10 blur-3xl" style={{ background: "#a855f7" }} />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(168,85,247,0.2)" }}>
                <Users size={24} style={{ color: "#c084fc" }} />
              </div>
              <div>
                <div style={{ fontSize: "0.75rem", letterSpacing: "0.1em", color: "#7c3aed", fontWeight: 600 }}>ДЛЯ ПАССАЖИРОВ</div>
                <h3 style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "1.25rem" }}>Экономьте больше, езжайте умнее</h3>
              </div>
            </div>

            <div className="rounded-xl p-4 mb-6" style={{ background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.2)" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: 900, background: "linear-gradient(135deg, #c084fc, #e879f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                15–20 сом/km
              </div>
              <div style={{ color: "#94a3b8", marginTop: "4px" }}>против 30–35 сом/км на такси</div>
            </div>

            <div className="space-y-3">
              {[
                { icon: TrendingDown, text: "На 35–40% дешевле обычного такси" },
                { icon: Wallet, text: "Платите только за пройденное расстояние" },
                { icon: Route, text: "Подбор по вашему точному маршруту и времени" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(168,85,247,0.15)" }}>
                    <item.icon size={14} style={{ color: "#c084fc" }} />
                  </div>
                  <span style={{ color: "#94a3b8", fontSize: "0.9rem" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Driver card */}
          <div className="rounded-2xl p-8 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300" style={{ background: "rgba(232,121,249,0.05)", border: "1px solid rgba(232,121,249,0.25)" }}>
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-10 blur-3xl" style={{ background: "#e879f9" }} />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(232,121,249,0.15)" }}>
                <Car size={24} style={{ color: "#e879f9" }} />
              </div>
              <div>
                <div style={{ fontSize: "0.75rem", letterSpacing: "0.1em", color: "#9d174d", fontWeight: 600 }}>ДЛЯ ВОДИТЕЛЕЙ</div>
                <h3 style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "1.25rem" }}>Зарабатывайте по дороге</h3>
              </div>
            </div>

            <div className="rounded-xl p-4 mb-6" style={{ background: "rgba(232,121,249,0.08)", border: "1px solid rgba(232,121,249,0.2)" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: 900, background: "linear-gradient(135deg, #e879f9, #f43f5e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Fuel covered
              </div>
              <div style={{ color: "#94a3b8", marginTop: "4px" }}>+ дополнительный ежемесячный доход</div>
            </div>

            <div className="space-y-3">
              {[
                { icon: Fuel, text: "Полная компенсация затрат на топливо от пассажиров" },
                { icon: Route, text: "Никаких объездов — пассажиры едут по вашему маршруту" },
                { icon: Wallet, text: "Дополнительный доход на привычном пути на работу" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(232,121,249,0.12)" }}>
                    <item.icon size={14} style={{ color: "#e879f9" }} />
                  </div>
                  <span style={{ color: "#94a3b8", fontSize: "0.9rem" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
