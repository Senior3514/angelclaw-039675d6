import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Bot, Play, CheckCircle2, Timer, Zap, Brain, Target, Cog, FileText, ArrowDown, Link2, Mail, Cloud, Shield, MonitorSmartphone, Wrench, Server, Globe, Activity } from "lucide-react";

const stats = [
  { label: "Active Playbooks", value: "34", icon: Bot, glow: "cyan" as const },
  { label: "Executions Today", value: "1,247", icon: Play, glow: "cyan" as const },
  { label: "Success Rate", value: "99.2%", icon: CheckCircle2, glow: "cyan" as const },
  { label: "Avg Duration", value: "3.4s", icon: Timer, glow: "amber" as const },
];

const playbooks = [
  { name: "Ransomware Kill Chain", desc: "ANGELGRID AI autonomous detection, isolation, and rollback", trigger: "AI Detection", runs: 342, lastRun: "2m ago", status: "Active" },
  { name: "Phishing Response", desc: "Email quarantine, ANGELNODE notification, IOC extraction", trigger: "Email Gateway", runs: 1204, lastRun: "8m ago", status: "Active" },
  { name: "Privilege Escalation Block", desc: "ANGELGRID zero-trust verification and session termination", trigger: "Behavior Anomaly", runs: 89, lastRun: "15m ago", status: "Active" },
  { name: "Cloud Drift Remediation", desc: "ANGELGRID Cloud auto-correct IaC drift across multi-cloud", trigger: "Scheduled", runs: 567, lastRun: "1h ago", status: "Active" },
  { name: "Endpoint Compliance Check", desc: "ANGELNODE patch level, agent version, config validation", trigger: "Continuous", runs: 4892, lastRun: "1m ago", status: "Active" },
  { name: "Threat Intel Enrichment", desc: "ANGELGRID AI IOC correlation with global threat feeds", trigger: "New Alert", runs: 2103, lastRun: "3m ago", status: "Active" },
  { name: "AI Prompt Injection Defense", desc: "Real-time LLM input sanitization and adversarial pattern blocking", trigger: "AI Detection", runs: 1847, lastRun: "30s ago", status: "Active" },
  { name: "Agent Behavioral Baseline", desc: "Continuous AI agent behavior monitoring with drift detection", trigger: "Continuous", runs: 3421, lastRun: "1m ago", status: "Active" },
  { name: "Model Exfiltration Guard", desc: "Prevent unauthorized model weight extraction and API abuse", trigger: "AI Detection", runs: 234, lastRun: "5m ago", status: "Active" },
];

const workflowSteps = [
  { label: "Trigger", detail: "Threat detected", icon: Zap },
  { label: "Analyze", detail: "AI risk assessment", icon: Brain },
  { label: "Decide", detail: "Policy evaluation", icon: Target },
  { label: "Act", detail: "Auto-remediate", icon: Cog },
  { label: "Report", detail: "Log & notify", icon: FileText },
];

const connectors = [
  { name: "SIEM", status: "Connected", icon: Shield },
  { name: "SOAR", status: "Connected", icon: Bot },
  { name: "EDR", status: "Connected", icon: MonitorSmartphone },
  { name: "Cloud", status: "Connected", icon: Cloud },
  { name: "Email", status: "Connected", icon: Mail },
];

const apiEndpoints = [
  { method: "GET", path: "/api/v2/threats", desc: "List active threats" },
  { method: "POST", path: "/api/v2/playbooks/execute", desc: "Trigger playbook execution" },
  { method: "GET", path: "/api/v2/endpoints", desc: "Query managed endpoints" },
  { method: "PUT", path: "/api/v2/policies/{id}", desc: "Update policy configuration" },
  { method: "DELETE", path: "/api/v2/quarantine/{id}", desc: "Release quarantined item" },
  { method: "GET", path: "/api/v2/audit/logs", desc: "Fetch audit trail" },
];

const recentRuns = [
  { id: "EXE-4821", playbook: "Ransomware Kill Chain", trigger: "AI Detection", duration: "2.1s", status: "Success", time: "2m ago" },
  { id: "EXE-4820", playbook: "Phishing Response", trigger: "Email Gateway", duration: "4.8s", status: "Success", time: "8m ago" },
  { id: "EXE-4819", playbook: "Privilege Escalation Block", trigger: "Behavior Anomaly", duration: "1.2s", status: "Success", time: "15m ago" },
  { id: "EXE-4818", playbook: "Endpoint Compliance Check", trigger: "Continuous", duration: "6.4s", status: "Success", time: "18m ago" },
  { id: "EXE-4817", playbook: "AI Prompt Injection Defense", trigger: "AI Detection", duration: "0.8s", status: "Success", time: "22m ago" },
];

const playbookSuggestions = [
  { name: "LLM Output Watermarking", reason: "ANGELGRID AI detected 23 unauthorized model outputs in external channels", confidence: 94, impact: "6 AI agents" },
  { name: "Cross-Cloud Session Binding", reason: "Session hijacking patterns emerging across hybrid environments", confidence: 88, impact: "All cloud endpoints" },
  { name: "Autonomous Agent Sandboxing", reason: "New autonomous agents deployed without behavioral baseline", confidence: 91, impact: "3 new AI agents" },
];

const crossEnvOrchestration = [
  { env: "SaaS", icon: Cloud, activeRemediations: 12, status: "Synced", latency: "1.2s" },
  { env: "On-Premises", icon: Server, activeRemediations: 8, status: "Synced", latency: "0.8s" },
  { env: "Hybrid", icon: Globe, activeRemediations: 5, status: "Synced", latency: "2.1s" },
];

const selfHealingMetrics = [
  { label: "Patches Applied", value: "1,842", desc: "Zero-downtime autonomous patching", icon: Wrench },
  { label: "Configs Corrected", value: "456", desc: "Drift detection and auto-correction", icon: Cog },
  { label: "Threats Neutralized", value: "12,491", desc: "Without human intervention", icon: Shield },
  { label: "Mean Time to Heal", value: "2.8s", desc: "From detection to resolution", icon: Activity },
];

const methodColor = (m: string) => m === "GET" ? "bg-[hsl(var(--aegis-green))]/20 text-[hsl(var(--aegis-green))]" : m === "POST" ? "bg-primary/20 text-primary" : m === "PUT" ? "bg-[hsl(var(--aegis-amber))]/20 text-[hsl(var(--aegis-amber))]" : "bg-destructive/20 text-destructive";

export default function Automation() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Automation & Orchestration</h1>
        <p className="text-sm text-muted-foreground mt-1">ANGELGRID autonomous playbooks with AI-agent-specific defense, self-healing metrics, and cross-environment orchestration</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {stats.map(s => (
          <GlassCard key={s.label} glow={s.glow} className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-primary/10"><s.icon className="h-5 w-5 text-primary" /></div>
            <div><p className="text-2xl font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></div>
          </GlassCard>
        ))}
      </div>

      {/* Self-Healing Metrics */}
      <div className="grid grid-cols-4 gap-4">
        {selfHealingMetrics.map(m => (
          <GlassCard key={m.label} glow="cyan">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10"><m.icon className="h-5 w-5 text-primary" /></div>
              <div>
                <p className="text-xl font-bold">{m.value}</p>
                <p className="text-xs font-medium">{m.label}</p>
                <p className="text-[10px] text-muted-foreground">{m.desc}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Playbook Gallery */}
      <GlassCard>
        <h3 className="text-sm font-semibold text-muted-foreground mb-4">Playbook Gallery</h3>
        <div className="grid grid-cols-3 gap-3">
          {playbooks.map(p => (
            <div key={p.name} className="p-3 rounded-lg bg-muted/30 border border-border/30 hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">{p.name}</span>
                <Badge variant="default" className="text-[10px]">{p.status}</Badge>
              </div>
              <p className="text-[10px] text-muted-foreground mb-2">{p.desc}</p>
              <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                <span>⚡ {p.trigger}</span>
                <span>{p.runs.toLocaleString()} runs</span>
                <span>{p.lastRun}</span>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* AI-Powered Playbook Suggestions */}
      <GlassCard aurora>
        <div className="flex items-center gap-2 mb-4">
          <Brain className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">AI-Powered Playbook Suggestions</h3>
        </div>
        <div className="space-y-3">
          {playbookSuggestions.map(s => (
            <div key={s.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/20 border border-border/20">
              <div className="flex items-center gap-3">
                <Zap className="h-4 w-4 text-primary shrink-0" />
                <div>
                  <p className="text-sm font-medium">{s.name}</p>
                  <p className="text-[10px] text-muted-foreground">{s.reason}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="text-[10px]">{s.impact}</Badge>
                <span className="text-xs text-primary font-semibold">{s.confidence}%</span>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Cross-Environment Orchestration */}
      <GlassCard>
        <div className="flex items-center gap-2 mb-4">
          <Globe className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">Cross-Environment Orchestration — Simultaneous Remediation</h3>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {crossEnvOrchestration.map(e => (
            <div key={e.env} className="p-4 rounded-lg bg-muted/30 border border-border/30 text-center">
              <e.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="text-sm font-semibold">{e.env}</p>
              <p className="text-2xl font-bold mt-1">{e.activeRemediations}</p>
              <p className="text-[10px] text-muted-foreground">active remediations</p>
              <div className="mt-2 pt-2 border-t border-border/30 flex justify-center gap-3 text-[10px]">
                <span className="text-[hsl(var(--aegis-green))]">● {e.status}</span>
                <span className="text-muted-foreground">{e.latency} latency</span>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      <div className="grid grid-cols-12 gap-5">
        {/* Workflow Editor */}
        <div className="col-span-5">
          <GlassCard aurora className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-4">Workflow Engine</h3>
            <div className="flex flex-col items-center gap-0">
              {workflowSteps.map((w, i) => (
                <div key={w.label} className="flex flex-col items-center">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/40 border border-border/40 w-56">
                    <w.icon className="h-4 w-4 text-primary shrink-0" />
                    <div>
                      <p className="text-xs font-semibold">{w.label}</p>
                      <p className="text-[10px] text-muted-foreground">{w.detail}</p>
                    </div>
                  </div>
                  {i < workflowSteps.length - 1 && <ArrowDown className="h-4 w-4 text-primary/40 my-1" />}
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Connectors + API */}
        <div className="col-span-7 space-y-5">
          <GlassCard>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Connectors Gallery</h3>
            <div className="grid grid-cols-5 gap-2">
              {connectors.map(c => (
                <div key={c.name} className="text-center p-3 rounded-lg bg-muted/30 border border-border/30">
                  <c.icon className="h-5 w-5 text-primary mx-auto mb-1" />
                  <p className="text-xs font-medium">{c.name}</p>
                  <p className="text-[10px] text-[hsl(var(--aegis-green))]">● {c.status}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">API Explorer</h3>
            <div className="space-y-1.5">
              {apiEndpoints.map((e, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded bg-muted/20 hover:bg-muted/40 transition-colors">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${methodColor(e.method)}`}>{e.method}</span>
                  <code className="text-xs font-mono text-primary">{e.path}</code>
                  <span className="text-[10px] text-muted-foreground ml-auto">{e.desc}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Recent Runs */}
      <GlassCard>
        <h3 className="text-sm font-semibold text-muted-foreground mb-3">Recent Runs</h3>
        <table className="w-full text-sm">
          <thead><tr className="border-b border-border/50 text-xs text-muted-foreground">
            <th className="text-left py-2 px-2 font-medium">ID</th>
            <th className="text-left py-2 px-2 font-medium">Playbook</th>
            <th className="text-left py-2 px-2 font-medium">Trigger</th>
            <th className="text-left py-2 px-2 font-medium">Duration</th>
            <th className="text-left py-2 px-2 font-medium">Status</th>
            <th className="text-left py-2 px-2 font-medium">Time</th>
          </tr></thead>
          <tbody>
            {recentRuns.map(r => (
              <tr key={r.id} className="border-b border-border/20 hover:bg-muted/20">
                <td className="py-2 px-2 font-mono text-xs text-primary">{r.id}</td>
                <td className="py-2 px-2 font-medium">{r.playbook}</td>
                <td className="py-2 px-2 text-muted-foreground text-xs">{r.trigger}</td>
                <td className="py-2 px-2 text-xs">{r.duration}</td>
                <td className="py-2 px-2"><Badge variant={r.status === "Success" ? "default" : "secondary"} className="text-[10px]">{r.status}</Badge></td>
                <td className="py-2 px-2 text-xs text-muted-foreground">{r.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </GlassCard>
    </div>
  );
}
