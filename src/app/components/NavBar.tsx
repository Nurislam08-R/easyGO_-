import { Car, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Проблема", id: "problem" },
  { label: "Решение", id: "solution" },
  { label: "Выгоды", id: "benefits" },
  { label: "Безопасность", id: "safety" },
  { label: "Влияние", id: "impact" },
  { label: "Команда", id: "team" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "rgba(10,0,16,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(168,85,247,0.12)" }}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #a855f7, #e879f9)" }}>
            <Car size={16} style={{ color: "#fff" }} />
          </div>
          <span style={{ fontWeight: 900, fontSize: "1.15rem", background: "linear-gradient(135deg, #c084fc, #e879f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            EasyGO
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{ background: "none", border: "none", color: "#64748b", fontSize: "0.875rem", fontWeight: 500, cursor: "pointer", transition: "color 0.2s", padding: "4px 0" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c084fc")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => scrollTo("benefits")}
            className="px-5 py-2 rounded-lg transition-all duration-200 hover:scale-[1.03]"
            style={{ background: "linear-gradient(135deg, #a855f7, #e879f9)", color: "#fff", fontWeight: 700, fontSize: "0.875rem", border: "none", cursor: "pointer" }}
          >
            Найти поездку
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden" style={{ color: "#94a3b8", background: "none", border: "none", cursor: "pointer" }} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-4 pb-4" style={{ background: "rgba(10,0,16,0.97)" }}>
          {navLinks.map((link) => (
            <div key={link.id} className="py-2.5" style={{ borderBottom: "1px solid rgba(168,85,247,0.08)" }}>
              <button
                style={{ background: "none", border: "none", color: "#64748b", fontSize: "0.9rem", cursor: "pointer", textAlign: "left", width: "100%" }}
                onClick={() => { scrollTo(link.id); setOpen(false); }}
              >
                {link.label}
              </button>
            </div>
          ))}
          <button
            onClick={() => { scrollTo("benefits"); setOpen(false); }}
            className="w-full mt-4 py-3 rounded-lg"
            style={{ background: "linear-gradient(135deg, #a855f7, #e879f9)", color: "#fff", fontWeight: 700, border: "none", cursor: "pointer" }}
          >
            Найти поездку
          </button>
        </div>
      )}
    </nav>
  );
}
