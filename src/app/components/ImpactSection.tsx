import { Car, TrendingDown, Leaf, Globe } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const chartData = [
  { label: "Cars on Road", current: 700, after: 650, unit: "K" },
  { label: "Traffic Load", current: 100, after: 85, unit: "%" },
  { label: "Fuel Spend", current: 2800, after: 2520, unit: "M сом" },
];

const sdgs = [
  { num: "11", title: "Устойчивые города", icon: "🏙️", desc: "Делаем Бишкек удобным, эффективным и связным для всех." },
  { num: "13", title: "Климатические меры", icon: "🌱", desc: "Снижаем выбросы автомобилей и углеродный след в масштабах города." },
];

export function ImpactSection() {
  return (
    <section id="impact" className="py-24 px-4" style={{ background: "linear-gradient(180deg, #080012 0%, #060010 100%)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(168,85,247,0.5))" }} />
          <span style={{ fontSize: "0.75rem", letterSpacing: "0.2em", color: "#a855f7", fontWeight: 600 }}>СОЦИАЛЬНОЕ ВЛИЯНИЕ</span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, rgba(168,85,247,0.5))" }} />
        </div>

        <h2 className="text-center mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#f1f5f9" }}>
          Что происходит, если{" "}
          <span style={{ background: "linear-gradient(135deg, #a855f7, #e879f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            10% пересядут
          </span>
        </h2>
        <p className="text-center mb-16" style={{ color: "#64748b", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto 4rem" }}>
          Если хотя бы 10% водителей Бишкека перейдут на карпулинг, город изменится за одну ночь.
        </p>

        {/* Impact stats */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Car, value: "50 000", label: "меньше машин на дорогах ежедневно", color: "#a855f7" },
            { icon: TrendingDown, value: "10–15%", label: "снижение транспортного потока", color: "#e879f9" },
            { icon: Leaf, value: "280M сом", label: "экономия на топливе каждый месяц", color: "#34d399" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl p-6 text-center" style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${item.color}30` }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: `${item.color}18` }}>
                <item.icon size={22} style={{ color: item.color }} />
              </div>
              <div style={{ fontSize: "2rem", fontWeight: 900, color: item.color, lineHeight: 1.1 }}>{item.value}</div>
              <div style={{ color: "#64748b", fontSize: "0.9rem", marginTop: "8px" }}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="rounded-2xl p-8 mb-12" style={{ background: "rgba(168,85,247,0.04)", border: "1px solid rgba(168,85,247,0.15)" }}>
          <h3 style={{ color: "#e2e8f0", fontWeight: 700, marginBottom: "8px" }}>До и после: охват 10%</h3>
          <p style={{ color: "#64748b", fontSize: "0.85rem", marginBottom: "24px" }}>Прогнозируемый эффект по ключевым показателям</p>
          <div style={{ height: "220px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} barCategoryGap="30%">
                <XAxis dataKey="label" tick={{ fill: "#64748b", fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip
                  contentStyle={{ background: "#0c001a", border: "1px solid rgba(168,85,247,0.3)", borderRadius: "8px", color: "#e2e8f0" }}
                  cursor={{ fill: "rgba(168,85,247,0.05)" }}
                />
                <Bar dataKey="current" name="Current" radius={[4, 4, 0, 0]} fill="rgba(168,85,247,0.25)" />
                <Bar dataKey="after" name="After EasyGO" radius={[4, 4, 0, 0]} fill="rgba(168,85,247,0.8)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-6 mt-2">
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded" style={{ background: "rgba(168,85,247,0.25)" }} /><span style={{ color: "#64748b", fontSize: "0.8rem" }}>Сейчас</span></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded" style={{ background: "rgba(168,85,247,0.8)" }} /><span style={{ color: "#64748b", fontSize: "0.8rem" }}>С EasyGO (охват 10%)</span></div>
          </div>
        </div>

        {/* UN SDGs */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Globe size={18} style={{ color: "#a855f7" }} />
            <span style={{ color: "#94a3b8", fontWeight: 600 }}>Соответствует Целям устойчивого развития ООН</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {sdgs.map((sdg) => (
              <div key={sdg.num} className="rounded-xl p-5 flex items-start gap-4" style={{ background: "rgba(168,85,247,0.05)", border: "1px solid rgba(168,85,247,0.2)" }}>
                <div className="text-3xl flex-shrink-0">{sdg.icon}</div>
                <div>
                  <div style={{ color: "#7c3aed", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em" }}>ЦУР #{sdg.num}</div>
                  <div style={{ color: "#e2e8f0", fontWeight: 700, marginBottom: "4px" }}>{sdg.title}</div>
                  <div style={{ color: "#64748b", fontSize: "0.85rem" }}>{sdg.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
