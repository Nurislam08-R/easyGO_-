import { Car, Mail, MapPin } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="py-16 px-4" style={{ background: "#060010", borderTop: "1px solid rgba(168,85,247,0.15)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #a855f7, #e879f9)" }}>
                <Car size={20} style={{ color: "#fff" }} />
              </div>
              <span style={{ fontSize: "1.4rem", fontWeight: 900, background: "linear-gradient(135deg, #c084fc, #e879f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                EasyGO
              </span>
            </div>
            <p style={{ color: "#475569", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: "280px" }}>
              Платформа совместных поездок, делающая Бишкек умнее, чище и связнее — одна совместная поездка за раз.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "#94a3b8", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "16px" }}>НАВИГАЦИЯ</h4>
            <ul className="space-y-3">
              {[
                { label: "Проблема", id: "problem" },
                { label: "Как это работает", id: "solution" },
                { label: "Выгоды", id: "benefits" },
                { label: "Безопасность", id: "safety" },
                { label: "Влияние", id: "impact" },
                { label: "Команда", id: "team" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })}
                    style={{ background: "none", border: "none", color: "#475569", fontSize: "0.9rem", cursor: "pointer", padding: 0, transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#c084fc")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#94a3b8", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "16px" }}>КОНТАКТЫ</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={16} style={{ color: "#7c3aed", flexShrink: 0 }} />
                <span style={{ color: "#475569", fontSize: "0.9rem" }}>Bishkek, Kyrgyzstan</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} style={{ color: "#7c3aed", flexShrink: 0 }} />
                <span style={{ color: "#475569", fontSize: "0.9rem" }}>hello@easygo.kg</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-full py-3 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, #a855f7, #e879f9)", color: "#fff", fontWeight: 700, fontSize: "0.9rem", boxShadow: "0 0 20px rgba(168,85,247,0.25)", border: "none", cursor: "pointer" }}
              >
                Войти в список ожидания
              </button>
            </div>
          </div>
        </div>

        <div className="h-px mb-8" style={{ background: "rgba(168,85,247,0.1)" }} />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p style={{ color: "#334155", fontSize: "0.82rem" }}>
            © 2025 EasyGO. Умная платформа мобильности Бишкека.
          </p>
          <div className="flex items-center gap-6">
            {["Конфиденциальность", "Условия", "Контакты"].map((item) => (
              <button
                key={item}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                style={{ background: "none", border: "none", color: "#334155", fontSize: "0.82rem", cursor: "pointer", padding: 0 }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
