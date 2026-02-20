import { useState, useEffect } from "react";

type Severity = "critical" | "warning" | "info";

interface Alert {
  id: number;
  severity: Severity;
  message: string;
}

const alertPool: Omit<Alert, "id">[] = [
  { severity: "critical", message: "Prompt injection blocked on GPT-4o" },
  { severity: "critical", message: "Jailbreak neutralized on Claude 3.5" },
  { severity: "warning", message: "API abuse cascade blocked" },
  { severity: "info", message: "14 nodes patched — zero downtime" },
  { severity: "warning", message: "Behavioral deviation flagged" },
];

const dotColor: Record<Severity, string> = {
  critical: "bg-[hsl(var(--aegis-red))]",
  warning: "bg-[hsl(var(--aegis-amber))]",
  info: "bg-[hsl(var(--aegis-cyan))]",
};

let idCounter = alertPool.length + 1;

const initialAlerts: Alert[] = alertPool.slice(0, 2).map((a, i) => ({ ...a, id: i + 1 }));

export function ActiveAlertsFeed() {
  const [alerts, setAlerts] = useState<Alert[]>(initialAlerts);
  const [poolIdx, setPoolIdx] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = alertPool[poolIdx % alertPool.length];
      const newAlert: Alert = { ...next, id: idCounter++ };
      setAlerts(prev => [newAlert, ...prev].slice(0, 2));
      setPoolIdx(i => i + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, [poolIdx]);

  return (
    <div className="flex flex-col gap-2.5">
      {/* Header */}
      <div className="flex items-center gap-1.5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--aegis-red))] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[hsl(var(--aegis-red))]" />
        </span>
        <span className="text-[10px] font-bold tracking-widest text-[hsl(var(--aegis-red))] uppercase">Live</span>
      </div>

      {/* Feed — 2 items, dot + message only */}
      <div className="space-y-2">
        {alerts.map((alert) => (
          <div key={alert.id} className="flex items-center gap-2.5 transition-all duration-300">
            <span className={`w-2 h-2 rounded-full shrink-0 ${dotColor[alert.severity]}`} />
            <p className="text-xs text-foreground/80 leading-snug">{alert.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
