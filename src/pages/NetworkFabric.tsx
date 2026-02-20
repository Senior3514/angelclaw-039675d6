import { GlassCard } from "@/components/ui/glass-card";
import { Radio, ShieldCheck, ArrowRight } from "lucide-react";

const metrics = [
  { label: "ANGELNODE Fleet", value: "1,284", color: "--aegis-cyan" },
  { label: "Mesh Latency", value: "2.4ms", color: "--aegis-green" },
  { label: "Micro-Segments", value: "24", color: "--aegis-amber" },
];

const nodes = [
  { id: 1, label: "DC-Primary",   type: "server",   x: 250, y: 120, trust: "high" },
  { id: 2, label: "DC-Backup",    type: "server",   x: 400, y: 80,  trust: "high" },
  { id: 3, label: "App-Cluster",  type: "cloud",    x: 550, y: 150, trust: "high" },
  { id: 4, label: "Edge-FW-01",   type: "server",   x: 150, y: 250, trust: "medium" },
  { id: 5, label: "IoT-Gateway",  type: "iot",      x: 450, y: 280, trust: "low" },
  { id: 6, label: "WS-Pool",      type: "endpoint", x: 300, y: 300, trust: "high" },
  { id: 7, label: "Cloud-LB",     type: "cloud",    x: 600, y: 260, trust: "high" },
  { id: 8, label: "DMZ-Proxy",    type: "server",   x: 100, y: 150, trust: "medium" },
  { id: 9, label: "GPT-4o API",   type: "ai",       x: 650, y: 100, trust: "high" },
  { id: 10, label: "AI-Agents",   type: "ai",       x: 500, y: 340, trust: "medium" },
];

const edges = [
  [1,2],[1,3],[1,4],[1,6],[2,3],[3,7],[4,8],[5,6],[6,7],[4,6],[3,9],[7,9],[6,10],[10,9],
];

const containmentFlow = [
  { step: "Anomaly Detected",  color: "--aegis-amber" },
  { step: "Risk Assessed",     color: "--aegis-red" },
  { step: "Auto-Isolated",     color: "--aegis-cyan" },
  { step: "Forensics Captured",color: "--aegis-green" },
];

const trustColor = (t: string) =>
  t === "high" ? "hsl(var(--aegis-green))" :
  t === "medium" ? "hsl(var(--aegis-amber))" :
  "hsl(var(--aegis-red))";

const nodeIcon = (t: string) =>
  t === "cloud" ? "☁" : t === "iot" ? "◈" : t === "ai" ? "◉" : t === "endpoint" ? "◻" : "▣";

export default function NetworkFabric() {
  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex items-center gap-2">
        <Radio className="h-5 w-5 text-primary" />
        <h1 className="text-2xl font-bold tracking-tight">Wingspan</h1>
        <span className="text-xs text-muted-foreground font-mono">ANGELNODE mesh · zero-trust fabric</span>
      </div>

      {/* 3 metrics — inline, no cards */}
      <div className="flex items-center gap-8">
        {metrics.map(m => (
          <div key={m.label}>
            <p className="text-3xl font-bold tabular-nums" style={{ color: `hsl(var(${m.color}))` }}>{m.value}</p>
            <p className="text-[10px] text-muted-foreground mt-0.5 tracking-wide">{m.label}</p>
          </div>
        ))}
      </div>

      {/* Topology Map */}
      <GlassCard>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--aegis-green))] animate-pulse" />
          <span className="text-[10px] font-bold text-[hsl(var(--aegis-green))] tracking-widest uppercase">Live Mesh</span>
        </div>
        <div className="rounded-lg bg-background/50 border border-border/30 overflow-hidden">
          <svg viewBox="0 0 720 360" className="w-full h-[300px]">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
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
                <circle cx={n.x} cy={n.y} r={18} fill="hsl(var(--card))" stroke={trustColor(n.trust)} strokeWidth={1.5} />
                <text x={n.x} y={n.y + 5} textAnchor="middle" fill={trustColor(n.trust)} fontSize="12">{nodeIcon(n.type)}</text>
                <text x={n.x} y={n.y + 32} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">{n.label}</text>
              </g>
            ))}
          </svg>
        </div>
        <div className="flex items-center gap-5 mt-3 text-[10px] text-muted-foreground">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[hsl(var(--aegis-green))]" />High Trust</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[hsl(var(--aegis-amber))]" />Medium</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[hsl(var(--aegis-red))]" />Low</span>
          <span className="ml-auto">☁ Cloud · ◈ IoT · ◉ AI · ▣ Server</span>
        </div>
      </GlassCard>

      {/* Containment Flow */}
      <GlassCard aurora>
        <div className="flex items-center gap-2 mb-4">
          <ShieldCheck className="h-4 w-4 text-primary" />
          <span className="text-xs font-semibold text-muted-foreground">Iron Wing · Autonomous Containment · avg 0.9s</span>
        </div>
        <div className="flex items-center gap-2">
          {containmentFlow.map((c, i) => (
            <div key={c.step} className="flex items-center gap-2 flex-1">
              <div className="flex-1 flex items-center gap-2 px-3 py-2.5 rounded-lg bg-muted/30 border border-border/30">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: `hsl(var(${c.color}))` }} />
                <span className="text-xs font-semibold">{c.step}</span>
              </div>
              {i < containmentFlow.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-primary/50 shrink-0" />}
            </div>
          ))}
        </div>
      </GlassCard>

    </div>
  );
}
