import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { ScrollText, ShieldCheck, Clock, Ban, ArrowRight, Bot, Brain, Globe, Zap, CheckCircle2, Camera, RotateCcw } from "lucide-react";

const stats = [
  { label: "Active Policies", value: "156", icon: ScrollText, glow: "cyan" as const },
  { label: "Auto-Enforced", value: "142", icon: ShieldCheck, glow: "cyan" as const },
  { label: "Pending Review", value: "8", icon: Clock, glow: "amber" as const },
  { label: "Violations Blocked", value: "2,341", icon: Ban, glow: "red" as const },
];

const policies = [
  { name: "Endpoint Isolation on Anomaly", status: "Active", severity: "Critical", scope: "Endpoint", assets: 1284 },
  { name: "MFA Enforcement — All Privileged", status: "Active", severity: "High", scope: "Identity", assets: 28 },
  { name: "Cloud Egress Throttle", status: "Active", severity: "Medium", scope: "Network", assets: 256 },
  { name: "USB Device Block — Contractors", status: "Active", severity: "High", scope: "Endpoint", assets: 48 },
  { name: "Guest Network Quarantine", status: "Draft", severity: "Medium", scope: "Network", assets: 44 },
  { name: "Lateral Movement Kill Chain", status: "Active", severity: "Critical", scope: "Network", assets: 842 },
  { name: "Legacy TLS Deprecation", status: "Disabled", severity: "Low", scope: "Network", assets: 32 },
  { name: "AI Model Access Control", status: "Active", severity: "Critical", scope: "AI Agent", assets: 156 },
];

const aiAgentPolicies = [
  { name: "LLM Prompt Filtering", desc: "Block injection patterns, jailbreak attempts, and adversarial prompts across all LLM endpoints", status: "Active", enforced: 14 },
  { name: "Model Access Control", desc: "Restrict which AI models can be accessed per user role and environment", status: "Active", enforced: 8 },
  { name: "Output Sanitization", desc: "Strip PII, credentials, and classified data from all AI-generated responses", status: "Active", enforced: 6 },
  { name: "Data Boundary Enforcement", desc: "Prevent AI agents from accessing data outside their authorized scope", status: "Active", enforced: 12 },
  { name: "Agent Rate Limiting", desc: "Throttle inference requests to prevent abuse and resource exhaustion", status: "Active", enforced: 5 },
  { name: "Autonomous Action Approval", desc: "Require Seraph Brain verification for high-risk autonomous agent actions — Fail-Closed", status: "Active", enforced: 3 },
];

const propagationSteps = [
  { region: "AngelClaw Cloud", time: "0s", status: "Origin", nodes: 1 },
  { region: "US-East", time: "1.2s", status: "Synced", nodes: 312 },
  { region: "EU-West", time: "2.8s", status: "Synced", nodes: 284 },
  { region: "APAC", time: "3.6s", status: "Synced", nodes: 198 },
  { region: "All ANGELNODEs", time: "4.2s", status: "Complete", nodes: 1284 },
];

const autoEvolvedPolicies = [
  { name: "Adaptive Phishing Detection v4.7", origin: "AI-Generated", trigger: "New phishing patterns detected across 3 sectors · Vigil Warden", confidence: 96, applied: "2h ago" },
  { name: "Agent Behavioral Baseline Drift", origin: "AI-Refined", trigger: "RPA agent showed anomalous API call patterns · Drift Watcher", confidence: 92, applied: "4h ago" },
  { name: "Zero-Day Endpoint Hardening", origin: "AI-Generated", trigger: "Pre-emptive rule based on Seraph Brain threat intel correlation", confidence: 89, applied: "8h ago" },
];

const snapshots = [
  { version: "v1.7.4", created: "2h ago", policies: 156, status: "Current", auto: false },
  { version: "v1.7.3", created: "1d ago", policies: 154, status: "Archived", auto: true },
  { version: "v1.7.2", created: "3d ago", policies: 151, status: "Archived", auto: true },
  { version: "v1.7.1", created: "7d ago", policies: 148, status: "Archived", auto: false },
];

const statusColor = (s: string) => s === "Active" ? "default" as const : s === "Draft" ? "secondary" as const : "outline" as const;
const sevColor = (s: string) => s === "Critical" ? "text-[hsl(var(--aegis-red))]" : s === "High" ? "text-[hsl(var(--aegis-amber))]" : s === "Medium" ? "text-primary" : "text-muted-foreground";

export default function PoliciesHub() {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <ScrollText className="h-5 w-5 text-primary" />
          <h1 className="text-2xl font-bold tracking-tight">Zero-Trust Policy Center</h1>
          <Badge variant="outline" className="text-[10px]">540 Rules · Default-Deny</Badge>
        </div>
        <p className="text-sm text-muted-foreground">AngelClaw Cloud autonomous policy enforcement · visual rules engine for AI agents, endpoints, and networks · snapshots & rollback · policy propagation in 4.2s</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {stats.map(s => (
          <GlassCard key={s.label} glow={s.glow} className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-primary/10"><s.icon className="h-5 w-5 text-primary" /></div>
            <div><p className="text-2xl font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></div>
          </GlassCard>
        ))}
      </div>

      {/* Policy Canvas */}
      <GlassCard>
        <h3 className="text-sm font-semibold text-muted-foreground mb-4">Policy Canvas — 540-Rule Zero-Trust Bootstrap</h3>
        <div className="grid grid-cols-2 gap-3">
          {policies.map(p => (
            <div key={p.name} className="p-3 rounded-lg bg-muted/30 border border-border/30 flex items-center justify-between hover:bg-muted/50 transition-colors">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium truncate">{p.name}</span>
                  <Badge variant={statusColor(p.status)} className="text-[10px] shrink-0">{p.status}</Badge>
                </div>
                <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                  <span className={sevColor(p.severity)}>● {p.severity}</span>
                  <span>{p.scope}</span>
                  <span>{p.assets.toLocaleString()} assets</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* AI Agent Policies */}
      <GlassCard aurora>
        <div className="flex items-center gap-2 mb-4">
          <Bot className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">AI Agent Policies — OpenClaw Governance</h3>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {aiAgentPolicies.map(p => (
            <div key={p.name} className="p-3 rounded-lg bg-muted/30 border border-border/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{p.name}</span>
                <Badge variant="default" className="text-[10px]">{p.status}</Badge>
              </div>
              <p className="text-[10px] text-muted-foreground mb-2 leading-relaxed">{p.desc}</p>
              <p className="text-[10px] text-primary">{p.enforced} AI agents enforced</p>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Policy Propagation */}
      <GlassCard>
        <div className="flex items-center gap-2 mb-4">
          <Globe className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">Policy Propagation Map — Global ANGELNODE Sync in 4.2s</h3>
        </div>
        <div className="flex items-center gap-2">
          {propagationSteps.map((p, i) => (
            <div key={p.region} className="flex items-center gap-2 flex-1">
              <div className="p-3 rounded-lg bg-muted/30 border border-border/30 flex-1 text-center">
                <p className="text-xs font-semibold">{p.region}</p>
                <p className="text-lg font-bold text-primary mt-1">{p.time}</p>
                <p className="text-[10px] text-muted-foreground">{p.nodes.toLocaleString()} nodes</p>
                <Badge variant={p.status === "Complete" ? "default" : "secondary"} className="text-[10px] mt-1">{p.status}</Badge>
              </div>
              {i < propagationSteps.length - 1 && <ArrowRight className="h-4 w-4 text-primary shrink-0" />}
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Autonomous Policy Evolution */}
      <GlassCard glow="cyan">
        <div className="flex items-center gap-2 mb-4">
          <Brain className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">Autonomous Policy Evolution — Seraph Brain AI-Generated Rules</h3>
        </div>
        <div className="space-y-3">
          {autoEvolvedPolicies.map(p => (
            <div key={p.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/20 border border-border/20">
              <div className="flex items-center gap-3">
                <Zap className="h-4 w-4 text-primary shrink-0" />
                <div>
                  <p className="text-sm font-medium">{p.name}</p>
                  <p className="text-[10px] text-muted-foreground">{p.trigger}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="text-[10px]">{p.origin}</Badge>
                <span className="text-xs text-primary font-semibold">{p.confidence}%</span>
                <span className="text-[10px] text-muted-foreground">{p.applied}</span>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Policy Snapshots */}
      <GlassCard>
        <div className="flex items-center gap-2 mb-4">
          <Camera className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">Policy Snapshots & Rollback — Every Version Saved</h3>
        </div>
        <div className="space-y-2">
          {snapshots.map(s => (
            <div key={s.version} className="flex items-center justify-between p-3 rounded-lg bg-muted/20 border border-border/20">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm text-primary font-bold">{s.version}</span>
                <div>
                  <p className="text-xs text-muted-foreground">{s.created} · {s.policies} policies</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {s.auto && <Badge variant="outline" className="text-[10px]">Auto-Snapshot</Badge>}
                <Badge variant={s.status === "Current" ? "default" : "secondary"} className="text-[10px]">{s.status}</Badge>
                {s.status !== "Current" && (
                  <button className="flex items-center gap-1 text-[10px] text-primary hover:underline">
                    <RotateCcw className="h-3 w-3" />Rollback
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
