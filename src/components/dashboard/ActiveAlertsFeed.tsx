import { useState, useEffect, useRef } from "react";
import { AlertTriangle, ShieldAlert, Info, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Severity = "critical" | "warning" | "info";
type Filter = "all" | Severity;

interface Alert {
  id: number;
  severity: Severity;
  message: string;
  warden: string;
  time: string;
  icon: typeof ShieldAlert;
}

const alertPool: Omit<Alert, "id" | "time">[] = [
  { severity: "critical", message: "Vault Keeper blocked prompt injection targeting GPT-4o", warden: "Vault Keeper", icon: ShieldAlert },
  { severity: "critical", message: "Vigil detected lateral movement from 194.x.x.x — 3-step prediction ahead", warden: "Vigil", icon: ShieldAlert },
  { severity: "warning", message: "Gate Keeper blocked API abuse cascade on /api/v1/chat", warden: "Gate Keeper", icon: AlertTriangle },
  { severity: "info", message: "Iron Wing auto-patched 14 nodes across Linux fleet — zero downtime", warden: "Iron Wing", icon: Info },
  { severity: "warning", message: "Drift Watcher flagged behavioral deviation on tenant startup-xyz", warden: "Drift Watcher", icon: AlertTriangle },
  { severity: "critical", message: "Seraph Brain neutralized jailbreak attempt on Claude 3.5 Sonnet", warden: "Seraph Brain", icon: ShieldAlert },
  { severity: "warning", message: "Chronicle detected kill-chain sequence — 4 steps ahead of attacker", warden: "Chronicle", icon: AlertTriangle },
  { severity: "critical", message: "Paladin: GDPR boundary violation blocked on Data Pipeline Agent", warden: "Paladin", icon: ShieldAlert },
  { severity: "info", message: "Scroll Keeper verified 1,284 ANGELNODE checksums — all passed", warden: "Scroll Keeper", icon: Info },
  { severity: "warning", message: "Net Warden detected port scan from 45.134.x.x — C2 pattern match", warden: "Net Warden", icon: AlertTriangle },
  { severity: "critical", message: "Glass Eye flagged adversarial input injection on customer support bot", warden: "Glass Eye", icon: ShieldAlert },
  { severity: "info", message: "Tool Smith verified supply chain integrity on 22 agent binaries", warden: "Tool Smith", icon: Info },
  { severity: "critical", message: "Deep Quill collected forensic snapshot — incident IR-2847 opened", warden: "Deep Quill", icon: ShieldAlert },
  { severity: "warning", message: "Unusual data egress pattern from subnet 10.0.3.x — monitoring active", warden: "Net Warden", icon: AlertTriangle },
  { severity: "info", message: "MFA enrollment completed for 12 users in Engineering tenant", warden: "Scroll Keeper", icon: Info },
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

const initialAlerts: Alert[] = alertPool.slice(0, 6).map((a, i) => ({
  ...a,
  id: i + 1,
  time: `${(i + 1) * 7}m ago`,
}));

export function ActiveAlertsFeed() {
  const [alerts, setAlerts] = useState<Alert[]>(initialAlerts);
  const [filter, setFilter] = useState<Filter>("all");
  const [poolIdx, setPoolIdx] = useState(6);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = alertPool[poolIdx % alertPool.length];
      const newAlert: Alert = { ...next, id: idCounter++, time: "just now" };
      setAlerts(prev => [newAlert, ...prev].slice(0, 30));
      setPoolIdx(i => i + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [poolIdx]);

  const dismiss = (id: number) => setAlerts(prev => prev.filter(a => a.id !== id));

  const filtered = filter === "all" ? alerts : alerts.filter(a => a.severity === filter);
  const criticalCount = alerts.filter(a => a.severity === "critical").length;

  const filterBtns: { label: string; value: Filter }[] = [
    { label: "All", value: "all" },
    { label: "Critical", value: "critical" },
    { label: "Warning", value: "warning" },
    { label: "Info", value: "info" },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
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
        {/* Filter tabs */}
        <div className="flex items-center gap-1 ml-auto">
          {filterBtns.map(btn => (
            <button
              key={btn.value}
              onClick={() => setFilter(btn.value)}
              className={`text-[10px] px-2 py-0.5 rounded-full border transition-colors font-medium ${
                filter === btn.value
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border/50 text-muted-foreground hover:border-border"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Feed */}
      <div ref={listRef} className="space-y-2 max-h-[260px] overflow-y-auto pr-1 scrollbar-thin">
        {filtered.length === 0 && (
          <p className="text-xs text-muted-foreground text-center py-6">No {filter} alerts</p>
        )}
        {filtered.map((alert) => {
          const Icon = alert.icon;
          return (
            <div
              key={alert.id}
              className={`flex items-start gap-3 p-3 rounded-lg border transition-all duration-300 hover:brightness-110 ${severityStyles[alert.severity]}`}
            >
              <Icon className="w-4 h-4 mt-0.5 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm leading-snug">{alert.message}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${wardenBadgeStyle[alert.severity]}`}>
                    {alert.warden}
                  </span>
                  <span className="text-[10px] opacity-60">{alert.time}</span>
                </div>
              </div>
              <button
                onClick={() => dismiss(alert.id)}
                className="opacity-40 hover:opacity-100 transition-opacity shrink-0 mt-0.5"
                aria-label="Dismiss alert"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
