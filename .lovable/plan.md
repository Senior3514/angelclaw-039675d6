
# Three-Feature Enhancement Plan: AngelClaw v3.0.0

## Overview of Changes

Three focused, high-impact additions:
1. **Real-Time Alerts Feed Panel** — Dashboard upgrade with live-simulated event stream
2. **Evil AGI Shield Panel** — Dedicated AI agent protection dashboard panel
3. **Anti-Tamper Settings Section** — Full OFF/MONITOR/ENFORCE toggle with audit trail

---

## Feature 1: Real-Time Alerts Feed Panel (Dashboard)

### What changes
**File:** `src/components/dashboard/ActiveAlertsFeed.tsx` — full rewrite

**Current state:** Static list of 6 hardcoded alerts, no interactivity, references old "ANGELGRID" branding.

**New behavior:**
- Simulated "live" feed using `useState` + `useEffect` with `setInterval` — every ~4 seconds a new alert is injected at the top of the list (cycling through a larger pool of 12+ realistic AngelClaw security events)
- A pulsing **"LIVE"** badge in the header using the existing `animate-pulse` utility
- Severity filter tabs: **All / Critical / Warning / Info** — clicking filters the visible list
- Each alert row shows: severity icon, warden name responsible (e.g. "Vigil", "Vault Keeper"), message, timestamp, and a dismiss `×` button
- Dismissed alerts are removed from state
- Color coding preserved with existing `aegis-red/amber/cyan` tokens
- Max height with smooth scroll — new alerts animate in from the top using CSS `transition`
- Alert count badge updates live (e.g. "3 Critical")

**New alerts pool includes AngelClaw-specific events:**
- Vault Keeper blocked prompt injection on GPT-4o
- Vigil detected lateral movement from 194.x.x.x (3-step prediction)
- Iron Wing auto-patched 14 nodes — zero downtime
- Gate Keeper blocked API abuse cascade on `/api/v1/chat`
- Drift Watcher flagged behavioral deviation on tenant `startup-xyz`
- Seraph Brain neutralized jailbreak attempt on Claude 3.5
- Chronicle detected kill-chain sequence — 4 steps ahead
- Paladin: GDPR boundary violation blocked on Data Pipeline Agent

**Dashboard layout change:** The existing `col-span-7` alerts card gets the new component — no layout change needed.

---

## Feature 2: Evil AGI Shield Panel (Dashboard)

### What changes
**File:** `src/pages/Dashboard.tsx` — new section inserted between the existing "AI Agent Protection Panel" and the "Seraph Brain Ticker"

**New GlassCard: "Evil AGI Shield — OpenClaw Defense Layer"**

This panel is distinct from the existing "AI Agent Protection Panel" (which shows monitored agents). The Evil AGI Shield focuses specifically on **active threat interceptions** targeting AI systems — the offensive side.

**Contents:**
- Header: `ShieldAlert` icon + title "Evil AGI Shield" + aurora badge "Fail-Closed Active"
- **3-column stat row** at the top:
  - Prompt Injections Blocked Today: `1,247`
  - Jailbreak Attempts Neutralized: `89`
  - Model Poisoning Events Stopped: `12`
- **Threat interception table** (6 rows, scrollable) with columns:
  - Target Agent (e.g. "GPT-4o Production")
  - Attack Type (Prompt Injection / Jailbreak / Data Exfil / Adversarial Input / Model Poisoning / Agent Hijack)
  - Warden Responsible (Vault Keeper / Vigil / Glass Eye / Drift Watcher)
  - Status: "Blocked" (red badge) / "Neutralized" (green badge) / "Monitoring" (amber badge)
  - Time
- **Protection mode indicator** at bottom: `Fail-Closed` chip + "If AngelClaw unreachable, all AI actions blocked" note
- Uses `aurora` prop on GlassCard for visual distinction
- Consistent with existing `aiAgents` data format — same color tokens

---

## Feature 3: Anti-Tamper Toggle in Settings (Settings Page)

### What changes
**File:** `src/pages/SettingsPage.tsx` — new dedicated section inserted after the "ANGELNODE Fleet Management" card

**Current state:** Anti-Tamper exists only as a single toggle in the "System Configuration" list (`Anti-Tamper ENFORCE`). It has no dedicated panel, no mode selector, and no audit trail.

**New dedicated GlassCard: "Anti-Tamper Protection — Angel Legion Guard"**

**Structure:**

**(A) Mode Selector — 3-state toggle group:**
```
[ OFF ]  [ MONITOR ]  [ ENFORCE ]
```
- Implemented with 3 styled buttons (radio-style), using `useState` for `antiTamperMode`
- Each mode has a clear color: OFF = muted, MONITOR = amber, ENFORCE = cyan/green
- Mode description updates below the selector:
  - OFF: "Anti-Tamper disabled. ANGELNODE agents are unprotected from modification."
  - MONITOR: "Tamper events logged and alerted. Agents continue operating. Heartbeat + checksum tracking active."
  - ENFORCE: "Tamper attempts blocked. Iron Wing auto-restores agent binary. Fail-Closed on heartbeat loss."
- Per-scope badges: "Applied to: All Tenants · All ANGELNODEs"

**(B) Status Row — 4 live stats:**
- Heartbeat Checks Today: `48,291`
- Checksum Verifications: `1,284`
- Tamper Attempts Detected: `3`
- Auto-Restores by Iron Wing: `3`

**(C) Tamper Event Audit Trail — table:**
| Event | Agent | Tenant | Severity | Warden | Resolution | Time |
|---|---|---|---|---|---|---|
| Binary checksum mismatch | `node-win-0442` | `acme-corp` | Critical | Iron Wing | Auto-restored | 2h ago |
| Unauthorized process injection | `node-linux-0091` | `dev-team` | High | Vigil | Quarantined | 6h ago |
| Heartbeat timeout (>60s) | `node-mac-0217` | `startup-xyz` | Warning | Iron Wing | Restarted | 11h ago |
| Config file modification | `node-win-0104` | `acme-corp` | High | Scroll Keeper | Reverted | 1d ago |
| Agent shutdown attempt | `node-linux-0033` | `dev-team` | Critical | Iron Wing | Blocked + restored | 2d ago |

- Severity uses existing `aegis-red/amber` tokens
- Resolution badges: "Auto-restored" (green), "Quarantined" (red), "Reverted" (cyan)

**Remove the old Anti-Tamper toggle** from the `systemToggles` array (line 12 in SettingsPage) since it is now superseded by the dedicated panel with richer controls.

---

## Technical Approach

- **No new dependencies** — all using existing React state (`useState`, `useEffect`), Lucide icons, GlassCard, Badge, Switch already in the project
- **No new files** — all changes in 2 existing files + 1 existing component
- **Simulated live feed** — `useEffect` with `setInterval` returning cleanup; alerts cycle from a static pool so no external API needed
- **State management** — all local component state, no global store needed
- **Animation** — new alerts use existing CSS transition classes; new `@keyframes` added only if needed for alert-in animation
- **Consistency** — all new UI uses existing `GlassCard`, `Badge`, `aegis-*` color tokens, and Lucide icons already imported

## Files Modified

| File | Change Type |
|---|---|
| `src/components/dashboard/ActiveAlertsFeed.tsx` | Full rewrite — live feed, filters, dismiss |
| `src/pages/Dashboard.tsx` | Insert Evil AGI Shield panel section |
| `src/pages/SettingsPage.tsx` | Insert Anti-Tamper dedicated section, remove old toggle |
