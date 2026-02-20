

# Maximum Simplification: Anti-Evil AGI Core

## What the User Is Saying

The dashboard still has too many separate GlassCards, too many numbers, too many labeled sections. The Settings page is also extremely information-dense with 7+ separate panels. The user wants the product to feel like ONE bold statement: **AngelClaw stops Evil AGI. Period.**

---

## Dashboard: Reduce to 3 Sections (from 5)

The current 5 GlassCards get collapsed into 3 — less chrome, more signal:

### New Structure

```text
┌─────────────────────────────────────────────────────────┐
│  AngelClaw  ·  Halo 94  ·  All Wardens Active  ·  Fail-Closed  │
├────────────────────┬────────────────────────────────────┤
│   HALO GAUGE       │   3 counters, stacked vertically   │
│   (large ring)     │   Injections  |  Jailbreaks  |     │
│                    │   Model Poisoning                   │
│                    │   ────────────────────────────     │
│                    │   Live feed: 3 rows max, no title  │
├────────────────────┴────────────────────────────────────┤
│  ANGEL LEGION  ·  6 wardens  ·  1 row, no grid border  │
├─────────────────────────────────────────────────────────┤
│  Threat chart (left)  |  Seraph Brain: 2 lines (right) │
└─────────────────────────────────────────────────────────┘
```

**What gets removed from Dashboard:**
- The "Evil AGI Shield" as a separate full-width GlassCard → merged into the top row right column
- The "Angel Legion" as a full GlassCard → becomes a minimal horizontal strip (6 dots + names)
- The interception table (3 rows) → removed entirely. The 3 numbers tell the story alone.
- Seraph Brain as its own card → folded into bottom row alongside chart

**What remains (absolute minimum):**
1. **Header** — 1 line, 3 pills
2. **Top row** — Halo gauge left | 3 intercept numbers + 3 live alerts right
3. **Angel Legion strip** — 6 wardens as a single inline row of chips
4. **Bottom row** — Threat chart | 2 Seraph Brain lines

---

## Settings Page: Reduce to 4 Sections (from 7)

Currently has: Tenant Info, System Toggles, Anti-Tamper (huge), Fleet table, Notification Matrix, AI Model Governance, Compliance, RBAC = **8 panels**.

Slim to:

| Keep | Cut |
|---|---|
| Tenant card (trimmed to 3 stats) | Remove the Anti-Tamper full audit trail table (keep mode selector only) |
| System Toggles (keep 6, remove descriptions) | Remove Fleet table (it lives in its own page) |
| Anti-Tamper mode selector + 2 stats only | Remove Notification Matrix |
| RBAC roles (3 rows, simplified) | Remove Compliance frameworks (lives in its own page) |

---

## Files Changed

| File | Change |
|---|---|
| `src/pages/Dashboard.tsx` | Collapse to 3 sections: top row merges gauge + intercept counters + live feed; Angel Legion becomes a single horizontal chip strip; remove standalone Evil AGI Shield card and interception table |
| `src/components/dashboard/ActiveAlertsFeed.tsx` | Cap to 3 alerts max, remove dismiss button (reduces visual noise), shorter message strings |
| `src/pages/SettingsPage.tsx` | Cut from 8 panels to 4: remove Anti-Tamper audit table, Fleet table, Notification Matrix, Compliance frameworks |

---

## Visual Principle

Every section should pass the **"one glance" test**: you see it, you understand it in under 2 seconds, and you move on. No tables where a number works. No 7 columns where 3 work. No separate card where an inline row works.

