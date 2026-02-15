import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { FileCheck, ScrollText, Lock, AlertTriangle, ShieldAlert, TrendingUp, TrendingDown, ArrowRight, FileText, Eye, MapPin, Bot, Brain, Shield, Cloud, Server, Globe } from "lucide-react";

const stats = [
  { label: "Protected Files", value: "2.4M", icon: FileCheck, glow: "cyan" as const },
  { label: "Classification Rules", value: "89", icon: ScrollText, glow: "cyan" as const },
  { label: "Encryption Coverage", value: "97.8%", icon: Lock, glow: "cyan" as const },
  { label: "DLP Violations (Week)", value: "12", icon: AlertTriangle, glow: "amber" as const },
];

const categories = [
  { name: "Confidential", count: "482,391", trend: "up", delta: "+2.1%", color: "var(--aegis-red)" },
  { name: "Internal", count: "1,247,820", trend: "up", delta: "+0.8%", color: "var(--aegis-amber)" },
  { name: "Public", count: "689,412", trend: "down", delta: "-1.2%", color: "var(--aegis-green)" },
];

const documents = [
  { name: "Q4-Financial-Report.xlsx", classification: "Confidential", accesses: 34, lastBy: "Sara Levi", location: "Cloud Storage", encrypted: true },
  { name: "Architecture-Diagram.pdf", classification: "Internal", accesses: 128, lastBy: "Daniel Kessler", location: "SharePoint", encrypted: true },
  { name: "Customer-DB-Export.csv", classification: "Confidential", accesses: 3, lastBy: "Anton Volkov", location: "Local Drive", encrypted: false },
  { name: "Marketing-Deck.pptx", classification: "Public", accesses: 892, lastBy: "Rachel Miriam", location: "Cloud Storage", encrypted: true },
  { name: "SSH-Keys-Backup.tar", classification: "Confidential", accesses: 2, lastBy: "James Torres", location: "NAS", encrypted: true },
  { name: "Employee-Directory.xlsx", classification: "Internal", accesses: 56, lastBy: "Nadia Kuznetsova", location: "SharePoint", encrypted: true },
];

const encryption = [
  { algo: "AES-256-GCM", scope: "Files at Rest", enforced: true, coverage: 97 },
  { algo: "RSA-4096", scope: "Key Exchange", enforced: true, coverage: 100 },
  { algo: "ChaCha20-Poly1305", scope: "Stream Data", enforced: true, coverage: 94 },
  { algo: "TLS 1.3", scope: "Data in Transit", enforced: true, coverage: 99 },
];

const dlpAlerts = [
  { time: "3m ago", event: "Data exfiltration attempt blocked", detail: "USB copy of classified file — endpoint auto-locked by ANGELNODE", severity: "critical" },
  { time: "18m ago", event: "Classification change detected", detail: "Document downgraded from Confidential to Internal — requires approval", severity: "warning" },
  { time: "45m ago", event: "Unencrypted file detected", detail: "Customer-DB-Export.csv on local drive — auto-encryption initiated", severity: "warning" },
  { time: "1h ago", event: "Policy violation — external share", detail: "Internal document shared to external email — share revoked autonomously", severity: "critical" },
  { time: "2h ago", event: "LLM data boundary violation", detail: "GPT-4o attempted to access Confidential data scope — request blocked by ANGELGRID AI", severity: "critical" },
];

const aiBoundaryEnforcement = [
  { agent: "GPT-4o Production", prompts: "14.2K", piiDetected: 342, piiBlocked: 342, leakAttempts: 8, status: "Enforced" },
  { agent: "Support Chatbot v3", prompts: "3.8K", piiDetected: 89, piiBlocked: 89, leakAttempts: 2, status: "Enforced" },
  { agent: "Code Copilot", prompts: "2.1K", piiDetected: 12, piiBlocked: 12, leakAttempts: 0, status: "Enforced" },
  { agent: "Data Pipeline Agent", prompts: "5.4K", piiDetected: 567, piiBlocked: 564, leakAttempts: 3, status: "Review" },
];

const privacyScore = 92;

const dataFlowMap = [
  { from: "On-Premises", to: "Cloud (Azure)", encryption: "AES-256 + TLS 1.3", status: "Encrypted", volume: "2.4 TB/day" },
  { from: "Cloud (AWS)", to: "SaaS Apps", encryption: "TLS 1.3", status: "Encrypted", volume: "890 GB/day" },
  { from: "SaaS Apps", to: "On-Premises", encryption: "IPSec + AES-256", status: "Encrypted", volume: "340 GB/day" },
  { from: "AI Models", to: "Cloud (Azure)", encryption: "E2E Encrypted", status: "Encrypted", volume: "1.2 TB/day" },
];

const classColor = (c: string) => c === "Confidential" ? "destructive" as const : c === "Internal" ? "secondary" as const : "outline" as const;

export default function DataProtection() {
  const privacyColor = privacyScore >= 80 ? "var(--aegis-green)" : privacyScore >= 50 ? "var(--aegis-amber)" : "var(--aegis-red)";
  const circumference = 2 * Math.PI * 44;
  const offset = circumference - (privacyScore / 100) * circumference;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Data Protection & DLP</h1>
        <p className="text-sm text-muted-foreground mt-1">ANGELGRID autonomous content classification, AI data boundary enforcement, and Privacy-by-Design across every environment</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {stats.map(s => (
          <GlassCard key={s.label} glow={s.glow} className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-primary/10"><s.icon className="h-5 w-5 text-primary" /></div>
            <div><p className="text-2xl font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></div>
          </GlassCard>
        ))}
      </div>

      {/* Classification Dashboard + Privacy Score */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-9">
          <div className="grid grid-cols-3 gap-4">
            {categories.map(c => (
              <GlassCard key={c.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold">{c.name}</span>
                  <div className={`flex items-center gap-1 text-xs ${c.trend === "up" ? "text-[hsl(var(--aegis-amber))]" : "text-[hsl(var(--aegis-green))]"}`}>
                    {c.trend === "up" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                    {c.delta}
                  </div>
                </div>
                <p className="text-2xl font-bold">{c.count}</p>
                <p className="text-xs text-muted-foreground mt-1">documents classified</p>
              </GlassCard>
            ))}
          </div>
        </div>
        <div className="col-span-3">
          <GlassCard aurora className="h-full flex flex-col items-center justify-center">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Privacy-by-Design</p>
            <div className="relative w-24 h-24">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="44" fill="none" stroke="hsl(var(--border))" strokeWidth="5" />
                <circle cx="50" cy="50" r="44" fill="none" stroke={`hsl(${privacyColor})`} strokeWidth="5" strokeLinecap="round"
                  strokeDasharray={circumference} strokeDashoffset={offset}
                  className="transition-all duration-1000 ease-out" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">{privacyScore}</span>
                <span className="text-[10px] text-muted-foreground">/ 100</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* AI Data Boundary Enforcement */}
      <GlassCard aurora>
        <div className="flex items-center gap-2 mb-4">
          <Bot className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">AI Data Boundary Enforcement — LLM Data Leak Prevention</h3>
        </div>
        <table className="w-full text-sm">
          <thead><tr className="border-b border-border/50 text-muted-foreground text-xs">
            <th className="text-left py-2 px-2 font-medium">AI Agent</th>
            <th className="text-left py-2 px-2 font-medium">Prompts/hr</th>
            <th className="text-left py-2 px-2 font-medium">PII Detected</th>
            <th className="text-left py-2 px-2 font-medium">PII Blocked</th>
            <th className="text-left py-2 px-2 font-medium">Leak Attempts</th>
            <th className="text-left py-2 px-2 font-medium">Status</th>
          </tr></thead>
          <tbody>
            {aiBoundaryEnforcement.map(a => (
              <tr key={a.agent} className="border-b border-border/20 hover:bg-muted/20">
                <td className="py-2 px-2 font-medium">{a.agent}</td>
                <td className="py-2 px-2 text-xs text-muted-foreground">{a.prompts}</td>
                <td className="py-2 px-2 text-xs font-semibold">{a.piiDetected}</td>
                <td className="py-2 px-2 text-xs text-[hsl(var(--aegis-green))] font-semibold">{a.piiBlocked}</td>
                <td className={`py-2 px-2 text-xs font-semibold ${a.leakAttempts > 0 ? "text-[hsl(var(--aegis-amber))]" : "text-[hsl(var(--aegis-green))]"}`}>{a.leakAttempts}</td>
                <td className="py-2 px-2"><Badge variant={a.status === "Enforced" ? "default" : "secondary"} className="text-[10px]">{a.status}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </GlassCard>

      {/* Document Trace */}
      <GlassCard>
        <h3 className="text-sm font-semibold text-muted-foreground mb-3">Document Trace View</h3>
        <table className="w-full text-sm">
          <thead><tr className="border-b border-border/50 text-xs text-muted-foreground">
            <th className="text-left py-2 px-2 font-medium">Document</th>
            <th className="text-left py-2 px-2 font-medium">Classification</th>
            <th className="text-left py-2 px-2 font-medium">Accesses</th>
            <th className="text-left py-2 px-2 font-medium">Last Accessed By</th>
            <th className="text-left py-2 px-2 font-medium">Location</th>
            <th className="text-left py-2 px-2 font-medium">Encrypted</th>
          </tr></thead>
          <tbody>
            {documents.map(d => (
              <tr key={d.name} className="border-b border-border/20 hover:bg-muted/20">
                <td className="py-2 px-2"><div className="flex items-center gap-2"><FileText className="h-3.5 w-3.5 text-primary" /><span className="font-medium">{d.name}</span></div></td>
                <td className="py-2 px-2"><Badge variant={classColor(d.classification)} className="text-[10px]">{d.classification}</Badge></td>
                <td className="py-2 px-2 text-xs"><div className="flex items-center gap-1"><Eye className="h-3 w-3 text-muted-foreground" />{d.accesses}</div></td>
                <td className="py-2 px-2 text-xs text-muted-foreground">{d.lastBy}</td>
                <td className="py-2 px-2 text-xs"><div className="flex items-center gap-1"><MapPin className="h-3 w-3 text-muted-foreground" />{d.location}</div></td>
                <td className="py-2 px-2">{d.encrypted ? <span className="text-[hsl(var(--aegis-green))] text-xs">● Encrypted</span> : <span className="text-[hsl(var(--aegis-red))] text-xs">● Plain</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </GlassCard>

      {/* Cross-Environment Data Flow Map */}
      <GlassCard>
        <div className="flex items-center gap-2 mb-4">
          <Globe className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-muted-foreground">Cross-Environment Data Flow Map</h3>
        </div>
        <div className="space-y-3">
          {dataFlowMap.map((f, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/20 border border-border/20">
              <div className="flex items-center gap-2 min-w-[140px]">
                <Server className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{f.from}</span>
              </div>
              <ArrowRight className="h-4 w-4 text-primary shrink-0" />
              <div className="flex items-center gap-2 min-w-[140px]">
                <Cloud className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{f.to}</span>
              </div>
              <div className="flex-1 flex items-center justify-end gap-4 text-xs">
                <Badge variant="outline" className="text-[10px]">{f.encryption}</Badge>
                <span className="text-[hsl(var(--aegis-green))]">● {f.status}</span>
                <span className="text-muted-foreground">{f.volume}</span>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      <div className="grid grid-cols-12 gap-5">
        {/* Encryption Policies */}
        <div className="col-span-5">
          <GlassCard className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Encryption Policies</h3>
            <div className="space-y-3">
              {encryption.map(e => (
                <div key={e.algo} className="p-3 rounded-lg bg-muted/30 border border-border/30">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <Lock className="h-3.5 w-3.5 text-primary" />
                      <span className="text-sm font-medium">{e.algo}</span>
                    </div>
                    <Badge variant="default" className="text-[10px]">Enforced</Badge>
                  </div>
                  <p className="text-[10px] text-muted-foreground mb-2">{e.scope}</p>
                  <div className="h-1.5 rounded-full bg-muted">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${e.coverage}%` }} />
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-1">{e.coverage}% coverage</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* DLP Alert Center */}
        <div className="col-span-7">
          <GlassCard className="h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">DLP Alert Center</h3>
            <div className="space-y-2.5">
              {dlpAlerts.map((a, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 border border-border/20">
                  <ShieldAlert className={`h-4 w-4 mt-0.5 shrink-0 ${a.severity === "critical" ? "text-[hsl(var(--aegis-red))]" : a.severity === "warning" ? "text-[hsl(var(--aegis-amber))]" : "text-primary"}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{a.event}</p>
                      <span className="text-[10px] text-muted-foreground">{a.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{a.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
