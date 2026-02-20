import { useState } from "react";
import { Search, Bell, Feather, ShieldCheck, Cpu, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const systemStatus = [
  { label: "Wardens", value: "12/12", ok: true },
  { label: "Nodes", value: "1,284", ok: true },
  { label: "Halo", value: "94", ok: true },
];

export function TopBar() {
  const [query, setQuery] = useState("");

  return (
    <header className="h-14 border-b border-border/30 glass flex items-center justify-between px-6 shrink-0 z-40">
      {/* Seraph Brain Search */}
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder='Seraph Brain: "show threats" · "scan system" · "legion status"'
          className="pl-9 h-9 bg-muted/40 border-border/30 text-xs placeholder:text-muted-foreground/50 focus-visible:ring-primary/30"
        />
        {query && (
          <div className="absolute left-0 right-0 top-10 z-50 rounded-lg glass border border-border/50 shadow-xl p-2 space-y-1">
            {["Scan system for threats", "Show me critical alerts", "Legion status", "Anti-tamper report"].filter(s => s.toLowerCase().includes(query.toLowerCase())).map(s => (
              <button key={s} onClick={() => setQuery(s)} className="w-full text-left text-xs px-3 py-1.5 rounded hover:bg-accent/50 text-foreground flex items-center gap-2">
                <Search className="w-3 h-3 text-primary" />{s}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Center status pills */}
      <div className="hidden lg:flex items-center gap-3">
        {systemStatus.map(s => (
          <div key={s.label} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted/40 border border-border/30">
            <span className={`w-1.5 h-1.5 rounded-full ${s.ok ? "bg-[hsl(var(--aegis-green))] animate-pulse" : "bg-destructive"}`} />
            <span className="text-[10px] text-muted-foreground">{s.label}:</span>
            <span className="text-[10px] font-bold text-foreground">{s.value}</span>
          </div>
        ))}
      </div>

      {/* Right section */}
      <div className="flex items-center gap-3">
        {/* Halo Score */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
          <Feather className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-bold text-primary">Halo 94</span>
          <ShieldCheck className="w-3 h-3 text-[hsl(var(--aegis-green))]" />
        </div>

        {/* Fail-Closed badge */}
        <div className="hidden xl:flex items-center gap-1.5 px-2 py-1 rounded-full bg-[hsl(var(--aegis-green)/0.1)] border border-[hsl(var(--aegis-green)/0.3)]">
          <Cpu className="w-3 h-3 text-[hsl(var(--aegis-green))]" />
          <span className="text-[10px] font-semibold text-[hsl(var(--aegis-green))]">Fail-Closed</span>
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-accent/50 transition-colors">
          <Bell className="w-4 h-4 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[hsl(var(--aegis-red))] animate-pulse" />
        </button>

        {/* Avatar */}
        <div className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-accent/50 cursor-pointer transition-colors">
          <Avatar className="w-7 h-7 border border-primary/30">
            <AvatarFallback className="bg-primary/10 text-primary text-[10px] font-bold">AC</AvatarFallback>
          </Avatar>
          <div className="hidden md:block">
            <p className="text-xs font-semibold leading-tight">admin</p>
            <p className="text-[10px] text-muted-foreground leading-tight">acme-corp · super_admin</p>
          </div>
          <ChevronDown className="w-3 h-3 text-muted-foreground hidden md:block" />
        </div>
      </div>
    </header>
  );
}
