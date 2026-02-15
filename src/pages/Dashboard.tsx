import { GlassCard } from "@/components/ui/glass-card";
import { SecurityPostureGauge } from "@/components/dashboard/SecurityPostureGauge";
import { ThreatLandscapeChart } from "@/components/dashboard/ThreatLandscapeChart";
import { SystemHealthGrid } from "@/components/dashboard/SystemHealthGrid";
import { ActiveAlertsFeed } from "@/components/dashboard/ActiveAlertsFeed";
import { NetworkTrustBar } from "@/components/dashboard/NetworkTrustBar";
import { ComplianceHealth } from "@/components/dashboard/ComplianceHealth";
import { Badge } from "@/components/ui/badge";
import { Monitor, Apple, Terminal, Smartphone, Bot, Brain, ShieldCheck, Zap, Cpu, Eye, Radio } from "lucide-react";

const fleetNodes = [
  { os: "Windows", icon: Monitor, count: 612, version: "v4.2.1", health: 99.2 },
  { os: "macOS", icon: Apple, count: 358, version: "v4.2.1", health: 99.8 },
  { os: "Linux", icon: Terminal, count: 204, version: "v4.2.0", health: 98.4 },
  { os: "iOS", icon: Smartphone, count: 68, version: "v4.1.9", health: 100 },
  { os: "Android", icon: Smartphone, count: 42, version: "v4.1.8", health: 97.6 },
];

const aiAgents = [
  { name: "GPT-4o Production", type: "LLM", riskScore: 12, status: "Protected", requests: "14.2K/hr" },
  { name: "Customer Support Bot", type: "Chatbot", riskScore: 8, status: "Protected", requests: "3.8K/hr" },
  { name: "RPA Invoice Agent", type: "RPA", riskScore: 24, status: "Monitored", requests: "890/hr" },
  { name: "Code Review Copilot", type: "LLM", riskScore: 15, status: "Protected", requests: "2.1K/hr" },
  { name: "Data Pipeline Agent", type: "Autonomous", riskScore: 31, status: "Monitored", requests: "5.4K/hr" },
  { name: "Threat Intel Analyzer", type: "AI Agent", riskScore: 6, status: "Protected", requests: "1.2K/hr" },
];

const predictiveStats = [
  { label: "Attack Vectors Predicted", value: "847", icon: Brain },
  { label: "Pre-emptive Blocks", value: "12,491", icon: ShieldCheck },
  { label: "Avg Prediction Lead", value: "3.2 steps", icon: Eye },
  { label: "Auto-Remediations", value: "4,218", icon: Zap },
];

const riskColor = (r: number) => r > 25 ? "text-[hsl(var(--aegis-amber))]" : "text-[hsl(var(--aegis-green))]";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">ANGELGRID Command Overview</h1>
        <p className="text-sm text-muted-foreground mt-1">Autonomous AI Defense Fabric — real-time posture across every endpoint, AI agent, and autonomous system in SaaS, Hybrid & On-Prem environments</p>
      </div>

      {/* Top row */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-3">
          <GlassCard aurora className="h-full flex flex-col items-center justify-center animate-shield-pulse">
            <SecurityPostureGauge score={87} />
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

      {/* Bottom row */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-5">
          <SystemHealthGrid />
        </div>
        <div className="col-span-7">
          <GlassCard className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Active Alerts</h3>
            <ActiveAlertsFeed />
          </GlassCard>
        </div>
      </div>

      {/* ANGELNODE Fleet Status */}
      <GlassCard>
        <div className="flex items-center gap-2 mb-4">
          <Radio className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">ANGELNODE Fleet Status</h3>
          <Badge variant="default" className="text-[10px] ml-auto">{fleetNodes.reduce((a, n) => a + n.count, 0).toLocaleString()} Agents Deployed</Badge>
        </div>
        <div className="grid grid-cols-5 gap-3">
          {fleetNodes.map(n => (
            <div key={n.os} className="p-4 rounded-lg bg-muted/30 border border-border/30 text-center">
              <n.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="text-sm font-semibold">{n.os}</p>
              <p className="text-xl font-bold mt-1">{n.count}</p>
              <div className="flex items-center justify-center gap-1 mt-1">
                <span className={`w-1.5 h-1.5 rounded-full ${n.health > 99 ? "bg-[hsl(var(--aegis-green))]" : "bg-[hsl(var(--aegis-amber))]"}`} />
                <span className="text-[10px] text-muted-foreground">{n.health}% healthy</span>
              </div>
              <p className="text-[10px] text-muted-foreground mt-1">{n.version}</p>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* AI Agent Protection Panel */}
      <GlassCard aurora>
        <div className="flex items-center gap-2 mb-4">
          <Bot className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">AI Agent Protection Panel</h3>
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
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Predictive Defense Ticker */}
      <GlassCard glow="cyan">
        <div className="flex items-center gap-3">
          <Brain className="h-5 w-5 text-primary shrink-0" />
          <div className="flex-1 overflow-hidden">
            <div className="flex items-center gap-6 animate-marquee">
              <span className="text-sm whitespace-nowrap"><span className="text-primary font-semibold">ANGELGRID AI</span> predicted and blocked <span className="font-bold text-[hsl(var(--aegis-green))]">847 attack vectors</span> in the last hour</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm whitespace-nowrap"><span className="font-semibold text-primary">3-step-ahead prediction</span> neutralized lateral movement attempt from 194.x.x.x</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm whitespace-nowrap">Auto-remediation applied <span className="font-bold text-[hsl(var(--aegis-green))]">142 patches</span> across all OS platforms — zero downtime</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm whitespace-nowrap"><span className="font-semibold text-primary">AI Agent Protection:</span> blocked prompt injection targeting GPT-4o Production instance</span>
            </div>
          </div>
          <Cpu className="h-5 w-5 text-primary shrink-0 animate-pulse" />
        </div>
      </GlassCard>
    </div>
  );
}
