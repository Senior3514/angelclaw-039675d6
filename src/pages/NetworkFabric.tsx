import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Network, Link2, ShieldCheck, Layers, Server, Monitor, Cloud, Cpu, Wifi } from "lucide-react";

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
];

const edges = [
  [1,2],[1,3],[1,4],[1,6],[2,3],[3,7],[4,8],[5,6],[6,7],[4,6],
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

const trustColor = (t: string) => t === "high" ? "hsl(var(--aegis-green))" : t === "medium" ? "hsl(var(--aegis-amber))" : "hsl(var(--aegis-red))";
const nodeIcon = (t: string) => t === "cloud" ? "☁" : t === "iot" ? "◈" : t === "endpoint" ? "◻" : "▣";

export default function NetworkFabric() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Network Security Fabric</h1>
        <p className="text-sm text-muted-foreground mt-1">Real-time topology, trust visualization, and autonomous micro-segmentation</p>
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
