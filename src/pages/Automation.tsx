import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Shield, Brain, BookOpen, Zap, Eye, Target, Activity, Monitor, Apple, Terminal, Cloud, BarChart3 } from "lucide-react";

const stats = [
  { label: "Events Analyzed (30d)", value: "14,892K", icon: Shield, glow: "cyan" as const },
  { label: "Seraph Brain Queries", value: "48,291", icon: Brain, glow: "cyan" as const },
  { label: "Incident Reports", value: "23", icon: BookOpen, glow: "amber" as const },
  { label: "Avg Detection Time", value: "0.3s", icon: Zap, glow: "cyan" as const },
];

const seraphIntents = [
  { intent: "Scan the system", calls: 4821, success: 4821, lang: "EN/HE" },
  { intent: "Show me threats", calls: 3402, success: 3400, lang: "EN/HE" },
  { intent: "Anti-tamper status", calls: 2847, success: 2847, lang: "EN/HE" },
  { intent: "Legion status", calls: 2104, success: 2104, lang: "EN" },
  { intent: "Quarantine agent", calls: 891, success: 888, lang: "EN/HE" },
  { intent: "Self-hardening status", calls: 756, success: 756, lang: "EN" },
  { intent: "Feedback loop status", calls: 634, success: 634, lang: "EN" },
  { intent: "Org overview", calls: 1247, success: 1247, lang: "EN/HE" },
];

const orgMetrics = [
  { day: "Mon", events: 8420, blocked: 8415, autoFixed: 7890 },
  { day: "Tue", events: 9102, blocked: 9098, autoFixed: 8540 },
  { day: "Wed", events: 11203, blocked: 11198, autoFixed: 10890 },
  { day: "Thu", events: 10847, blocked: 10840, autoFixed: 10120 },
  { day: "Fri", events: 13421, blocked: 13418, autoFixed: 12890 },
  { day: "Sat", events: 6234, blocked: 6230, autoFixed: 5980 },
  { day: "Sun", events: 5891, blocked: 5888, autoFixed: 5640 },
];

const platformData = [
  { name: "Windows", events: 4821, blocked: 4819 },
  { name: "macOS", events: 2104, blocked: 2103 },
  { name: "Linux", events: 1847, blocked: 1846 },
  { name: "Cloud", events: 6120, blocked: 6118 },
  { name: "Mobile", events: 342, blocked: 342 },
];

const seraphStats = [
  { label: "NLP Intents", value: "71+", icon: Brain },
  { label: "API Endpoints", value: "50+", icon: Target },
  { label: "DB Tables", value: "15+", icon: BookOpen },
  { label: "Tests Passing", value: "1,848", icon: Shield },
];

const crossPlatform = [
  { platform: "Windows", icon: Monitor, events: 4821, correlated: 342, autoFixed: 338 },
  { platform: "macOS", icon: Apple, events: 2104, correlated: 156, autoFixed: 155 },
  { platform: "Linux", icon: Terminal, events: 1847, correlated: 98, autoFixed: 97 },
  { platform: "Cloud", icon: Cloud, events: 6120, correlated: 451, autoFixed: 449 },
];

export default function Automation() {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <BarChart3 className="h-5 w-5 text-primary" />
          <h1 className="text-2xl font-bold tracking-tight">Analytics & Intelligence</h1>
          <Badge variant="outline" className="text-[10px]">Seraph Brain · 71+ Intents</Badge>
        </div>
        <p className="text-sm text-muted-foreground">Seraph Brain natural language security operations in English and Hebrew · event replay · threat hunting DSL · 48,291 daily queries processed</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {stats.map(s => (
          <GlassCard key={s.label} glow={s.glow} className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-primary/10"><s.icon className="h-5 w-5 text-primary" /></div>
            <div><p className="text-2xl font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></div>
          </GlassCard>
        ))}
      </div>

      {/* Seraph Brain Stats */}
      <div className="grid grid-cols-4 gap-4">
        {seraphStats.map(s => (
          <GlassCard key={s.label} glow="cyan" className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-primary/10"><s.icon className="h-5 w-5 text-primary" /></div>
            <div><p className="text-2xl font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></div>
          </GlassCard>
        ))}
      </div>

      {/* Seraph Brain Intent Dashboard */}
      <GlassCard aurora>
        <div className="flex items-center gap-2 mb-4">
          <Brain className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">Seraph Brain — Top NLP Intents (English + Hebrew)</h3>
        </div>
        <div className="overflow-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border/50 text-muted-foreground text-xs">
              <th className="text-left py-2 px-2 font-medium">Intent</th>
              <th className="text-left py-2 px-2 font-medium">Languages</th>
              <th className="text-left py-2 px-2 font-medium">Calls (30d)</th>
              <th className="text-left py-2 px-2 font-medium">Success</th>
              <th className="text-left py-2 px-2 font-medium">Rate</th>
            </tr></thead>
            <tbody>
              {seraphIntents.map(i => (
                <tr key={i.intent} className="border-b border-border/20 hover:bg-muted/20">
                  <td className="py-2 px-2 font-mono text-sm text-primary">{i.intent}</td>
                  <td className="py-2 px-2"><Badge variant="outline" className="text-[10px]">{i.lang}</Badge></td>
                  <td className="py-2 px-2 text-xs font-semibold">{i.calls.toLocaleString()}</td>
                  <td className="py-2 px-2 text-xs text-[hsl(var(--aegis-green))] font-semibold">{i.success.toLocaleString()}</td>
                  <td className="py-2 px-2">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 rounded-full bg-muted overflow-hidden">
                        <div className="h-full rounded-full bg-[hsl(var(--aegis-green))]" style={{ width: `${(i.success / i.calls) * 100}%` }} />
                      </div>
                      <span className="text-xs text-muted-foreground">{((i.success / i.calls) * 100).toFixed(1)}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>

      {/* Charts */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-8">
          <GlassCard>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Weekly Event Trend — Detected vs Blocked vs Auto-Fixed</h3>
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={orgMetrics}>
                <defs>
                  <linearGradient id="gEvents" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--aegis-amber))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--aegis-amber))" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gBlocked" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gFixed" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--aegis-green))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--aegis-green))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="day" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
                <Area type="monotone" dataKey="events" stroke="hsl(var(--aegis-amber))" fill="url(#gEvents)" strokeWidth={2} />
                <Area type="monotone" dataKey="blocked" stroke="hsl(var(--primary))" fill="url(#gBlocked)" strokeWidth={2} />
                <Area type="monotone" dataKey="autoFixed" stroke="hsl(var(--aegis-green))" fill="url(#gFixed)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </GlassCard>
        </div>
        <div className="col-span-4">
          <GlassCard className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Events by Platform</h3>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={platformData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 9 }} />
                <YAxis dataKey="name" type="category" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} width={55} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
                <Bar dataKey="events" fill="hsl(var(--aegis-amber) / 0.6)" radius={[0, 4, 4, 0]} />
                <Bar dataKey="blocked" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </GlassCard>
        </div>
      </div>

      {/* Cross-Platform */}
      <GlassCard>
        <div className="flex items-center gap-2 mb-4">
          <Activity className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">Cross-Platform Event Correlation — Simultaneous Analysis</h3>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {crossPlatform.map(c => (
            <div key={c.platform} className="p-4 rounded-lg bg-muted/30 border border-border/30 text-center">
              <c.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="text-sm font-semibold">{c.platform}</p>
              <p className="text-xl font-bold mt-1">{c.events.toLocaleString()}</p>
              <p className="text-[10px] text-muted-foreground">events analyzed</p>
              <div className="mt-2 pt-2 border-t border-border/30 grid grid-cols-2 gap-1 text-[10px]">
                <div><p className="font-semibold text-primary">{c.correlated}</p><p className="text-muted-foreground">Correlated</p></div>
                <div><p className="font-semibold text-[hsl(var(--aegis-green))]">{c.autoFixed}</p><p className="text-muted-foreground">Auto-Fixed</p></div>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
