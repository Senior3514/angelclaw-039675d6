
# Dashboard Radical Slim-Down: Core Identity Only

## The Problem (Specific)

The current dashboard structure is already correct (5 sections, right narrative). But it's still overwhelming because:
- **ActiveAlertsFeed**: 15-item alert pool cycling every 4s — too noisy, too much text per item
- **Angel Legion**: 12 wardens each showing a large "blocked" number — becomes a number dump
- **Seraph Brain Ticker**: 5 items of dense text — nobody reads all of it
- **Evil AGI Shield**: 6 agents + 6 interception rows + 3 counters + footer = too much inside one card
- **Interception table**: 5 columns × 6 rows of data — cognitive overload

## The Fix: Trim Everything to Its Essence

Same 5 sections. Same structure. Just drastically less data, shorter text, more breathing room.

---

## Section-by-Section Cuts

### Section 1 — Header (no change needed, already clean)

### Section 2 — Halo Gauge + Live Feed
- **Gauge**: keep as-is (it's already minimal)
- **ActiveAlertsFeed**: reduce pool from 15 items → **5 items**, shorter 1-line messages, remove the filter tabs (All / Critical / Warning / Info adds clutter), keep just the LIVE badge + dismiss. Max visible = 4 rows.

### Section 3 — Evil AGI Shield
- **Left side**: Keep the 3 counters (core identity) — but reduce to **simpler numbers** (no thousands with commas needed to feel dramatic)
- **Remove the 6-agent compact grid** entirely — it adds nothing to the Evil AGI story. The agents are implied.
- **Right side**: Reduce interception table from 6 rows → **3 rows**, drop the "Time" column, keep Agent | Attack | Warden | Status (4 cols)
- **Footer**: Keep the Fail-Closed guarantee (1 line only)

### Section 4 — Angel Legion
- Reduce from **12 wardens → 6 wardens** (the most important ones)
- Remove the "blocked" number from each card — just name + specialty + green dot
- 3-col grid instead of 4-col (more breathing room per card)

### Section 5 — Seraph Brain Ticker + Threat Chart
- Reduce ticker from **5 items → 3 items**, shorter text per item (max 10 words each)
- Threat chart stays as-is

---

## Files Changed

| File | Change |
|---|---|
| `src/pages/Dashboard.tsx` | Remove agent grid from Evil AGI panel, trim interception table to 3 rows, trim wardens to 6, simplify warden cards |
| `src/components/dashboard/ActiveAlertsFeed.tsx` | Reduce pool to 5 items, shorter messages, remove filter tabs, cap max-height tighter |

## Result

The dashboard tells ONE story in ONE glance:
- **Halo 94** — are we safe?
- **Live feed** — what's happening right now? (4 items max, no tab UI)
- **Evil AGI Shield** — 3 numbers + 3 interceptions = the fight at a glance
- **6 Wardens** — who's defending us? (name + role only)
- **Seraph Brain** — 3 short intel lines
