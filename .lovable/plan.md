
# Dashboard Refactor: The Evil AGI Antagonist

## The Problem

The current dashboard tells too many stories at once:
- **4 stat rows** (Wingspan Stats + Predictive Stats = 8 cards of overlapping numbers)
- **Fleet Panel** — duplicates the entire Fleet page
- **AI Agent Protection Panel** + **Evil AGI Shield Panel** — two separate panels that both show the same topic (AI threats)
- **System Health Grid** — generic infra monitoring that doesn't serve the narrative
- Result: a data dump with no clear identity

## The Core Identity

AngelClaw is **the perfect antagonist to Evil AGI**.
The dashboard should tell one story: *"Here's the threat. Here's the guardian. Here's the outcome."*

---

## New Dashboard Architecture — 5 Focused Sections

```text
┌─────────────────────────────────────────────────────────┐
│  HEADER — Halo Score pill + Fail-Closed + Wardens pill   │
├──────────────────────┬──────────────────────────────────┤
│  HALO SCORE GAUGE    │   LIVE THREAT STREAM             │
│  (large, centered)   │   (real-time events from         │
│  Posture ring + 3    │    ActiveAlertsFeed)              │
│  key counters below  │                                   │
├──────────────────────┴──────────────────────────────────┤
│  EVIL AGI SHIELD — merged panel (the protagonist story)  │
│  Left: 3 intercept stats  |  Right: live intercept table │
│  "Prompt Injection · Jailbreak · Model Poisoning"        │
├─────────────────────────────────────────────────────────┤
│  ANGEL LEGION STATUS — 12 wardens in a compact grid      │
│  Each warden: name + specialty + status dot + stat       │
├────────────────┬────────────────────────────────────────┤
│ SERAPH BRAIN   │  THREAT LANDSCAPE CHART                 │
│ TICKER (full   │  (existing ThreatLandscapeChart)        │
│ width marquee) │                                         │
└────────────────┴────────────────────────────────────────┘
```

---

## Section-by-Section Changes

### SECTION 1: Header (kept, refined)
- Remove the verbose subtitle paragraph
- Keep: Feather icon + title + v3.0.0 badge
- Keep right-side pills: "All Wardens Active" + "Fail-Closed"
- Add one more pill: **Halo: 94** in cyan — the single most important number, always visible

### SECTION 2: Top Row — Halo + Live Feed (replaces 3 separate rows)
- **Left col (4/12):** Large `SecurityPostureGauge` with 3 key counters beneath it:
  - ANGELNODEs: 1,284
  - Threats Today: 62,780
  - Uptime: 100%
  - Fix the old "ANGELGRID" label in the gauge to say "Halo Score"
- **Right col (8/12):** `ActiveAlertsFeed` — the live stream. Title "Live Threat Stream" with the pulsing LIVE badge
- **Removes:** The 4-card Wingspan stats row + the 4-card Predictive Stats row — the key numbers are folded into the gauge column or the header pills

### SECTION 3: Evil AGI Shield (merged, upgraded)
- **Merges** the current "AI Agent Protection Panel" + "Evil AGI Shield Panel" into **one** definitive panel
- This is the heart of the product — AngelClaw vs Evil AGI
- **Layout:** Side-by-side
  - **Left (5/12):** The 3 big intercept counters with dramatic sizing:
    - 🔴 **1,247** Prompt Injections Blocked
    - 🟡 **89** Jailbreaks Neutralized
    - 🔵 **12** Model Poisoning Stopped
    - Below: compact AI agents at-a-glance (6 agents, just name + status badge in a tight 2-col grid)
  - **Right (7/12):** The live interception table (6 rows: Agent | Attack | Warden | Status | Time)
  - Bottom footer: Fail-Closed guarantee statement
- **Removes:** The separate AI Agent Protection Panel (its agents appear compactly in the left column)

### SECTION 4: Angel Legion — 12 Wardens Grid (replaces SystemHealthGrid)
- 12 wardens in a **4-column × 3-row compact grid** (not a full table)
- Each warden card: warden name + specialty tag + green status dot + one key number (threats blocked)
- Replaces the generic "SystemHealthGrid" which showed unrelated server health metrics
- This keeps the Legion alive on the dashboard without needing to navigate away

### SECTION 5: Seraph Brain Ticker + Threat Chart (bottom row)
- **Left (5/12):** Existing `ThreatLandscapeChart` — keep as-is, just reposition
- **Right (7/12):** Seraph Brain Ticker as a full card (not just a footer strip) — Brain icon + scrolling marquee
- Alternatively: keep ticker full-width at the very bottom (keeps the "heartbeat of the system" feel)

---

## What Gets REMOVED from Dashboard

| Removed | Reason |
|---|---|
| Wingspan Stats row (4 cards) | Numbers folded into gauge column + header pills |
| Predictive Stats row (4 cards) | Redundant — same data shown in Evil AGI panel |
| ANGELNODE Fleet GlassCard | Lives in the Fleet page — no reason to duplicate |
| AI Agent Protection Panel | Merged into Evil AGI Shield (compact agents list) |
| System Health Grid | Replaced by Angel Legion 12-warden grid |
| Separate Evil AGI Shield card | Merged with AI Agent panel into one definitive card |
| NetworkTrustBar + ComplianceHealth | Too granular for a command dashboard |

---

## Files Modified

| File | Change |
|---|---|
| `src/pages/Dashboard.tsx` | Full structural rewrite — 5 clean sections |
| `src/components/dashboard/SecurityPostureGauge.tsx` | Fix "ANGELGRID" → "Halo Score" label |

## Files Untouched

- `ActiveAlertsFeed.tsx` — already excellent, used as-is
- `ThreatLandscapeChart.tsx` — kept
- All other pages — untouched

---

## Result

The dashboard becomes a **mission control** with one clear story:
1. **Are we safe?** → Halo Score
2. **What's attacking us right now?** → Live Threat Stream
3. **How are we fighting Evil AGI specifically?** → Evil AGI Shield (the hero panel)
4. **Who is defending us?** → Angel Legion 12 wardens
5. **What's the brain seeing?** → Seraph Brain Ticker
