import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { time: "00:00", threats: 12, blocked: 11 },
  { time: "04:00", threats: 8, blocked: 8 },
  { time: "08:00", threats: 24, blocked: 22 },
  { time: "12:00", threats: 38, blocked: 35 },
  { time: "16:00", threats: 29, blocked: 27 },
  { time: "20:00", threats: 18, blocked: 17 },
  { time: "Now", threats: 15, blocked: 14 },
];

export function ThreatLandscapeChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="threatGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--aegis-red))" stopOpacity={0.3} />
            <stop offset="95%" stopColor="hsl(var(--aegis-red))" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="blockedGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--aegis-cyan))" stopOpacity={0.3} />
            <stop offset="95%" stopColor="hsl(var(--aegis-cyan))" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="time" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} axisLine={false} tickLine={false} />
        <Tooltip
          contentStyle={{
            background: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "8px",
            fontSize: "12px",
          }}
        />
        <Area type="monotone" dataKey="threats" stroke="hsl(var(--aegis-red))" fill="url(#threatGrad)" strokeWidth={2} />
        <Area type="monotone" dataKey="blocked" stroke="hsl(var(--aegis-cyan))" fill="url(#blockedGrad)" strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
