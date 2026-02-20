import { GlassCard } from "@/components/ui/glass-card";
import { SecurityPostureGauge } from "@/components/dashboard/SecurityPostureGauge";
import { ThreatLandscapeChart } from "@/components/dashboard/ThreatLandscapeChart";
import { ActiveAlertsFeed } from "@/components/dashboard/ActiveAlertsFeed";
import { Badge } from "@/components/ui/badge";
import { Feather, CheckCircle2, Lock } from "lucide-react";

const intercepts = [
  { label: "Injections Blocked", value: "1,247", color: "--aegis-red" },
  { label: "Jailbreaks Neutralized", value: "89", color: "--aegis-amber" },
  { label: "Poisoning Stopped", value: "12", color: "--aegis-cyan" },
];

const wardens = [
  "Seraph Brain",
  "Vault Keeper",
  "Glass Eye",
  "Vigil",
  "Paladin",
  "Gate Keeper",
];

const tickerItems = [
  "847 attack vectors blocked this hour",
  "lateral movement stopped — 3 steps ahead",
];

export default function Dashboard() {
  return (
    <div className="space-y-5">

      {/* ── HEADER ──────────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Feather className="h-5 w-5 text-primary" />
          <h1 className="text-2xl font-bold tracking-tight">AngelClaw</h1>
          <Badge variant="outline" className="text-[10px] font-mono">v3.0.0 · Dominion</Badge>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[hsl(var(--aegis-cyan)/0.1)] border border-[hsl(var(--aegis-cyan)/0.3)]">
            <span className="text-[10px] font-bold text-[hsl(var(--aegis-cyan))] tracking-wide">Halo: 94</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[hsl(var(--aegis-green)/0.1)] border border-[hsl(var(--aegis-green)/0.25)]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[hsl(var(--aegis-green))]" />
            <span className="text-xs font-semibold text-[hsl(var(--aegis-green))]">All Wardens Active</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <Lock className="w-3 h-3 text-primary" />
            <span className="text-xs font-semibold text-primary">Fail-Closed</span>
          </div>
        </div>
      </div>

      {/* ── TOP ROW: Gauge | Intercepts + Live Feed ─────────────────────── */}
      <div className="grid grid-cols-12 gap-5">

        {/* Left: Halo Gauge — ring only */}
        <div className="col-span-4">
          <GlassCard aurora className="h-full flex items-center justify-center py-8">
            <SecurityPostureGauge score={94} />
          </GlassCard>
        </div>

        {/* Right: Intercept numbers + live feed */}
        <div className="col-span-8">
          <GlassCard className="h-full flex flex-col gap-5">

            {/* Intercept counters — number + label, nothing else */}
            <div className="grid grid-cols-3 gap-4">
              {intercepts.map(s => (
                <div key={s.label} className="text-center">
                  <p className="text-4xl font-bold tabular-nums" style={{ color: `hsl(var(${s.color}))` }}>{s.value}</p>
                  <p className="text-[10px] text-muted-foreground mt-1 tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-border/20" />

            {/* Live Feed */}
            <div className="flex-1 min-h-0">
              <ActiveAlertsFeed />
            </div>

          </GlassCard>
        </div>
      </div>

      {/* ── ANGEL LEGION STRIP ──────────────────────────────────────────── */}
      <GlassCard className="py-3">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest shrink-0">Angel Legion</span>
          {wardens.map(name => (
            <div key={name} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted/30 border border-border/30">
              <span className="text-[10px] font-semibold">{name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--aegis-green))] animate-pulse" />
            </div>
          ))}
        </div>
      </GlassCard>

      {/* ── BOTTOM ROW: Threat Chart | Seraph Brain ticker ──────────────── */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-8">
          <GlassCard className="h-full">
            <h3 className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-widest">Threat Landscape — 24h</h3>
            <ThreatLandscapeChart />
          </GlassCard>
        </div>
        <div className="col-span-4">
          <GlassCard glow="cyan" className="h-full flex flex-col justify-center gap-3">
            {tickerItems.map((line, i) => (
              <p key={i} className="text-sm leading-snug text-muted-foreground border-l-2 border-primary/30 pl-3">
                {line}
              </p>
            ))}
          </GlassCard>
        </div>
      </div>

    </div>
  );
}
