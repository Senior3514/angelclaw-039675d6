import { GlassCard } from "@/components/ui/glass-card";
import { SecurityPostureGauge } from "@/components/dashboard/SecurityPostureGauge";
import { ThreatLandscapeChart } from "@/components/dashboard/ThreatLandscapeChart";
import { ActiveAlertsFeed } from "@/components/dashboard/ActiveAlertsFeed";
import { Badge } from "@/components/ui/badge";
import {
  Brain, ShieldCheck, Eye, Feather, CheckCircle2, ShieldAlert,
  Lock, Cpu, Sword, Globe, Search
} from "lucide-react";

const intercepts = [
  { label: "Injections Blocked", value: "1,247", color: "--aegis-red", icon: ShieldAlert },
  { label: "Jailbreaks Neutralized", value: "89", color: "--aegis-amber", icon: Eye },
  { label: "Model Poisoning Stopped", value: "12", color: "--aegis-cyan", icon: Brain },
];

const wardens = [
  { name: "Seraph Brain", specialty: "NLP / AI", icon: Brain },
  { name: "Vault Keeper", specialty: "Prompt Injection", icon: Lock },
  { name: "Glass Eye", specialty: "Vision AI", icon: Eye },
  { name: "Vigil", specialty: "Lateral Move", icon: Search },
  { name: "Paladin", specialty: "Data Guard", icon: ShieldCheck },
  { name: "Gate Keeper", specialty: "API Abuse", icon: Globe },
];

const tickerItems = [
  { warden: "Seraph Brain", msg: "847 attack vectors blocked this hour" },
  { warden: "Vigil", msg: "lateral movement stopped — 3 steps ahead" },
  { warden: "Vault Keeper", msg: "1,247 prompt injections stopped today" },
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

        {/* Left: Halo Gauge */}
        <div className="col-span-4">
          <GlassCard aurora className="h-full flex flex-col items-center justify-center gap-5 py-6">
            <SecurityPostureGauge score={94} />
            <div className="w-full grid grid-cols-3 gap-2 px-2">
              {[
                { label: "ANGELNODEs", value: "1,284", color: "--aegis-green" },
                { label: "Threats", value: "62K", color: "--aegis-red" },
                { label: "Uptime", value: "100%", color: "--aegis-cyan" },
              ].map(c => (
                <div key={c.label} className="text-center p-2 rounded-lg bg-muted/20 border border-border/20">
                  <p className="text-base font-bold" style={{ color: `hsl(var(${c.color}))` }}>{c.value}</p>
                  <p className="text-[9px] text-muted-foreground leading-tight mt-0.5">{c.label}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Right: Intercept counters + Live Feed */}
        <div className="col-span-8">
          <GlassCard className="h-full flex flex-col gap-4">

            {/* Evil AGI intercept counters */}
            <div className="flex items-center gap-2 pb-3 border-b border-border/20">
              <div className="p-1.5 rounded-lg bg-[hsl(var(--aegis-red)/0.1)]">
                <Sword className="h-4 w-4 text-[hsl(var(--aegis-red))]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--aegis-red))]">Evil AGI Shield</span>
              <div className="ml-auto flex items-center gap-1 px-2 py-0.5 rounded-full bg-[hsl(var(--aegis-green)/0.1)] border border-[hsl(var(--aegis-green)/0.25)]">
                <Lock className="w-2.5 h-2.5 text-[hsl(var(--aegis-green))]" />
                <span className="text-[9px] font-bold text-[hsl(var(--aegis-green))]">Fail-Closed</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {intercepts.map(s => (
                <div key={s.label}
                  className="flex items-center gap-2.5 p-3 rounded-lg bg-muted/20 border border-border/20"
                  style={{ borderLeftColor: `hsl(var(${s.color}))`, borderLeftWidth: 3 }}
                >
                  <s.icon className="h-4 w-4 shrink-0" style={{ color: `hsl(var(${s.color}))` }} />
                  <div>
                    <p className="text-xl font-bold leading-none" style={{ color: `hsl(var(${s.color}))` }}>{s.value}</p>
                    <p className="text-[9px] text-muted-foreground mt-0.5 leading-tight">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Live Feed */}
            <div className="flex-1 min-h-0">
              <ActiveAlertsFeed />
            </div>

          </GlassCard>
        </div>
      </div>

      {/* ── ANGEL LEGION STRIP ──────────────────────────────────────────── */}
      <GlassCard className="py-3">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest shrink-0">Angel Legion</span>
          <div className="flex items-center gap-2 flex-wrap">
            {wardens.map(w => (
              <div key={w.name} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-muted/30 border border-border/30 hover:bg-muted/50 transition-colors">
                <w.icon className="h-3 w-3 text-primary" />
                <span className="text-[10px] font-semibold">{w.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--aegis-green))] animate-pulse" />
              </div>
            ))}
          </div>
          <Badge variant="outline" className="text-[9px] ml-auto shrink-0">6 / 6 Active</Badge>
        </div>
      </GlassCard>

      {/* ── BOTTOM ROW: Threat Chart | Seraph Brain ─────────────────────── */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-8">
          <GlassCard className="h-full">
            <h3 className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-widest">Threat Landscape — 24h</h3>
            <ThreatLandscapeChart />
          </GlassCard>
        </div>
        <div className="col-span-4">
          <GlassCard glow="cyan" className="h-full flex flex-col justify-center gap-4">
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-primary shrink-0" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Seraph Brain</span>
              <Cpu className="h-3.5 w-3.5 text-primary animate-pulse ml-auto" />
            </div>
            <div className="space-y-3">
              {tickerItems.map((t, i) => (
                <div key={i} className="text-[11px] leading-snug border-l-2 border-primary/30 pl-2.5">
                  <span className="font-semibold text-primary">{t.warden}</span>
                  {" · "}
                  <span className="text-muted-foreground">{t.msg}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

    </div>
  );
}
