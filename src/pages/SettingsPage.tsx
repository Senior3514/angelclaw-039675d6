import { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Building2, HardDrive, ShieldCheck, Brain, Wrench, Eye, Activity, Bell, Globe, Smartphone, Monitor, Apple, Terminal, Cloud, Server, Clock, Palette, Languages, Timer, Database, Bot, Cpu, CheckCircle2, Feather, Key, Lock, ShieldAlert, Heart, FileCheck, AlertTriangle, RotateCcw } from "lucide-react";

const systemToggles = [
  { name: "Autonomous Protection", desc: "AngelClaw intervenes only when genuinely dangerous — everything else flows freely", icon: ShieldCheck, default: true },
  { name: "Seraph Brain NLP", desc: "Natural language security ops in English and Hebrew · 71+ intents", icon: Brain, default: true },
  { name: "Self-Hardening Engine", desc: "Autonomous security weakness detection and correction with revert", icon: Wrench, default: true },
  { name: "Zero-Trust Enforcement", desc: "Default-deny · 540 rules · Fail-Closed when engine unreachable", icon: Eye, default: true },
  
  { name: "Self-Learning Feedback", desc: "Track operator feedback to improve suggestions over time", icon: Activity, default: true },
];

const notifChannels = ["Email", "Slack", "Discord", "Webhook"];
const notifLevels = ["Critical", "Warning", "Info"];
const notifDefaults: Record<string, Record<string, boolean>> = {
  Email: { Critical: true, Warning: true, Info: false },
  Slack: { Critical: true, Warning: true, Info: false },
  Discord: { Critical: true, Warning: false, Info: false },
  Webhook: { Critical: true, Warning: false, Info: false },
};

const fleetAgents = [
  { os: "Windows", version: "v3.0.0", deployed: 612, upToDate: 608, pending: 4, health: 99.2 },
  { os: "macOS", version: "v3.0.0", deployed: 358, upToDate: 358, pending: 0, health: 99.8 },
  { os: "Linux", version: "v3.0.0", deployed: 204, upToDate: 198, pending: 6, health: 98.4 },
  { os: "iOS", version: "v3.0.0", deployed: 68, upToDate: 68, pending: 0, health: 100 },
  { os: "Android", version: "v3.0.0", deployed: 42, upToDate: 40, pending: 2, health: 97.6 },
];

const aiModelGovernance = [
  { model: "GPT-4o", status: "Allowed", rateLimit: "15K req/hr", dataBoundary: "Non-Confidential", provider: "OpenAI" },
  { model: "Claude 3.5 Sonnet", status: "Allowed", rateLimit: "8K req/hr", dataBoundary: "Internal only", provider: "Anthropic" },
  { model: "Llama 3.1 (Ollama)", status: "Allowed", rateLimit: "Unlimited", dataBoundary: "All scopes", provider: "Self-hosted" },
  { model: "Gemini Pro", status: "Restricted", rateLimit: "2K req/hr", dataBoundary: "Public only", provider: "Google" },
  { model: "Unknown Models", status: "Blocked", rateLimit: "0", dataBoundary: "Blocked", provider: "Any" },
];

const complianceFrameworks = [
  { name: "SOC 2 Type II", status: "Compliant", lastAudit: "2h ago", controls: 94, passing: 94, icon: ShieldCheck, warden: "Scroll Keeper" },
  { name: "ISO 27001", status: "Compliant", lastAudit: "4h ago", controls: 114, passing: 113, icon: CheckCircle2, warden: "Paladin" },
  { name: "GDPR", status: "Compliant", lastAudit: "1h ago", controls: 67, passing: 67, icon: Eye, warden: "Paladin" },
  { name: "HIPAA", status: "Review", lastAudit: "6h ago", controls: 45, passing: 43, icon: Activity, warden: "Paladin" },
];

const rbacRoles = [
  { role: "super_admin", users: 2, permissions: "Full access · all tenants", apiKey: true },
  { role: "tenant_admin", users: 8, permissions: "Tenant-scoped full access", apiKey: true },
  { role: "soc_analyst", users: 34, permissions: "Read + alert management", apiKey: false },
  { role: "readonly", users: 56, permissions: "Read-only across all modules", apiKey: false },
];

const osCoverage = [
  { name: "Windows", icon: Monitor, pct: 48 },
  { name: "macOS", icon: Apple, pct: 28 },
  { name: "Linux", icon: Terminal, pct: 16 },
  { name: "iOS", icon: Smartphone, pct: 5 },
  { name: "Android", icon: Smartphone, pct: 3 },
];

const envs = [
  { name: "Cloud (AngelClaw)", icon: Cloud, status: "Active", port: "8500" },
  { name: "On-Premises", icon: Server, status: "Active", port: "8400" },
  { name: "Hybrid", icon: Globe, status: "Active", port: "Both" },
];

export default function SettingsPage() {
  const [toggles, setToggles] = useState(systemToggles.map(t => t.default));
  const [notifs, setNotifs] = useState(notifDefaults);

  const toggleNotif = (ch: string, lv: string) => {
    setNotifs(prev => ({ ...prev, [ch]: { ...prev[ch], [lv]: !prev[ch][lv] } }));
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Feather className="h-5 w-5 text-primary" />
          <h1 className="text-2xl font-bold tracking-tight">Settings & Platform Control</h1>
          <Badge variant="outline" className="text-[10px]">v3.0.0 · Dominion</Badge>
        </div>
        <p className="text-sm text-muted-foreground">Tenant management · ANGELNODE fleet · AI model governance · compliance automation · custom RBAC · backup & restore</p>
      </div>

      {/* Tenant Info */}
      <GlassCard aurora>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-primary/10"><Feather className="h-6 w-6 text-primary" /></div>
            <div>
              <h3 className="text-lg font-bold">AngelClaw Enterprise</h3>
              <p className="text-xs text-muted-foreground">Organization ID: ACL-2847-ENT · Guardian angel, not gatekeeper.</p>
              <p className="text-xs text-muted-foreground font-mono">Cloud API: :8500 · ANGELNODE: :8400 · CLI: angelclawctl</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <div className="text-center"><p className="font-bold">Enterprise</p><p className="text-[10px] text-muted-foreground">Plan Tier</p></div>
            <div className="text-center"><p className="font-bold">3</p><p className="text-[10px] text-muted-foreground">Tenants</p></div>
            <div className="text-center"><p className="font-bold">1,284</p><p className="text-[10px] text-muted-foreground">ANGELNODEs</p></div>
            <div className="text-center"><p className="font-bold">14</p><p className="text-[10px] text-muted-foreground">AI Agents</p></div>
            <div className="text-center">
              <p className="font-bold">78.4%</p>
              <p className="text-[10px] text-muted-foreground">Storage Used</p>
              <div className="h-1.5 w-20 rounded-full bg-muted mt-1"><div className="h-full rounded-full bg-primary" style={{ width: "78.4%" }} /></div>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* ANGELNODE Fleet Management */}
      <GlassCard>
        <div className="flex items-center gap-2 mb-4">
          <Cpu className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">ANGELNODE Fleet Management — Wingspan</h3>
          <Badge variant="default" className="text-[10px] ml-auto">{fleetAgents.reduce((a, f) => a + f.deployed, 0).toLocaleString()} Total Agents</Badge>
        </div>
        <table className="w-full text-sm">
          <thead><tr className="border-b border-border/50 text-muted-foreground text-xs">
            <th className="text-left py-2 px-2 font-medium">OS Platform</th>
            <th className="text-left py-2 px-2 font-medium">Version</th>
            <th className="text-left py-2 px-2 font-medium">Deployed</th>
            <th className="text-left py-2 px-2 font-medium">Up-to-Date</th>
            <th className="text-left py-2 px-2 font-medium">Pending Update</th>
            <th className="text-left py-2 px-2 font-medium">Health</th>
          </tr></thead>
          <tbody>
            {fleetAgents.map(f => (
              <tr key={f.os} className="border-b border-border/20 hover:bg-muted/20">
                <td className="py-2 px-2 font-medium">{f.os}</td>
                <td className="py-2 px-2"><Badge variant="outline" className="text-[10px]">{f.version}</Badge></td>
                <td className="py-2 px-2 text-xs">{f.deployed}</td>
                <td className="py-2 px-2 text-xs text-[hsl(var(--aegis-green))]">{f.upToDate}</td>
                <td className={`py-2 px-2 text-xs ${f.pending > 0 ? "text-[hsl(var(--aegis-amber))]" : "text-[hsl(var(--aegis-green))]"}`}>{f.pending}</td>
                <td className={`py-2 px-2 text-xs font-semibold ${f.health > 99 ? "text-[hsl(var(--aegis-green))]" : "text-[hsl(var(--aegis-amber))]"}`}>{f.health}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </GlassCard>

      {/* Anti-Tamper Protection */}
      {(() => {
        type TamperMode = "OFF" | "MONITOR" | "ENFORCE";
        const [antiTamperMode, setAntiTamperMode] = useState<TamperMode>("ENFORCE");

        const modeConfig: Record<TamperMode, { label: string; desc: string; activeClass: string; inactiveClass: string }> = {
          OFF: {
            label: "OFF",
            desc: "Anti-Tamper disabled. ANGELNODE agents are unprotected from modification.",
            activeClass: "bg-muted text-foreground border-border",
            inactiveClass: "text-muted-foreground border-border/50 hover:border-border",
          },
          MONITOR: {
            label: "MONITOR",
            desc: "Tamper events logged and alerted. Agents continue operating. Heartbeat + checksum tracking active.",
            activeClass: "bg-[hsl(var(--aegis-amber)/0.15)] text-[hsl(var(--aegis-amber))] border-[hsl(var(--aegis-amber)/0.5)]",
            inactiveClass: "text-muted-foreground border-border/50 hover:border-[hsl(var(--aegis-amber)/0.3)]",
          },
          ENFORCE: {
            label: "ENFORCE",
            desc: "Tamper attempts blocked. Iron Wing auto-restores agent binary. Fail-Closed on heartbeat loss.",
            activeClass: "bg-[hsl(var(--aegis-cyan)/0.15)] text-[hsl(var(--aegis-cyan))] border-[hsl(var(--aegis-cyan)/0.5)]",
            inactiveClass: "text-muted-foreground border-border/50 hover:border-[hsl(var(--aegis-cyan)/0.3)]",
          },
        };

        const tamperStats = [
          { label: "Heartbeat Checks Today", value: "48,291", icon: Heart, color: "var(--aegis-green)" },
          { label: "Checksum Verifications", value: "1,284", icon: FileCheck, color: "var(--aegis-cyan)" },
          { label: "Tamper Attempts Detected", value: "3", icon: AlertTriangle, color: "var(--aegis-amber)" },
          { label: "Auto-Restores by Iron Wing", value: "3", icon: RotateCcw, color: "var(--aegis-red)" },
        ];

        const tamperEvents = [
          { event: "Binary checksum mismatch", agent: "node-win-0442", tenant: "acme-corp", severity: "Critical", warden: "Iron Wing", resolution: "Auto-restored", time: "2h ago" },
          { event: "Unauthorized process injection", agent: "node-linux-0091", tenant: "dev-team", severity: "High", warden: "Vigil", resolution: "Quarantined", time: "6h ago" },
          { event: "Heartbeat timeout (>60s)", agent: "node-mac-0217", tenant: "startup-xyz", severity: "Warning", warden: "Iron Wing", resolution: "Restarted", time: "11h ago" },
          { event: "Config file modification", agent: "node-win-0104", tenant: "acme-corp", severity: "High", warden: "Scroll Keeper", resolution: "Reverted", time: "1d ago" },
          { event: "Agent shutdown attempt", agent: "node-linux-0033", tenant: "dev-team", severity: "Critical", warden: "Iron Wing", resolution: "Blocked + restored", time: "2d ago" },
        ];

        const severityStyle: Record<string, string> = {
          Critical: "text-[hsl(var(--aegis-red))]",
          High: "text-[hsl(var(--aegis-amber))]",
          Warning: "text-[hsl(var(--aegis-amber)/0.7)]",
        };

        const resolutionStyle: Record<string, string> = {
          "Auto-restored": "bg-[hsl(var(--aegis-green)/0.15)] text-[hsl(var(--aegis-green))] border border-[hsl(var(--aegis-green)/0.3)]",
          "Blocked + restored": "bg-[hsl(var(--aegis-green)/0.15)] text-[hsl(var(--aegis-green))] border border-[hsl(var(--aegis-green)/0.3)]",
          "Quarantined": "bg-[hsl(var(--aegis-red)/0.15)] text-[hsl(var(--aegis-red))] border border-[hsl(var(--aegis-red)/0.3)]",
          "Reverted": "bg-[hsl(var(--aegis-cyan)/0.15)] text-[hsl(var(--aegis-cyan))] border border-[hsl(var(--aegis-cyan)/0.3)]",
          "Restarted": "bg-[hsl(var(--aegis-amber)/0.15)] text-[hsl(var(--aegis-amber))] border border-[hsl(var(--aegis-amber)/0.3)]",
        };

        return (
          <GlassCard glow="cyan">
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-lg bg-primary/10"><ShieldAlert className="h-5 w-5 text-primary" /></div>
              <div>
                <h3 className="text-sm font-bold">Anti-Tamper Protection — Angel Legion Guard</h3>
                <p className="text-[10px] text-muted-foreground">Iron Wing · Vigil · Scroll Keeper — heartbeat + binary checksum enforcement</p>
              </div>
              <div className="ml-auto flex gap-1.5">
                <Badge variant="outline" className="text-[10px]">All Tenants</Badge>
                <Badge variant="outline" className="text-[10px]">All ANGELNODEs</Badge>
              </div>
            </div>

            {/* Mode Selector */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-muted-foreground mb-2">Protection Mode</p>
              <div className="flex gap-2">
                {(["OFF", "MONITOR", "ENFORCE"] as TamperMode[]).map(mode => (
                  <button
                    key={mode}
                    onClick={() => setAntiTamperMode(mode)}
                    className={`flex-1 py-2.5 px-4 rounded-lg border font-bold text-sm tracking-wide transition-all duration-200 ${antiTamperMode === mode ? modeConfig[mode].activeClass : modeConfig[mode].inactiveClass}`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
              <div className="mt-3 p-3 rounded-lg bg-muted/30 border border-border/30">
                <p className="text-xs text-muted-foreground">{modeConfig[antiTamperMode].desc}</p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-3 mb-5">
              {tamperStats.map(s => (
                <div key={s.label} className="p-3 rounded-lg bg-muted/30 border border-border/30 text-center">
                  <s.icon className="h-4 w-4 mx-auto mb-1" style={{ color: `hsl(${s.color})` }} />
                  <p className="text-xl font-bold">{s.value}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Audit Trail */}
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-2">Tamper Event Audit Trail</p>
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border/50 text-muted-foreground">
                    <th className="text-left py-2 px-2 font-medium">Event</th>
                    <th className="text-left py-2 px-2 font-medium">Agent</th>
                    <th className="text-left py-2 px-2 font-medium">Tenant</th>
                    <th className="text-left py-2 px-2 font-medium">Severity</th>
                    <th className="text-left py-2 px-2 font-medium">Warden</th>
                    <th className="text-left py-2 px-2 font-medium">Resolution</th>
                    <th className="text-left py-2 px-2 font-medium">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {tamperEvents.map((row, i) => (
                    <tr key={i} className="border-b border-border/20 hover:bg-muted/20">
                      <td className="py-2 px-2">{row.event}</td>
                      <td className="py-2 px-2 font-mono text-primary">{row.agent}</td>
                      <td className="py-2 px-2 text-muted-foreground">{row.tenant}</td>
                      <td className={`py-2 px-2 font-semibold ${severityStyle[row.severity] || "text-muted-foreground"}`}>{row.severity}</td>
                      <td className="py-2 px-2 text-primary font-semibold">{row.warden}</td>
                      <td className="py-2 px-2">
                        <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${resolutionStyle[row.resolution] || "bg-muted text-muted-foreground"}`}>{row.resolution}</span>
                      </td>
                      <td className="py-2 px-2 text-muted-foreground">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        );
      })()}

      {/* AI Model Governance */}
      <GlassCard aurora>
        <div className="flex items-center gap-2 mb-4">
          <Bot className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">AI Model Governance — Ollama Local · External APIs</h3>
        </div>
        <table className="w-full text-sm">
          <thead><tr className="border-b border-border/50 text-muted-foreground text-xs">
            <th className="text-left py-2 px-2 font-medium">Model</th>
            <th className="text-left py-2 px-2 font-medium">Provider</th>
            <th className="text-left py-2 px-2 font-medium">Status</th>
            <th className="text-left py-2 px-2 font-medium">Rate Limit</th>
            <th className="text-left py-2 px-2 font-medium">Data Boundary</th>
          </tr></thead>
          <tbody>
            {aiModelGovernance.map(m => (
              <tr key={m.model} className="border-b border-border/20 hover:bg-muted/20">
                <td className="py-2 px-2 font-medium">{m.model}</td>
                <td className="py-2 px-2 text-xs text-muted-foreground">{m.provider}</td>
                <td className="py-2 px-2"><Badge variant={m.status === "Allowed" ? "default" : m.status === "Restricted" ? "secondary" : "destructive"} className="text-[10px]">{m.status}</Badge></td>
                <td className="py-2 px-2 text-xs">{m.rateLimit}</td>
                <td className="py-2 px-2 text-xs text-muted-foreground">{m.dataBoundary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </GlassCard>

      {/* Compliance Automation */}
      <GlassCard>
        <div className="flex items-center gap-2 mb-4">
          <ShieldCheck className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">Compliance Automation — Paladin + Scroll Keeper Continuous Audit</h3>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {complianceFrameworks.map(c => (
            <div key={c.name} className="p-4 rounded-lg bg-muted/30 border border-border/30">
              <div className="flex items-center gap-2 mb-2">
                <c.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold">{c.name}</span>
              </div>
              <Badge variant={c.status === "Compliant" ? "default" : "secondary"} className="text-[10px] mb-2">{c.status}</Badge>
              <p className="text-[10px] text-muted-foreground mb-2">Warden: {c.warden}</p>
              <div className="mt-2">
                <div className="flex justify-between text-[10px] text-muted-foreground mb-1">
                  <span>Controls</span><span>{c.passing}/{c.controls}</span>
                </div>
                <div className="h-1.5 rounded-full bg-muted">
                  <div className={`h-full rounded-full ${c.passing === c.controls ? "bg-[hsl(var(--aegis-green))]" : "bg-[hsl(var(--aegis-amber))]"}`} style={{ width: `${(c.passing / c.controls) * 100}%` }} />
                </div>
              </div>
              <p className="text-[10px] text-muted-foreground mt-2">Last: {c.lastAudit}</p>
            </div>
          ))}
        </div>
      </GlassCard>

      <div className="grid grid-cols-12 gap-5">
        {/* System Configuration */}
        <div className="col-span-7">
          <GlassCard className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-4">System Configuration — AngelClaw Core</h3>
            <div className="space-y-3">
              {systemToggles.map((t, i) => (
                <div key={t.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/30">
                  <div className="flex items-center gap-3">
                    <t.icon className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="text-[10px] text-muted-foreground">{t.desc}</p>
                    </div>
                  </div>
                  <Switch checked={toggles[i]} onCheckedChange={() => setToggles(prev => prev.map((v, j) => j === i ? !v : v))} />
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Notification Preferences */}
        <div className="col-span-5 space-y-5">
          <GlassCard>
            <h3 className="text-sm font-semibold text-muted-foreground mb-4">Notification Channels — Slack, Discord, Webhook</h3>
            <table className="w-full text-xs">
              <thead><tr className="border-b border-border/50">
                <th className="text-left py-2 px-1 font-medium text-muted-foreground">Channel</th>
                {notifLevels.map(l => <th key={l} className="text-center py-2 px-1 font-medium text-muted-foreground">{l}</th>)}
              </tr></thead>
              <tbody>
                {notifChannels.map(ch => (
                  <tr key={ch} className="border-b border-border/20">
                    <td className="py-2.5 px-1 font-medium">{ch}</td>
                    {notifLevels.map(lv => (
                      <td key={lv} className="text-center py-2.5 px-1">
                        <Switch className="scale-75" checked={notifs[ch][lv]} onCheckedChange={() => toggleNotif(ch, lv)} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </GlassCard>

          {/* RBAC */}
          <GlassCard>
            <div className="flex items-center gap-2 mb-3">
              <Key className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold text-muted-foreground">Custom RBAC Roles</h3>
            </div>
            <div className="space-y-2">
              {rbacRoles.map(r => (
                <div key={r.role} className="flex items-center justify-between p-2.5 rounded-lg bg-muted/30 border border-border/30">
                  <div>
                    <p className="text-xs font-mono font-bold text-primary">{r.role}</p>
                    <p className="text-[10px] text-muted-foreground">{r.permissions}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-muted-foreground">{r.users} users</span>
                    {r.apiKey && <Badge variant="outline" className="text-[10px]">API Key</Badge>}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Platform Stats */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-4">
          <GlassCard className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">OS Coverage — Fleet</h3>
            <div className="space-y-2">
              {osCoverage.map(o => (
                <div key={o.name} className="flex items-center gap-3">
                  <o.icon className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                  <span className="text-xs w-16">{o.name}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-muted"><div className="h-full rounded-full bg-primary" style={{ width: `${o.pct}%` }} /></div>
                  <span className="text-xs text-muted-foreground w-8 text-right">{o.pct}%</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="col-span-4">
          <GlassCard className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Active Environments</h3>
            <div className="space-y-2.5">
              {envs.map(e => (
                <div key={e.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/30">
                  <div className="flex items-center gap-2"><e.icon className="h-4 w-4 text-primary" /><div><p className="text-sm font-medium">{e.name}</p><p className="text-[10px] text-muted-foreground font-mono">:{e.port}</p></div></div>
                  <Badge variant="default" className="text-[10px]">{e.status}</Badge>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="col-span-4">
          <GlassCard className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Global Preferences</h3>
            <div className="space-y-2.5">
              <div className="p-3 rounded-lg bg-muted/30 border border-border/30">
                <div className="flex items-center gap-2 mb-1"><Palette className="h-4 w-4 text-primary" /><span className="text-xs font-medium">Theme</span></div>
                <p className="text-sm font-semibold">Cyber Angels (Dark)</p>
              </div>
              <div className="p-3 rounded-lg bg-muted/30 border border-border/30">
                <div className="flex items-center gap-2 mb-1"><Languages className="h-4 w-4 text-primary" /><span className="text-xs font-medium">Language</span></div>
                <p className="text-sm font-semibold">English + Hebrew</p>
              </div>
              <div className="p-3 rounded-lg bg-muted/30 border border-border/30">
                <div className="flex items-center gap-2 mb-1"><Database className="h-4 w-4 text-primary" /><span className="text-xs font-medium">Data Retention</span></div>
                <p className="text-sm font-semibold">90 Days</p>
              </div>
              <div className="p-3 rounded-lg bg-muted/30 border border-border/30">
                <div className="flex items-center gap-2 mb-1"><Clock className="h-4 w-4 text-primary" /><span className="text-xs font-medium">Uptime</span></div>
                <p className="text-sm font-semibold text-[hsl(var(--aegis-green))]">99.99%</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
