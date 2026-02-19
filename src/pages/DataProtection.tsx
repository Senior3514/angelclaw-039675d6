import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { BellRing, ShieldAlert, CheckCircle2, XCircle, AlertTriangle, Eye, Cpu, Zap, Activity, Brain, Clock, Filter } from "lucide-react";

const stats = [
  { label: "Active Alerts", value: "12", icon: BellRing, glow: "amber" as const },
  { label: "Auto-Resolved", value: "4,218", icon: CheckCircle2, glow: "cyan" as const },
  { label: "Critical Events", value: "3", icon: ShieldAlert, glow: "red" as const },
  { label: "Avg Resolution", value: "2.8s", icon: Clock, glow: "cyan" as const },
];

const alerts = [
  { id: "ALT-8821", time: "2m ago", event: "Prompt injection attempt blocked", agent: "GPT-4o Production", tenant: "acme-corp", severity: "critical", warden: "Vault Keeper", resolved: true, detail: "Adversarial prompt detected — Vault Keeper blocked before LLM ingestion" },
  { id: "ALT-8820", time: "8m ago", event: "Binary checksum mismatch on ANGEL-004", agent: "ANGEL-004", tenant: "dev-team", severity: "critical", warden: "Iron Wing", resolved: true, detail: "Anti-tamper ENFORCE · Iron Wing restored from golden image in 1.2s" },
  { id: "ALT-8819", time: "15m ago", event: "Anomalous API call sequence detected", agent: "RPA Invoice Agent", tenant: "startup-xyz", severity: "high", warden: "Gate Keeper", resolved: true, detail: "Gate Keeper flagged 847 API calls/min — rate limiter applied" },
  { id: "ALT-8818", time: "22m ago", event: "Credential stuffing attempt", agent: "Edge-FW-01", tenant: "acme-corp", severity: "high", warden: "Vigil", resolved: true, detail: "Vigil detected pattern — 3,421 failed logins from 14 IPs. Auto-blocked." },
  { id: "ALT-8817", time: "35m ago", event: "Loose allowlist detected — startup-xyz", agent: "ANGELNODE Cloud", tenant: "startup-xyz", severity: "warning", warden: "Scroll Keeper", resolved: false, detail: "Self-Hardening Engine flagged 3 overly permissive rules — awaiting operator review" },
  { id: "ALT-8816", time: "1h ago", event: "Data exfiltration attempt via LLM output", agent: "Data Pipeline Agent", tenant: "dev-team", severity: "critical", warden: "Vault Keeper", resolved: true, detail: "PII detected in LLM response — redacted before delivery · Deep Quill collected evidence" },
  { id: "ALT-8815", time: "2h ago", event: "Agent behavioral drift — baseline deviation", agent: "Autonomous Orchestrator", tenant: "acme-corp", severity: "high", warden: "Drift Watcher", resolved: true, detail: "Drift Watcher detected 34% deviation from peer baseline — session quarantined" },
  { id: "ALT-8814", time: "3h ago", event: "DNS tunneling detected on IoT-Gateway", agent: "IoT-Gateway", tenant: "startup-xyz", severity: "warning", warden: "Net Warden", resolved: true, detail: "Net Warden blocked C2 beacon attempt — node isolated, Paladin notified GDPR team" },
  { id: "ALT-8813", time: "4h ago", event: "Suspicious browser extension threat", agent: "WS-Pool endpoint", tenant: "dev-team", severity: "warning", warden: "Glass Eye", resolved: true, detail: "Glass Eye detected page injection attempt · extension quarantined" },
  { id: "ALT-8812", time: "6h ago", event: "Supply chain tool abuse detected", agent: "Build Pipeline", tenant: "acme-corp", severity: "high", warden: "Tool Smith", resolved: true, detail: "Tool Smith detected unsigned dependency injection · build stopped, reverted" },
  { id: "ALT-8811", time: "8h ago", event: "Kill chain sequence — lateral movement", agent: "Internal Segment", tenant: "acme-corp", severity: "critical", warden: "Chronicle", resolved: true, detail: "Chronicle correlated 5-step kill chain · Iron Wing isolated 3 nodes in 0.9s" },
  { id: "ALT-8810", time: "12h ago", event: "HIPAA compliance drift detected", agent: "Patient Data API", tenant: "startup-xyz", severity: "warning", warden: "Paladin", resolved: false, detail: "Paladin: 2 HIPAA controls out of compliance — manual review requested" },
];

const wardenAlertBreakdown = [
  { warden: "Vigil", alerts: 1847, critical: 342 },
  { warden: "Gate Keeper", alerts: 2847, critical: 156 },
  { warden: "Vault Keeper", alerts: 891, critical: 89 },
  { warden: "Iron Wing", alerts: 1247, critical: 47 },
  { warden: "Net Warden", alerts: 634, critical: 34 },
  { warden: "Drift Watcher", alerts: 421, critical: 12 },
  { warden: "Chronicle", alerts: 208, critical: 23 },
  { warden: "Paladin", alerts: 67, critical: 8 },
];

const realtimeFeed = [
  { time: "00:04", event: "Vault Keeper: secret scan clean — acme-corp ANGEL-001" },
  { time: "00:03", event: "Drift Watcher: baseline match — startup-xyz user session" },
  { time: "00:02", event: "Gate Keeper: API rate limit applied — startup-xyz RPA agent" },
  { time: "00:01", event: "Scroll Keeper: audit log entry created — dev-team admin action" },
  { time: "00:00", event: "Vigil: threat scan complete — 0 new threats in acme-corp" },
];

export default function DataProtection() {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <BellRing className="h-5 w-5 text-primary" />
          <h1 className="text-2xl font-bold tracking-tight">Alerts & Events</h1>
          <Badge variant="destructive" className="text-[10px]">3 Critical</Badge>
        </div>
        <p className="text-sm text-muted-foreground">Real-time alert feed from all 12 Angel Legion wardens · WebSocket live feed · every event revertible · Seraph Brain auto-resolves with 99.2% success rate</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {stats.map(s => (
          <GlassCard key={s.label} glow={s.glow} className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-primary/10"><s.icon className="h-5 w-5 text-primary" /></div>
            <div><p className="text-2xl font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></div>
          </GlassCard>
        ))}
      </div>

      {/* Warden Breakdown */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-8">
          <GlassCard className="h-full">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold text-muted-foreground">Alert Breakdown by Warden</h3>
            </div>
            <div className="space-y-2">
              {wardenAlertBreakdown.map(w => (
                <div key={w.warden} className="flex items-center gap-3">
                  <span className="text-sm font-medium w-28 shrink-0">{w.warden}</span>
                  <div className="flex-1 h-5 rounded-full bg-muted overflow-hidden relative">
                    <div className="h-full bg-primary/40 rounded-full absolute" style={{ width: `${Math.min((w.alerts / 3000) * 100, 100)}%` }} />
                    <div className="h-full bg-destructive/70 rounded-full absolute" style={{ width: `${Math.min((w.critical / 3000) * 100, 100)}%` }} />
                  </div>
                  <span className="text-xs text-muted-foreground w-16 text-right">{w.alerts.toLocaleString()} total</span>
                  <span className="text-xs text-[hsl(var(--aegis-red))] w-16 text-right">{w.critical} crit</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
        <div className="col-span-4">
          <GlassCard aurora className="h-full">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold text-muted-foreground">Live WebSocket Feed</h3>
              <span className="ml-auto w-2 h-2 rounded-full bg-[hsl(var(--aegis-green))] animate-pulse" />
            </div>
            <div className="space-y-2">
              {realtimeFeed.map((f, i) => (
                <div key={i} className="p-2 rounded bg-muted/30 border border-border/20">
                  <span className="text-[10px] text-primary font-mono">T-{f.time}</span>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{f.event}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Alert Feed */}
      <GlassCard>
        <div className="flex items-center gap-2 mb-4">
          <ShieldAlert className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">Alert Center — All 12 Wardens · Revertible Actions</h3>
          <div className="ml-auto flex items-center gap-2">
            <Badge variant="outline" className="text-[10px] cursor-pointer"><Filter className="h-2.5 w-2.5 mr-1" />Filter</Badge>
            <Badge variant="destructive" className="text-[10px]">3 Unresolved</Badge>
          </div>
        </div>
        <div className="space-y-2">
          {alerts.map((a, i) => (
            <div key={i} className={`flex items-start gap-3 p-3 rounded-lg border transition-colors ${!a.resolved ? "bg-destructive/5 border-destructive/20" : "bg-muted/20 border-border/20 hover:bg-muted/30"}`}>
              {a.resolved
                ? <CheckCircle2 className="h-4 w-4 mt-0.5 text-[hsl(var(--aegis-green))] shrink-0" />
                : <AlertTriangle className="h-4 w-4 mt-0.5 text-[hsl(var(--aegis-amber))] shrink-0" />
              }
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between flex-wrap gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-primary">{a.id}</span>
                    <p className="text-sm font-medium">{a.event}</p>
                    <Badge variant={a.severity === "critical" ? "destructive" : a.severity === "high" ? "secondary" : "outline"} className="text-[10px]">{a.severity}</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-[10px]">{a.warden}</Badge>
                    <span className="text-[10px] text-muted-foreground font-mono">{a.tenant}</span>
                    <span className="text-[10px] text-muted-foreground">{a.time}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">{a.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
