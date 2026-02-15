import { GlassCard } from "@/components/ui/glass-card";
import { SecurityPostureGauge } from "@/components/dashboard/SecurityPostureGauge";
import { ThreatLandscapeChart } from "@/components/dashboard/ThreatLandscapeChart";
import { SystemHealthGrid } from "@/components/dashboard/SystemHealthGrid";
import { ActiveAlertsFeed } from "@/components/dashboard/ActiveAlertsFeed";
import { NetworkTrustBar } from "@/components/dashboard/NetworkTrustBar";
import { ComplianceHealth } from "@/components/dashboard/ComplianceHealth";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">ANGELGRID Command Overview</h1>
        <p className="text-sm text-muted-foreground mt-1">Autonomous AI Defense Fabric — real-time posture, threat landscape, and ANGELNODE mesh status</p>
      </div>

      {/* Top row */}
      <div className="grid grid-cols-12 gap-5">
        {/* Posture Score */}
        <div className="col-span-3">
          <GlassCard aurora className="h-full flex flex-col items-center justify-center animate-shield-pulse">
            <SecurityPostureGauge score={87} />
          </GlassCard>
        </div>

        {/* Threat Landscape */}
        <div className="col-span-5">
          <GlassCard className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Threat Landscape</h3>
            <ThreatLandscapeChart />
          </GlassCard>
        </div>

        {/* Network Trust */}
        <div className="col-span-4">
          <GlassCard className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Network Trust Level</h3>
            <NetworkTrustBar />
            <div className="mt-5">
              <h3 className="text-sm font-semibold text-muted-foreground mb-3">Compliance Health</h3>
              <ComplianceHealth />
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-12 gap-5">
        {/* System Health */}
        <div className="col-span-5">
          <SystemHealthGrid />
        </div>

        {/* Active Alerts */}
        <div className="col-span-7">
          <GlassCard className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Active Alerts</h3>
            <ActiveAlertsFeed />
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
