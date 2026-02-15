import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Network, Link2, ShieldCheck, Layers, Server, Monitor, Cloud, Cpu, Wifi, Bot, Brain, Radio, AlertTriangle, CheckCircle2, ArrowRight, Globe } from "lucide-react";

const stats = [
  { label: "Monitored Nodes", value: "1,284", icon: Network, glow: "cyan" as const },
  { label: "Active Connections", value: "8,947", icon: Link2, glow: "cyan" as const },
  { label: "Trust Score", value: "91%", icon: ShieldCheck, glow: "cyan" as const },
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
  { name: "Guest", devices: 44, policies: 4, trust: "Minimal", icon: Wifi, color: "var(--aegis-purple)" },
];

const traffic = [
  { from: "Internal", to: "Cloud", encrypted: 94, total: 4280 },
  { from: "DMZ", to: "Internal", encrypted: 88, total: 1920 },
  { from: "IoT", to: "Internal", encrypted: 61, total: 820 },
  { from: "Guest", to: "DMZ", encrypted: 78, total: 340 },
];

const aiTraffic = [
  { src: "GPT-4o Production", dst: "App-Cluster", type: "LLM Inference", trust: 96, requests: "14.2K/hr", encrypted: true },
  { src: "Support Bot v3", dst: "Customer DB", type: "Data Query", trust: 89, requests: "3.8K/hr", encrypted: true },
  { src: "RPA Agent", dst: "Financial API", type: "Transaction", trust: 71, requests: "890/hr", encrypted: true },
  { src: "AI-Agent-Pool", dst: "Model Registry", type: "Model Sync", trust: 94, requests: "120/hr", encrypted: true },
  { src: "External LLM", dst: "Edge-FW-01", type: "API Call", trust: 38, requests: "2.4K/hr", encrypted: false },
];

const containmentFlow = [
  { step: "Anomaly Detected", detail: "ANGELNODE sensor triggers on node IoT-Gateway", color: "var(--aegis-amber)" },
  { step: "Risk Assessment", detail: "ANGELGRID AI scores threat at 87/100 in 0.3s", color: "var(--aegis-red)" },
  { step: "Auto-Isolation", detail: "Micro-segment quarantine applied — 0 lateral paths", color: "var(--aegis-cyan)" },
  { step: "Forensic Capture", detail: "Memory dump + network logs preserved autonomously", color: "var(--aegis-green)" },
];

const meshStats = [
  { label: "ANGELNODE Heartbeats", value: "1,284/1,284", status: "All responsive" },
  { label: "Mesh Latency", value: "2.4ms", status: "Optimal" },
  { label: "Cross-Region Sync", value: "< 100ms", status: "Real-time" },
  { label: "Policy Propagation", value: "4.2s", status: "All nodes synced" },
];

const trustColor = (t: string) => t === "high" ? "hsl(var(--aegis-green))" : t === "medium" ? "hsl(var(--aegis-amber))" : "hsl(var(--aegis-red))";
const nodeIcon = (t: string) => t === "cloud" ? "☁" : t === "iot" ? "◈" : t === "ai" ? "◉" : t === "endpoint" ? "◻" : "▣";

export default function NetworkFabric() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">ANGELGRID Network Fabric</h1>
        <p className="text-sm text-muted-foreground mt-1">ANGELNODE mesh topology with AI-to-AI traffic monitoring, autonomous threat containment, and real-time micro-segmentation</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {stats.map(s => (
          <GlassCard key={s.label} glow={s.glow} className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-primary/10"><s.icon className="h-5 w-5 text-primary" /></div>
            <div><p className="text-2xl font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></div>
          </GlassCard>
        ))}
      </div>

      {/* Topology Map */}
      <GlassCard>
        <h3 className="text-sm font-semibold text-muted-foreground mb-3">Interactive Topology Map</h3>
        <div className="rounded-lg bg-background/50 border border-border/30 overflow-hidden">
          <svg viewBox="0 0 720 380" className="w-full h-[340px]">
            <defs>
              <filter id="glow"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            </defs>
            {edges.map(([a, b], i) => {
              const na = nodes.find(n => n.id === a)!;
              const nb = nodes.find(n => n.id === b)!;
              return (
                <line key={i} x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                  stroke="hsl(var(--aegis-cyan))" strokeOpacity={0.2} strokeWidth={1.5}
                  strokeDasharray="6 4">
                  <animate attributeName="stroke-dashoffset" values="0;-20" dur="3s" repeatCount="indefinite" />
                </line>
              );
            })}
            {nodes.map(n => (
              <g key={n.id} filter="url(#glow)">
                <circle cx={n.x} cy={n.y} r={20} fill="hsl(var(--aegis-surface))" stroke={trustColor(n.trust)} strokeWidth={2} />
                <text x={n.x} y={n.y + 4} textAnchor="middle" fill={trustColor(n.trust)} fontSize="14">{nodeIcon(n.type)}</text>
                <text x={n.x} y={n.y + 36} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">{n.label}</text>
              </g>
            ))}
          </svg>
        </div>
      </GlassCard>

      {/* AI Traffic Inspection */}
      <GlassCard aurora>
        <div className="flex items-center gap-2 mb-4">
          <Bot className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">AI Traffic Inspection — AI-to-AI Communication Monitor</h3>
        </div>
        <table className="w-full text-sm">
          <thead><tr className="border-b border-border/50 text-muted-foreground text-xs">
            <th className="text-left py-2 px-2 font-medium">Source</th>
            <th className="text-left py-2 px-2 font-medium">Destination</th>
            <th className="text-left py-2 px-2 font-medium">Traffic Type</th>
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
                <td className={`py-2 px-2 text-xs font-semibold ${t.trust > 80 ? "text-[hsl(var(--aegis-green))]" : t.trust > 50 ? "text-[hsl(var(--aegis-amber))]" : "text-[hsl(var(--aegis-red))]"}`}>{t.trust}%</td>
                <td className="py-2 px-2 text-xs text-muted-foreground">{t.requests}</td>
                <td className="py-2 px-2">{t.encrypted ? <span className="text-[hsl(var(--aegis-green))] text-xs">● Secured</span> : <span className="text-[hsl(var(--aegis-red))] text-xs">● Unencrypted</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </GlassCard>

      <div className="grid grid-cols-12 gap-5">
        {/* Connection Trust Table */}
        <div className="col-span-7">
          <GlassCard className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Connection Trust Table</h3>
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border/50 text-muted-foreground text-xs">
                <th className="text-left py-2 px-2 font-medium">Source</th>
                <th className="text-left py-2 px-2 font-medium">Destination</th>
                <th className="text-left py-2 px-2 font-medium">Protocol</th>
                <th className="text-left py-2 px-2 font-medium">Encrypted</th>
                <th className="text-left py-2 px-2 font-medium">Trust</th>
                <th className="text-left py-2 px-2 font-medium">Verified</th>
              </tr></thead>
              <tbody>
                {connections.map((c, i) => (
                  <tr key={i} className="border-b border-border/20 hover:bg-muted/20">
                    <td className="py-2 px-2 font-medium">{c.src}</td>
                    <td className="py-2 px-2 text-muted-foreground">{c.dst}</td>
                    <td className="py-2 px-2"><Badge variant="outline" className="text-[10px]">{c.proto}</Badge></td>
                    <td className="py-2 px-2">{c.encrypted ? <span className="text-[hsl(var(--aegis-green))] text-xs">●</span> : <span className="text-[hsl(var(--aegis-red))] text-xs">●</span>}</td>
                    <td className={`py-2 px-2 text-xs font-semibold ${c.trust > 80 ? "text-[hsl(var(--aegis-green))]" : c.trust > 50 ? "text-[hsl(var(--aegis-amber))]" : "text-[hsl(var(--aegis-red))]"}`}>{c.trust}%</td>
                    <td className="py-2 px-2 text-xs text-muted-foreground">{c.verified}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </GlassCard>
        </div>

        {/* Micro-Segmentation */}
        <div className="col-span-5">
          <GlassCard className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Micro-Segmentation Zones</h3>
            <div className="space-y-2.5">
              {zones.map(z => (
                <div key={z.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/30">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded bg-primary/10"><z.icon className="h-4 w-4 text-primary" /></div>
                    <div><p className="text-sm font-medium">{z.name}</p><p className="text-[10px] text-muted-foreground">{z.devices} devices · {z.policies} policies</p></div>
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
          <h3 className="text-sm font-semibold text-muted-foreground">Autonomous Threat Containment Flow</h3>
        </div>
        <div className="flex items-center gap-2">
          {containmentFlow.map((c, i) => (
            <div key={c.step} className="flex items-center gap-2 flex-1">
              <div className="p-3 rounded-lg bg-muted/40 border border-border/40 flex-1">
                <p className="text-xs font-semibold text-primary mb-1">{c.step}</p>
                <p className="text-[10px] text-muted-foreground leading-relaxed">{c.detail}</p>
              </div>
              {i < containmentFlow.length - 1 && <ArrowRight className="h-4 w-4 text-primary shrink-0" />}
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Global Mesh Stats */}
      <div className="grid grid-cols-4 gap-4">
        {meshStats.map(m => (
          <GlassCard key={m.label} glow="cyan" className="text-center">
            <Radio className="h-5 w-5 text-primary mx-auto mb-2" />
            <p className="text-lg font-bold">{m.value}</p>
            <p className="text-xs text-muted-foreground">{m.label}</p>
            <p className="text-[10px] text-[hsl(var(--aegis-green))] mt-1">● {m.status}</p>
          </GlassCard>
        ))}
      </div>

      {/* Traffic Flow */}
      <GlassCard>
        <h3 className="text-sm font-semibold text-muted-foreground mb-4">Traffic Flow Summary</h3>
        <div className="space-y-3">
          {traffic.map((t, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">{t.from} → {t.to}</span>
                <span className="text-muted-foreground">{t.total.toLocaleString()} conn/hr · {t.encrypted}% encrypted</span>
              </div>
              <div className="h-2 rounded-full bg-muted flex overflow-hidden">
                <div className="h-full bg-primary/70 rounded-l-full" style={{ width: `${t.encrypted}%` }} />
                <div className="h-full bg-destructive/50 rounded-r-full" style={{ width: `${100 - t.encrypted}%` }} />
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
