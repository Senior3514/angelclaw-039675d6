import { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  ShieldCheck, Brain, Wrench, Eye, Activity, ShieldAlert,
  CheckCircle2, Feather, Key, Lock, Users, Cloud, Radio
} from "lucide-react";

const systemToggles = [
  { name: "Autonomous Protection", icon: ShieldCheck, default: true },
  { name: "Seraph Brain NLP", icon: Brain, default: true },
  { name: "Self-Hardening Engine", icon: Wrench, default: true },
  { name: "Zero-Trust Enforcement", icon: Eye, default: true },
  { name: "Self-Learning Feedback", icon: Activity, default: true },
  { name: "Predictive Defense", icon: ShieldAlert, default: true },
];

const rbacRoles = [
  { role: "super_admin", users: 2, permissions: "Full access · all tenants", apiKey: true },
  { role: "tenant_admin", users: 8, permissions: "Tenant-scoped full access", apiKey: true },
  { role: "soc_analyst", users: 34, permissions: "Read + alert management", apiKey: false },
];

type TamperMode = "OFF" | "MONITOR" | "ENFORCE";

const modeConfig: Record<TamperMode, { desc: string; activeClass: string; inactiveClass: string }> = {
  OFF: {
    desc: "Anti-Tamper disabled. ANGELNODEs are unprotected.",
    activeClass: "bg-muted text-foreground border-border",
    inactiveClass: "text-muted-foreground border-border/40 hover:border-border",
  },
  MONITOR: {
    desc: "Tamper events logged. Agents continue operating.",
    activeClass: "bg-[hsl(var(--aegis-amber)/0.15)] text-[hsl(var(--aegis-amber))] border-[hsl(var(--aegis-amber)/0.5)]",
    inactiveClass: "text-muted-foreground border-border/40 hover:border-[hsl(var(--aegis-amber)/0.3)]",
  },
  ENFORCE: {
    desc: "Tamper attempts blocked. Iron Wing auto-restores from golden image.",
    activeClass: "bg-[hsl(var(--aegis-cyan)/0.15)] text-[hsl(var(--aegis-cyan))] border-[hsl(var(--aegis-cyan)/0.5)]",
    inactiveClass: "text-muted-foreground border-border/40 hover:border-[hsl(var(--aegis-cyan)/0.3)]",
  },
};

export default function SettingsPage() {
  const [toggles, setToggles] = useState(systemToggles.map(t => t.default));
  const [antiTamperMode, setAntiTamperMode] = useState<TamperMode>("ENFORCE");

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex items-center gap-2">
        <Feather className="h-5 w-5 text-primary" />
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <Badge variant="outline" className="text-[10px]">v3.0.0 · Dominion</Badge>
      </div>

      {/* ── 1. Tenant Info ──────────────────────────────────────────────── */}
      <GlassCard aurora>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Feather className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold">AngelClaw Enterprise</h3>
              <p className="text-xs text-muted-foreground font-mono">Org ID: ACL-2847-ENT</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="text-lg font-bold">Enterprise</p>
              <p className="text-[10px] text-muted-foreground">Plan</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold">1,284</p>
              <p className="text-[10px] text-muted-foreground">ANGELNODEs</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold">3</p>
              <p className="text-[10px] text-muted-foreground">Tenants</p>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* ── 2. System Toggles ───────────────────────────────────────────── */}
      <GlassCard>
        <div className="flex items-center gap-2 mb-4">
          <ShieldCheck className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold">Core Capabilities</h3>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {systemToggles.map((t, i) => (
            <div key={t.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/30 hover:bg-muted/40 transition-colors">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded bg-primary/10">
                  <t.icon className="h-3.5 w-3.5 text-primary" />
                </div>
                <p className="text-sm font-medium">{t.name}</p>
              </div>
              <Switch
                checked={toggles[i]}
                onCheckedChange={v => setToggles(prev => prev.map((p, j) => j === i ? v : p))}
                className="shrink-0 ml-3"
              />
            </div>
          ))}
        </div>
      </GlassCard>

      {/* ── 3. Anti-Tamper ──────────────────────────────────────────────── */}
      <GlassCard glow="cyan">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <ShieldAlert className="h-4 w-4 text-primary" />
          </div>
          <h3 className="text-sm font-bold">Anti-Tamper Protection</h3>
          <span className="text-[10px] text-muted-foreground">Iron Wing · heartbeat + checksum</span>
        </div>
        <div className="flex gap-2 mb-3">
          {(["OFF", "MONITOR", "ENFORCE"] as TamperMode[]).map(mode => (
            <button
              key={mode}
              onClick={() => setAntiTamperMode(mode)}
              className={`flex-1 py-2.5 px-4 rounded-lg border font-bold text-sm tracking-wider transition-all duration-200 ${antiTamperMode === mode ? modeConfig[mode].activeClass : modeConfig[mode].inactiveClass}`}
            >
              {mode}
            </button>
          ))}
        </div>
        <div className="p-3 rounded-lg bg-muted/30 border border-border/30">
          <p className="text-xs text-muted-foreground">{modeConfig[antiTamperMode].desc}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div className="p-3 rounded-lg bg-muted/20 border border-border/20 text-center">
            <p className="text-xl font-bold text-[hsl(var(--aegis-green))]">3</p>
            <p className="text-[10px] text-muted-foreground">Tamper Attempts</p>
          </div>
          <div className="p-3 rounded-lg bg-muted/20 border border-border/20 text-center">
            <p className="text-xl font-bold text-[hsl(var(--aegis-cyan))]">3</p>
            <p className="text-[10px] text-muted-foreground">Auto-Restores</p>
          </div>
        </div>
      </GlassCard>

      {/* ── 4. RBAC ─────────────────────────────────────────────────────── */}
      <GlassCard>
        <div className="flex items-center gap-2 mb-4">
          <Users className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold">Access Roles</h3>
        </div>
        <div className="space-y-2">
          {rbacRoles.map(r => (
            <div key={r.role} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/30">
              <code className="text-xs text-primary font-bold">{r.role}</code>
              <span className="text-[10px] text-muted-foreground flex-1">{r.permissions}</span>
              <span className="text-[10px] text-muted-foreground">{r.users} users</span>
              {r.apiKey && <Key className="h-3 w-3 text-[hsl(var(--aegis-cyan))]" />}
            </div>
          ))}
        </div>
      </GlassCard>

    </div>
  );
}
