import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { FileCheck, ScrollText, Lock, AlertTriangle, ShieldAlert, TrendingUp, TrendingDown, ArrowRight, FileText, Eye, MapPin } from "lucide-react";

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
  { time: "2h ago", event: "New classification rule triggered", detail: "PII pattern detected in 23 new documents — auto-classified as Confidential", severity: "info" },
];

const classColor = (c: string) => c === "Confidential" ? "destructive" as const : c === "Internal" ? "secondary" as const : "outline" as const;

export default function DataProtection() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Data Protection & DLP</h1>
        <p className="text-sm text-muted-foreground mt-1">ANGELGRID autonomous content classification, ANGELNODE encryption enforcement, and document tracing</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {stats.map(s => (
          <GlassCard key={s.label} glow={s.glow} className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-primary/10"><s.icon className="h-5 w-5 text-primary" /></div>
            <div><p className="text-2xl font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></div>
          </GlassCard>
        ))}
      </div>

      {/* Classification Dashboard */}
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
