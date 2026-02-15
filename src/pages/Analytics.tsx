import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Shield, Brain, BookOpen, Zap, ChevronRight, AlertTriangle, Monitor, Apple, Terminal, Cloud, Eye, Target } from "lucide-react";

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

const aiThreatMatrix = [
  { threat: "Prompt Injection", severity: "Critical", targets: "LLMs, Chatbots", incidents: 142, blocked: 142, trend: "↑ 23%" },
  { threat: "Model Poisoning", severity: "High", targets: "Training Pipelines", incidents: 8, blocked: 8, trend: "→ Stable" },
  { threat: "Data Exfiltration via LLM", severity: "Critical", targets: "GPT-4o, Copilot", incidents: 34, blocked: 34, trend: "↑ 12%" },
  { threat: "Adversarial Inputs", severity: "High", targets: "Vision Models, NLP", incidents: 67, blocked: 65, trend: "↓ 8%" },
  { threat: "Agent Hijacking", severity: "Critical", targets: "RPA, Autonomous Agents", incidents: 12, blocked: 12, trend: "↑ 45%" },
  { threat: "Model Theft", severity: "Medium", targets: "Model Registry", incidents: 3, blocked: 3, trend: "→ Stable" },
];

const predictiveTimeline = [
  { time: "Next 2h", prediction: "Elevated phishing risk — campaign detected in adjacent sector", confidence: 94, severity: "high" },
  { time: "Next 6h", prediction: "Potential brute-force wave targeting VPN endpoints", confidence: 87, severity: "medium" },
  { time: "Next 12h", prediction: "AI model probing expected — adversarial input patterns emerging", confidence: 78, severity: "high" },
  { time: "Next 24h", prediction: "Credential stuffing spike predicted based on dark web chatter", confidence: 72, severity: "medium" },
];

const crossPlatform = [
  { platform: "Windows", icon: Monitor, events: 4821, correlated: 342, autoFixed: 338 },
  { platform: "macOS", icon: Apple, events: 2104, correlated: 156, autoFixed: 155 },
  { platform: "Linux", icon: Terminal, events: 1847, correlated: 98, autoFixed: 97 },
  { platform: "Cloud", icon: Cloud, events: 6120, correlated: 451, autoFixed: 449 },
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Analytics & Threat Intelligence</h1>
        <p className="text-sm text-muted-foreground mt-1">ANGELGRID AI-driven attack narratives, AI model threat matrix, and predictive defense across every platform</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {stats.map(s => (
          <GlassCard key={s.label} glow={s.glow} className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-primary/10"><s.icon className="h-5 w-5 text-primary" /></div>
            <div><p className="text-2xl font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></div>
          </GlassCard>
        ))}
      </div>

      {/* AI Model Threat Matrix */}
      <GlassCard aurora>
        <div className="flex items-center gap-2 mb-4">
          <Target className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">AI Model Threat Matrix — Threats Targeting AI Systems</h3>
        </div>
        <table className="w-full text-sm">
          <thead><tr className="border-b border-border/50 text-muted-foreground text-xs">
            <th className="text-left py-2 px-2 font-medium">Threat Vector</th>
            <th className="text-left py-2 px-2 font-medium">Severity</th>
            <th className="text-left py-2 px-2 font-medium">Targets</th>
            <th className="text-left py-2 px-2 font-medium">Incidents</th>
            <th className="text-left py-2 px-2 font-medium">Blocked</th>
            <th className="text-left py-2 px-2 font-medium">Trend</th>
          </tr></thead>
          <tbody>
            {aiThreatMatrix.map(t => (
              <tr key={t.threat} className="border-b border-border/20 hover:bg-muted/20">
                <td className="py-2 px-2 font-medium">{t.threat}</td>
                <td className="py-2 px-2"><Badge variant={t.severity === "Critical" ? "destructive" : t.severity === "High" ? "secondary" : "outline"} className="text-[10px]">{t.severity}</Badge></td>
                <td className="py-2 px-2 text-xs text-muted-foreground">{t.targets}</td>
                <td className="py-2 px-2 text-xs font-semibold">{t.incidents}</td>
                <td className="py-2 px-2 text-xs text-[hsl(var(--aegis-green))] font-semibold">{t.blocked}</td>
                <td className={`py-2 px-2 text-xs ${t.trend.includes("↑") ? "text-[hsl(var(--aegis-red))]" : t.trend.includes("↓") ? "text-[hsl(var(--aegis-green))]" : "text-muted-foreground"}`}>{t.trend}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </GlassCard>

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
              <p>Simultaneously, <span className="text-primary font-medium">prompt injection attempts</span> targeting GPT-4o were intercepted by AI Agent Protection — input sanitization applied across all LLM endpoints within 0.8 seconds.</p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/30 flex justify-between items-center">
              <Badge variant="default" className="text-[10px]">Confidence: 98.7%</Badge>
              <span className="text-[10px] text-muted-foreground flex items-center gap-1">View full report <ChevronRight className="h-3 w-3" /></span>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Predictive Timeline */}
      <GlassCard glow="cyan">
        <div className="flex items-center gap-2 mb-4">
          <Eye className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">Predictive Timeline — Next 24h Forecast by ANGELGRID AI</h3>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {predictiveTimeline.map(p => (
            <div key={p.time} className="p-3 rounded-lg bg-muted/30 border border-border/30">
              <div className="flex items-center justify-between mb-2">
                <Badge variant={p.severity === "high" ? "destructive" : "secondary"} className="text-[10px]">{p.time}</Badge>
                <span className="text-[10px] text-primary font-semibold">{p.confidence}%</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.prediction}</p>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Cross-Platform Correlation */}
      <GlassCard>
        <div className="flex items-center gap-2 mb-4">
          <Brain className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">Cross-Platform Correlation — Simultaneous Event Analysis</h3>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {crossPlatform.map(c => (
            <div key={c.platform} className="p-4 rounded-lg bg-muted/30 border border-border/30 text-center">
              <c.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="text-sm font-semibold">{c.platform}</p>
              <p className="text-xl font-bold mt-1">{c.events.toLocaleString()}</p>
              <p className="text-[10px] text-muted-foreground">events analyzed</p>
              <div className="mt-2 pt-2 border-t border-border/30 grid grid-cols-2 gap-1 text-[10px]">
                <div><p className="font-semibold text-primary">{c.correlated}</p><p className="text-muted-foreground">Correlated</p></div>
                <div><p className="font-semibold text-[hsl(var(--aegis-green))]">{c.autoFixed}</p><p className="text-muted-foreground">Auto-Fixed</p></div>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

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
