interface Props {
  score: number;
}

export function SecurityPostureGauge({ score }: Props) {
  const circumference = 2 * Math.PI * 58;
  const offset = circumference - (score / 100) * circumference;
  const color = score >= 80 ? "var(--aegis-green)" : score >= 50 ? "var(--aegis-amber)" : "var(--aegis-red)";

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">AI Security Posture</p>
      <div className="relative w-36 h-36">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="58" fill="none" stroke="hsl(var(--border))" strokeWidth="6" />
          <circle
            cx="64" cy="64" r="58" fill="none"
            stroke={`hsl(${color})`}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000 ease-out"
            style={{ filter: `drop-shadow(0 0 8px hsl(${color} / 0.4))` }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold">{score}</span>
          <span className="text-[10px] text-muted-foreground">/ 100</span>
        </div>
      </div>
      <span className="text-xs text-aegis-green font-medium">Strong Protection</span>
    </div>
  );
}
