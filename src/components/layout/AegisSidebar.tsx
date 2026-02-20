import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Radio,
  Building2,
  BellRing,
  Shield,
  BarChart3,
  Brain,
  ScrollText,
  Settings,
  ChevronLeft,
  ChevronRight,
  Feather,
  Activity,
  CheckCircle2,
} from "lucide-react";

const navItems = [
  { title: "Dashboard", path: "/", icon: LayoutDashboard, badge: null },
  { title: "Fleet", path: "/network", icon: Radio, badge: "1,284" },
  { title: "Tenants & Identity", path: "/identity", icon: Building2, badge: "3" },
  { title: "Alerts & Events", path: "/dlp", icon: BellRing, badge: "3", badgeDanger: true },
  { title: "Angel Legion", path: "/analytics", icon: Shield, badge: "12" },
  { title: "Analytics", path: "/automation", icon: BarChart3, badge: null },
  { title: "Self-Learning", path: "/self-learning", icon: Brain, badge: null },
  { title: "Policies", path: "/policies-hub", icon: ScrollText, badge: "156" },
  { title: "Settings", path: "/settings", icon: Settings, badge: null },
];

export function AegisSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={cn(
        "flex flex-col h-screen glass-strong border-r border-border/40 transition-all duration-300 ease-out z-50 shrink-0",
        collapsed ? "w-[60px]" : "w-[210px]"
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-3 h-14 border-b border-border/30">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-[hsl(var(--aegis-purple))] flex items-center justify-center shrink-0 shadow-md">
          <Feather className="w-4 h-4 text-primary-foreground" />
        </div>
        {!collapsed && (
          <div className="min-w-0">
            <span className="text-sm font-bold tracking-wider text-gradient-cyan select-none block leading-tight">
              AngelClaw
            </span>
            <span className="text-[9px] text-muted-foreground uppercase tracking-widest select-none">
              v3.0.0 · Dominion
            </span>
          </div>
        )}
      </div>

      {/* System Status */}
      {!collapsed && (
        <div className="mx-3 mt-3 p-2.5 rounded-lg bg-[hsl(var(--aegis-green)/0.06)] border border-[hsl(var(--aegis-green)/0.2)]">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--aegis-green))] animate-pulse" />
            <span className="text-[9px] text-[hsl(var(--aegis-green))] font-bold uppercase tracking-wider">All Systems Nominal</span>
          </div>
          <div className="flex items-center gap-3 mt-1.5">
            <div className="flex items-center gap-1"><CheckCircle2 className="w-2.5 h-2.5 text-[hsl(var(--aegis-green))]" /><span className="text-[8px] text-muted-foreground">12 Wardens</span></div>
            <div className="flex items-center gap-1"><Activity className="w-2.5 h-2.5 text-primary" /><span className="text-[8px] text-muted-foreground">48,291 events</span></div>
          </div>
        </div>
      )}

      {/* Nav */}
      <nav className="flex-1 py-3 px-2 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 group relative",
                isActive
                  ? "bg-primary/12 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/40"
              )}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full bg-primary shadow-[0_0_6px_hsl(var(--primary))]" />
              )}
              <item.icon className={cn("w-4 h-4 shrink-0 transition-colors", isActive ? "text-primary" : "group-hover:text-foreground")} />
              {!collapsed && (
                <>
                  <span className="text-xs flex-1">{item.title}</span>
                  {item.badge && (
                    <span className={cn(
                      "text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none",
                      item.badgeDanger
                        ? "bg-[hsl(var(--aegis-red)/0.15)] text-[hsl(var(--aegis-red))]"
                        : "bg-muted text-muted-foreground"
                    )}>
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Tagline */}
      {!collapsed && (
        <div className="px-4 py-3 border-t border-border/20">
          <p className="text-[9px] text-muted-foreground/50 italic text-center leading-tight">
            Guardian angel, not gatekeeper.
          </p>
        </div>
      )}

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex items-center justify-center h-9 border-t border-border/30 text-muted-foreground hover:text-foreground transition-colors text-xs"
      >
        {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>
    </aside>
  );
}
