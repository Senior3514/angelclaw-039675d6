import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis } from "recharts";
import { Shield, Brain, Zap, ChevronRight, Eye, Target, Feather, Activity, Clock, CheckCircle2, AlertTriangle } from "lucide-react";

const wardens = [
  { name: "Vigil", type: "Threat Detection", emoji: "👁", status: "Active", threats: 4821, blocked: 4821, uptime: "100%", desc: "Monitors endpoints in real-time · predicts lateral movement 3-5 steps ahead", specialty: "EDR + Predictive" },
  { name: "Net Warden", type: "Network Security", emoji: "🌐", status: "Active", threats: 1284, blocked: 1279, uptime: "99.8%", desc: "Inspects all network traffic · DPI, C2 detection, micro-segmentation enforcement", specialty: "NDR + DPI" },
  { name: "Glass Eye", type: "Browser Defense", emoji: "🔍", status: "Active", threats: 342, blocked: 342, uptime: "100%", desc: "Hooks into browser context · blocks injection, phishing, malicious scripts in real-time", specialty: "Browser EDR" },
  { name: "Tool Smith", type: "Toolchain Security", emoji: "🔧", status: "Active", threats: 89, blocked: 87, uptime: "99.9%", desc: "Guards CI/CD, build pipelines, dev tools · supply chain integrity verification", specialty: "DevSecOps" },
  { name: "Chronicle", type: "Timeline & Forensic", emoji: "📜", status: "Active", threats: 2103, blocked: 2103, uptime: "100%", desc: "Reconstructs kill chains · MITRE ATT&CK mapping · forensic timeline for all events", specialty: "MITRE ATT&CK" },
  { name: "Vault Keeper", type: "Secrets & AI Security", emoji: "🔐", status: "Active", threats: 156, blocked: 156, uptime: "100%", desc: "Protects secrets, API keys · blocks LLM prompt injection and AI data exfil", specialty: "AI + Secrets" },
  { name: "Drift Watcher", type: "Behavior Analytics", emoji: "📊", status: "Active", threats: 891, blocked: 888, uptime: "99.7%", desc: "Tracks behavioral baselines for users and AI agents · flags deviations in real-time", specialty: "UEBA + AIEBA" },
  { name: "Paladin", type: "Compliance & Privacy", emoji: "⚖️", status: "Active", threats: 34, blocked: 34, uptime: "100%", desc: "Enforces GDPR, HIPAA, SOC 2, ISO 27001 · auto-remediation of compliance drift", specialty: "GRC Automation" },
  { name: "Gate Keeper", type: "API Security", emoji: "🚪", status: "Active", threats: 2847, blocked: 2840, uptime: "99.9%", desc: "Secures every API endpoint · rate limiting, abuse detection, schema validation", specialty: "WAAP + API" },
  { name: "Iron Wing", type: "Auto-Response & Hardening", emoji: "🛡️", status: "Active", threats: 1247, blocked: 1247, uptime: "100%", desc: "Executes autonomous responses · patches, isolates, restores · zero human delay", specialty: "SOAR + Hardening" },
  { name: "Deep Quill", type: "Forensic Intelligence", emoji: "🧠", status: "Active", threats: 67, blocked: 67, uptime: "100%", desc: "Collects forensic snapshots · preserves evidence · feeds intelligence back to Seraph Brain", specialty: "Forensics + IR" },
  { name: "Scroll Keeper", type: "Audit & Compliance Log", emoji: "📋", status: "Active", threats: 48291, blocked: 48291, uptime: "100%", desc: "Immutable audit trail · tamper-evident logs · SIEM integration · chain of custody", specialty: "Audit + SIEM" },
];

const overallStats = [
  { label: "Total Threats Blocked (30d)", value: "62,780", icon: Shield, glow: "cyan" as const },
  { label: "Seraph Brain Intents Active", value: "71+", icon: Brain, glow: "cyan" as const },
  { label: "Avg Response Time", value: "0.9s", icon: Zap, glow: "cyan" as const },
  { label: "Warden Uptime Average", value: "99.9%", icon: CheckCircle2, glow: "cyan" as const },
];

const heatmapDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const heatmapCategories = ["Malware", "Phishing", "DDoS", "Brute Force", "Exfiltration", "Lateral Movement", "AI Threats"];
const heatmapData: number[][] = [
  [3, 7, 2, 9, 5, 1, 2],
  [8, 4, 6, 3, 7, 2, 1],
  [1, 2, 8, 2, 1, 0, 0],
  [5, 6, 3, 7, 4, 3, 2],
  [2, 1, 4, 1, 3, 1, 0],
  [4, 3, 5, 6, 2, 1, 1],
  [6, 8, 4, 5, 9, 2, 3],
];

const attackStages = [
  { stage: "Reconnaissance", time: "14:22", detail: "Port scanning from 194.x.x.x detected by ANGELNODE · Net Warden alerted within 0.4s", severity: "info" },
  { stage: "Weaponization", time: "14:28", detail: "Payload signature matched — polymorphic dropper variant · Tool Smith flagged supply chain risk", severity: "warning" },
  { stage: "Delivery", time: "14:31", detail: "Spear-phishing intercepted — attachment quarantined · Iron Wing auto-responded in 0.3s", severity: "error" },
  { stage: "Exploitation", time: "14:31", detail: "Blocked — 540-rule zero-trust policy prevented execution · Fail-Closed enforced by Gate Keeper", severity: "error" },
  { stage: "Remediation", time: "14:32", detail: "Iron Wing isolation triggered · signatures pushed to all 1,284 ANGELNODEs via mesh in 4.2s", severity: "info" },
];

const aiThreatMatrix = [
  { threat: "Prompt Injection", severity: "Critical", targets: "LLMs, Chatbots", incidents: 142, blocked: 142, trend: "↑ 23%", warden: "Vault Keeper" },
  { threat: "Model Poisoning", severity: "High", targets: "Training Pipelines", incidents: 8, blocked: 8, trend: "→ Stable", warden: "Drift Watcher" },
  { threat: "Data Exfil via LLM", severity: "Critical", targets: "GPT-4o, Copilot", incidents: 34, blocked: 34, trend: "↑ 12%", warden: "Vault Keeper" },
  { threat: "Adversarial Inputs", severity: "High", targets: "Vision Models, NLP", incidents: 67, blocked: 65, trend: "↓ 8%", warden: "Glass Eye" },
  { threat: "Agent Hijacking", severity: "Critical", targets: "RPA, Autonomous Agents", incidents: 12, blocked: 12, trend: "↑ 45%", warden: "Vigil" },
  { threat: "Model Theft", severity: "Medium", targets: "Model Registry", incidents: 3, blocked: 3, trend: "→ Stable", warden: "Scroll Keeper" },
];

const predictiveTimeline = [
  { time: "Next 2h", prediction: "Elevated phishing risk — campaign detected in adjacent sector · Vigil confidence 94%", confidence: 94, severity: "high" },
  { time: "Next 6h", prediction: "Potential brute-force wave targeting VPN endpoints · Gate Keeper pre-hardened", confidence: 87, severity: "medium" },
  { time: "Next 12h", prediction: "AI model probing expected — adversarial input patterns emerging · Glass Eye active", confidence: 78, severity: "high" },
  { time: "Next 24h", prediction: "Credential stuffing spike predicted based on dark web chatter · Vault Keeper alerted", confidence: 72, severity: "medium" },
];

const barData = [
  { name: "Malware", count: 3842 }, { name: "Phishing", count: 4210 }, { name: "DDoS", count: 1580 },
  { name: "Brute Force", count: 2930 }, { name: "Exfil", count: 890 }, { name: "AI Threats", count: 2100 },
];

const trendData = [
  { day: "W1", threats: 2800, blocked: 2790 }, { day: "W2", threats: 3400, blocked: 3395 },
  { day: "W3", threats: 4100, blocked: 4098 }, { day: "W4", threats: 4592, blocked: 4589 },
];

const radarData = [
  { subject: "Endpoint", A: 98 }, { subject: "Network", A: 94 }, { subject: "Identity", A: 96 },
  { subject: "AI/ML", A: 91 }, { subject: "Cloud", A: 95 }, { subject: "Compliance", A: 97 },
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Shield className="h-5 w-5 text-primary" />
          <h1 className="text-2xl font-bold tracking-tight">Angel Legion — 12 Wardens</h1>
          <Badge variant="outline" className="text-[10px]">All 12 Wardens Active</Badge>
          <Badge variant="default" className="text-[10px]">99.9% Uptime</Badge>
        </div>
        <p className="text-sm text-muted-foreground">Seraph Brain-driven attack narratives · AI model threat matrix · 12 specialized wardens · predictive defense across every attack surface</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {overallStats.map(s => (
          <GlassCard key={s.label} glow={s.glow} className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-primary/10"><s.icon className="h-5 w-5 text-primary" /></div>
            <div><p className="text-2xl font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></div>
          </GlassCard>
        ))}
      </div>

      {/* Angel Legion Warden Grid */}
      <GlassCard>
        <div className="flex items-center gap-2 mb-4">
          <Feather className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">Angel Legion — 12 Specialized Wardens</h3>
          <Badge variant="default" className="text-[10px] ml-auto">All 12 Online</Badge>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {wardens.map(w => (
            <div key={w.name} className="p-3 rounded-lg bg-muted/30 border border-border/30 hover:bg-muted/50 transition-colors group">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{w.emoji}</span>
                  <div>
                    <p className="text-sm font-bold text-primary leading-tight">{w.name}</p>
                    <p className="text-[10px] text-muted-foreground">{w.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="default" className="text-[10px]">{w.status}</Badge>
                  <p className="text-[9px] text-[hsl(var(--aegis-green))] mt-1">{w.uptime} uptime</p>
                </div>
              </div>
              <p className="text-[10px] text-muted-foreground leading-relaxed mb-2">{w.desc}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                  <span>Events: <span className="text-foreground font-semibold">{w.threats.toLocaleString()}</span></span>
                  <span>Blocked: <span className="text-[hsl(var(--aegis-green))] font-semibold">{w.blocked.toLocaleString()}</span></span>
                </div>
                <Badge variant="outline" className="text-[9px]">{w.specialty}</Badge>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* AI Model Threat Matrix */}
      <GlassCard aurora>
        <div className="flex items-center gap-2 mb-4">
          <Target className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">AI Model Threat Matrix — OpenClaw Shield</h3>
        </div>
        <table className="w-full text-sm">
          <thead><tr className="border-b border-border/50 text-muted-foreground text-xs">
            <th className="text-left py-2 px-2 font-medium">Threat Vector</th>
            <th className="text-left py-2 px-2 font-medium">Severity</th>
            <th className="text-left py-2 px-2 font-medium">Targets</th>
            <th className="text-left py-2 px-2 font-medium">Incidents</th>
            <th className="text-left py-2 px-2 font-medium">Blocked</th>
            <th className="text-left py-2 px-2 font-medium">Trend</th>
            <th className="text-left py-2 px-2 font-medium">Warden</th>
          </tr></thead>
          <tbody>
            {aiThreatMatrix.map(t => (
              <tr key={t.threat} className="border-b border-border/20 hover:bg-muted/20">
                <td className="py-2 px-2 font-medium">{t.threat}</td>
                <td className="py-2 px-2"><Badge variant={t.severity === "Critical" ? "destructive" : t.severity === "High" ? "secondary" : "outline"} className="text-[10px]">{t.severity}</Badge></td>
                <td className="py-2 px-2 text-xs text-muted-foreground">{t.targets}</td>
                <td className="py-2 px-2 text-xs font-semibold">{t.incidents}</td>
                <td className="py-2 px-2 text-xs text-[hsl(var(--aegis-green))] font-semibold">{t.blocked}</td>
                <td className={`py-2 px-2 text-xs font-semibold ${t.trend.includes("↑") ? "text-[hsl(var(--aegis-red))]" : t.trend.includes("↓") ? "text-[hsl(var(--aegis-green))]" : "text-muted-foreground"}`}>{t.trend}</td>
                <td className="py-2 px-2 text-xs text-primary font-semibold">{t.warden}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </GlassCard>

      {/* Threat Heatmap */}
      <GlassCard>
        <h3 className="text-sm font-semibold text-muted-foreground mb-3">Threat Heatmap — Chronicle Warden · Weekly Pattern</h3>
        <div className="overflow-auto">
          <table className="w-full text-xs">
            <thead><tr><th className="py-1 px-2 text-right text-muted-foreground">Category</th>{heatmapDays.map(d => <th key={d} className="py-1 px-2 text-muted-foreground font-medium text-center">{d}</th>)}</tr></thead>
            <tbody>
              {heatmapCategories.map((cat, ri) => (
                <tr key={cat}>
                  <td className="py-1 px-2 text-muted-foreground text-right whitespace-nowrap font-medium">{cat}</td>
                  {heatmapData[ri].map((v, ci) => (
                    <td key={ci} className="py-1 px-2 text-center">
                      <div className="mx-auto w-8 h-8 rounded flex items-center justify-center text-[10px] font-bold"
                        style={{ backgroundColor: `hsl(var(--aegis-cyan) / ${Math.min(v / 10 + 0.05, 0.8)})`, color: v > 5 ? "hsl(var(--background))" : "hsl(var(--foreground))" }}>
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
        <div className="col-span-7">
          <GlassCard className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Attack Timeline — MITRE ATT&CK · Chronicle Warden</h3>
            <div className="space-y-0">
              {attackStages.map((a, i) => (
                <div key={i} className="flex items-start gap-3 relative pl-4">
                  {i < attackStages.length - 1 && <div className="absolute left-[7px] top-6 w-px h-full bg-border/50" />}
                  <div className={`w-3 h-3 mt-1.5 rounded-full shrink-0 shadow-sm ${a.severity === "error" ? "bg-destructive shadow-destructive/30" : a.severity === "warning" ? "bg-[hsl(var(--aegis-amber))]" : "bg-primary/60"}`} />
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
        <div className="col-span-5">
          <GlassCard aurora className="h-full">
            <div className="flex items-center gap-2 mb-3">
              <Brain className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold text-muted-foreground">Seraph Brain Narrative</h3>
              <Badge variant="default" className="text-[10px] ml-auto">98.7% Confidence</Badge>
            </div>
            <div className="space-y-3 text-xs text-muted-foreground leading-relaxed">
              <p>Seraph Brain reconstructed a coordinated attack from Eastern European infrastructure using <span className="text-primary font-medium">71 NLP intents</span>. A polymorphic dropper was delivered via spear-phishing targeting engineering staff.</p>
              <p>The attack was <span className="text-[hsl(var(--aegis-green))] font-medium">neutralized autonomously at delivery</span> — zero human intervention. AngelClaw predicted lateral movement <span className="text-primary font-medium">3 steps ahead</span> and pre-emptively hardened adjacent segments via Iron Wing.</p>
              <p>Simultaneously, <span className="text-primary font-medium">prompt injection attempts</span> targeting GPT-4o were blocked by Vault Keeper — input sanitization applied across all LLM endpoints in <span className="text-[hsl(var(--aegis-green))] font-medium">0.8s. Fail-Closed enforced.</span></p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/30 flex items-center justify-between">
              <span className="text-[10px] text-muted-foreground">Chronicle Warden · Deep Quill forensics captured</span>
              <span className="text-[10px] text-primary flex items-center gap-1 cursor-pointer hover:underline">View full report <ChevronRight className="h-3 w-3" /></span>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Predictive + Radar */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-8">
          <GlassCard glow="cyan">
            <div className="flex items-center gap-2 mb-4">
              <Eye className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold text-muted-foreground">Predictive Timeline — Next 24h · Seraph Brain + Vigil</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {predictiveTimeline.map(p => (
                <div key={p.time} className="p-3 rounded-lg bg-muted/30 border border-border/30">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={p.severity === "high" ? "destructive" : "secondary"} className="text-[10px]">{p.time}</Badge>
                    <span className="text-[10px] text-primary font-bold">{p.confidence}% confidence</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.prediction}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
        <div className="col-span-4">
          <GlassCard className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Coverage Radar — All Attack Surfaces</h3>
            <ResponsiveContainer width="100%" height={200}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 9 }} />
                <Radar name="Coverage" dataKey="A" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.2} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
          </GlassCard>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-6">
          <GlassCard>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Threat Distribution by Category</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 9 }} />
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
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="day" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
                <Line type="monotone" dataKey="threats" stroke="hsl(var(--aegis-amber))" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="blocked" stroke="hsl(var(--aegis-green))" strokeWidth={2} dot={false} strokeDasharray="4 2" />
              </LineChart>
            </ResponsiveContainer>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
