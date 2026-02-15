import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Shield, Brain, BookOpen, Zap, ChevronRight } from "lucide-react";

const stats = [
  { label: "Threats Blocked (30d)", value: "14,892", icon: Shield, glow: "cyan" as const },
  { label: "AI Predictions", value: "847", icon: Brain, glow: "cyan" as const },
  { label: "Attack Narratives", value: "23", icon: BookOpen, glow: "amber" as const },
  { label: "Avg Response Time", value: "1.2s", icon: Zap, glow: "cyan" as const },
];

const heatmapDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const heatmapCategories = ["Malware", "Phishing", "DDoS", "Brute Force", "Exfiltration", "Lateral Movement"];
const heatmapData: number[][] = [
  [3, 7, 2, 9, 5, 1, 2],
  [8, 4, 6, 3, 7, 2, 1],
  [1, 2, 8, 2, 1, 0, 0],
  [5, 6, 3, 7, 4, 3, 2],
  [2, 1, 4, 1, 3, 1, 0],
  [4, 3, 5, 6, 2, 1, 1],
];

const attackStages = [
  { stage: "Reconnaissance", time: "14:22", detail: "Port scanning from 194.x.x.x detected by ANGELNODE perimeter agent", severity: "info" },
  { stage: "Weaponization", time: "14:28", detail: "Payload signature matched — polymorphic dropper variant", severity: "warning" },
  { stage: "Delivery", time: "14:31", detail: "Spear-phishing email intercepted — attachment quarantined autonomously by ANGELGRID AI", severity: "error" },
  { stage: "Exploitation", time: "14:31", detail: "Blocked — ANGELGRID zero-trust prevented execution on endpoint", severity: "error" },
  { stage: "Remediation", time: "14:32", detail: "Auto-isolation triggered, threat signatures pushed to all ANGELNODEs", severity: "info" },
];

const barData = [
  { name: "Malware", count: 3842 }, { name: "Phishing", count: 4210 }, { name: "DDoS", count: 1580 },
  { name: "Brute Force", count: 2930 }, { name: "Exfil", count: 890 }, { name: "Lateral", count: 1440 },
];

const trendData = [
  { day: "W1", threats: 2800, blocked: 2790 }, { day: "W2", threats: 3400, blocked: 3395 },
  { day: "W3", threats: 4100, blocked: 4098 }, { day: "W4", threats: 4592, blocked: 4589 },
];

const filters = ["Critical", "High", "Medium", "Malware", "Phishing", "Last 7 Days"];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Analytics & Threat Intelligence</h1>
        <p className="text-sm text-muted-foreground mt-1">ANGELGRID AI-driven attack narratives, deep data visualization, and predictive defense</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {stats.map(s => (
          <GlassCard key={s.label} glow={s.glow} className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-primary/10"><s.icon className="h-5 w-5 text-primary" /></div>
            <div><p className="text-2xl font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></div>
          </GlassCard>
        ))}
      </div>

      {/* Threat Heatmap */}
      <GlassCard>
        <h3 className="text-sm font-semibold text-muted-foreground mb-3">Threat Heatmap</h3>
        <div className="overflow-auto">
          <table className="w-full text-xs">
            <thead><tr><th className="py-1 px-2"></th>{heatmapDays.map(d => <th key={d} className="py-1 px-2 text-muted-foreground font-medium text-center">{d}</th>)}</tr></thead>
            <tbody>
              {heatmapCategories.map((cat, ri) => (
                <tr key={cat}>
                  <td className="py-1 px-2 text-muted-foreground text-right whitespace-nowrap">{cat}</td>
                  {heatmapData[ri].map((v, ci) => (
                    <td key={ci} className="py-1 px-2 text-center">
                      <div className="mx-auto w-8 h-8 rounded flex items-center justify-center text-[10px] font-medium"
                        style={{ backgroundColor: `hsl(var(--aegis-cyan) / ${Math.min(v / 10, 1)})`, color: v > 5 ? "hsl(var(--background))" : "hsl(var(--foreground))" }}>
                        {v}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>

      <div className="grid grid-cols-12 gap-5">
        {/* Attack Timeline */}
        <div className="col-span-7">
          <GlassCard className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Attack Timeline — MITRE ATT&CK</h3>
            <div className="space-y-0">
              {attackStages.map((a, i) => (
                <div key={i} className="flex items-start gap-3 relative pl-4">
                  {i < attackStages.length - 1 && <div className="absolute left-[7px] top-6 w-px h-full bg-border/50" />}
                  <div className={`w-3 h-3 mt-1.5 rounded-full shrink-0 ${a.severity === "error" ? "bg-destructive" : a.severity === "warning" ? "bg-[hsl(var(--aegis-amber))]" : "bg-primary/60"}`} />
                  <div className="pb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">{a.stage}</span>
                      <span className="text-[10px] text-muted-foreground">{a.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">{a.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* AI Narrative */}
        <div className="col-span-5">
          <GlassCard aurora className="h-full">
            <div className="flex items-center gap-2 mb-3">
              <Brain className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold text-muted-foreground">AI Attack Narrative</h3>
            </div>
            <div className="space-y-3 text-xs text-muted-foreground leading-relaxed">
              <p>ANGELGRID AI reconstructed a coordinated attack attempt originating from Eastern European infrastructure. The adversary employed a <span className="text-primary font-medium">polymorphic dropper</span> delivered via spear-phishing targeting engineering staff.</p>
              <p>The attack was <span className="text-[hsl(var(--aegis-green))] font-medium">neutralized autonomously</span> at the delivery phase — zero human intervention required. ANGELGRID AI predicted the lateral movement intent 3 steps ahead and pre-emptively hardened adjacent segments.</p>
              <p>All threat signatures were propagated to <span className="text-primary font-medium">1,284 ANGELNODEs across 3 OS platforms</span> within 4.2 seconds.</p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/30 flex justify-between items-center">
              <Badge variant="default" className="text-[10px]">Confidence: 98.7%</Badge>
              <span className="text-[10px] text-muted-foreground flex items-center gap-1">View full report <ChevronRight className="h-3 w-3" /></span>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-6">
          <GlassCard>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Threat Distribution by Category</h3>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
                <Bar dataKey="count" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </GlassCard>
        </div>
        <div className="col-span-6">
          <GlassCard>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Weekly Trend — Threats vs Blocked</h3>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="day" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
                <Line type="monotone" dataKey="threats" stroke="hsl(var(--aegis-amber))" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="blocked" stroke="hsl(var(--aegis-green))" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </GlassCard>
        </div>
      </div>

      {/* Query Builder */}
      <GlassCard>
        <h3 className="text-sm font-semibold text-muted-foreground mb-3">Dynamic Query Builder</h3>
        <div className="flex flex-wrap gap-2">
          {filters.map(f => (
            <Badge key={f} variant="secondary" className="cursor-pointer hover:bg-primary/20 transition-colors">{f}</Badge>
          ))}
          <Badge variant="outline" className="cursor-pointer border-dashed">+ Add Filter</Badge>
        </div>
      </GlassCard>
    </div>
  );
}
