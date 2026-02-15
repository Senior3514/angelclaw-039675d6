import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Users, UserCheck, ShieldCheck, KeyRound, Monitor, Apple, Terminal, Fingerprint, Key, Smartphone, MessageSquare, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";

const stats = [
  { label: "Total Users", value: "2,847", icon: Users, glow: "cyan" as const },
  { label: "Active Sessions", value: "342", icon: UserCheck, glow: "cyan" as const },
  { label: "MFA Coverage", value: "96.2%", icon: ShieldCheck, glow: "cyan" as const },
  { label: "Privileged Accounts", value: "28", icon: KeyRound, glow: "amber" as const },
];

const users = [
  { initials: "DK", name: "Daniel Kessler", role: "SOC Lead", dept: "Security Ops", os: "Windows", mfa: true, lastActive: "2m ago", risk: 12 },
  { initials: "RM", name: "Rachel Miriam", role: "DevOps Engineer", dept: "Engineering", os: "macOS", mfa: true, lastActive: "5m ago", risk: 8 },
  { initials: "AV", name: "Anton Volkov", role: "Contractor", dept: "External", os: "Linux", mfa: false, lastActive: "1h ago", risk: 67 },
  { initials: "SL", name: "Sara Levi", role: "CISO", dept: "Management", os: "macOS", mfa: true, lastActive: "12m ago", risk: 3 },
  { initials: "JT", name: "James Torres", role: "Sys Admin", dept: "IT Ops", os: "Windows", mfa: true, lastActive: "30m ago", risk: 21 },
  { initials: "NK", name: "Nadia Kuznetsova", role: "Data Analyst", dept: "Analytics", os: "Linux", mfa: true, lastActive: "45m ago", risk: 15 },
];

const groups = [
  { name: "Administrators", members: 12, policies: 8, trust: "Critical" },
  { name: "Engineering", members: 156, policies: 14, trust: "High" },
  { name: "SOC Team", members: 34, policies: 22, trust: "Critical" },
  { name: "Contractors", members: 48, policies: 6, trust: "Low" },
];

const timeline = [
  { time: "2m ago", event: "Privileged session started", user: "Daniel Kessler", status: "verified", detail: "Zero-trust verified, endpoint compliant" },
  { time: "8m ago", event: "MFA challenge passed", user: "Rachel Miriam", status: "verified", detail: "Biometric authentication via AEGIS Agent" },
  { time: "15m ago", event: "Access denied — anomalous IP", user: "Anton Volkov", status: "blocked", detail: "Auto-remediation: session terminated, account locked" },
  { time: "22m ago", event: "Role escalation request", user: "James Torres", status: "pending", detail: "Awaiting AEGIS AI risk assessment" },
  { time: "1h ago", event: "New device enrolled", user: "Nadia Kuznetsova", status: "verified", detail: "Linux endpoint — AEGIS Agent v4.2 deployed" },
];

const mfaMethods = [
  { name: "Biometric", icon: Fingerprint, coverage: 89, enabled: true },
  { name: "Hardware Key", icon: Key, coverage: 34, enabled: true },
  { name: "Authenticator App", icon: Smartphone, coverage: 96, enabled: true },
  { name: "SMS (Fallback)", icon: MessageSquare, coverage: 100, enabled: false },
];

const OsIcon = ({ os }: { os: string }) => {
  if (os === "Windows") return <Monitor className="h-3.5 w-3.5 text-[hsl(var(--aegis-cyan))]" />;
  if (os === "macOS") return <Apple className="h-3.5 w-3.5 text-muted-foreground" />;
  return <Terminal className="h-3.5 w-3.5 text-[hsl(var(--aegis-green))]" />;
};

const riskColor = (r: number) => r > 50 ? "text-[hsl(var(--aegis-red))]" : r > 20 ? "text-[hsl(var(--aegis-amber))]" : "text-[hsl(var(--aegis-green))]";

export default function IdentityAccess() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Identity & Access Management</h1>
        <p className="text-sm text-muted-foreground mt-1">Autonomous identity governance across all endpoints and OS environments</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map(s => (
          <GlassCard key={s.label} glow={s.glow} className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-primary/10"><s.icon className="h-5 w-5 text-primary" /></div>
            <div>
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* User Directory */}
      <GlassCard>
        <h3 className="text-sm font-semibold text-muted-foreground mb-4">User Directory</h3>
        <div className="overflow-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 text-muted-foreground text-xs">
                <th className="text-left py-2 px-2 font-medium">User</th>
                <th className="text-left py-2 px-2 font-medium">Role</th>
                <th className="text-left py-2 px-2 font-medium">Department</th>
                <th className="text-left py-2 px-2 font-medium">OS</th>
                <th className="text-left py-2 px-2 font-medium">MFA</th>
                <th className="text-left py-2 px-2 font-medium">Last Active</th>
                <th className="text-left py-2 px-2 font-medium">Risk</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.name} className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                  <td className="py-2.5 px-2">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-7 w-7"><AvatarFallback className="text-[10px] bg-primary/20 text-primary">{u.initials}</AvatarFallback></Avatar>
                      <span className="font-medium">{u.name}</span>
                    </div>
                  </td>
                  <td className="py-2.5 px-2 text-muted-foreground">{u.role}</td>
                  <td className="py-2.5 px-2 text-muted-foreground">{u.dept}</td>
                  <td className="py-2.5 px-2"><div className="flex items-center gap-1.5"><OsIcon os={u.os} /><span className="text-xs">{u.os}</span></div></td>
                  <td className="py-2.5 px-2">
                    <Badge variant={u.mfa ? "default" : "destructive"} className="text-[10px]">{u.mfa ? "Enabled" : "Disabled"}</Badge>
                  </td>
                  <td className="py-2.5 px-2 text-muted-foreground text-xs">{u.lastActive}</td>
                  <td className={`py-2.5 px-2 font-semibold text-xs ${riskColor(u.risk)}`}>{u.risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>

      <div className="grid grid-cols-12 gap-5">
        {/* Groups & Policies */}
        <div className="col-span-5">
          <GlassCard className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-4">Groups & Policies</h3>
            <div className="space-y-3">
              {groups.map(g => (
                <div key={g.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/30">
                  <div>
                    <p className="font-medium text-sm">{g.name}</p>
                    <p className="text-xs text-muted-foreground">{g.members} members · {g.policies} policies</p>
                  </div>
                  <Badge variant={g.trust === "Critical" ? "destructive" : g.trust === "Low" ? "secondary" : "default"} className="text-[10px]">
                    {g.trust} Trust
                  </Badge>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Access Activity Timeline */}
        <div className="col-span-7">
          <GlassCard className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-4">Access Activity Timeline</h3>
            <div className="space-y-3">
              {timeline.map((t, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 border border-border/20">
                  {t.status === "verified" && <CheckCircle2 className="h-4 w-4 mt-0.5 text-[hsl(var(--aegis-green))]" />}
                  {t.status === "blocked" && <XCircle className="h-4 w-4 mt-0.5 text-[hsl(var(--aegis-red))]" />}
                  {t.status === "pending" && <AlertTriangle className="h-4 w-4 mt-0.5 text-[hsl(var(--aegis-amber))]" />}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{t.event}</p>
                      <span className="text-[10px] text-muted-foreground">{t.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{t.user} — {t.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

      {/* MFA Configuration */}
      <GlassCard>
        <h3 className="text-sm font-semibold text-muted-foreground mb-4">MFA Configuration</h3>
        <div className="grid grid-cols-4 gap-4">
          {mfaMethods.map(m => (
            <div key={m.name} className="p-4 rounded-lg bg-muted/30 border border-border/30 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <m.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{m.name}</span>
                </div>
                <Switch checked={m.enabled} />
              </div>
              <div>
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>Coverage</span><span>{m.coverage}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-muted">
                  <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${m.coverage}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
