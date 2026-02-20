
# Nuclear Simplification: One Story, Zero Clutter

## What's Still Wrong (Specifically)

The structure is right (3 sections). The **content inside each section** is still dense:

- Left card: gauge + 3 stat sub-cards = two separate visual units in one card
- Right card: section header + Fail-Closed pill + 3 intercept counters + live feed header + feed items with warden badges + timestamps = ~7 visual layers
- Angel Legion strip: icons + names + pulse + badge = 4 elements per warden chip
- Bottom: separate Seraph Brain card with header + CPU icon + 3 lines of text
- `ActiveAlertsFeed`: each row has icon + message + warden badge + time = 4 fields

## The New Rule: Every Section = One Thought

- **Top row**: Gauge on the left. On the right: the 3 intercept numbers (HUGE, no labels beyond the number type), then 2 live alert lines below with NO warden badge, NO timestamp — just the message.
- **Angel Legion**: 6 names only + green dot. Remove icons. Remove badge.
- **Bottom**: Chart fills left. Seraph Brain = 2 short lines max, no card header, no CPU icon — just text.
- **`ActiveAlertsFeed`**: Show 2 alerts max. Each = colored dot + 1-line message. Remove warden badge, remove time, remove icon, remove border styling complexity.

## Exact Cuts Per File

### `src/pages/Dashboard.tsx`

1. **Remove** the 3 mini stat sub-cards under the gauge (ANGELNODEs, Threats, Uptime) — the Halo score alone is the signal
2. **Remove** the "Evil AGI Shield" sub-header row (Sword icon + label + Fail-Closed pill) from inside the right GlassCard — already in header
3. **Intercept counters**: remove the icon from each counter tile — number + label only, no border-left color trick
4. **Seraph Brain**: remove the card header (Brain icon + "Seraph Brain" label + Cpu icon) — just the 2 ticker lines inline
5. **Angel Legion**: remove `w.icon` from each chip — name + pulse dot only
6. **Remove** the `Badge` "6/6 Active" from the Legion strip
7. **tickerItems**: reduce to 2 items

### `src/components/dashboard/ActiveAlertsFeed.tsx`

1. **Cap** alerts to 2 visible items
2. **Remove** the warden badge span from each row
3. **Remove** the timestamp span from each row
4. **Simplify** each row to: colored severity dot + message text — nothing else
5. **Remove** the "criticalCount" badge from the header — just the LIVE dot + text

## Visual Result

```text
Header: AngelClaw · Halo:94 · All Wardens Active · Fail-Closed

┌──────────────┬──────────────────────────────────────────┐
│  Halo gauge  │  1,247   89   12                         │
│  (ring only) │  Injections · Jailbreaks · Poisoning     │
│              │  ─────────────────────────────────────   │
│              │  ● Prompt injection blocked               │
│              │  ● Jailbreak neutralized                  │
└──────────────┴──────────────────────────────────────────┘

  Angel Legion:  Seraph Brain ●  Vault Keeper ●  Glass Eye ●  Vigil ●  Paladin ●  Gate Keeper ●

┌─────────────────────────────┬────────────────────────────┐
│  Threat chart               │  847 vectors blocked       │
│                             │  lateral movement stopped  │
└─────────────────────────────┴────────────────────────────┘
```

Clean. 2 seconds. Done.

## Files Changed

| File | Change |
|---|---|
| `src/pages/Dashboard.tsx` | Remove gauge sub-cards, remove inner card header for Evil AGI Shield, remove icons from intercepts, simplify Legion strip (no icons, no badge), reduce ticker to 2 lines with no header |
| `src/components/dashboard/ActiveAlertsFeed.tsx` | Cap to 2 items, remove warden badge, remove timestamp, remove icon — severity dot + message only |
