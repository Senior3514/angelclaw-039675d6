import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Radio,
  Building2,
  BellRing,
  Shield,
  ShieldAlert,
  BarChart3,
  Brain,
  ScrollText,
  Settings,
  ChevronLeft,
  ChevronRight,
  Feather,
} from "lucide-react";

const navItems = [
  { title: "Dashboard", path: "/", icon: LayoutDashboard },
  { title: "Fleet", path: "/network", icon: Radio },
  { title: "Tenants", path: "/identity", icon: Building2 },
  { title: "Alerts", path: "/dlp", icon: BellRing },
  { title: "Angel Legion", path: "/analytics", icon: Shield },
  { title: "Anti-Tamper", path: "/policy", icon: ShieldAlert },
  { title: "Analytics", path: "/automation", icon: BarChart3 },
  { title: "Self-Learning", path: "/self-learning", icon: Brain },
  { title: "Policies", path: "/policies-hub", icon: ScrollText },
  { title: "Settings", path: "/settings", icon: Settings },
];

export function AegisSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={cn(
        "flex flex-col h-screen glass-strong border-r border-border/40 transition-all duration-300 ease-out z-50 shrink-0",
        collapsed ? "w-[68px]" : "w-[220px]"
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 h-16 border-b border-border/30">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-aegis-cyan to-aegis-purple flex items-center justify-center shrink-0">
          <Feather className="w-5 h-5 text-primary-foreground" />
        </div>
        {!collapsed && (
          <div className="min-w-0">
            <span className="text-base font-bold tracking-wider text-gradient-cyan select-none block leading-tight">
              AngelClaw
            </span>
            <span className="text-[9px] text-muted-foreground uppercase tracking-widest select-none">
              v3.0 · Guardian
            </span>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 px-2 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group relative",
                isActive
                  ? "bg-primary/10 text-primary glow-cyan"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              )}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full bg-primary" />
              )}
              <item.icon className={cn("w-4 h-4 shrink-0", isActive && "text-primary")} />
              {!collapsed && <span className="text-xs">{item.title}</span>}
            </NavLink>
          );
        })}
      </nav>

      {/* Tagline */}
      {!collapsed && (
        <div className="px-4 py-3 border-t border-border/20">
          <p className="text-[9px] text-muted-foreground/60 italic text-center leading-tight">
            Guardian angel, not gatekeeper.
          </p>
        </div>
      )}

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex items-center justify-center h-10 border-t border-border/30 text-muted-foreground hover:text-foreground transition-colors"
      >
        {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>
    </aside>
  );
}
