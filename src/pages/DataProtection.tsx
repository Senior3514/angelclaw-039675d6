import { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { BellRing, ShieldAlert, CheckCircle2, XCircle, AlertTriangle, Eye, Zap, Activity, Brain, Clock, Filter, X, ChevronDown, ChevronUp } from "lucide-react";

const stats = [
  { label: "Active Alerts", value: "12", icon: BellRing, glow: "amber" as const },
  { label: "Auto-Resolved (30d)", value: "4,218", icon: CheckCircle2, glow: "cyan" as const },
  { label: "Critical Events", value: "3", icon: ShieldAlert, glow: "red" as const },
  { label: "Avg Resolution", value: "2.8s", icon: Clock, glow: "cyan" as const },
];

const allAlerts = [
  { id: "ALT-8821", time: "2m ago", event: "Prompt injection attempt blocked", agent: "GPT-4o Production", tenant: "acme-corp", severity: "critical", warden: "Vault Keeper", resolved: true, detail: "Adversarial prompt detected — Vault Keeper blocked before LLM ingestion. Payload hash logged in Deep Quill." },
  { id: "ALT-8820", time: "8m ago", event: "Binary checksum mismatch on ANGEL-004", agent: "ANGEL-004", tenant: "dev-team", severity: "critical", warden: "Iron Wing", resolved: true, detail: "Anti-tamper ENFORCE active · Iron Wing restored from golden image in 1.2s. Audit trail captured." },
  { id: "ALT-8819", time: "15m ago", event: "Anomalous API call sequence detected", agent: "RPA Invoice Agent", tenant: "startup-xyz", severity: "high", warden: "Gate Keeper", resolved: true, detail: "Gate Keeper flagged 847 API calls/min — burst rate limiter applied. IP: 45.134.21.x temporarily blocked." },
  { id: "ALT-8818", time: "22m ago", event: "Credential stuffing attempt — 3,421 logins", agent: "Edge-FW-01", tenant: "acme-corp", severity: "high", warden: "Vigil", resolved: true, detail: "Vigil detected pattern — 3,421 failed logins from 14 IPs in 4 minutes. All IPs auto-blocked by Iron Wing." },
  { id: "ALT-8817", time: "35m ago", event: "Loose allowlist detected — startup-xyz", agent: "ANGELNODE Cloud", tenant: "startup-xyz", severity: "warning", warden: "Scroll Keeper", resolved: false, detail: "Self-Hardening Engine flagged 3 overly permissive rules — awaiting operator review. Risk: Medium." },
  { id: "ALT-8816", time: "1h ago", event: "Data exfiltration attempt via LLM output", agent: "Data Pipeline Agent", tenant: "dev-team", severity: "critical", warden: "Vault Keeper", resolved: true, detail: "PII detected in LLM response — redacted before delivery · Deep Quill collected forensic evidence bundle." },
  { id: "ALT-8815", time: "2h ago", event: "Agent behavioral drift — 34% baseline deviation", agent: "Autonomous Orchestrator", tenant: "acme-corp", severity: "high", warden: "Drift Watcher", resolved: true, detail: "Drift Watcher detected 34% deviation from peer baseline — session quarantined pending Seraph Brain review." },
  { id: "ALT-8814", time: "3h ago", event: "DNS tunneling detected on IoT-Gateway", agent: "IoT-Gateway", tenant: "startup-xyz", severity: "warning", warden: "Net Warden", resolved: true, detail: "Net Warden blocked C2 beacon attempt — node isolated, Paladin notified GDPR team for cross-border data review." },
  { id: "ALT-8813", time: "4h ago", event: "Suspicious browser extension injection", agent: "WS-Pool endpoint", tenant: "dev-team", severity: "warning", warden: "Glass Eye", resolved: true, detail: "Glass Eye detected page injection attempt · extension quarantined. 12 affected sessions logged." },
  { id: "ALT-8812", time: "6h ago", event: "Supply chain tool abuse — unsigned dependency", agent: "Build Pipeline", tenant: "acme-corp", severity: "high", warden: "Tool Smith", resolved: true, detail: "Tool Smith detected unsigned dependency injection · build stopped and reverted to last known-good state." },
  { id: "ALT-8811", time: "8h ago", event: "Kill chain: 5-step lateral movement sequence", agent: "Internal Segment", tenant: "acme-corp", severity: "critical", warden: "Chronicle", resolved: true, detail: "Chronicle correlated 5-step kill chain · Iron Wing isolated 3 nodes in 0.9s. MITRE ATT&CK: T1021.002." },
  { id: "ALT-8810", time: "12h ago", event: "HIPAA compliance drift detected", agent: "Patient Data API", tenant: "startup-xyz", severity: "warning", warden: "Paladin", resolved: false, detail: "Paladin: 2 HIPAA controls out of compliance — manual review requested. Deadline: 48h per SLA." },
];

const wardenBreakdown = [
  { warden: "Vigil", alerts: 1847, critical: 342, pct: 95 },
  { warden: "Gate Keeper", alerts: 2847, critical: 156, pct: 100 },
  { warden: "Vault Keeper", alerts: 891, critical: 89, pct: 100 },
  { warden: "Iron Wing", alerts: 1247, critical: 47, pct: 100 },
  { warden: "Net Warden", alerts: 634, critical: 34, pct: 98 },
  { warden: "Drift Watcher", alerts: 421, critical: 12, pct: 97 },
  { warden: "Chronicle", alerts: 208, critical: 23, pct: 100 },
  { warden: "Paladin", alerts: 67, critical: 8, pct: 100 },
];

const realtimeFeed = [
  { time: "00:04", event: "Vault Keeper: secret scan clean — acme-corp ANGEL-001", type: "info" },
  { time: "00:03", event: "Drift Watcher: baseline match — startup-xyz user session", type: "info" },
  { time: "00:02", event: "Gate Keeper: API rate limit applied — startup-xyz RPA agent", type: "warn" },
  { time: "00:01", event: "Scroll Keeper: audit log entry created — dev-team admin action", type: "info" },
  { time: "00:00", event: "Vigil: threat scan complete — 0 new threats in acme-corp", type: "info" },
  { time: "00:05", event: "Iron Wing: heartbeat verified — 1,284/1,284 ANGELNODEs", type: "info" },
];

type SevFilter = "all" | "critical" | "high" | "warning";

export default function DataProtection() {
  const [sevFilter, setSevFilter] = useState<SevFilter>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [dismissed, setDismissed] = useState<string[]>([]);

  const filtered = allAlerts
    .filter(a => !dismissed.includes(a.id))
    .filter(a => sevFilter === "all" || a.severity === sevFilter);

  const unresolvedCount = allAlerts.filter(a => !a.resolved && !dismissed.includes(a.id)).length;

  const sevBtnStyle = (v: SevFilter) => sevFilter === v
    ? "bg-primary text-primary-foreground"
    : "bg-muted/40 text-muted-foreground hover:text-foreground border border-border/50";

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <BellRing className="h-5 w-5 text-primary" />
          <h1 className="text-2xl font-bold tracking-tight">Alerts & Events</h1>
          <Badge variant="destructive" className="text-[10px]">{unresolvedCount} Unresolved</Badge>
        </div>
        <p className="text-sm text-muted-foreground">Real-time alert feed from all 12 Angel Legion wardens · every event revertible · Seraph Brain auto-resolves with 99.2% success rate</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {stats.map(s => (
          <GlassCard key={s.label} glow={s.glow} className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-primary/10"><s.icon className="h-5 w-5 text-primary" /></div>
            <div><p className="text-2xl font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></div>
          </GlassCard>
        ))}
      </div>

      {/* Warden Breakdown + Live Feed */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-8">
          <GlassCard className="h-full">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold text-muted-foreground">Alert Breakdown by Warden</h3>
            </div>
            <div className="space-y-2.5">
              {wardenBreakdown.map(w => (
                <div key={w.warden} className="flex items-center gap-3">
                  <span className="text-xs font-semibold w-28 shrink-0 text-primary">{w.warden}</span>
                  <div className="flex-1 h-5 rounded-full bg-muted/50 overflow-hidden relative">
                    <div className="h-full bg-primary/30 rounded-full absolute transition-all" style={{ width: `${Math.min((w.alerts / 3000) * 100, 100)}%` }} />
                    <div className="h-full bg-[hsl(var(--aegis-red)/0.6)] rounded-full absolute transition-all" style={{ width: `${Math.min((w.critical / 3000) * 100, 100)}%` }} />
                  </div>
                  <span className="text-xs text-muted-foreground w-20 text-right">{w.alerts.toLocaleString()}</span>
                  <span className="text-xs text-[hsl(var(--aegis-red))] w-16 text-right font-semibold">{w.critical} crit</span>
                  <span className="text-[10px] text-[hsl(var(--aegis-green))] w-12 text-right">{w.pct}%</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
        <div className="col-span-4">
          <GlassCard aurora className="h-full">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold text-muted-foreground">Live Warden Feed</h3>
              <span className="ml-auto flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--aegis-green))] animate-pulse" />
                <span className="text-[9px] text-[hsl(var(--aegis-green))] font-bold">LIVE</span>
              </span>
            </div>
            <div className="space-y-2">
              {realtimeFeed.map((f, i) => (
                <div key={i} className={`p-2 rounded border ${f.type === "warn" ? "bg-[hsl(var(--aegis-amber)/0.05)] border-[hsl(var(--aegis-amber)/0.2)]" : "bg-muted/20 border-border/20"}`}>
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
            {(["all", "critical", "high", "warning"] as SevFilter[]).map(v => (
              <button key={v} onClick={() => setSevFilter(v)} className={`text-[10px] px-2.5 py-1 rounded-full font-semibold transition-all ${sevBtnStyle(v)}`}>
                {v === "all" ? "All" : v.charAt(0).toUpperCase() + v.slice(1)}
              </button>
            ))}
            <Badge variant="destructive" className="text-[10px]">{unresolvedCount} Open</Badge>
          </div>
        </div>
        <div className="space-y-1.5">
          {filtered.map((a) => (
            <div key={a.id} className={`rounded-lg border transition-all ${!a.resolved ? "bg-destructive/5 border-destructive/20" : "bg-muted/15 border-border/20 hover:bg-muted/25"}`}>
              <div
                className="flex items-start gap-3 p-3 cursor-pointer"
                onClick={() => setExpandedId(expandedId === a.id ? null : a.id)}
              >
                {a.resolved
                  ? <CheckCircle2 className="h-4 w-4 mt-0.5 text-[hsl(var(--aegis-green))] shrink-0" />
                  : <AlertTriangle className="h-4 w-4 mt-0.5 text-[hsl(var(--aegis-amber))] shrink-0" />
                }
                <div className="flex-1 min-w-0">
                  <div className="flex items-center flex-wrap gap-1.5">
                    <span className="font-mono text-[10px] text-primary">{a.id}</span>
                    <p className="text-sm font-medium">{a.event}</p>
                    <Badge variant={a.severity === "critical" ? "destructive" : a.severity === "high" ? "secondary" : "outline"} className="text-[10px]">{a.severity}</Badge>
                    <span className="ml-auto flex items-center gap-2">
                      <Badge variant="outline" className="text-[10px]">{a.warden}</Badge>
                      <span className="text-[10px] text-muted-foreground font-mono">{a.tenant}</span>
                      <span className="text-[10px] text-muted-foreground">{a.time}</span>
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  {expandedId === a.id ? <ChevronUp className="w-3.5 h-3.5 text-muted-foreground" /> : <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />}
                  <button onClick={e => { e.stopPropagation(); setDismissed(d => [...d, a.id]); }} className="opacity-40 hover:opacity-100 transition-opacity ml-1">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              {expandedId === a.id && (
                <div className="px-10 pb-3">
                  <p className="text-xs text-muted-foreground leading-relaxed border-t border-border/30 pt-2">{a.detail}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[10px] text-muted-foreground">Agent: <span className="text-primary font-mono">{a.agent}</span></span>
                    {a.resolved
                      ? <Badge variant="default" className="text-[10px]">Auto-Resolved</Badge>
                      : <Badge variant="destructive" className="text-[10px]">Needs Attention</Badge>
                    }
                  </div>
                </div>
              )}
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="text-center text-sm text-muted-foreground py-8">No {sevFilter} alerts</p>
          )}
        </div>
      </GlassCard>

      {/* Seraph Brain insight */}
      <GlassCard glow="cyan">
        <div className="flex items-center gap-3">
          <Brain className="h-5 w-5 text-primary shrink-0" />
          <div>
            <p className="text-sm font-semibold">Seraph Brain — Alert Insight</p>
            <p className="text-xs text-muted-foreground mt-0.5">3 critical events today are correlated: a coordinated multi-vector attack from <span className="text-primary font-medium">194.x.x.x</span> targeting LLM endpoints and agent binaries simultaneously. Iron Wing isolated the threat in <span className="text-[hsl(var(--aegis-green))] font-medium">0.9s</span>. All 3 tenants protected. Confidence: <span className="text-primary font-bold">97.4%</span>.</p>
          </div>
          <Badge variant="default" className="text-[10px] shrink-0">97.4% Confidence</Badge>
        </div>
      </GlassCard>
    </div>
  );
}
