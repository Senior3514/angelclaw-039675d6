import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Network, Link2, ShieldCheck, Layers, Server, Monitor, Apple, Terminal, Cloud, Cpu, Wifi, Bot, Radio, AlertTriangle, CheckCircle2, ArrowRight, Globe, Feather, Activity, Zap } from "lucide-react";

const stats = [
  { label: "ANGELNODE Fleet", value: "1,284", icon: Radio, glow: "cyan" as const },
  { label: "Active Connections", value: "8,947", icon: Link2, glow: "cyan" as const },
  { label: "Mesh Latency", value: "2.4ms", icon: Zap, glow: "cyan" as const },
  { label: "Micro-Segments", value: "24", icon: Layers, glow: "amber" as const },
];

const nodes = [
  { id: 1, label: "DC-Primary", type: "server", x: 250, y: 120, trust: "high" },
  { id: 2, label: "DC-Backup", type: "server", x: 400, y: 80, trust: "high" },
  { id: 3, label: "App-Cluster", type: "cloud", x: 550, y: 150, trust: "high" },
  { id: 4, label: "Edge-FW-01", type: "server", x: 150, y: 250, trust: "medium" },
  { id: 5, label: "IoT-Gateway", type: "iot", x: 450, y: 280, trust: "low" },
  { id: 6, label: "WS-Pool", type: "endpoint", x: 300, y: 300, trust: "high" },
  { id: 7, label: "Cloud-LB", type: "cloud", x: 600, y: 260, trust: "high" },
  { id: 8, label: "DMZ-Proxy", type: "server", x: 100, y: 150, trust: "medium" },
  { id: 9, label: "GPT-4o API", type: "ai", x: 650, y: 100, trust: "high" },
  { id: 10, label: "AI-Agent-Pool", type: "ai", x: 500, y: 340, trust: "medium" },
];

const edges = [
  [1,2],[1,3],[1,4],[1,6],[2,3],[3,7],[4,8],[5,6],[6,7],[4,6],[3,9],[7,9],[6,10],[10,9],
];

const connections = [
  { src: "DC-Primary", dst: "App-Cluster", proto: "TLS 1.3", encrypted: true, trust: 97, verified: "1m ago" },
  { src: "Edge-FW-01", dst: "DMZ-Proxy", proto: "IPSec", encrypted: true, trust: 88, verified: "3m ago" },
  { src: "IoT-Gateway", dst: "WS-Pool", proto: "MQTT", encrypted: false, trust: 42, verified: "12m ago" },
  { src: "Cloud-LB", dst: "App-Cluster", proto: "gRPC/TLS", encrypted: true, trust: 95, verified: "2m ago" },
  { src: "WS-Pool", dst: "DC-Primary", proto: "SMB3", encrypted: true, trust: 91, verified: "5m ago" },
];

const zones = [
  { name: "DMZ", devices: 18, policies: 12, trust: "Medium", icon: ShieldCheck, color: "var(--aegis-amber)" },
  { name: "Internal", devices: 842, policies: 34, trust: "High", icon: Server, color: "var(--aegis-green)" },
  { name: "Cloud", devices: 256, policies: 28, trust: "High", icon: Cloud, color: "var(--aegis-cyan)" },
  { name: "IoT", devices: 124, policies: 8, trust: "Low", icon: Cpu, color: "var(--aegis-red)" },
  { name: "Guest", devices: 44, policies: 4, trust: "Minimal", icon: Wifi, color: "var(--aegis-amber)" },
];

const traffic = [
  { from: "Internal", to: "Cloud", encrypted: 94, total: 4280, trend: "↑ 2%" },
  { from: "DMZ", to: "Internal", encrypted: 88, total: 1920, trend: "→ Stable" },
  { from: "IoT", to: "Internal", encrypted: 61, total: 820, trend: "↓ 5%" },
  { from: "Guest", to: "DMZ", encrypted: 78, total: 340, trend: "→ Stable" },
];

const aiTraffic = [
  { src: "GPT-4o Production", dst: "App-Cluster", type: "LLM Inference", trust: 96, requests: "14.2K/hr", encrypted: true },
  { src: "Support Bot v3", dst: "Customer DB", type: "Data Query", trust: 89, requests: "3.8K/hr", encrypted: true },
  { src: "RPA Agent", dst: "Financial API", type: "Transaction", trust: 71, requests: "890/hr", encrypted: true },
  { src: "AI-Agent-Pool", dst: "Model Registry", type: "Model Sync", trust: 94, requests: "120/hr", encrypted: true },
  { src: "External LLM", dst: "Edge-FW-01", type: "API Call", trust: 38, requests: "2.4K/hr", encrypted: false },
];

const containmentFlow = [
  { step: "Anomaly Detected", detail: "ANGELNODE sensor triggers on IoT-Gateway · Net Warden alerted in 0.2s", color: "var(--aegis-amber)" },
  { step: "Risk Assessment", detail: "Seraph Brain scores threat 87/100 via Vigil Warden — 3-step prediction", color: "var(--aegis-red)" },
  { step: "Auto-Isolation", detail: "Iron Wing applies micro-segment quarantine — 0 lateral paths remain", color: "var(--aegis-cyan)" },
  { step: "Forensic Capture", detail: "Deep Quill preserves memory dump + network logs autonomously — IR-2847", color: "var(--aegis-green)" },
];

const meshStats = [
  { label: "ANGELNODE Heartbeats", value: "1,284/1,284", status: "All responsive", color: "var(--aegis-green)" },
  { label: "Mesh Latency", value: "2.4ms", status: "Optimal", color: "var(--aegis-cyan)" },
  { label: "Cross-Region Sync", value: "< 100ms", status: "Real-time", color: "var(--aegis-green)" },
  { label: "Policy Propagation", value: "4.2s", status: "All nodes synced", color: "var(--aegis-cyan)" },
];

const osFleet = [
  { os: "Windows", icon: Monitor, count: 612, health: 99.2, color: "var(--aegis-cyan)" },
  { os: "macOS", icon: Apple, count: 358, health: 99.8, color: "var(--muted-foreground)" },
  { os: "Linux", icon: Terminal, count: 204, health: 98.4, color: "var(--aegis-green)" },
  { os: "Cloud", icon: Cloud, count: 110, health: 100, color: "var(--aegis-purple)" },
];

const trustColor = (t: string) => t === "high" ? "hsl(var(--aegis-green))" : t === "medium" ? "hsl(var(--aegis-amber))" : "hsl(var(--aegis-red))";
const nodeIcon = (t: string) => t === "cloud" ? "☁" : t === "iot" ? "◈" : t === "ai" ? "◉" : t === "endpoint" ? "◻" : "▣";

export default function NetworkFabric() {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Radio className="h-5 w-5 text-primary" />
          <h1 className="text-2xl font-bold tracking-tight">ANGELNODE Fleet — Wingspan</h1>
          <Badge variant="outline" className="text-[10px]">1,284 Agents Deployed</Badge>
        </div>
        <p className="text-sm text-muted-foreground">ANGELNODE mesh topology · AI-to-AI traffic inspection · autonomous threat containment by Iron Wing & Net Warden · real-time micro-segmentation</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {stats.map(s => (
          <GlassCard key={s.label} glow={s.glow} className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-primary/10"><s.icon className="h-5 w-5 text-primary" /></div>
            <div><p className="text-2xl font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></div>
          </GlassCard>
        ))}
      </div>

      {/* OS Fleet Breakdown */}
      <div className="grid grid-cols-4 gap-4">
        {osFleet.map(o => (
          <GlassCard key={o.os} className="text-center">
            <o.icon className="h-6 w-6 mx-auto mb-2" style={{ color: `hsl(${o.color})` }} />
            <p className="text-xl font-bold">{o.count}</p>
            <p className="text-xs text-muted-foreground">{o.os} nodes</p>
            <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${o.health}%`, backgroundColor: `hsl(${o.health > 99 ? "var(--aegis-green)" : "var(--aegis-amber)"})` }} />
            </div>
            <p className="text-[10px] text-[hsl(var(--aegis-green))] mt-1">{o.health}% healthy</p>
          </GlassCard>
        ))}
      </div>

      {/* Topology Map */}
      <GlassCard>
        <div className="flex items-center gap-2 mb-3">
          <Network className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">Live Mesh Topology — AngelClaw Network Fabric</h3>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--aegis-green))] animate-pulse" />
            <span className="text-[10px] text-[hsl(var(--aegis-green))] font-semibold">Live</span>
          </div>
        </div>
        <div className="rounded-lg bg-background/50 border border-border/30 overflow-hidden">
          <svg viewBox="0 0 720 360" className="w-full h-[320px]">
            <defs>
              <filter id="glow"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            </defs>
            {edges.map(([a, b], i) => {
              const na = nodes.find(n => n.id === a)!;
              const nb = nodes.find(n => n.id === b)!;
              return (
                <line key={i} x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                  stroke="hsl(var(--aegis-cyan))" strokeOpacity={0.25} strokeWidth={1.5}
                  strokeDasharray="6 4">
                  <animate attributeName="stroke-dashoffset" values="0;-20" dur="3s" repeatCount="indefinite" />
                </line>
              );
            })}
            {nodes.map(n => (
              <g key={n.id} filter="url(#glow)">
                <circle cx={n.x} cy={n.y} r={20} fill="hsl(var(--card))" stroke={trustColor(n.trust)} strokeWidth={2} />
                <text x={n.x} y={n.y + 5} textAnchor="middle" fill={trustColor(n.trust)} fontSize="13">{nodeIcon(n.type)}</text>
                <text x={n.x} y={n.y + 34} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">{n.label}</text>
              </g>
            ))}
          </svg>
        </div>
        <div className="flex items-center gap-6 mt-3 text-[10px] text-muted-foreground">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[hsl(var(--aegis-green))]" />High Trust</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[hsl(var(--aegis-amber))]" />Medium Trust</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[hsl(var(--aegis-red))]" />Low Trust</span>
          <span className="ml-auto">☁ Cloud · ◈ IoT · ◉ AI Agent · ▣ Server · ◻ Endpoint</span>
        </div>
      </GlassCard>

      {/* AI Traffic Inspection */}
      <GlassCard aurora>
        <div className="flex items-center gap-2 mb-4">
          <Bot className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">AI-to-AI Traffic Inspection — OpenClaw Shield Monitor</h3>
        </div>
        <table className="w-full text-sm">
          <thead><tr className="border-b border-border/50 text-muted-foreground text-xs">
            <th className="text-left py-2 px-2 font-medium">Source</th>
            <th className="text-left py-2 px-2 font-medium">Destination</th>
            <th className="text-left py-2 px-2 font-medium">Type</th>
            <th className="text-left py-2 px-2 font-medium">Trust</th>
            <th className="text-left py-2 px-2 font-medium">Rate</th>
            <th className="text-left py-2 px-2 font-medium">Encrypted</th>
          </tr></thead>
          <tbody>
            {aiTraffic.map((t, i) => (
              <tr key={i} className="border-b border-border/20 hover:bg-muted/20">
                <td className="py-2 px-2 font-medium">{t.src}</td>
                <td className="py-2 px-2 text-muted-foreground">{t.dst}</td>
                <td className="py-2 px-2"><Badge variant="outline" className="text-[10px]">{t.type}</Badge></td>
                <td className="py-2 px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-1.5 rounded-full bg-muted overflow-hidden">
                      <div className={`h-full rounded-full ${t.trust > 80 ? "bg-[hsl(var(--aegis-green))]" : t.trust > 50 ? "bg-[hsl(var(--aegis-amber))]" : "bg-[hsl(var(--aegis-red))]"}`} style={{ width: `${t.trust}%` }} />
                    </div>
                    <span className={`text-xs font-semibold ${t.trust > 80 ? "text-[hsl(var(--aegis-green))]" : t.trust > 50 ? "text-[hsl(var(--aegis-amber))]" : "text-[hsl(var(--aegis-red))]"}`}>{t.trust}%</span>
                  </div>
                </td>
                <td className="py-2 px-2 text-xs text-muted-foreground">{t.requests}</td>
                <td className="py-2 px-2">{t.encrypted ? <span className="text-[hsl(var(--aegis-green))] text-xs font-semibold">● Secured</span> : <span className="text-[hsl(var(--aegis-red))] text-xs font-semibold">● Unencrypted</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </GlassCard>

      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-7">
          <GlassCard className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Connection Trust Table</h3>
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border/50 text-muted-foreground text-xs">
                <th className="text-left py-2 px-2 font-medium">Source</th>
                <th className="text-left py-2 px-2 font-medium">Destination</th>
                <th className="text-left py-2 px-2 font-medium">Protocol</th>
                <th className="text-left py-2 px-2 font-medium">Enc</th>
                <th className="text-left py-2 px-2 font-medium">Trust</th>
                <th className="text-left py-2 px-2 font-medium">Verified</th>
              </tr></thead>
              <tbody>
                {connections.map((c, i) => (
                  <tr key={i} className="border-b border-border/20 hover:bg-muted/20">
                    <td className="py-2 px-2 font-medium text-xs">{c.src}</td>
                    <td className="py-2 px-2 text-muted-foreground text-xs">{c.dst}</td>
                    <td className="py-2 px-2"><Badge variant="outline" className="text-[10px]">{c.proto}</Badge></td>
                    <td className="py-2 px-2">{c.encrypted ? <CheckCircle2 className="h-3.5 w-3.5 text-[hsl(var(--aegis-green))]" /> : <AlertTriangle className="h-3.5 w-3.5 text-[hsl(var(--aegis-red))]" />}</td>
                    <td className={`py-2 px-2 text-xs font-semibold ${c.trust > 80 ? "text-[hsl(var(--aegis-green))]" : c.trust > 50 ? "text-[hsl(var(--aegis-amber))]" : "text-[hsl(var(--aegis-red))]"}`}>{c.trust}%</td>
                    <td className="py-2 px-2 text-xs text-muted-foreground">{c.verified}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </GlassCard>
        </div>
        <div className="col-span-5">
          <GlassCard className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Micro-Segmentation Zones</h3>
            <div className="space-y-2">
              {zones.map(z => (
                <div key={z.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/30 hover:bg-muted/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded" style={{ backgroundColor: `hsl(${z.color} / 0.1)` }}>
                      <z.icon className="h-4 w-4" style={{ color: `hsl(${z.color})` }} />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{z.name}</p>
                      <p className="text-[10px] text-muted-foreground">{z.devices} devices · {z.policies} policies</p>
                    </div>
                  </div>
                  <Badge variant={z.trust === "High" ? "default" : z.trust === "Medium" ? "secondary" : "destructive"} className="text-[10px]">{z.trust}</Badge>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Autonomous Threat Containment */}
      <GlassCard aurora>
        <div className="flex items-center gap-2 mb-4">
          <ShieldCheck className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">Autonomous Threat Containment — Iron Wing Response Flow</h3>
          <Badge variant="default" className="text-[10px] ml-auto">Avg Response: 0.9s</Badge>
        </div>
        <div className="flex items-center gap-2">
          {containmentFlow.map((c, i) => (
            <div key={c.step} className="flex items-center gap-2 flex-1">
              <div className="p-3 rounded-lg bg-muted/40 border border-border/40 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: `hsl(${c.color})` }} />
                  <p className="text-xs font-bold text-primary">{c.step}</p>
                </div>
                <p className="text-[10px] text-muted-foreground leading-relaxed">{c.detail}</p>
              </div>
              {i < containmentFlow.length - 1 && <ArrowRight className="h-4 w-4 text-primary shrink-0" />}
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Mesh Stats */}
      <div className="grid grid-cols-4 gap-4">
        {meshStats.map(m => (
          <GlassCard key={m.label} glow="cyan" className="text-center">
            <Radio className="h-5 w-5 text-primary mx-auto mb-2" />
            <p className="text-lg font-bold">{m.value}</p>
            <p className="text-xs text-muted-foreground">{m.label}</p>
            <p className="text-[10px] mt-1 font-semibold" style={{ color: `hsl(${m.color})` }}>● {m.status}</p>
          </GlassCard>
        ))}
      </div>

      {/* Traffic Flow */}
      <GlassCard>
        <h3 className="text-sm font-semibold text-muted-foreground mb-4">Traffic Flow Summary — Encrypted vs Unencrypted</h3>
        <div className="space-y-3">
          {traffic.map((t, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="font-medium">{t.from} → {t.to}</span>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span>{t.total.toLocaleString()} conn/hr</span>
                  <span className="text-primary font-semibold">{t.encrypted}% enc</span>
                  <span className={t.trend.includes("↑") ? "text-[hsl(var(--aegis-red))]" : t.trend.includes("↓") ? "text-[hsl(var(--aegis-green))]" : "text-muted-foreground"}>{t.trend}</span>
                </div>
              </div>
              <div className="h-2 rounded-full bg-muted flex overflow-hidden">
                <div className="h-full bg-[hsl(var(--aegis-green)/0.7)] rounded-l-full transition-all" style={{ width: `${t.encrypted}%` }} />
                <div className="h-full bg-[hsl(var(--aegis-red)/0.4)] rounded-r-full" style={{ width: `${100 - t.encrypted}%` }} />
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
