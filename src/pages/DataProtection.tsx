import { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { BellRing, CheckCircle2, AlertTriangle, X, ChevronDown, ChevronUp } from "lucide-react";

const allAlerts = [
  { id: "ALT-8821", event: "Prompt injection blocked on GPT-4o", severity: "critical" as const, warden: "Vault Keeper", resolved: true,  detail: "Adversarial prompt detected — blocked before LLM ingestion. Hash logged in Deep Quill." },
  { id: "ALT-8820", event: "Binary checksum mismatch on ANGEL-004", severity: "critical" as const, warden: "Iron Wing",    resolved: true,  detail: "Anti-tamper ENFORCE · Iron Wing restored from golden image in 1.2s." },
  { id: "ALT-8819", event: "Anomalous API call sequence — RPA agent", severity: "high" as const,     warden: "Gate Keeper", resolved: true,  detail: "847 API calls/min — burst limiter applied. IP temporarily blocked." },
  { id: "ALT-8818", event: "Credential stuffing — 3,421 logins",   severity: "high" as const,     warden: "Vigil",       resolved: true,  detail: "3,421 failed logins from 14 IPs in 4 minutes. All auto-blocked by Iron Wing." },
  { id: "ALT-8817", event: "Loose allowlist — startup-xyz",         severity: "warning" as const,  warden: "Scroll Keeper",resolved: false, detail: "3 overly permissive rules flagged. Awaiting review. Risk: Medium." },
  { id: "ALT-8816", event: "Data exfil via LLM output",             severity: "critical" as const, warden: "Vault Keeper", resolved: true,  detail: "PII in LLM response — redacted before delivery. Forensics captured." },
];

const dotColor: Record<string, string> = {
  critical: "bg-[hsl(var(--aegis-red))]",
  high:     "bg-[hsl(var(--aegis-amber))]",
  warning:  "bg-primary/60",
};

export default function DataProtection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [dismissed, setDismissed]   = useState<string[]>([]);

  const visible = allAlerts.filter(a => !dismissed.includes(a.id));
  const open    = visible.filter(a => !a.resolved).length;

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex items-center gap-2">
        <BellRing className="h-5 w-5 text-primary" />
        <h1 className="text-2xl font-bold tracking-tight">Alerts & Events</h1>
        <span className="text-xs text-muted-foreground font-mono">12 wardens · auto-resolved 99.2%</span>
      </div>

      {/* 3 inline numbers */}
      <div className="flex items-center gap-10">
        <div>
          <p className="text-4xl font-bold tabular-nums" style={{ color: "hsl(var(--aegis-red))" }}>{open}</p>
          <p className="text-[10px] text-muted-foreground mt-1 tracking-wide">Open Alerts</p>
        </div>
        <div>
          <p className="text-4xl font-bold tabular-nums" style={{ color: "hsl(var(--aegis-green))" }}>4,218</p>
          <p className="text-[10px] text-muted-foreground mt-1 tracking-wide">Auto-Resolved (30d)</p>
        </div>
        <div>
          <p className="text-4xl font-bold tabular-nums text-primary">2.8s</p>
          <p className="text-[10px] text-muted-foreground mt-1 tracking-wide">Avg Resolution</p>
        </div>
      </div>

      {/* Alert feed */}
      <GlassCard>
        <div className="flex items-center gap-1.5 mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--aegis-red))] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[hsl(var(--aegis-red))]" />
          </span>
          <span className="text-[10px] font-bold tracking-widest text-[hsl(var(--aegis-red))] uppercase">Live</span>
        </div>
        <div className="space-y-1.5">
          {visible.map(a => (
            <div key={a.id} className={`rounded-lg border transition-all ${!a.resolved ? "bg-destructive/5 border-destructive/20" : "bg-muted/15 border-border/20"}`}>
              <div className="flex items-center gap-3 p-3 cursor-pointer" onClick={() => setExpandedId(expandedId === a.id ? null : a.id)}>
                <span className={`w-2 h-2 rounded-full shrink-0 ${dotColor[a.severity]}`} />
                <p className="text-sm flex-1">{a.event}</p>
                <span className="text-[10px] text-muted-foreground hidden sm:block">{a.warden}</span>
                {expandedId === a.id ? <ChevronUp className="w-3.5 h-3.5 text-muted-foreground shrink-0" /> : <ChevronDown className="w-3.5 h-3.5 text-muted-foreground shrink-0" />}
                <button onClick={e => { e.stopPropagation(); setDismissed(d => [...d, a.id]); }} className="opacity-40 hover:opacity-100 transition-opacity">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              {expandedId === a.id && (
                <div className="px-9 pb-3 border-t border-border/20">
                  <p className="text-xs text-muted-foreground pt-2 leading-relaxed">{a.detail}</p>
                  <span className="text-[10px] text-primary font-semibold mt-1 block">
                    {a.resolved ? "✓ Auto-Resolved" : "⚠ Needs Attention"}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Seraph Brain insight */}
      <GlassCard glow="cyan">
        <p className="text-sm leading-relaxed text-muted-foreground border-l-2 border-primary/30 pl-3">
          3 critical events correlated: coordinated multi-vector attack from <span className="text-primary font-semibold">194.x.x.x</span> — Iron Wing isolated in <span style={{ color: "hsl(var(--aegis-green))" }} className="font-semibold">0.9s</span> · confidence <span className="text-primary font-bold">97.4%</span>
        </p>
      </GlassCard>

    </div>
  );
}
