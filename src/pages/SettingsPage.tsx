import { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Building2, Users, HardDrive, ShieldCheck, Brain, Wrench, Eye, Activity, Bell, Mail, Globe, Smartphone, MessageSquare, Monitor, Apple, Terminal, Cloud, Server, Clock, Palette, Languages, Timer, Database } from "lucide-react";

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
        <p className="text-sm text-muted-foreground mt-1">Tenant management, system configuration, and global preferences</p>
      </div>

      {/* Tenant Info */}
      <GlassCard aurora>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-primary/10"><Building2 className="h-6 w-6 text-primary" /></div>
            <div>
              <h3 className="text-lg font-bold">ANGELGRID Enterprise</h3>
              <p className="text-xs text-muted-foreground">Organization ID: ANG-2847-ENT</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <div className="text-center"><p className="font-bold">Enterprise</p><p className="text-[10px] text-muted-foreground">Plan Tier</p></div>
            <div className="text-center"><p className="font-bold">247</p><p className="text-[10px] text-muted-foreground">Members</p></div>
            <div className="text-center">
              <p className="font-bold">78.4%</p>
              <p className="text-[10px] text-muted-foreground">Storage Used</p>
              <div className="h-1.5 w-20 rounded-full bg-muted mt-1"><div className="h-full rounded-full bg-primary" style={{ width: "78.4%" }} /></div>
            </div>
          </div>
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
