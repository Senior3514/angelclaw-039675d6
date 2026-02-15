import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { ScrollText, ShieldCheck, Clock, Ban, ArrowRight, Users, Monitor, Network } from "lucide-react";

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
  { name: "AI Model Access Control", status: "Active", severity: "Critical", scope: "Identity", assets: 156 },
];

const ruleSteps = [
  { label: "Source", detail: "Any endpoint with risk > 40", color: "var(--aegis-cyan)" },
  { label: "Condition", detail: "Anomalous network behavior detected by AEGIS AI", color: "var(--aegis-amber)" },
  { label: "Action", detail: "Auto-isolate, notify SOC, initiate forensic capture", color: "var(--aegis-green)" },
];

const impact = { users: 2847, devices: 1284, segments: 24 };

const zonesCoverage = [
  { zone: "Internal", coverage: 98 },
  { zone: "DMZ", coverage: 94 },
  { zone: "Cloud", coverage: 96 },
  { zone: "IoT", coverage: 72 },
  { zone: "Guest", coverage: 85 },
];

const statusColor = (s: string) => s === "Active" ? "default" as const : s === "Draft" ? "secondary" as const : "outline" as const;
const sevColor = (s: string) => s === "Critical" ? "text-[hsl(var(--aegis-red))]" : s === "High" ? "text-[hsl(var(--aegis-amber))]" : s === "Medium" ? "text-primary" : "text-muted-foreground";

export default function PolicyCenter() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Zero-Trust Policy Center</h1>
        <p className="text-sm text-muted-foreground mt-1">Visual rules engine with autonomous enforcement across all environments</p>
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
        <h3 className="text-sm font-semibold text-muted-foreground mb-4">Policy Canvas</h3>
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

      <div className="grid grid-cols-12 gap-5">
        {/* Rule Builder */}
        <div className="col-span-7">
          <GlassCard aurora className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-4">Rule Builder Preview</h3>
            <div className="flex items-center gap-2">
              {ruleSteps.map((r, i) => (
                <div key={r.label} className="flex items-center gap-2 flex-1">
                  <div className="p-3 rounded-lg bg-muted/40 border border-border/40 flex-1">
                    <p className="text-xs font-semibold text-primary mb-1">{r.label}</p>
                    <p className="text-[10px] text-muted-foreground leading-relaxed">{r.detail}</p>
                  </div>
                  {i < ruleSteps.length - 1 && <ArrowRight className="h-4 w-4 text-primary shrink-0" />}
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Policy Impact */}
        <div className="col-span-5">
          <GlassCard className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-4">Policy Impact Preview</h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center p-3 rounded-lg bg-muted/30">
                <Users className="h-5 w-5 text-primary mx-auto mb-1" />
                <p className="text-lg font-bold">{impact.users.toLocaleString()}</p>
                <p className="text-[10px] text-muted-foreground">Users Affected</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-muted/30">
                <Monitor className="h-5 w-5 text-primary mx-auto mb-1" />
                <p className="text-lg font-bold">{impact.devices.toLocaleString()}</p>
                <p className="text-[10px] text-muted-foreground">Devices</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-muted/30">
                <Network className="h-5 w-5 text-primary mx-auto mb-1" />
                <p className="text-lg font-bold">{impact.segments}</p>
                <p className="text-[10px] text-muted-foreground">Segments</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Segmentation Intent Map */}
      <GlassCard>
        <h3 className="text-sm font-semibold text-muted-foreground mb-4">Segmentation Intent Map</h3>
        <div className="grid grid-cols-5 gap-3">
          {zonesCoverage.map(z => (
            <div key={z.zone} className="p-4 rounded-lg bg-muted/30 border border-border/30 text-center">
              <p className="text-sm font-medium mb-2">{z.zone}</p>
              <div className="h-2 rounded-full bg-muted mb-1.5">
                <div className={`h-full rounded-full ${z.coverage > 90 ? "bg-primary" : z.coverage > 80 ? "bg-[hsl(var(--aegis-amber))]" : "bg-destructive"}`} style={{ width: `${z.coverage}%` }} />
              </div>
              <p className="text-xs text-muted-foreground">{z.coverage}% covered</p>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
