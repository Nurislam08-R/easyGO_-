import { Zap, Percent, CreditCard } from "lucide-react";

export function BusinessSection() {
  return (
    <section className="py-24 px-4" style={{ background: "linear-gradient(180deg, #060010 0%, #08001a 100%)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(168,85,247,0.5))" }} />
          <span style={{ fontSize: "0.75rem", letterSpacing: "0.2em", color: "#a855f7", fontWeight: 600 }}>БИЗНЕС-МОДЕЛЬ</span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, rgba(168,85,247,0.5))" }} />
        </div>

        <h2 className="text-center mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#f1f5f9" }}>
          Прозрачно,{" "}
          <span style={{ background: "linear-gradient(135deg, #a855f7, #e879f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            честно, выгодно
          </span>
        </h2>
        <p className="text-center mb-16" style={{ color: "#64748b", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 4rem" }}>
          Бизнес-модель, в которой сначала выигрывают пользователи — а EasyGO растёт вместе с ними.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Pricing card */}
          <div className="rounded-2xl p-8 col-span-1 md:col-span-1" style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.1), rgba(232,121,249,0.05))", border: "1px solid rgba(168,85,247,0.3)" }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(168,85,247,0.2)" }}>
              <CreditCard size={22} style={{ color: "#c084fc" }} />
            </div>
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: "#7c3aed", fontWeight: 700, marginBottom: "8px" }}>ТАРИФ ДЛЯ ПАССАЖИРА</div>
            <div style={{ fontSize: "2.5rem", fontWeight: 900, background: "linear-gradient(135deg, #c084fc, #e879f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              15–20
            </div>
            <div style={{ color: "#94a3b8", marginBottom: "16px" }}>сом за километр</div>
            <div className="h-px mb-4" style={{ background: "rgba(168,85,247,0.2)" }} />
            <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.6 }}>
              Конкурентная цена — на 35–40% ниже стандартных тарифов такси, что делает ежедневные поездки доступными для всех.
            </p>
          </div>

          {/* Commission card */}
          <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(168,85,247,0.15)" }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(232,121,249,0.15)" }}>
              <Percent size={22} style={{ color: "#e879f9" }} />
            </div>
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: "#9d174d", fontWeight: 700, marginBottom: "8px" }}>КОМИССИЯ СЕРВИСА</div>
            <div style={{ fontSize: "2.5rem", fontWeight: 900, background: "linear-gradient(135deg, #e879f9, #f43f5e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              3–5%
            </div>
            <div style={{ color: "#94a3b8", marginBottom: "16px" }}>только с каждой транзакции</div>
            <div className="h-px mb-4" style={{ background: "rgba(232,121,249,0.15)" }} />
            <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.6 }}>
              Одна из самых низких комиссий в отрасли. Мы верим в рост вместе с пользователями, а не за их счёт.
            </p>
          </div>

          {/* Payment system card */}
          <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(96,165,250,0.2)" }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(96,165,250,0.15)" }}>
              <Zap size={22} style={{ color: "#60a5fa" }} />
            </div>
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: "#1d4ed8", fontWeight: 700, marginBottom: "8px" }}>ПЛАТЁЖНАЯ ИНФРАСТРУКТУРА</div>
            <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#60a5fa", lineHeight: 1.2, marginBottom: "4px" }}>
              Токен-система
            </div>
            <div style={{ color: "#94a3b8", marginBottom: "16px" }}>быстрые и безопасные платежи</div>
            <div className="h-px mb-4" style={{ background: "rgba(96,165,250,0.15)" }} />
            <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.6 }}>
              Внутренняя токен-система платежей обеспечивает мгновенные, безопасные и безналичные транзакции между пассажирами и водителями.
            </p>
          </div>
        </div>

        {/* Comparison bar */}
        <div className="mt-12 rounded-2xl p-6" style={{ background: "rgba(168,85,247,0.04)", border: "1px solid rgba(168,85,247,0.12)" }}>
          <div style={{ color: "#94a3b8", fontSize: "0.85rem", marginBottom: "16px", fontWeight: 600 }}>Сравнение цен за километр</div>
          <div className="space-y-3">
            {[
              { label: "EasyGO", value: 17.5, max: 40, color: "#a855f7", display: "~17.5 сом" },
              { label: "Обычное такси", value: 32, max: 40, color: "#475569", display: "~32 сом" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div style={{ width: "100px", color: "#94a3b8", fontSize: "0.85rem", flexShrink: 0 }}>{item.label}</div>
                <div className="flex-1 h-6 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.04)" }}>
                  <div
                    className="h-full rounded-full flex items-center justify-end pr-3 transition-all duration-1000"
                    style={{ width: `${(item.value / item.max) * 100}%`, background: `linear-gradient(to right, ${item.color}, ${item.color}cc)`, boxShadow: item.color === "#a855f7" ? "0 0 10px rgba(168,85,247,0.4)" : "none" }}
                  >
                    <span style={{ color: "#fff", fontSize: "0.75rem", fontWeight: 700, whiteSpace: "nowrap" }}>{item.display}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
