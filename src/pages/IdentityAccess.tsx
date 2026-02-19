import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Users, Building2, ShieldCheck, KeyRound, Monitor, Apple, Terminal, Fingerprint, Key, Smartphone, MessageSquare, CheckCircle2, AlertTriangle, XCircle, Bot, Brain, Eye, Cpu } from "lucide-react";

const stats = [
  { label: "Active Tenants", value: "3", icon: Building2, glow: "cyan" as const },
  { label: "Total Users", value: "2,847", icon: Users, glow: "cyan" as const },
  { label: "MFA Coverage", value: "96.2%", icon: ShieldCheck, glow: "cyan" as const },
  { label: "Privileged Accounts", value: "28", icon: KeyRound, glow: "amber" as const },
];

const tenants = [
  { id: "acme-corp", name: "Acme Corp", agents: 612, users: 1420, haloScore: 96, alerts: 2, status: "Healthy" },
  { id: "startup-xyz", name: "Startup XYZ", agents: 204, users: 890, haloScore: 88, alerts: 7, status: "Warning" },
  { id: "dev-team", name: "Dev Team", agents: 468, users: 537, haloScore: 94, alerts: 1, status: "Healthy" },
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
  { time: "2m ago", event: "Privileged session started", user: "Daniel Kessler", status: "verified", detail: "Zero-trust verified — Scroll Keeper logged action" },
  { time: "8m ago", event: "MFA challenge passed", user: "Rachel Miriam", status: "verified", detail: "Biometric auth via ANGELNODE · Drift Watcher: baseline match" },
  { time: "15m ago", event: "Access denied — anomalous IP", user: "Anton Volkov", status: "blocked", detail: "Gate Keeper blocked · Seraph Brain auto-locked session" },
  { time: "22m ago", event: "Role escalation request", user: "James Torres", status: "pending", detail: "Awaiting Seraph Brain risk assessment — Fail-Closed mode" },
  { time: "1h ago", event: "New device enrolled", user: "Nadia Kuznetsova", status: "verified", detail: "Linux endpoint · ANGELNODE v3.0.0 deployed via Scroll Keeper" },
];

const mfaMethods = [
  { name: "Biometric", icon: Fingerprint, coverage: 89, enabled: true },
  { name: "Hardware Key", icon: Key, coverage: 34, enabled: true },
  { name: "Authenticator App", icon: Smartphone, coverage: 96, enabled: true },
  { name: "SMS (Fallback)", icon: MessageSquare, coverage: 100, enabled: false },
];

const aiAgentRegistry = [
  { name: "GPT-4o Production", type: "LLM", trust: 94, permissions: "Read-only data access", baseline: "Stable", lastAudit: "2m ago", status: "Verified" },
  { name: "Support Chatbot v3", type: "Chatbot", trust: 91, permissions: "Customer data (masked)", baseline: "Stable", lastAudit: "5m ago", status: "Verified" },
  { name: "RPA Invoice Agent", type: "RPA Bot", trust: 72, permissions: "Financial systems", baseline: "Drift detected", lastAudit: "12m ago", status: "Review" },
  { name: "Code Copilot", type: "AI Agent", trust: 88, permissions: "Source repos (read)", baseline: "Stable", lastAudit: "8m ago", status: "Verified" },
  { name: "Data Pipeline Orchestrator", type: "Autonomous", trust: 65, permissions: "Full DB access", baseline: "Anomalous", lastAudit: "1m ago", status: "Restricted" },
];

const biometrics = [
  { metric: "Keystroke Dynamics", score: 97, status: "Normal", detail: "Typing cadence matches baseline · Drift Watcher: no deviation" },
  { metric: "Mouse Behavior", score: 94, status: "Normal", detail: "Movement patterns consistent — no bot-like trajectories detected" },
  { metric: "Session Patterns", score: 88, status: "Alert", detail: "3 users show unusual after-hours access · Chronicle flagged kill chain" },
  { metric: "Device Fingerprint", score: 99, status: "Normal", detail: "All registered devices match hardware signatures · Anti-Tamper: OK" },
];

const sessionInspector = [
  { user: "Daniel Kessler", device: "WIN-SOC-01", location: "Tel Aviv, IL", verified: true, continuous: true, lastCheck: "12s ago", trustScore: 98 },
  { user: "Rachel Miriam", device: "MAC-ENG-14", location: "Tel Aviv, IL", verified: true, continuous: true, lastCheck: "8s ago", trustScore: 96 },
  { user: "Anton Volkov", device: "LNX-EXT-07", location: "Kyiv, UA", verified: false, continuous: false, lastCheck: "—", trustScore: 22 },
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
        <div className="flex items-center gap-2 mb-1">
          <Building2 className="h-5 w-5 text-primary" />
          <h1 className="text-2xl font-bold tracking-tight">Tenants & Identity</h1>
          <Badge variant="outline" className="text-[10px]">Multi-Tenant · Isolated</Badge>
        </div>
        <p className="text-sm text-muted-foreground">ANGELNODE-powered multi-tenant identity governance — each tenant gets isolated policies, events, alerts, and analytics · Scroll Keeper + Gate Keeper active</p>
      </div>

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

      {/* Tenant Overview */}
      <GlassCard aurora>
        <div className="flex items-center gap-2 mb-4">
          <Building2 className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">Tenant Dashboard — AngelClaw Cloud</h3>
          <Badge variant="default" className="text-[10px] ml-auto">3 Active Tenants</Badge>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {tenants.map(t => (
            <div key={t.id} className="p-4 rounded-lg bg-muted/30 border border-border/30 hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-[10px] text-muted-foreground font-mono">{t.id}</p>
                </div>
                <Badge variant={t.status === "Healthy" ? "default" : "secondary"} className="text-[10px]">{t.status}</Badge>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                <div><p className="font-bold text-base">{t.agents}</p><p className="text-muted-foreground">Agents</p></div>
                <div><p className="font-bold text-base">{t.users}</p><p className="text-muted-foreground">Users</p></div>
                <div><p className={`font-bold text-base ${t.alerts > 5 ? "text-[hsl(var(--aegis-amber))]" : "text-[hsl(var(--aegis-green))]"}`}>{t.alerts}</p><p className="text-muted-foreground">Alerts</p></div>
              </div>
              <div className="mt-3">
                <div className="flex justify-between text-[10px] text-muted-foreground mb-1">
                  <span>Halo Score</span><span className="text-primary font-semibold">{t.haloScore}</span>
                </div>
                <div className="h-1.5 rounded-full bg-muted">
                  <div className={`h-full rounded-full ${t.haloScore > 90 ? "bg-[hsl(var(--aegis-green))]" : "bg-[hsl(var(--aegis-amber))]"}`} style={{ width: `${t.haloScore}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

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

      {/* AI Agent Identity Registry */}
      <GlassCard aurora>
        <div className="flex items-center gap-2 mb-4">
          <Bot className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">AI Agent Identity Registry — OpenClaw Governed</h3>
          <Badge variant="default" className="text-[10px] ml-auto">{aiAgentRegistry.length} Managed AI Agents</Badge>
        </div>
        <div className="overflow-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border/50 text-muted-foreground text-xs">
              <th className="text-left py-2 px-2 font-medium">Agent Name</th>
              <th className="text-left py-2 px-2 font-medium">Type</th>
              <th className="text-left py-2 px-2 font-medium">Trust Level</th>
              <th className="text-left py-2 px-2 font-medium">Permissions</th>
              <th className="text-left py-2 px-2 font-medium">Behavioral Baseline</th>
              <th className="text-left py-2 px-2 font-medium">Status</th>
            </tr></thead>
            <tbody>
              {aiAgentRegistry.map(a => (
                <tr key={a.name} className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                  <td className="py-2.5 px-2"><div className="flex items-center gap-2"><Cpu className="h-3.5 w-3.5 text-primary" /><span className="font-medium">{a.name}</span></div></td>
                  <td className="py-2.5 px-2"><Badge variant="outline" className="text-[10px]">{a.type}</Badge></td>
                  <td className={`py-2.5 px-2 text-xs font-semibold ${a.trust > 85 ? "text-[hsl(var(--aegis-green))]" : a.trust > 70 ? "text-[hsl(var(--aegis-amber))]" : "text-[hsl(var(--aegis-red))]"}`}>{a.trust}%</td>
                  <td className="py-2.5 px-2 text-xs text-muted-foreground">{a.permissions}</td>
                  <td className="py-2.5 px-2"><Badge variant={a.baseline === "Stable" ? "default" : a.baseline === "Drift detected" ? "secondary" : "destructive"} className="text-[10px]">{a.baseline}</Badge></td>
                  <td className="py-2.5 px-2"><Badge variant={a.status === "Verified" ? "default" : a.status === "Review" ? "secondary" : "destructive"} className="text-[10px]">{a.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>

      <div className="grid grid-cols-12 gap-5">
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
        <div className="col-span-7">
          <GlassCard className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-4">Access Activity — Chronicle Warden Timeline</h3>
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

      {/* Behavioral Biometrics — Drift Watcher */}
      <GlassCard>
        <div className="flex items-center gap-2 mb-4">
          <Brain className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">Behavioral Biometrics — Drift Watcher Analysis</h3>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {biometrics.map(b => (
            <div key={b.metric} className="p-4 rounded-lg bg-muted/30 border border-border/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{b.metric}</span>
                <Badge variant={b.status === "Normal" ? "default" : "secondary"} className="text-[10px]">{b.status}</Badge>
              </div>
              <p className="text-2xl font-bold mb-1">{b.score}%</p>
              <div className="h-1.5 rounded-full bg-muted mb-2">
                <div className={`h-full rounded-full ${b.score > 95 ? "bg-[hsl(var(--aegis-green))]" : b.score > 90 ? "bg-primary" : "bg-[hsl(var(--aegis-amber))]"}`} style={{ width: `${b.score}%` }} />
              </div>
              <p className="text-[10px] text-muted-foreground">{b.detail}</p>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Zero-Trust Session Inspector */}
      <GlassCard glow="cyan">
        <div className="flex items-center gap-2 mb-4">
          <Eye className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">Zero-Trust Session Inspector — Continuous Verification · Fail-Closed</h3>
        </div>
        <div className="space-y-3">
          {sessionInspector.map(s => (
            <div key={s.user} className="flex items-center justify-between p-3 rounded-lg bg-muted/20 border border-border/20">
              <div className="flex items-center gap-3">
                {s.verified ? <CheckCircle2 className="h-4 w-4 text-[hsl(var(--aegis-green))]" /> : <XCircle className="h-4 w-4 text-[hsl(var(--aegis-red))]" />}
                <div>
                  <p className="text-sm font-medium">{s.user}</p>
                  <p className="text-[10px] text-muted-foreground">{s.device} · {s.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <div className="text-center">
                  <p className={`font-bold ${s.trustScore > 80 ? "text-[hsl(var(--aegis-green))]" : "text-[hsl(var(--aegis-red))]"}`}>{s.trustScore}</p>
                  <p className="text-[10px] text-muted-foreground">Trust</p>
                </div>
                <div className="text-center">
                  <Badge variant={s.continuous ? "default" : "destructive"} className="text-[10px]">{s.continuous ? "Continuous" : "Suspended"}</Badge>
                  <p className="text-[10px] text-muted-foreground mt-0.5">Last: {s.lastCheck}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

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
