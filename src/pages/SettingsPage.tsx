import { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Building2, Users, HardDrive, ShieldCheck, Brain, Wrench, Eye, Activity, Bell, Mail, Globe, Smartphone, MessageSquare, Monitor, Apple, Terminal, Cloud, Server, Clock, Palette, Languages, Timer, Database, Bot, Cpu, CheckCircle2, Settings } from "lucide-react";

const systemToggles = [
  { name: "Autonomous Protection", desc: "AI-driven threat response without human intervention", icon: ShieldCheck, default: true },
  { name: "AI Threat Prediction", desc: "Predictive modeling for emerging attack vectors", icon: Brain, default: true },
  { name: "Auto-Remediation", desc: "Automatic isolation and patching of compromised endpoints", icon: Wrench, default: true },
  { name: "Zero-Trust Enforcement", desc: "Continuous verification of all access requests", icon: Eye, default: true },
  { name: "Real-time Monitoring", desc: "Live telemetry ingestion from all managed agents", icon: Activity, default: true },
];

const notifChannels = ["Email", "In-App", "Webhook", "SMS"];
const notifLevels = ["Critical", "Warning", "Info"];
const notifDefaults: Record<string, Record<string, boolean>> = {
  Email: { Critical: true, Warning: true, Info: false },
  "In-App": { Critical: true, Warning: true, Info: true },
  Webhook: { Critical: true, Warning: false, Info: false },
  SMS: { Critical: true, Warning: false, Info: false },
};

const platformStats = [
  { label: "Uptime", value: "99.99%", icon: Clock },
  { label: "Endpoints Protected", value: "1,284", icon: Monitor },
];

const osCoverage = [
  { name: "Windows", icon: Monitor, pct: 48 },
  { name: "macOS", icon: Apple, pct: 28 },
  { name: "Linux", icon: Terminal, pct: 16 },
  { name: "iOS", icon: Smartphone, pct: 5 },
  { name: "Android", icon: Smartphone, pct: 3 },
];

const envs = [
  { name: "Cloud", icon: Cloud, status: "Active" },
  { name: "On-Premises", icon: Server, status: "Active" },
  { name: "Hybrid", icon: Globe, status: "Active" },
];

const fleetAgents = [
  { os: "Windows", version: "v4.2.1", deployed: 612, upToDate: 608, pending: 4, health: 99.2 },
  { os: "macOS", version: "v4.2.1", deployed: 358, upToDate: 358, pending: 0, health: 99.8 },
  { os: "Linux", version: "v4.2.0", deployed: 204, upToDate: 198, pending: 6, health: 98.4 },
  { os: "iOS", version: "v4.1.9", deployed: 68, upToDate: 68, pending: 0, health: 100 },
  { os: "Android", version: "v4.1.8", deployed: 42, upToDate: 40, pending: 2, health: 97.6 },
];

const aiModelGovernance = [
  { model: "GPT-4o", status: "Allowed", rateLimit: "15K req/hr", dataBoundary: "Non-Confidential", provider: "OpenAI" },
  { model: "Claude 3.5", status: "Allowed", rateLimit: "8K req/hr", dataBoundary: "Internal only", provider: "Anthropic" },
  { model: "Llama 3.1", status: "Allowed", rateLimit: "Unlimited", dataBoundary: "All scopes", provider: "Self-hosted" },
  { model: "Gemini Pro", status: "Restricted", rateLimit: "2K req/hr", dataBoundary: "Public only", provider: "Google" },
  { model: "Unknown Models", status: "Blocked", rateLimit: "0", dataBoundary: "Blocked", provider: "Any" },
];

const complianceFrameworks = [
  { name: "SOC 2 Type II", status: "Compliant", lastAudit: "2h ago", controls: 94, passing: 94, icon: ShieldCheck },
  { name: "ISO 27001", status: "Compliant", lastAudit: "4h ago", controls: 114, passing: 113, icon: CheckCircle2 },
  { name: "GDPR", status: "Compliant", lastAudit: "1h ago", controls: 67, passing: 67, icon: Eye },
  { name: "HIPAA", status: "Review", lastAudit: "6h ago", controls: 45, passing: 43, icon: Activity },
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
        <h1 className="text-2xl font-bold tracking-tight">Settings & Platform Control</h1>
        <p className="text-sm text-muted-foreground mt-1">Tenant management, ANGELNODE fleet management, AI model governance, and compliance automation</p>
      </div>

      {/* Tenant Info */}
      <GlassCard aurora>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-primary/10"><Building2 className="h-6 w-6 text-primary" /></div>
            <div>
              <h3 className="text-lg font-bold">ANGELGRID Enterprise</h3>
              <p className="text-xs text-muted-foreground">Organization ID: ANG-2847-ENT · Autonomous AI Defense Fabric</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <div className="text-center"><p className="font-bold">Enterprise</p><p className="text-[10px] text-muted-foreground">Plan Tier</p></div>
            <div className="text-center"><p className="font-bold">247</p><p className="text-[10px] text-muted-foreground">Members</p></div>
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
          <h3 className="text-sm font-semibold text-muted-foreground">ANGELNODE Fleet Management</h3>
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

      {/* AI Model Governance */}
      <GlassCard aurora>
        <div className="flex items-center gap-2 mb-4">
          <Bot className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">AI Model Governance</h3>
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
          <h3 className="text-sm font-semibold text-muted-foreground">Compliance Automation — Continuous Audit</h3>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {complianceFrameworks.map(c => (
            <div key={c.name} className="p-4 rounded-lg bg-muted/30 border border-border/30">
              <div className="flex items-center gap-2 mb-3">
                <c.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold">{c.name}</span>
              </div>
              <Badge variant={c.status === "Compliant" ? "default" : "secondary"} className="text-[10px] mb-2">{c.status}</Badge>
              <div className="mt-2">
                <div className="flex justify-between text-[10px] text-muted-foreground mb-1">
                  <span>Controls</span><span>{c.passing}/{c.controls}</span>
                </div>
                <div className="h-1.5 rounded-full bg-muted">
                  <div className={`h-full rounded-full ${c.passing === c.controls ? "bg-[hsl(var(--aegis-green))]" : "bg-[hsl(var(--aegis-amber))]"}`} style={{ width: `${(c.passing / c.controls) * 100}%` }} />
                </div>
              </div>
              <p className="text-[10px] text-muted-foreground mt-2">Last audit: {c.lastAudit}</p>
            </div>
          ))}
        </div>
      </GlassCard>

      <div className="grid grid-cols-12 gap-5">
        {/* System Configuration */}
        <div className="col-span-7">
          <GlassCard className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-4">System Configuration</h3>
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
        <div className="col-span-5">
          <GlassCard className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-4">Notification Preferences</h3>
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
        </div>
      </div>

      {/* Platform Stats */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-4">
          <GlassCard className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Platform Stats</h3>
            <div className="space-y-3">
              {platformStats.map(p => (
                <div key={p.label} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                  <p.icon className="h-4 w-4 text-primary" />
                  <div><p className="text-lg font-bold">{p.value}</p><p className="text-[10px] text-muted-foreground">{p.label}</p></div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="col-span-4">
          <GlassCard className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">OS Coverage</h3>
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
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Environments</h3>
            <div className="space-y-2.5">
              {envs.map(e => (
                <div key={e.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/30">
                  <div className="flex items-center gap-2"><e.icon className="h-4 w-4 text-primary" /><span className="text-sm font-medium">{e.name}</span></div>
                  <Badge variant="default" className="text-[10px]">{e.status}</Badge>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Global Preferences */}
      <GlassCard>
        <h3 className="text-sm font-semibold text-muted-foreground mb-4">Global Preferences</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="p-3 rounded-lg bg-muted/30 border border-border/30">
            <div className="flex items-center gap-2 mb-2"><Palette className="h-4 w-4 text-primary" /><span className="text-xs font-medium">Theme</span></div>
            <p className="text-sm font-semibold">Cyber Angels (Dark)</p>
          </div>
          <div className="p-3 rounded-lg bg-muted/30 border border-border/30">
            <div className="flex items-center gap-2 mb-2"><Languages className="h-4 w-4 text-primary" /><span className="text-xs font-medium">Language</span></div>
            <p className="text-sm font-semibold">English (US)</p>
          </div>
          <div className="p-3 rounded-lg bg-muted/30 border border-border/30">
            <div className="flex items-center gap-2 mb-2"><Timer className="h-4 w-4 text-primary" /><span className="text-xs font-medium">Timezone</span></div>
            <p className="text-sm font-semibold">UTC+02:00 (Jerusalem)</p>
          </div>
          <div className="p-3 rounded-lg bg-muted/30 border border-border/30">
            <div className="flex items-center gap-2 mb-2"><Database className="h-4 w-4 text-primary" /><span className="text-xs font-medium">Data Retention</span></div>
            <p className="text-sm font-semibold">90 Days</p>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
