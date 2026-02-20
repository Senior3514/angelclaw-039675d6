import { GlassCard } from "@/components/ui/glass-card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Brain } from "lucide-react";

const tenants = [
  { tenant: "acme-corp",   rate: 94.2, autonomy: "auto_apply", accepted: 1842, rejected: 89  },
  { tenant: "startup-xyz", rate: 87.6, autonomy: "suggest",    accepted: 1204, rejected: 134 },
  { tenant: "dev-team",    rate: 92.8, autonomy: "observe",    accepted: 801,  rejected: 68  },
];

const suggestions = [
  { id: "SUG-0421", name: "Tighten allowlist — RPA agent",            confidence: 94, status: "Pending"  },
  { id: "SUG-0419", name: "Anti-tamper ENFORCE on ANGEL-006",          confidence: 98, status: "Pending"  },
  { id: "SUG-0420", name: "Rate limit rule — Gate Keeper acme-corp",   confidence: 91, status: "Accepted" },
  { id: "SUG-0418", name: "Reduce LLM inference — Data Pipeline",      confidence: 87, status: "Accepted" },
  { id: "SUG-0416", name: "Tighten DNS allowlist on IoT-Gateway",      confidence: 96, status: "Rejected" },
];

const weeklyTrend = [
  { week: "W1", accepted: 820, rejected: 74 },
  { week: "W2", accepted: 912, rejected: 68 },
  { week: "W3", accepted: 1047, rejected: 59 },
  { week: "W4", accepted: 1068, rejected: 90 },
];

const hardeningLog = [
  { action: "Tightened allowlist on RPA Invoice Agent",        time: "2h ago",  status: "Applied"  },
  { action: "Added missing audit log for dev-team admin API",  time: "4h ago",  status: "Applied"  },
  { action: "Strengthened weak auth on ANGEL-019",             time: "8h ago",  status: "Pending"  },
  { action: "Resolved misconfiguration — startup-xyz edge",    time: "12h ago", status: "Applied"  },
];

const statusColor = (s: string) =>
  s === "Accepted" ? "text-[hsl(var(--aegis-green))]" :
  s === "Rejected" ? "text-[hsl(var(--aegis-red))]"  :
  s === "Applied"  ? "text-[hsl(var(--aegis-green))]" : "text-[hsl(var(--aegis-amber))]";

export default function SelfLearning() {
  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex items-center gap-2">
        <Brain className="h-5 w-5 text-primary" />
        <h1 className="text-2xl font-bold tracking-tight">Self-Learning</h1>
        <span className="text-xs text-muted-foreground font-mono">4,218 suggestions · 91.2% accepted · every action revertible</span>
      </div>

      {/* Per-tenant acceptance */}
      <div className="grid grid-cols-3 gap-4">
        {tenants.map(t => (
          <GlassCard key={t.tenant}>
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-bold font-mono">{t.tenant}</p>
              <span className="text-[10px] text-muted-foreground">{t.autonomy}</span>
            </div>
            <p className="text-3xl font-bold text-primary">{t.rate}%</p>
            <div className="h-1 rounded-full bg-muted mt-2 overflow-hidden">
              <div
                className={`h-full rounded-full ${t.rate > 90 ? "bg-[hsl(var(--aegis-green))]" : "bg-[hsl(var(--aegis-amber))]"}`}
                style={{ width: `${t.rate}%` }}
              />
            </div>
            <div className="flex gap-3 mt-2 text-[10px] text-muted-foreground">
              <span className="text-[hsl(var(--aegis-green))] font-semibold">{t.accepted} ✓</span>
              <span className="text-[hsl(var(--aegis-red))] font-semibold">{t.rejected} ✗</span>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Suggestions + Chart */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-7">
          <GlassCard className="h-full">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">Suggestion Queue</p>
            <div className="space-y-2">
              {suggestions.map(s => (
                <div key={s.id} className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-primary w-16 shrink-0">{s.id}</span>
                  <p className="text-xs flex-1">{s.name}</p>
                  <span className="text-xs font-bold text-primary w-8 text-right">{s.confidence}%</span>
                  <span className={`text-[10px] font-bold w-14 text-right ${statusColor(s.status)}`}>{s.status}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
        <div className="col-span-5">
          <GlassCard aurora className="h-full">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Weekly Trend</p>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={weeklyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="week" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
                <Bar dataKey="accepted" fill="hsl(var(--aegis-green))" radius={[2, 2, 0, 0]} />
                <Bar dataKey="rejected" fill="hsl(var(--aegis-red))" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </GlassCard>
        </div>
      </div>

      {/* Hardening log — minimal */}
      <GlassCard>
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">Self-Hardening Log · Every Action Revertible</p>
        <div className="space-y-2">
          {hardeningLog.map((l, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--aegis-green))] shrink-0" />
              <p className="text-xs flex-1">{l.action}</p>
              <span className="text-[10px] text-muted-foreground">{l.time}</span>
              <span className={`text-[10px] font-bold w-16 text-right ${statusColor(l.status)}`}>{l.status}</span>
            </div>
          ))}
        </div>
      </GlassCard>

    </div>
  );
}
