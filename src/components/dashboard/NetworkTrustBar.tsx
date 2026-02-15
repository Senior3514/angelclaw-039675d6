const segments = [
  { label: "Verified", pct: 62, color: "bg-aegis-green" },
  { label: "Conditional", pct: 24, color: "bg-aegis-amber" },
  { label: "Untrusted", pct: 14, color: "bg-aegis-red" },
];

export function NetworkTrustBar() {
  return (
    <div className="space-y-2">
      <div className="flex h-3 rounded-full overflow-hidden bg-muted">
        {segments.map((seg) => (
          <div
            key={seg.label}
            className={`${seg.color} transition-all duration-700`}
            style={{ width: `${seg.pct}%` }}
          />
        ))}
      </div>
      <div className="flex justify-between text-[10px] text-muted-foreground">
        {segments.map((seg) => (
          <span key={seg.label} className="flex items-center gap-1">
            <span className={`w-1.5 h-1.5 rounded-full ${seg.color}`} />
            {seg.label} {seg.pct}%
          </span>
        ))}
      </div>
    </div>
  );
}
