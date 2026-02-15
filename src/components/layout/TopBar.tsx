import { Search, Bell, ShieldCheck } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function TopBar() {
  return (
    <header className="h-14 border-b border-border/30 glass flex items-center justify-between px-6 shrink-0 z-40">
      {/* Search */}
      <div className="relative w-80">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search commands, assets, policies..."
          className="pl-9 h-9 bg-muted/40 border-border/30 text-sm placeholder:text-muted-foreground/60 focus-visible:ring-primary/30"
        />
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        {/* Trust Score */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-aegis-green/10 border border-aegis-green/20">
          <ShieldCheck className="w-4 h-4 text-aegis-green" />
          <span className="text-xs font-semibold text-aegis-green">Trust 94%</span>
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-accent/50 transition-colors">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-aegis-amber animate-pulse" />
        </button>

        {/* Avatar */}
        <Avatar className="w-8 h-8 border border-border/50">
          <AvatarFallback className="bg-primary/10 text-primary text-xs font-bold">CA</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
