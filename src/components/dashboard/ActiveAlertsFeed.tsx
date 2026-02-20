import { useState, useEffect } from "react";
import { AlertTriangle, ShieldAlert, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Severity = "critical" | "warning" | "info";

interface Alert {
  id: number;
  severity: Severity;
  message: string;
  warden: string;
  time: string;
  icon: typeof ShieldAlert;
}

const alertPool: Omit<Alert, "id" | "time">[] = [
  { severity: "critical", message: "Prompt injection blocked on GPT-4o", warden: "Vault Keeper", icon: ShieldAlert },
  { severity: "critical", message: "Jailbreak neutralized on Claude 3.5", warden: "Seraph Brain", icon: ShieldAlert },
  { severity: "warning", message: "API abuse cascade blocked", warden: "Gate Keeper", icon: AlertTriangle },
  { severity: "info", message: "14 nodes patched — zero downtime", warden: "Iron Wing", icon: Info },
  { severity: "warning", message: "Behavioral deviation flagged", warden: "Drift Watcher", icon: AlertTriangle },
];

const severityStyles: Record<Severity, string> = {
  critical: "text-[hsl(var(--aegis-red))] bg-[hsl(var(--aegis-red)/0.08)] border-[hsl(var(--aegis-red)/0.2)]",
  warning: "text-[hsl(var(--aegis-amber))] bg-[hsl(var(--aegis-amber)/0.08)] border-[hsl(var(--aegis-amber)/0.2)]",
  info: "text-[hsl(var(--aegis-cyan))] bg-[hsl(var(--aegis-cyan)/0.08)] border-[hsl(var(--aegis-cyan)/0.2)]",
};

const wardenBadgeStyle: Record<Severity, string> = {
  critical: "bg-[hsl(var(--aegis-red)/0.15)] text-[hsl(var(--aegis-red))]",
  warning: "bg-[hsl(var(--aegis-amber)/0.15)] text-[hsl(var(--aegis-amber))]",
  info: "bg-[hsl(var(--aegis-cyan)/0.15)] text-[hsl(var(--aegis-cyan))]",
};

let idCounter = alertPool.length + 1;

const initialAlerts: Alert[] = alertPool.slice(0, 3).map((a, i) => ({
  ...a,
  id: i + 1,
  time: `${(i + 1) * 5}m ago`,
}));

export function ActiveAlertsFeed() {
  const [alerts, setAlerts] = useState<Alert[]>(initialAlerts);
  const [poolIdx, setPoolIdx] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = alertPool[poolIdx % alertPool.length];
      const newAlert: Alert = { ...next, id: idCounter++, time: "just now" };
      setAlerts(prev => [newAlert, ...prev].slice(0, 3));
      setPoolIdx(i => i + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, [poolIdx]);

  const criticalCount = alerts.filter(a => a.severity === "critical").length;

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2.5">
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--aegis-red))] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[hsl(var(--aegis-red))]" />
          </span>
          <span className="text-[10px] font-bold tracking-widest text-[hsl(var(--aegis-red))] uppercase">Live</span>
        </div>
        {criticalCount > 0 && (
          <Badge className="text-[10px] bg-[hsl(var(--aegis-red)/0.15)] text-[hsl(var(--aegis-red))] border border-[hsl(var(--aegis-red)/0.3)] px-1.5 py-0">
            {criticalCount} Critical
          </Badge>
        )}
      </div>

      {/* Feed — 3 items max */}
      <div className="space-y-2">
        {alerts.map((alert) => {
          const Icon = alert.icon;
          return (
            <div
              key={alert.id}
              className={`flex items-start gap-3 p-2.5 rounded-lg border transition-all duration-300 ${severityStyles[alert.severity]}`}
            >
              <Icon className="w-3.5 h-3.5 mt-0.5 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs leading-snug">{alert.message}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${wardenBadgeStyle[alert.severity]}`}>
                    {alert.warden}
                  </span>
                  <span className="text-[9px] opacity-60">{alert.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
