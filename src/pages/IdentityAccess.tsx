import { GlassCard } from "@/components/ui/glass-card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Building2, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

const tenants = [
  { id: "acme-corp",   name: "Acme Corp",   haloScore: 96, agents: 612,  alerts: 2 },
  { id: "startup-xyz", name: "Startup XYZ", haloScore: 88, agents: 204,  alerts: 7 },
  { id: "dev-team",    name: "Dev Team",    haloScore: 94, agents: 468,  alerts: 1 },
];

const users = [
  { initials: "DK", name: "Daniel Kessler",    role: "SOC Lead",     mfa: true,  lastActive: "2m ago",  risk: 12 },
  { initials: "RM", name: "Rachel Miriam",      role: "DevOps",       mfa: true,  lastActive: "5m ago",  risk: 8  },
  { initials: "AV", name: "Anton Volkov",       role: "Contractor",   mfa: false, lastActive: "1h ago",  risk: 67 },
  { initials: "SL", name: "Sara Levi",          role: "CISO",         mfa: true,  lastActive: "12m ago", risk: 3  },
  { initials: "JT", name: "James Torres",       role: "Sys Admin",    mfa: true,  lastActive: "30m ago", risk: 21 },
  { initials: "NK", name: "Nadia Kuznetsova",   role: "Data Analyst", mfa: true,  lastActive: "45m ago", risk: 15 },
];

const timeline = [
  { time: "2m ago",  event: "Privileged session started",     user: "Daniel Kessler", status: "verified" as const },
  { time: "15m ago", event: "Access denied — anomalous IP",   user: "Anton Volkov",   status: "blocked"  as const },
  { time: "22m ago", event: "Role escalation request",        user: "James Torres",   status: "pending"  as const },
  { time: "1h ago",  event: "New device enrolled",            user: "Nadia Kuznetsova",status: "verified" as const },
];

const riskColor = (r: number) =>
  r > 50 ? "text-[hsl(var(--aegis-red))]" : r > 20 ? "text-[hsl(var(--aegis-amber))]" : "text-[hsl(var(--aegis-green))]";

const StatusIcon = ({ s }: { s: "verified" | "blocked" | "pending" }) =>
  s === "verified" ? <CheckCircle2 className="h-4 w-4 text-[hsl(var(--aegis-green))] shrink-0" /> :
  s === "blocked"  ? <XCircle      className="h-4 w-4 text-[hsl(var(--aegis-red))] shrink-0" />    :
                     <AlertTriangle className="h-4 w-4 text-[hsl(var(--aegis-amber))] shrink-0" />;

export default function IdentityAccess() {
  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex items-center gap-2">
        <Building2 className="h-5 w-5 text-primary" />
        <h1 className="text-2xl font-bold tracking-tight">Tenants & Identity</h1>
        <span className="text-xs text-muted-foreground font-mono">3 tenants · 2,847 users · 96.2% MFA</span>
      </div>

      {/* 3 tenant tiles — inline, compact */}
      <div className="grid grid-cols-3 gap-4">
        {tenants.map(t => (
          <GlassCard key={t.id} className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold">{t.name}</p>
                <p className="text-[10px] text-muted-foreground font-mono">{t.id}</p>
              </div>
              <span className="text-xs font-bold tabular-nums text-primary">{t.haloScore}</span>
            </div>
            <div className="h-1 rounded-full bg-muted overflow-hidden">
              <div
                className={`h-full rounded-full ${t.haloScore > 90 ? "bg-[hsl(var(--aegis-green))]" : "bg-[hsl(var(--aegis-amber))]"}`}
                style={{ width: `${t.haloScore}%` }}
              />
            </div>
            <div className="flex gap-4 text-[10px] text-muted-foreground">
              <span>{t.agents} agents</span>
              <span className={t.alerts > 5 ? "text-[hsl(var(--aegis-amber))]" : "text-[hsl(var(--aegis-green))]"}>{t.alerts} alerts</span>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Users + Timeline */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-7">
          <GlassCard className="h-full">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">User Directory</p>
            <div className="space-y-2">
              {users.map(u => (
                <div key={u.name} className="flex items-center gap-3">
                  <Avatar className="h-7 w-7 shrink-0">
                    <AvatarFallback className="text-[10px] bg-primary/20 text-primary">{u.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold truncate">{u.name}</p>
                    <p className="text-[10px] text-muted-foreground">{u.role}</p>
                  </div>
                  <span className="text-[10px] text-muted-foreground w-14 text-right">{u.lastActive}</span>
                  {u.mfa
                    ? <span className="text-[9px] text-[hsl(var(--aegis-green))] font-bold w-8">MFA</span>
                    : <span className="text-[9px] text-[hsl(var(--aegis-red))] font-bold w-8">—MFA</span>
                  }
                  <span className={`text-xs font-bold w-6 text-right ${riskColor(u.risk)}`}>{u.risk}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
        <div className="col-span-5">
          <GlassCard aurora className="h-full">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">Access Activity</p>
            <div className="space-y-3">
              {timeline.map((t, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <StatusIcon s={t.status} />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium">{t.event}</p>
                    <p className="text-[10px] text-muted-foreground">{t.user} · {t.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

    </div>
  );
}
