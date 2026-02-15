import { GlassCard } from "@/components/ui/glass-card";
import { Network, Shield, Database, ClipboardCheck } from "lucide-react";

const healthItems = [
  { label: "Network", icon: Network, status: "Healthy", color: "aegis-green" as const },
  { label: "Identity", icon: Shield, status: "Healthy", color: "aegis-green" as const },
  { label: "Data", icon: Database, status: "Warning", color: "aegis-amber" as const },
  { label: "Compliance", icon: ClipboardCheck, status: "Healthy", color: "aegis-green" as const },
];

export function SystemHealthGrid() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {healthItems.map((item) => (
        <GlassCard key={item.label} className="flex items-center gap-3 p-4">
          <div className={`w-10 h-10 rounded-lg bg-${item.color}/10 flex items-center justify-center`}>
            <item.icon className={`w-5 h-5 text-${item.color}`} />
          </div>
          <div>
            <p className="text-sm font-medium">{item.label}</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className={`w-1.5 h-1.5 rounded-full bg-${item.color} animate-pulse`} />
              <span className={`text-xs text-${item.color}`}>{item.status}</span>
            </div>
          </div>
        </GlassCard>
      ))}
    </div>
  );
}
