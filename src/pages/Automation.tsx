import { GlassCard } from "@/components/ui/glass-card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Brain } from "lucide-react";

const intents = [
  { intent: '"Scan the system"',        calls: "4,821", lang: "EN/HE" },
  { intent: '"Show me threats"',         calls: "3,402", lang: "EN/HE" },
  { intent: '"Anti-tamper status"',      calls: "2,847", lang: "EN/HE" },
  { intent: '"Legion status"',           calls: "2,104", lang: "EN"    },
  { intent: '"Quarantine agent"',        calls: "891",   lang: "EN/HE" },
  { intent: '"סרוק את המערכת"',          calls: "892",   lang: "HE"    },
];

const weeklyData = [
  { day: "Mon", events: 8420,  blocked: 8415  },
  { day: "Tue", events: 9102,  blocked: 9098  },
  { day: "Wed", events: 11203, blocked: 11198 },
  { day: "Thu", events: 10847, blocked: 10840 },
  { day: "Fri", events: 13421, blocked: 13418 },
  { day: "Sat", events: 6234,  blocked: 6230  },
  { day: "Sun", events: 5891,  blocked: 5888  },
];

export default function Automation() {
  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex items-center gap-2">
        <Brain className="h-5 w-5 text-primary" />
        <h1 className="text-2xl font-bold tracking-tight">Seraph Brain</h1>
        <span className="text-xs text-muted-foreground font-mono">71+ intents · EN + עברית · 48,291 daily queries</span>
      </div>

      {/* 3 inline numbers */}
      <div className="flex items-center gap-10">
        <div>
          <p className="text-4xl font-bold tabular-nums" style={{ color: "hsl(var(--aegis-cyan))" }}>48,291</p>
          <p className="text-[10px] text-muted-foreground mt-1 tracking-wide">Daily Queries</p>
        </div>
        <div>
          <p className="text-4xl font-bold tabular-nums" style={{ color: "hsl(var(--aegis-green))" }}>0.3s</p>
          <p className="text-[10px] text-muted-foreground mt-1 tracking-wide">Avg Detection</p>
        </div>
        <div>
          <p className="text-4xl font-bold tabular-nums text-primary">91.2%</p>
          <p className="text-[10px] text-muted-foreground mt-1 tracking-wide">Acceptance Rate</p>
        </div>
      </div>

      {/* Top intents — simple rows */}
      <GlassCard aurora>
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">Top NLP Intents</p>
        <div className="space-y-2">
          {intents.map(i => (
            <div key={i.intent} className="flex items-center gap-3">
              <p className="font-mono text-xs text-primary flex-1">{i.intent}</p>
              <span className="text-[10px] text-muted-foreground w-10">{i.lang}</span>
              <span className="text-xs font-bold tabular-nums w-12 text-right">{i.calls}</span>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Weekly chart */}
      <GlassCard>
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">Weekly Events — Detected vs Blocked</p>
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={weeklyData}>
            <defs>
              <linearGradient id="gEvents" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--aegis-amber))" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(var(--aegis-amber))" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gBlocked" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="day" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
            <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
            <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
            <Area type="monotone" dataKey="events" stroke="hsl(var(--aegis-amber))" fill="url(#gEvents)" strokeWidth={2} />
            <Area type="monotone" dataKey="blocked" stroke="hsl(var(--primary))" fill="url(#gBlocked)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </GlassCard>

      {/* Seraph Brain summary — 2 lines, no header chrome */}
      <GlassCard glow="cyan">
        <p className="text-sm leading-relaxed text-muted-foreground border-l-2 border-primary/30 pl-3">
          <span className="text-primary font-semibold">91.2% acceptance rate</span> across 4,218 suggestions · acme-corp upgraded to <span className="text-primary font-semibold">auto_apply</span> after crossing 94% threshold
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground border-l-2 border-primary/30 pl-3 mt-3">
          Detection threshold raised from 0.75 → <span className="text-primary font-semibold">0.82</span> — false positives down <span style={{ color: "hsl(var(--aegis-green))" }} className="font-semibold">31%</span>
        </p>
      </GlassCard>

    </div>
  );
}
