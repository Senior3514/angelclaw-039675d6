import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Brain, ThumbsUp, ThumbsDown, Minus, Edit, TrendingUp, TrendingDown, Sliders, CheckCircle2, AlertTriangle, Zap, Building2, BarChart3 } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const stats = [
  { label: "Suggestions Made", value: "4,218", icon: Brain, glow: "cyan" as const },
  { label: "Accepted", value: "3,847", icon: ThumbsUp, glow: "cyan" as const },
  { label: "Rejected", value: "291", icon: ThumbsDown, glow: "amber" as const },
  { label: "Acceptance Rate", value: "91.2%", icon: TrendingUp, glow: "cyan" as const },
];

const tenantFeedback = [
  { tenant: "acme-corp", accepted: 1842, rejected: 89, ignored: 34, modified: 156, rate: 94.2, autonomy: "auto_apply" },
  { tenant: "startup-xyz", accepted: 1204, rejected: 134, ignored: 67, modified: 89, rate: 87.6, autonomy: "suggest" },
  { tenant: "dev-team", accepted: 801, rejected: 68, ignored: 23, modified: 45, rate: 92.8, autonomy: "observe" },
];

const suggestions = [
  { id: "SUG-0421", name: "Tighten allowlist for RPA agent — startup-xyz", confidence: 94, type: "AI-Generated", status: "Pending", warden: "Drift Watcher", impact: "Medium", created: "5m ago" },
  { id: "SUG-0420", name: "Add rate limit rule for Gate Keeper — acme-corp", confidence: 91, type: "AI-Refined", status: "Accepted", warden: "Gate Keeper", impact: "High", created: "12m ago" },
  { id: "SUG-0419", name: "Enable anti-tamper ENFORCE on ANGEL-006", confidence: 98, type: "AI-Generated", status: "Pending", warden: "Iron Wing", impact: "Critical", created: "18m ago" },
  { id: "SUG-0418", name: "Reduce LLM inference rate — Data Pipeline Agent", confidence: 87, type: "AI-Refined", status: "Accepted", warden: "Vault Keeper", impact: "Medium", created: "1h ago" },
  { id: "SUG-0417", name: "Expand Paladin HIPAA controls — startup-xyz", confidence: 82, type: "AI-Generated", status: "Modified", warden: "Paladin", impact: "High", created: "2h ago" },
  { id: "SUG-0416", name: "Tighten DNS allowlist on IoT-Gateway", confidence: 96, type: "AI-Generated", status: "Rejected", warden: "Net Warden", impact: "Low", created: "3h ago" },
];

const autoAdjustments = [
  { param: "Verbosity Level", current: "Normal", recommended: "Reduced", reason: "91% of users dismiss info-level alerts", status: "Pending" },
  { param: "Detection Threshold", current: "0.75", recommended: "0.82", reason: "False positive rate dropped after raising threshold", status: "Applied" },
  { param: "Autonomy Mode — acme-corp", current: "suggest", recommended: "auto_apply", reason: "94.2% acceptance rate — ready for full autonomy", status: "Pending" },
  { param: "Alert Frequency", current: "Real-time", recommended: "Batched (5min)", reason: "Reduces alert fatigue — no critical events missed", status: "Applied" },
];

const weeklyTrend = [
  { week: "W1", accepted: 820, rejected: 74, modified: 32 },
  { week: "W2", accepted: 912, rejected: 68, modified: 41 },
  { week: "W3", accepted: 1047, rejected: 59, modified: 38 },
  { week: "W4", accepted: 1068, rejected: 90, modified: 44 },
];

const hardeningLog = [
  { time: "2h ago", action: "Tightened allowlist on RPA Invoice Agent", autonomy: "auto_apply", revertible: true, status: "Applied" },
  { time: "4h ago", action: "Added missing audit log for dev-team admin API", autonomy: "auto_apply", revertible: true, status: "Applied" },
  { time: "8h ago", action: "Strengthened weak auth config on ANGEL-019", autonomy: "suggest", revertible: true, status: "Awaiting Approval" },
  { time: "12h ago", action: "Resolved repeated misconfiguration — startup-xyz edge node", autonomy: "auto_apply", revertible: true, status: "Applied" },
  { time: "1d ago", action: "Enabled heartbeat monitoring on 3 previously unmonitored agents", autonomy: "auto_apply", revertible: true, status: "Applied" },
];

export default function SelfLearning() {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Brain className="h-5 w-5 text-primary" />
          <h1 className="text-2xl font-bold tracking-tight">Self-Learning & Self-Hardening</h1>
          <Badge variant="outline" className="text-[10px]">Feedback Loop Active</Badge>
        </div>
        <p className="text-sm text-muted-foreground">AngelClaw tracks operator feedback to improve suggestions over time · per-tenant acceptance rates · autonomous hardening with full revert capability</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {stats.map(s => (
          <GlassCard key={s.label} glow={s.glow} className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-primary/10"><s.icon className="h-5 w-5 text-primary" /></div>
            <div><p className="text-2xl font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></div>
          </GlassCard>
        ))}
      </div>

      {/* Per-Tenant Feedback */}
      <GlassCard aurora>
        <div className="flex items-center gap-2 mb-4">
          <Building2 className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">Per-Tenant Feedback Loop — Acceptance Rates & Autonomy</h3>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {tenantFeedback.map(t => (
            <div key={t.tenant} className="p-4 rounded-lg bg-muted/30 border border-border/30">
              <div className="flex items-center justify-between mb-3">
                <p className="font-semibold text-sm font-mono">{t.tenant}</p>
                <Badge variant="outline" className="text-[10px]">{t.autonomy}</Badge>
              </div>
              <div className="grid grid-cols-4 gap-1 text-center text-[10px] mb-3">
                <div><p className="font-bold text-[hsl(var(--aegis-green))]">{t.accepted}</p><p className="text-muted-foreground">Accept</p></div>
                <div><p className="font-bold text-[hsl(var(--aegis-red))]">{t.rejected}</p><p className="text-muted-foreground">Reject</p></div>
                <div><p className="font-bold text-muted-foreground">{t.ignored}</p><p className="text-muted-foreground">Ignore</p></div>
                <div><p className="font-bold text-primary">{t.modified}</p><p className="text-muted-foreground">Modify</p></div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] mb-1">
                  <span className="text-muted-foreground">Acceptance Rate</span>
                  <span className="font-semibold text-primary">{t.rate}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div className={`h-full rounded-full ${t.rate > 90 ? "bg-[hsl(var(--aegis-green))]" : "bg-[hsl(var(--aegis-amber))]"}`} style={{ width: `${t.rate}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Pending Suggestions */}
      <GlassCard>
        <div className="flex items-center gap-2 mb-4">
          <Zap className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">Suggestion Queue — Operator Accept / Reject / Modify / Ignore</h3>
          <Badge variant="secondary" className="text-[10px] ml-auto">2 Pending</Badge>
        </div>
        <div className="overflow-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border/50 text-muted-foreground text-xs">
              <th className="text-left py-2 px-2 font-medium">ID</th>
              <th className="text-left py-2 px-2 font-medium">Suggestion</th>
              <th className="text-left py-2 px-2 font-medium">Warden</th>
              <th className="text-left py-2 px-2 font-medium">Type</th>
              <th className="text-left py-2 px-2 font-medium">Confidence</th>
              <th className="text-left py-2 px-2 font-medium">Impact</th>
              <th className="text-left py-2 px-2 font-medium">Status</th>
            </tr></thead>
            <tbody>
              {suggestions.map(s => (
                <tr key={s.id} className="border-b border-border/20 hover:bg-muted/20">
                  <td className="py-2 px-2 font-mono text-xs text-primary">{s.id}</td>
                  <td className="py-2 px-2 font-medium text-xs max-w-xs">{s.name}</td>
                  <td className="py-2 px-2"><Badge variant="outline" className="text-[10px]">{s.warden}</Badge></td>
                  <td className="py-2 px-2 text-xs text-muted-foreground">{s.type}</td>
                  <td className={`py-2 px-2 text-xs font-semibold ${s.confidence > 90 ? "text-[hsl(var(--aegis-green))]" : "text-[hsl(var(--aegis-amber))]"}`}>{s.confidence}%</td>
                  <td className="py-2 px-2"><Badge variant={s.impact === "Critical" ? "destructive" : s.impact === "High" ? "secondary" : "outline"} className="text-[10px]">{s.impact}</Badge></td>
                  <td className="py-2 px-2"><Badge variant={s.status === "Accepted" ? "default" : s.status === "Pending" ? "secondary" : s.status === "Rejected" ? "destructive" : "outline"} className="text-[10px]">{s.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>

      {/* Charts */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-7">
          <GlassCard>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Weekly Feedback Trend</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={weeklyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="week" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
                <Bar dataKey="accepted" fill="hsl(var(--aegis-green))" radius={[2, 2, 0, 0]} />
                <Bar dataKey="rejected" fill="hsl(var(--aegis-red))" radius={[2, 2, 0, 0]} />
                <Bar dataKey="modified" fill="hsl(var(--primary))" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </GlassCard>
        </div>
        <div className="col-span-5">
          <GlassCard glow="cyan" className="h-full">
            <div className="flex items-center gap-2 mb-4">
              <Sliders className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold text-muted-foreground">Auto-Adjustment Recommendations</h3>
            </div>
            <div className="space-y-3">
              {autoAdjustments.map(a => (
                <div key={a.param} className="p-3 rounded-lg bg-muted/30 border border-border/30">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold">{a.param}</span>
                    <Badge variant={a.status === "Applied" ? "default" : "secondary"} className="text-[10px]">{a.status}</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-muted-foreground mb-1">
                    <span className="line-through">{a.current}</span>
                    <span>→</span>
                    <span className="text-primary font-semibold">{a.recommended}</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground">{a.reason}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Hardening Log */}
      <GlassCard>
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle2 className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">Self-Hardening Action Log — Every Action Revertible</h3>
        </div>
        <div className="space-y-2">
          {hardeningLog.map((l, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/20 border border-border/20">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-[hsl(var(--aegis-green))] shrink-0" />
                <div>
                  <p className="text-sm font-medium">{l.action}</p>
                  <p className="text-[10px] text-muted-foreground">{l.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-[10px]">{l.autonomy}</Badge>
                <Badge variant={l.status === "Applied" ? "default" : "secondary"} className="text-[10px]">{l.status}</Badge>
                {l.revertible && <Badge variant="outline" className="text-[10px] text-[hsl(var(--aegis-cyan))]">↩ Revert</Badge>}
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
