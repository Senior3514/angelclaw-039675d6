const frameworks = [
  { name: "SOC2", pct: 94, color: "var(--aegis-green)" },
  { name: "ISO27001", pct: 88, color: "var(--aegis-cyan)" },
  { name: "GDPR", pct: 76, color: "var(--aegis-amber)" },
];

function MiniDonut({ pct, color, label }: { pct: number; color: string; label: string }) {
  const r = 20;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative w-12 h-12">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r={r} fill="none" stroke="hsl(var(--border))" strokeWidth="4" />
          <circle
            cx="24" cy="24" r={r} fill="none"
            stroke={`hsl(${color})`}
            strokeWidth="4" strokeLinecap="round"
            strokeDasharray={circ} strokeDashoffset={offset}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold">{pct}%</span>
      </div>
      <span className="text-[9px] text-muted-foreground">{label}</span>
    </div>
  );
}

export function ComplianceHealth() {
  return (
    <div className="flex justify-around">
      {frameworks.map((f) => (
        <MiniDonut key={f.name} pct={f.pct} color={f.color} label={f.name} />
      ))}
    </div>
  );
}
