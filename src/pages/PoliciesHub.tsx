import { GlassCard } from "@/components/ui/glass-card";
import { ScrollText, ArrowRight } from "lucide-react";

const policies = [
  { name: "Endpoint Isolation on Anomaly",  severity: "Critical", scope: "Endpoint",  assets: 1284, status: "Active"   },
  { name: "MFA Enforcement — Privileged",   severity: "High",     scope: "Identity",  assets: 28,   status: "Active"   },
  { name: "Lateral Movement Kill Chain",    severity: "Critical", scope: "Network",   assets: 842,  status: "Active"   },
  { name: "AI Model Access Control",        severity: "Critical", scope: "AI Agent",  assets: 156,  status: "Active"   },
  { name: "Cloud Egress Throttle",          severity: "Medium",   scope: "Network",   assets: 256,  status: "Active"   },
  { name: "USB Device Block — Contractors", severity: "High",     scope: "Endpoint",  assets: 48,   status: "Active"   },
  { name: "LLM Prompt Filtering",           severity: "Critical", scope: "AI Agent",  assets: 14,   status: "Active"   },
  { name: "Guest Network Quarantine",       severity: "Medium",   scope: "Network",   assets: 44,   status: "Draft"    },
];

const propagation = [
  { region: "Cloud Origin",    time: "0s"   },
  { region: "US-East",        time: "1.2s" },
  { region: "EU-West",        time: "2.8s" },
  { region: "APAC",           time: "3.6s" },
  { region: "All ANGELNODEs", time: "4.2s" },
];

const evolved = [
  { name: "Adaptive Phishing Detection v4.7", confidence: 96, trigger: "Vigil — new patterns in 3 sectors" },
  { name: "Agent Behavioral Baseline Drift",  confidence: 92, trigger: "Drift Watcher — anomalous RPA calls" },
  { name: "Zero-Day Endpoint Hardening",      confidence: 89, trigger: "Seraph Brain — pre-emptive correlation" },
];

const sevColor = (s: string) =>
  s === "Critical" ? "text-[hsl(var(--aegis-red))]" : s === "High" ? "text-[hsl(var(--aegis-amber))]" : "text-primary";

export default function PoliciesHub() {
  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex items-center gap-2">
        <ScrollText className="h-5 w-5 text-primary" />
        <h1 className="text-2xl font-bold tracking-tight">Zero-Trust Policies</h1>
        <span className="text-xs text-muted-foreground font-mono">540 rules · default-deny · 4.2s global sync</span>
      </div>

      {/* 3 inline numbers */}
      <div className="flex items-center gap-10">
        <div>
          <p className="text-4xl font-bold tabular-nums" style={{ color: "hsl(var(--aegis-cyan))" }}>156</p>
          <p className="text-[10px] text-muted-foreground mt-1 tracking-wide">Active Policies</p>
        </div>
        <div>
          <p className="text-4xl font-bold tabular-nums" style={{ color: "hsl(var(--aegis-red))" }}>2,341</p>
          <p className="text-[10px] text-muted-foreground mt-1 tracking-wide">Violations Blocked</p>
        </div>
        <div>
          <p className="text-4xl font-bold tabular-nums text-primary">4.2s</p>
          <p className="text-[10px] text-muted-foreground mt-1 tracking-wide">Global Propagation</p>
        </div>
      </div>

      {/* Policy list — minimal */}
      <GlassCard>
        <div className="space-y-1.5">
          {policies.map(p => (
            <div key={p.name} className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-muted/30 border border-border/30 hover:bg-muted/50 transition-colors">
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${p.status === "Active" ? "bg-[hsl(var(--aegis-green))]" : "bg-muted-foreground"}`} />
              <p className="text-sm font-medium flex-1">{p.name}</p>
              <span className={`text-[10px] font-semibold w-14 text-right ${sevColor(p.severity)}`}>{p.severity}</span>
              <span className="text-[10px] text-muted-foreground w-16 text-right">{p.assets.toLocaleString()} assets</span>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Propagation flow */}
      <GlassCard aurora>
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">Policy Propagation — ANGELNODE Mesh</p>
        <div className="flex items-center gap-2">
          {propagation.map((p, i) => (
            <div key={p.region} className="flex items-center gap-2 flex-1">
              <div className="flex-1 text-center px-2 py-2.5 rounded-lg bg-muted/30 border border-border/30">
                <p className="text-xs font-semibold">{p.region}</p>
                <p className="text-lg font-bold text-primary mt-0.5">{p.time}</p>
              </div>
              {i < propagation.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-primary/50 shrink-0" />}
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Autonomous evolution — 3 lines */}
      <GlassCard glow="cyan">
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">Seraph Brain — Autonomous Policy Evolution</p>
        <div className="space-y-2">
          {evolved.map(e => (
            <div key={e.name} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <p className="text-sm font-medium flex-1">{e.name}</p>
              <span className="text-xs text-muted-foreground">{e.trigger}</span>
              <span className="text-xs font-bold text-primary w-10 text-right">{e.confidence}%</span>
            </div>
          ))}
        </div>
      </GlassCard>

    </div>
  );
}
