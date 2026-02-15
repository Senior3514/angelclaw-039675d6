import { AlertTriangle, ShieldAlert, Info } from "lucide-react";

const alerts = [
  { id: 1, severity: "critical", message: "Brute force attempt detected on admin endpoint", time: "2m ago", icon: ShieldAlert },
  { id: 2, severity: "warning", message: "Unusual data egress pattern from subnet 10.0.3.x", time: "8m ago", icon: AlertTriangle },
  { id: 3, severity: "info", message: "MFA enrollment completed for 12 users in Engineering", time: "15m ago", icon: Info },
  { id: 4, severity: "warning", message: "SSL certificate expiring in 7 days for api.internal", time: "22m ago", icon: AlertTriangle },
  { id: 5, severity: "critical", message: "Anomalous lateral movement detected in DMZ segment", time: "31m ago", icon: ShieldAlert },
  { id: 6, severity: "info", message: "Zero-trust policy ZTP-042 auto-deployed successfully", time: "45m ago", icon: Info },
];

const severityStyles = {
  critical: "text-aegis-red bg-aegis-red/10 border-aegis-red/20",
  warning: "text-aegis-amber bg-aegis-amber/10 border-aegis-amber/20",
  info: "text-aegis-cyan bg-aegis-cyan/10 border-aegis-cyan/20",
};

export function ActiveAlertsFeed() {
  return (
    <div className="space-y-2 max-h-[260px] overflow-y-auto pr-1">
      {alerts.map((alert) => {
        const Icon = alert.icon;
        return (
          <div
            key={alert.id}
            className={`flex items-start gap-3 p-3 rounded-lg border ${severityStyles[alert.severity as keyof typeof severityStyles]} transition-colors hover:brightness-110 cursor-pointer`}
          >
            <Icon className="w-4 h-4 mt-0.5 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm leading-snug">{alert.message}</p>
              <p className="text-[10px] opacity-60 mt-1">{alert.time}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
