import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { ShieldAlert, ShieldCheck, AlertTriangle, CheckCircle2, XCircle, ToggleLeft, Cpu, Clock, Eye, Activity, Zap, Brain, Globe, ArrowRight } from "lucide-react";
import { useState } from "react";

const stats = [
  { label: "Protected Agents", value: "1,284", icon: ShieldCheck, glow: "cyan" as const },
  { label: "Tamper Attempts", value: "47", icon: ShieldAlert, glow: "red" as const },
  { label: "Blocked (Auto)", value: "47", icon: CheckCircle2, glow: "cyan" as const },
  { label: "Pending Review", value: "3", icon: AlertTriangle, glow: "amber" as const },
];

const antiTamperModes = [
  { mode: "OFF", desc: "No tamper protection active", color: "var(--muted-foreground)", active: false },
  { mode: "MONITOR", desc: "Detect and log tamper events — no blocking", color: "var(--aegis-amber)", active: false },
  { mode: "ENFORCE", desc: "Detect, block, and auto-restore agent integrity", color: "var(--aegis-green)", active: true },
];

const agents = [
  { id: "ANGEL-001", os: "Windows", tenant: "acme-corp", mode: "ENFORCE", heartbeat: "2s ago", checksum: "Valid", status: "Secure", lastTamper: "Never" },
  { id: "ANGEL-002", os: "macOS", tenant: "acme-corp", mode: "ENFORCE", heartbeat: "3s ago", checksum: "Valid", status: "Secure", lastTamper: "Never" },
  { id: "ANGEL-003", os: "Linux", tenant: "startup-xyz", mode: "MONITOR", heartbeat: "5s ago", checksum: "Valid", status: "Monitoring", lastTamper: "Never" },
  { id: "ANGEL-004", os: "Windows", tenant: "dev-team", mode: "ENFORCE", heartbeat: "1s ago", checksum: "Mismatch!", status: "Alert", lastTamper: "2m ago" },
  { id: "ANGEL-005", os: "Linux", tenant: "startup-xyz", mode: "ENFORCE", heartbeat: "4s ago", checksum: "Valid", status: "Secure", lastTamper: "Never" },
  { id: "ANGEL-006", os: "macOS", tenant: "dev-team", mode: "OFF", heartbeat: "—", checksum: "—", status: "Unprotected", lastTamper: "—" },
];

const tamperEvents = [
  { time: "2m ago", agent: "ANGEL-004", event: "Binary checksum mismatch detected", severity: "critical", resolution: "Auto-restored from golden image", resolved: true },
  { time: "1h ago", agent: "ANGEL-007", event: "ANGELNODE process killed externally", severity: "critical", resolution: "Iron Wing restarted agent · systemd unit restored", resolved: true },
  { time: "3h ago", agent: "ANGEL-012", event: "Config file modified without authorization", severity: "warning", resolution: "Drift Watcher reverted to last known-good config", resolved: true },
  { time: "6h ago", agent: "ANGEL-019", event: "Heartbeat missed for 30+ seconds", severity: "warning", resolution: "Seraph Brain investigated — network blip, not tamper", resolved: true },
  { time: "1d ago", agent: "ANGEL-031", event: "Agent binary replaced with unsigned version", severity: "critical", resolution: "Blocked by ENFORCE mode · quarantine applied", resolved: true },
];

const hardeningChecks = [
  { check: "Scan Failures", status: "Pass", detail: "0 scan failures in last 24h", severity: "ok" },
  { check: "Loose Allowlists", status: "Warning", detail: "3 overly permissive rules detected in startup-xyz", severity: "warn" },
  { check: "Missing Audit Logs", status: "Pass", detail: "Scroll Keeper: 100% log coverage", severity: "ok" },
  { check: "Weak Auth Configs", status: "Pass", detail: "All agents using SHA-256 API key auth", severity: "ok" },
  { check: "Unprotected Agents", status: "Warning", detail: "ANGEL-006 on dev-team has anti-tamper OFF", severity: "warn" },
  { check: "Repeated Misconfigs", status: "Pass", detail: "No repeated misconfigs across all tenants", severity: "ok" },
];

const propagationSteps = [
  { region: "AngelClaw Cloud", time: "0s", status: "Origin", nodes: 1 },
  { region: "US-East", time: "1.2s", status: "Synced", nodes: 312 },
  { region: "EU-West", time: "2.8s", status: "Synced", nodes: 284 },
  { region: "APAC", time: "3.6s", status: "Synced", nodes: 198 },
  { region: "All ANGELNODEs", time: "4.2s", status: "Complete", nodes: 1284 },
];

export default function PolicyCenter() {
  const [currentMode, setCurrentMode] = useState("ENFORCE");

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <ShieldAlert className="h-5 w-5 text-primary" />
          <h1 className="text-2xl font-bold tracking-tight">Anti-Tamper Protection</h1>
          <Badge variant="default" className="text-[10px]">ENFORCE Mode Active</Badge>
        </div>
        <p className="text-sm text-muted-foreground">Per-agent and per-tenant tamper protection · heartbeat monitoring · binary checksum verification · Iron Wing auto-restoration · every action revertible</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {stats.map(s => (
          <GlassCard key={s.label} glow={s.glow} className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-primary/10"><s.icon className="h-5 w-5 text-primary" /></div>
            <div><p className="text-2xl font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></div>
          </GlassCard>
        ))}
      </div>

      {/* Mode Selector */}
      <GlassCard aurora>
        <div className="flex items-center gap-2 mb-4">
          <ToggleLeft className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">Anti-Tamper Global Mode — Per-Agent Override Available</h3>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {antiTamperModes.map(m => (
            <button
              key={m.mode}
              onClick={() => setCurrentMode(m.mode)}
              className={`p-4 rounded-lg border-2 transition-all text-left ${currentMode === m.mode ? "border-primary bg-primary/10" : "border-border/30 bg-muted/20 hover:bg-muted/40"}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-bold" style={{ color: `hsl(${m.color})` }}>{m.mode}</span>
                {currentMode === m.mode && <Badge variant="default" className="text-[10px]">Active</Badge>}
              </div>
              <p className="text-xs text-muted-foreground">{m.desc}</p>
            </button>
          ))}
        </div>
      </GlassCard>

      {/* Agent Status Table */}
      <GlassCard>
        <div className="flex items-center gap-2 mb-4">
          <Cpu className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">Per-Agent Anti-Tamper Status</h3>
        </div>
        <table className="w-full text-sm">
          <thead><tr className="border-b border-border/50 text-muted-foreground text-xs">
            <th className="text-left py-2 px-2 font-medium">Agent ID</th>
            <th className="text-left py-2 px-2 font-medium">OS</th>
            <th className="text-left py-2 px-2 font-medium">Tenant</th>
            <th className="text-left py-2 px-2 font-medium">Mode</th>
            <th className="text-left py-2 px-2 font-medium">Heartbeat</th>
            <th className="text-left py-2 px-2 font-medium">Checksum</th>
            <th className="text-left py-2 px-2 font-medium">Status</th>
            <th className="text-left py-2 px-2 font-medium">Last Tamper</th>
          </tr></thead>
          <tbody>
            {agents.map(a => (
              <tr key={a.id} className="border-b border-border/20 hover:bg-muted/20">
                <td className="py-2 px-2 font-mono text-xs text-primary">{a.id}</td>
                <td className="py-2 px-2 text-xs">{a.os}</td>
                <td className="py-2 px-2 text-xs text-muted-foreground font-mono">{a.tenant}</td>
                <td className="py-2 px-2">
                  <Badge variant={a.mode === "ENFORCE" ? "default" : a.mode === "MONITOR" ? "secondary" : "outline"} className="text-[10px]">{a.mode}</Badge>
                </td>
                <td className="py-2 px-2 text-xs text-muted-foreground">{a.heartbeat}</td>
                <td className={`py-2 px-2 text-xs font-semibold ${a.checksum === "Valid" ? "text-[hsl(var(--aegis-green))]" : a.checksum === "Mismatch!" ? "text-[hsl(var(--aegis-red))]" : "text-muted-foreground"}`}>{a.checksum}</td>
                <td className="py-2 px-2">
                  <Badge variant={a.status === "Secure" ? "default" : a.status === "Alert" ? "destructive" : a.status === "Unprotected" ? "outline" : "secondary"} className="text-[10px]">{a.status}</Badge>
                </td>
                <td className="py-2 px-2 text-xs text-muted-foreground">{a.lastTamper}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </GlassCard>

      {/* Tamper Events */}
      <GlassCard>
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">Tamper Event Log — Iron Wing Response History</h3>
        </div>
        <div className="space-y-3">
          {tamperEvents.map((e, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 border border-border/20">
              {e.resolved ? <CheckCircle2 className="h-4 w-4 mt-0.5 text-[hsl(var(--aegis-green))] shrink-0" /> : <XCircle className="h-4 w-4 mt-0.5 text-[hsl(var(--aegis-red))] shrink-0" />}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">{e.event}</p>
                    <Badge variant={e.severity === "critical" ? "destructive" : "secondary"} className="text-[10px]">{e.severity}</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-primary">{e.agent}</span>
                    <span className="text-[10px] text-muted-foreground">{e.time}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">↳ {e.resolution}</p>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Self-Hardening Engine */}
      <GlassCard glow="cyan">
        <div className="flex items-center gap-2 mb-4">
          <Brain className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">Self-Hardening Engine — Autonomous Security Weakness Detection</h3>
          <Badge variant="outline" className="text-[10px] ml-auto">auto_apply mode</Badge>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {hardeningChecks.map(h => (
            <div key={h.check} className="p-3 rounded-lg bg-muted/30 border border-border/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{h.check}</span>
                <Badge variant={h.severity === "ok" ? "default" : "secondary"} className="text-[10px]">{h.status}</Badge>
              </div>
              <p className="text-[10px] text-muted-foreground">{h.detail}</p>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Policy Propagation */}
      <GlassCard>
        <div className="flex items-center gap-2 mb-4">
          <Globe className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">Policy Propagation Map — Global ANGELNODE Sync</h3>
        </div>
        <div className="flex items-center gap-2">
          {propagationSteps.map((p, i) => (
            <div key={p.region} className="flex items-center gap-2 flex-1">
              <div className="p-3 rounded-lg bg-muted/30 border border-border/30 flex-1 text-center">
                <p className="text-xs font-semibold">{p.region}</p>
                <p className="text-lg font-bold text-primary mt-1">{p.time}</p>
                <p className="text-[10px] text-muted-foreground">{p.nodes.toLocaleString()} nodes</p>
                <Badge variant={p.status === "Complete" ? "default" : "secondary"} className="text-[10px] mt-1">{p.status}</Badge>
              </div>
              {i < propagationSteps.length - 1 && <ArrowRight className="h-4 w-4 text-primary shrink-0" />}
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
