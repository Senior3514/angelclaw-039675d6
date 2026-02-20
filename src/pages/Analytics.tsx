import { GlassCard } from "@/components/ui/glass-card";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { Shield } from "lucide-react";

const wardens = [
  { name: "Vigil",        type: "Endpoint · Predictive",      blocked: "4,821" },
  { name: "Net Warden",   type: "Network · DPI",              blocked: "1,279" },
  { name: "Glass Eye",    type: "Browser · Injection",        blocked: "342"   },
  { name: "Tool Smith",   type: "CI/CD · Supply Chain",       blocked: "87"    },
  { name: "Chronicle",    type: "Forensic · MITRE ATT&CK",    blocked: "2,103" },
  { name: "Vault Keeper", type: "Secrets · LLM Shield",       blocked: "156"   },
  { name: "Drift Watcher",type: "UEBA · AI Behavior",         blocked: "888"   },
  { name: "Paladin",      type: "Compliance · GRC",           blocked: "34"    },
  { name: "Gate Keeper",  type: "API · WAAP",                 blocked: "2,840" },
  { name: "Iron Wing",    type: "SOAR · Auto-Response",       blocked: "1,247" },
  { name: "Deep Quill",   type: "Forensics · IR",             blocked: "67"    },
  { name: "Scroll Keeper",type: "Audit · SIEM",               blocked: "48,291"},
];

const radarData = [
  { subject: "Endpoint", A: 98 }, { subject: "Network", A: 94 },
  { subject: "Identity", A: 96 }, { subject: "AI/ML",   A: 91 },
  { subject: "Cloud",    A: 95 }, { subject: "Compliance", A: 97 },
];

const killChain = [
  { stage: "Reconnaissance", detail: "Port scan · ANGELNODE alert in 0.4s" },
  { stage: "Delivery",       detail: "Spear-phish quarantined · 0.3s" },
  { stage: "Exploitation",   detail: "Blocked — 540-rule zero-trust policy" },
  { stage: "Remediation",    detail: "Iron Wing isolation · 4.2s mesh push" },
];

export default function Analytics() {
  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex items-center gap-2">
        <Shield className="h-5 w-5 text-primary" />
        <h1 className="text-2xl font-bold tracking-tight">Angel Legion</h1>
        <span className="text-xs text-muted-foreground font-mono">12 wardens · 62,780 threats blocked (30d)</span>
      </div>

      {/* 3 inline numbers */}
      <div className="flex items-center gap-10">
        <div>
          <p className="text-4xl font-bold tabular-nums" style={{ color: "hsl(var(--aegis-cyan))" }}>62,780</p>
          <p className="text-[10px] text-muted-foreground mt-1 tracking-wide">Threats Blocked (30d)</p>
        </div>
        <div>
          <p className="text-4xl font-bold tabular-nums" style={{ color: "hsl(var(--aegis-green))" }}>0.9s</p>
          <p className="text-[10px] text-muted-foreground mt-1 tracking-wide">Avg Response</p>
        </div>
        <div>
          <p className="text-4xl font-bold tabular-nums text-primary">99.9%</p>
          <p className="text-[10px] text-muted-foreground mt-1 tracking-wide">Uptime</p>
        </div>
      </div>

      {/* Warden strip — name + type + blocked */}
      <GlassCard aurora>
        <div className="grid grid-cols-4 gap-3">
          {wardens.map(w => (
            <div key={w.name} className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-muted/30 border border-border/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--aegis-green))] animate-pulse shrink-0" />
              <div className="min-w-0">
                <p className="text-xs font-bold text-primary truncate">{w.name}</p>
                <p className="text-[10px] text-muted-foreground truncate">{w.type}</p>
              </div>
              <p className="text-xs font-bold tabular-nums ml-auto shrink-0">{w.blocked}</p>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Kill chain + Radar */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-7">
          <GlassCard className="h-full">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">Chronicle · MITRE ATT&CK Kill Chain</p>
            <div className="space-y-0">
              {killChain.map((k, i) => (
                <div key={i} className="flex items-start gap-3 relative pl-4">
                  {i < killChain.length - 1 && <div className="absolute left-[7px] top-6 w-px h-full bg-border/50" />}
                  <div className="w-2.5 h-2.5 mt-1 rounded-full shrink-0 bg-primary/60" />
                  <div className="pb-4">
                    <p className="text-sm font-semibold">{k.stage}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{k.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
        <div className="col-span-5">
          <GlassCard glow="cyan" className="h-full flex flex-col justify-center">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Coverage — All Attack Surfaces</p>
            <ResponsiveContainer width="100%" height={200}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                <Radar dataKey="A" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.15} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
          </GlassCard>
        </div>
      </div>

    </div>
  );
}
