import { GlassCard } from "@/components/ui/glass-card";
import { SecurityPostureGauge } from "@/components/dashboard/SecurityPostureGauge";
import { ThreatLandscapeChart } from "@/components/dashboard/ThreatLandscapeChart";
import { ActiveAlertsFeed } from "@/components/dashboard/ActiveAlertsFeed";
import { Badge } from "@/components/ui/badge";
import {
  Bot, Brain, ShieldCheck, Eye, Feather, CheckCircle2, ShieldAlert,
  Lock, Radio, Cpu, Zap, Sword, BookOpen, Network, Database,
  Globe, Search, Code, Activity, Server
} from "lucide-react";

// ── Evil AGI intercept data ──────────────────────────────────────────────────
const evilAgiStats = [
  { label: "Prompt Injections Blocked", value: "1,247", colorVar: "--aegis-red", icon: ShieldAlert },
  { label: "Jailbreaks Neutralized", value: "89", colorVar: "--aegis-amber", icon: Eye },
  { label: "Model Poisoning Stopped", value: "12", colorVar: "--aegis-cyan", icon: Brain },
];

const interceptions = [
  { agent: "GPT-4o Production", attack: "Prompt Injection", warden: "Vault Keeper", status: "Blocked", time: "1m ago" },
  { agent: "Claude 3.5 Sonnet", attack: "Jailbreak", warden: "Seraph Brain", status: "Neutralized", time: "4m ago" },
  { agent: "Data Pipeline Agent", attack: "Data Exfil", warden: "Paladin", status: "Blocked", time: "9m ago" },
  { agent: "Customer Support Bot", attack: "Adversarial Input", warden: "Glass Eye", status: "Neutralized", time: "14m ago" },
  { agent: "Code Review Copilot", attack: "Model Poisoning", warden: "Vault Keeper", status: "Monitoring", time: "22m ago" },
  { agent: "Threat Intel Analyzer", attack: "Agent Hijack", warden: "Vigil", status: "Blocked", time: "38m ago" },
];

const statusStyle: Record<string, string> = {
  Blocked: "bg-[hsl(var(--aegis-red)/0.12)] text-[hsl(var(--aegis-red))] border border-[hsl(var(--aegis-red)/0.3)]",
  Neutralized: "bg-[hsl(var(--aegis-green)/0.12)] text-[hsl(var(--aegis-green))] border border-[hsl(var(--aegis-green)/0.3)]",
  Monitoring: "bg-[hsl(var(--aegis-amber)/0.12)] text-[hsl(var(--aegis-amber))] border border-[hsl(var(--aegis-amber)/0.3)]",
};

const compactAgents = [
  { name: "GPT-4o Production", status: "Protected" },
  { name: "Customer Support Bot", status: "Protected" },
  { name: "RPA Invoice Agent", status: "Monitored" },
  { name: "Code Review Copilot", status: "Protected" },
  { name: "Data Pipeline Agent", status: "Monitored" },
  { name: "Threat Intel Analyzer", status: "Protected" },
];

// ── Angel Legion wardens ─────────────────────────────────────────────────────
const wardens = [
  { name: "Seraph Brain", specialty: "NLP / AI Reasoning", blocked: "14,291", icon: Brain },
  { name: "Vault Keeper", specialty: "Prompt Injection", blocked: "1,247", icon: Lock },
  { name: "Glass Eye", specialty: "Adversarial Vision", blocked: "892", icon: Eye },
  { name: "Vigil", specialty: "Lateral Movement", blocked: "2,104", icon: Search },
  { name: "Paladin", specialty: "Data Sovereignty", blocked: "631", icon: ShieldCheck },
  { name: "Gate Keeper", specialty: "API Abuse", blocked: "5,812", icon: Globe },
  { name: "Iron Wing", specialty: "Fleet Patching", blocked: "142", icon: Server },
  { name: "Chronicle", specialty: "Kill-Chain Predict", blocked: "3,488", icon: Activity },
  { name: "Net Warden", specialty: "Network Fabric", blocked: "9,201", icon: Network },
  { name: "Tool Smith", specialty: "Supply Chain", blocked: "76", icon: Code },
  { name: "Drift Watcher", specialty: "Behavioral AI", blocked: "318", icon: Zap },
  { name: "Deep Quill", specialty: "Forensics", blocked: "54", icon: BookOpen },
];

// ── Seraph Brain ticker messages ─────────────────────────────────────────────
const tickerItems = [
  { warden: "Seraph Brain", msg: "predicted and blocked 847 attack vectors in the last hour · 71+ intents active · EN + עברית" },
  { warden: "Vigil Warden", msg: "neutralized lateral movement attempt from 194.x.x.x — 3-step prediction ahead" },
  { warden: "Iron Wing", msg: "applied 142 patches across all OS platforms — zero downtime · all 1,284 ANGELNODEs synced" },
  { warden: "Vault Keeper", msg: "blocked prompt injection targeting GPT-4o · Fail-Closed enforced · 1,247 injections neutralized today" },
  { warden: "Halo Score: 94", msg: "12 wardens online · 1,848 tests passing · Seraph Brain uptime 100%" },
];

export default function Dashboard() {
  return (
    <div className="space-y-5">

      {/* ── SECTION 1: Header ─────────────────────────────────────────────── */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Feather className="h-5 w-5 text-primary" />
          <h1 className="text-2xl font-bold tracking-tight">AngelClaw Command Center</h1>
          <Badge variant="outline" className="text-[10px] font-mono">v3.0.0 · Dominion</Badge>
        </div>
        <div className="flex items-center gap-2">
          {/* Halo Score pill */}
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

      {/* ── SECTION 2: Halo Gauge + Live Threat Stream ────────────────────── */}
      <div className="grid grid-cols-12 gap-5">
        {/* Left: Gauge + key counters */}
        <div className="col-span-4">
          <GlassCard aurora className="h-full flex flex-col items-center justify-center gap-5 py-6">
            <SecurityPostureGauge score={94} />
            <div className="w-full grid grid-cols-3 gap-2 px-2">
              {[
                { label: "ANGELNODEs", value: "1,284", color: "--aegis-green" },
                { label: "Threats Today", value: "62,780", color: "--aegis-red" },
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

        {/* Right: Live threat stream */}
        <div className="col-span-8">
          <GlassCard className="h-full">
            <h3 className="text-sm font-semibold mb-3">Live Threat Stream</h3>
            <ActiveAlertsFeed />
          </GlassCard>
        </div>
      </div>

      {/* ── SECTION 3: Evil AGI Shield ────────────────────────────────────── */}
      <GlassCard aurora>
        {/* Panel header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 rounded-lg bg-[hsl(var(--aegis-red)/0.1)]">
            <Sword className="h-5 w-5 text-[hsl(var(--aegis-red))]" />
          </div>
          <div>
            <h3 className="text-sm font-bold leading-tight">Evil AGI Shield</h3>
            <p className="text-[10px] text-muted-foreground">AngelClaw vs Evil AGI — live interception layer</p>
          </div>
          <div className="ml-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[hsl(var(--aegis-green)/0.1)] border border-[hsl(var(--aegis-green)/0.25)]">
            <Lock className="w-3 h-3 text-[hsl(var(--aegis-green))]" />
            <span className="text-[10px] font-bold text-[hsl(var(--aegis-green))]">Fail-Closed Active</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {/* Left: 3 big intercept counters + compact agent list */}
          <div className="col-span-5 flex flex-col gap-4">
            {/* Intercept counters */}
            <div className="space-y-3">
              {evilAgiStats.map(s => (
                <div key={s.label}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/20 border border-border/20"
                  style={{ borderLeftColor: `hsl(var(${s.colorVar}))`, borderLeftWidth: 3 }}
                >
                  <s.icon className="h-5 w-5 shrink-0" style={{ color: `hsl(var(${s.colorVar}))` }} />
                  <div>
                    <p className="text-2xl font-bold leading-none" style={{ color: `hsl(var(${s.colorVar}))` }}>{s.value}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Compact AI agents */}
            <div>
              <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Protected AI Agents</p>
              <div className="grid grid-cols-2 gap-1.5">
                {compactAgents.map(a => (
                  <div key={a.name} className="flex items-center gap-1.5 px-2 py-1.5 rounded-md bg-muted/20 border border-border/20">
                    <Bot className="h-3 w-3 text-primary shrink-0" />
                    <span className="text-[10px] font-medium truncate leading-tight">{a.name}</span>
                    <span className={`ml-auto shrink-0 w-1.5 h-1.5 rounded-full ${a.status === "Protected" ? "bg-[hsl(var(--aegis-green))]" : "bg-[hsl(var(--aegis-amber))] animate-pulse"}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: live interception table */}
          <div className="col-span-7">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border/50 text-muted-foreground">
                  <th className="text-left py-2 px-2 font-medium">Agent</th>
                  <th className="text-left py-2 px-2 font-medium">Attack</th>
                  <th className="text-left py-2 px-2 font-medium">Warden</th>
                  <th className="text-left py-2 px-2 font-medium">Status</th>
                  <th className="text-left py-2 px-2 font-medium">Time</th>
                </tr>
              </thead>
              <tbody>
                {interceptions.map((row, i) => (
                  <tr key={i} className="border-b border-border/20 hover:bg-muted/20 transition-colors">
                    <td className="py-2 px-2 font-medium">{row.agent}</td>
                    <td className="py-2 px-2 text-muted-foreground">{row.attack}</td>
                    <td className="py-2 px-2 text-primary font-semibold">{row.warden}</td>
                    <td className="py-2 px-2">
                      <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${statusStyle[row.status]}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-2 px-2 text-muted-foreground">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-2 mt-4 pt-3 border-t border-border/20">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[hsl(var(--aegis-green)/0.1)] text-[hsl(var(--aegis-green))] border border-[hsl(var(--aegis-green)/0.3)]">
            Fail-Closed Guarantee
          </span>
          <p className="text-[10px] text-muted-foreground">
            If AngelClaw is unreachable, all AI agent actions are automatically blocked — no exceptions, no overrides.
          </p>
        </div>
      </GlassCard>

      {/* ── SECTION 4: Angel Legion — 12 Wardens ─────────────────────────── */}
      <GlassCard>
        <div className="flex items-center gap-2 mb-4">
          <Radio className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold">Angel Legion</h3>
          <Badge variant="outline" className="text-[10px] ml-auto">12 / 12 Active</Badge>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {wardens.map(w => (
            <div key={w.name} className="flex items-center gap-2.5 p-3 rounded-lg bg-muted/20 border border-border/20 hover:bg-muted/30 transition-colors">
              <div className="p-1.5 rounded-md bg-primary/10 shrink-0">
                <w.icon className="h-3.5 w-3.5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold leading-tight truncate">{w.name}</p>
                <p className="text-[9px] text-muted-foreground leading-tight truncate">{w.specialty}</p>
                <p className="text-[10px] font-bold text-[hsl(var(--aegis-green))] mt-0.5">{w.blocked} blocked</p>
              </div>
              <span className="w-2 h-2 rounded-full bg-[hsl(var(--aegis-green))] shrink-0 animate-pulse" />
            </div>
          ))}
        </div>
      </GlassCard>

      {/* ── SECTION 5: Threat Chart + Seraph Brain Ticker ─────────────────── */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-7">
          <GlassCard className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Threat Landscape — 24h</h3>
            <ThreatLandscapeChart />
          </GlassCard>
        </div>
        <div className="col-span-5">
          <GlassCard glow="cyan" className="h-full flex flex-col justify-center gap-3">
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-primary shrink-0" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Seraph Brain</span>
              <Cpu className="h-3.5 w-3.5 text-primary animate-pulse ml-auto" />
            </div>
            <div className="space-y-2 overflow-hidden">
              {tickerItems.map((t, i) => (
                <div key={i} className="text-[11px] leading-snug border-l-2 border-primary/30 pl-2">
                  <span className="font-semibold text-primary">{t.warden}</span>
                  {" "}
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
