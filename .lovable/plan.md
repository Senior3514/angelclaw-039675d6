

# ANGELGRID Rebrand — Full Suite Transformation

Complete rebranding from "AEGIS" to "ANGELGRID" across all files, with ANGELNODE/ANGELGRID Cloud/ANGELGRID AI terminology woven into every module's content.

---

## Files to Modify (13 files)

### 1. `index.html`
- Title and meta tags: "ANGELGRID -- Autonomous AI Defense Fabric"

### 2. `src/components/layout/AegisSidebar.tsx`
- Rename component to keep filename but change displayed brand: "AEGIS" → "ANGELGRID"
- Update nav item labels to use ANGELGRID terminology where relevant (e.g. "Network Fabric" → "ANGELGRID Fabric")

### 3. `src/components/layout/TopBar.tsx`
- Trust score label context stays, no AEGIS text present — no changes needed

### 4. `src/components/layout/AppLayout.tsx`
- No text changes needed (imports AegisSidebar by component name — keep stable)

### 5. `src/pages/Dashboard.tsx`
- Header: "ANGELGRID Command Overview"
- Subtitle: mention autonomous AI defense fabric

### 6. `src/components/dashboard/SecurityPostureGauge.tsx`
- Label: "ANGELGRID AI Posture" instead of "AI Security Posture"

### 7. `src/components/dashboard/ActiveAlertsFeed.tsx`
- Alert messages: replace any implicit AEGIS references with ANGELGRID/ANGELNODE

### 8. `src/pages/IdentityAccess.tsx`
- All "AEGIS Agent" → "ANGELNODE Agent"
- "AEGIS AI" → "ANGELGRID AI"
- Subtitle: emphasize ANGELNODE deployment on every endpoint/OS

### 9. `src/pages/NetworkFabric.tsx`
- Header subtitle: mention ANGELGRID Fabric and ANGELNODE mesh
- No AEGIS text in current content, but enhance descriptions

### 10. `src/pages/Analytics.tsx`
- All "AEGIS" text in attack stages and AI narrative → "ANGELGRID" / "ANGELNODE"
- "AEGIS perimeter agent" → "ANGELNODE perimeter agent"
- "AEGIS AI reconstructed" → "ANGELGRID AI reconstructed"
- "AEGIS predicted" → "ANGELGRID AI predicted"
- "AEGIS zero-trust" → "ANGELGRID zero-trust"

### 11. `src/pages/PolicyCenter.tsx`
- Subtitle: mention ANGELGRID autonomous policy enforcement
- "AEGIS AI" in rule steps → "ANGELGRID AI"

### 12. `src/pages/Automation.tsx`
- Update playbook descriptions to reference ANGELNODE/ANGELGRID where relevant

### 13. `src/pages/DataProtection.tsx`
- DLP alerts: "AEGIS" → "ANGELGRID" / "ANGELNODE" in alert details

### 14. `src/pages/SettingsPage.tsx`
- Tenant name: "AEGIS Enterprise" → "ANGELGRID Enterprise"
- Org ID: "AEG-2847-ENT" → "ANG-2847-ENT"
- Theme name: "Cyber Angels (Dark)" stays (fits the angel theme)

### 15. `src/index.css`
- CSS variable names (`--aegis-*`) remain unchanged (internal tokens, renaming would break 200+ references with no visual benefit)

### 16. `tailwind.config.ts`
- Color token keys (`aegis.*`) remain unchanged (same reason — internal API)

---

## Content Philosophy

Every description, subtitle, and mock data string will reflect:
- **ANGELNODE** = the local agent deployed on every endpoint (servers, workstations, AI agents)
- **ANGELGRID Cloud** = the global policy and management layer
- **ANGELGRID AI** = the Security Copilot that reconstructs attacks, predicts threats, and auto-remediates
- **Zero-Trust and Privacy-by-Design** emphasized in all module subtitles
- **Autonomous** operation — 24/7, learning from every interaction

---

## Technical Notes

- CSS variable names (`--aegis-*`) and Tailwind color keys (`aegis.*`) will NOT be renamed — they are referenced in 200+ locations across 18 files and changing them provides zero user-visible benefit while risking breakage
- The sidebar component filename `AegisSidebar.tsx` stays unchanged to avoid import chain updates; only the displayed brand text changes
- All changes are text/string replacements within existing files — no new files or dependencies needed

