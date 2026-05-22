import { Car, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "linear-gradient(135deg, #0a0010 0%, #0d0020 40%, #100025 100%)" }}>
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, #a855f7, transparent)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl" style={{ background: "radial-gradient(circle, #e879f9, transparent)" }} />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8" style={{ borderColor: "rgba(168,85,247,0.4)", background: "rgba(168,85,247,0.1)", color: "#c084fc" }}>
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#a855f7" }} />
          <span style={{ fontSize: "0.875rem", letterSpacing: "0.05em" }}>Умная платформа мобильности Бишкека</span>
        </div>

        {/* Headline */}
        <h1 className="mb-4" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 800, lineHeight: 1.1, background: "linear-gradient(135deg, #ffffff 0%, #c084fc 50%, #e879f9 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          EasyGO
        </h1>
        <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 700, color: "#e2e8f0", lineHeight: 1.2, marginBottom: "1.5rem" }}>
          Сервис совместных поездок
        </h2>

        {/* Subheadline */}
        <p style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", color: "#94a3b8", maxWidth: "600px", margin: "0 auto 3rem", lineHeight: 1.7 }}>
          Совместные поездки для снижения пробок и выбросов в городе. Присоединяйтесь к тысячам горожан, делающих Бишкек умнее, быстрее и чище.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-3 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ background: "linear-gradient(135deg, #a855f7, #e879f9)", color: "#fff", fontWeight: 700, fontSize: "1.05rem", boxShadow: "0 0 30px rgba(168,85,247,0.4)", border: "none", cursor: "pointer" }}
          >
            <Users size={20} />
            Найти поездку
          </button>
          <button
            onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-3 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
            style={{ background: "rgba(168,85,247,0.1)", color: "#c084fc", border: "1px solid rgba(168,85,247,0.4)", fontWeight: 700, fontSize: "1.05rem", cursor: "pointer" }}
          >
            <Car size={20} />
            Стать водителем
          </button>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 pt-10" style={{ borderTop: "1px solid rgba(168,85,247,0.2)" }}>
          {[
            { value: "700K+", label: "Машин в Бишкеке" },
            { value: "35-40%", label: "Экономия vs такси" },
            { value: "280M", label: "Сом сэкономлено в месяц" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div style={{ fontSize: "1.75rem", fontWeight: 800, background: "linear-gradient(135deg, #c084fc, #e879f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {stat.value}
              </div>
              <div style={{ fontSize: "0.85rem", color: "#64748b", marginTop: "4px" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: "#64748b" }}>
        <span style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}>ВНИЗ</span>
        <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, rgba(168,85,247,0.6), transparent)" }} />
      </div>
    </section>
  );
}
