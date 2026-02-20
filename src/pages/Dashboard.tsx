import { GlassCard } from "@/components/ui/glass-card";
import { SecurityPostureGauge } from "@/components/dashboard/SecurityPostureGauge";
import { ThreatLandscapeChart } from "@/components/dashboard/ThreatLandscapeChart";
import { SystemHealthGrid } from "@/components/dashboard/SystemHealthGrid";
import { ActiveAlertsFeed } from "@/components/dashboard/ActiveAlertsFeed";
import { NetworkTrustBar } from "@/components/dashboard/NetworkTrustBar";
import { ComplianceHealth } from "@/components/dashboard/ComplianceHealth";
import { Badge } from "@/components/ui/badge";
import { Monitor, Apple, Terminal, Smartphone, Bot, Brain, ShieldCheck, Zap, Cpu, Eye, Radio, Feather, Activity, Users, CheckCircle2, ShieldAlert, Lock, TrendingUp, Cloud } from "lucide-react";

const fleetNodes = [
  { os: "Windows", icon: Monitor, count: 612, version: "v3.0.0", health: 99.2 },
  { os: "macOS", icon: Apple, count: 358, version: "v3.0.0", health: 99.8 },
  { os: "Linux", icon: Terminal, count: 204, version: "v3.0.0", health: 98.4 },
  { os: "iOS", icon: Smartphone, count: 68, version: "v3.0.0", health: 100 },
  { os: "Android", icon: Smartphone, count: 42, version: "v3.0.0", health: 97.6 },
];

const aiAgents = [
  { name: "GPT-4o Production", type: "LLM", riskScore: 12, status: "Protected", requests: "14.2K/hr", threat: "none" },
  { name: "Customer Support Bot", type: "Chatbot", riskScore: 8, status: "Protected", requests: "3.8K/hr", threat: "none" },
  { name: "RPA Invoice Agent", type: "RPA", riskScore: 24, status: "Monitored", requests: "890/hr", threat: "drift" },
  { name: "Code Review Copilot", type: "LLM", riskScore: 15, status: "Protected", requests: "2.1K/hr", threat: "none" },
  { name: "Data Pipeline Agent", type: "Autonomous", riskScore: 31, status: "Monitored", requests: "5.4K/hr", threat: "drift" },
  { name: "Threat Intel Analyzer", type: "AI Agent", riskScore: 6, status: "Protected", requests: "1.2K/hr", threat: "none" },
];

const evilAgiStats = [
  { label: "Prompt Injections Blocked", value: "1,247", color: "var(--aegis-red)", icon: ShieldAlert },
  { label: "Jailbreaks Neutralized", value: "89", color: "var(--aegis-amber)", icon: Eye },
  { label: "Model Poisoning Stopped", value: "12", color: "var(--aegis-cyan)", icon: Brain },
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

const predictiveStats = [
  { label: "Attack Vectors Predicted", value: "847", icon: Brain },
  { label: "Pre-emptive Blocks", value: "12,491", icon: ShieldCheck },
  { label: "Avg Prediction Lead", value: "3.2 steps", icon: Eye },
  { label: "Auto-Remediations", value: "4,218", icon: Zap },
];

const wingspanStats = [
  { label: "Halo Score", value: "94", desc: "Org-wide security posture", icon: Feather, color: "var(--aegis-cyan)" },
  { label: "Wingspan", value: "1,284", desc: "ANGELNODEs deployed", icon: Radio, color: "var(--aegis-green)" },
  { label: "Active Tenants", value: "3", desc: "Isolated environments", icon: Users, color: "var(--aegis-purple)" },
  { label: "Events Today", value: "48,291", desc: "Analyzed by Seraph Brain", icon: Activity, color: "var(--aegis-amber)" },
];

const riskColor = (r: number) => r > 25 ? "text-[hsl(var(--aegis-amber))]" : "text-[hsl(var(--aegis-green))]";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Feather className="h-5 w-5 text-primary" />
            <h1 className="text-2xl font-bold tracking-tight">AngelClaw Command Center</h1>
            <Badge variant="outline" className="text-[10px] font-mono">v3.0.0 · Dominion</Badge>
          </div>
          <p className="text-sm text-muted-foreground">Guardian angel, not gatekeeper — autonomous AI defense fabric protecting every endpoint, AI agent, and autonomous system across SaaS, Hybrid & On-Prem</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(var(--aegis-green)/0.1)] border border-[hsl(var(--aegis-green)/0.25)]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[hsl(var(--aegis-green))]" />
            <span className="text-xs font-semibold text-[hsl(var(--aegis-green))]">All Wardens Active</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <Lock className="w-3 h-3 text-primary" />
            <span className="text-xs font-semibold text-primary">Fail-Closed</span>
          </div>
        </div>
      </div>

      {/* Wingspan Stats */}
      <div className="grid grid-cols-4 gap-4">
        {wingspanStats.map(s => (
          <GlassCard key={s.label} className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg" style={{ backgroundColor: `hsl(${s.color} / 0.1)` }}>
              <s.icon className="h-5 w-5" style={{ color: `hsl(${s.color})` }} />
            </div>
            <div>
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-xs font-medium leading-tight">{s.label}</p>
              <p className="text-[10px] text-muted-foreground">{s.desc}</p>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Top row */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-3">
          <GlassCard aurora className="h-full flex flex-col items-center justify-center animate-shield-pulse">
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2 font-semibold">Halo Score</p>
            <SecurityPostureGauge score={94} />
          </GlassCard>
        </div>
        <div className="col-span-5">
          <GlassCard className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Threat Landscape</h3>
            <ThreatLandscapeChart />
          </GlassCard>
        </div>
        <div className="col-span-4">
          <GlassCard className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Network Trust Level</h3>
            <NetworkTrustBar />
            <div className="mt-5">
              <h3 className="text-sm font-semibold text-muted-foreground mb-3">Compliance Health</h3>
              <ComplianceHealth />
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Predictive Defense Stats */}
      <div className="grid grid-cols-4 gap-4">
        {predictiveStats.map(s => (
          <GlassCard key={s.label} glow="cyan" className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-primary/10"><s.icon className="h-5 w-5 text-primary" /></div>
            <div><p className="text-2xl font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></div>
          </GlassCard>
        ))}
      </div>

      {/* System Health + Alerts */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-5">
          <SystemHealthGrid />
        </div>
        <div className="col-span-7">
          <GlassCard className="h-full">
            <ActiveAlertsFeed />
          </GlassCard>
        </div>
      </div>

      {/* ANGELNODE Fleet */}
      <GlassCard>
        <div className="flex items-center gap-2 mb-4">
          <Radio className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">ANGELNODE Fleet — Wingspan</h3>
          <Badge variant="default" className="text-[10px] ml-auto">{fleetNodes.reduce((a, n) => a + n.count, 0).toLocaleString()} Agents Deployed</Badge>
        </div>
        <div className="grid grid-cols-5 gap-3">
          {fleetNodes.map(n => (
            <div key={n.os} className="p-4 rounded-lg bg-muted/30 border border-border/30 text-center hover:bg-muted/50 transition-colors">
              <n.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="text-sm font-semibold">{n.os}</p>
              <p className="text-xl font-bold mt-1">{n.count}</p>
              <div className="mt-2 h-1.5 w-full rounded-full bg-muted overflow-hidden">
                <div className={`h-full rounded-full ${n.health > 99 ? "bg-[hsl(var(--aegis-green))]" : "bg-[hsl(var(--aegis-amber))]"}`} style={{ width: `${n.health}%` }} />
              </div>
              <div className="flex items-center justify-center gap-1 mt-1">
                <span className={`w-1.5 h-1.5 rounded-full ${n.health > 99 ? "bg-[hsl(var(--aegis-green))]" : "bg-[hsl(var(--aegis-amber))]"}`} />
                <span className="text-[10px] text-muted-foreground">{n.health}% healthy</span>
              </div>
              <p className="text-[10px] text-muted-foreground mt-0.5">{n.version}</p>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* AI Agent Protection Panel */}
      <GlassCard aurora>
        <div className="flex items-center gap-2 mb-4">
          <Bot className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">AI Agent Protection Panel — OpenClaw Shield</h3>
          <Badge variant="default" className="text-[10px] ml-auto">{aiAgents.length} AI Agents Monitored</Badge>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {aiAgents.map(a => (
            <div key={a.name} className="p-3 rounded-lg bg-muted/30 border border-border/30 hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium truncate">{a.name}</span>
                <Badge variant={a.status === "Protected" ? "default" : "secondary"} className="text-[10px] shrink-0">{a.status}</Badge>
              </div>
              <div className="flex items-center gap-3 text-[10px] text-muted-foreground mt-2">
                <span className="bg-primary/10 px-1.5 py-0.5 rounded text-primary">{a.type}</span>
                <span className={riskColor(a.riskScore)}>Risk: {a.riskScore}</span>
                <span>{a.requests}</span>
              </div>
              {a.threat === "drift" && (
                <div className="mt-2 text-[10px] text-[hsl(var(--aegis-amber))] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--aegis-amber))] animate-pulse" />
                  Behavioral drift detected
                </div>
              )}
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Evil AGI Shield Panel */}
      <GlassCard aurora>
        <div className="flex items-center gap-3 mb-4">
          <ShieldAlert className="h-5 w-5 text-primary shrink-0" />
          <div>
            <h3 className="text-sm font-semibold leading-tight">Evil AGI Shield — OpenClaw Defense Layer</h3>
            <p className="text-[10px] text-muted-foreground">Active interception of offensive AI threats targeting protected agents</p>
          </div>
          <div className="ml-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[hsl(var(--aegis-green)/0.1)] border border-[hsl(var(--aegis-green)/0.25)]">
            <Lock className="w-3 h-3 text-[hsl(var(--aegis-green))]" />
            <span className="text-[10px] font-bold text-[hsl(var(--aegis-green))] tracking-wide">Fail-Closed Active</span>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {evilAgiStats.map(s => (
            <div key={s.label} className="p-3 rounded-lg bg-muted/30 border border-border/30 flex items-center gap-3">
              <s.icon className="h-5 w-5 shrink-0" style={{ color: `hsl(${s.color})` }} />
              <div>
                <p className="text-xl font-bold" style={{ color: `hsl(${s.color})` }}>{s.value}</p>
                <p className="text-[10px] text-muted-foreground">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Interception table */}
        <table className="w-full text-xs mb-4">
          <thead>
            <tr className="border-b border-border/50 text-muted-foreground">
              <th className="text-left py-2 px-2 font-medium">Target Agent</th>
              <th className="text-left py-2 px-2 font-medium">Attack Type</th>
              <th className="text-left py-2 px-2 font-medium">Warden</th>
              <th className="text-left py-2 px-2 font-medium">Status</th>
              <th className="text-left py-2 px-2 font-medium">Time</th>
            </tr>
          </thead>
          <tbody>
            {interceptions.map((row, i) => (
              <tr key={i} className="border-b border-border/20 hover:bg-muted/20">
                <td className="py-2 px-2 font-medium">{row.agent}</td>
                <td className="py-2 px-2 text-muted-foreground">{row.attack}</td>
                <td className="py-2 px-2 text-primary font-semibold">{row.warden}</td>
                <td className="py-2 px-2">
                  <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${statusStyle[row.status]}`}>{row.status}</span>
                </td>
                <td className="py-2 px-2 text-muted-foreground">{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center gap-2 pt-2 border-t border-border/30">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[hsl(var(--aegis-green)/0.1)] text-[hsl(var(--aegis-green))] border border-[hsl(var(--aegis-green)/0.3)]">Fail-Closed</span>
          <p className="text-[10px] text-muted-foreground">If AngelClaw is unreachable, all AI agent actions are automatically blocked — no exceptions.</p>
        </div>
      </GlassCard>

      {/* Seraph Brain Ticker */}
      <GlassCard glow="cyan">
        <div className="flex items-center gap-3">
          <Brain className="h-5 w-5 text-primary shrink-0" />
          <div className="flex-1 overflow-hidden">
            <div className="flex items-center gap-6 animate-marquee">
              <span className="text-sm whitespace-nowrap"><span className="text-primary font-semibold">Seraph Brain</span> predicted and blocked <span className="font-bold text-[hsl(var(--aegis-green))]">847 attack vectors</span> in the last hour · 71+ intents active · EN + עברית</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm whitespace-nowrap"><span className="font-semibold text-primary">Vigil Warden</span> neutralized lateral movement attempt from 194.x.x.x — <span className="text-[hsl(var(--aegis-green))]">3-step prediction ahead</span></span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm whitespace-nowrap"><span className="font-semibold text-primary">Iron Wing</span> applied <span className="font-bold text-[hsl(var(--aegis-green))]">142 patches</span> across all OS platforms — zero downtime · all 1,284 ANGELNODEs synced</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm whitespace-nowrap"><span className="font-semibold text-primary">Vault Keeper</span> blocked prompt injection targeting GPT-4o · Fail-Closed enforced · 1,247 injections neutralized today</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm whitespace-nowrap"><span className="font-semibold text-primary">Halo Score: 94</span> · 12 wardens online · 1,848 tests passing · Seraph Brain uptime 100%</span>
            </div>
          </div>
          <Cpu className="h-5 w-5 text-primary shrink-0 animate-pulse" />
        </div>
      </GlassCard>
    </div>
  );
}
