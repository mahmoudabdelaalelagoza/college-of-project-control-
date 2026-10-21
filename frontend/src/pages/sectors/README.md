# Sectors

Composition: [page.tsx](page.tsx). Routes: `/sectors`.

Purpose: gives the "Sectors" navigation group a destination of its own. The header menu
previously opened the sector list on hover while the word "Sectors" itself linked nowhere,
because no sector index page existed.

Sections:
- Sectors hero
- Sector directory: shared homepage section in [ProjectDrivenSectors.tsx](../../components/feature/ProjectDrivenSectors.tsx)

The directory uses the same four sector cards, images, descriptions and Explore buttons as the homepage. Dashboard activation controls visibility; the shared component owns editorial content and layout.

The full sector section is shared through [ProjectDrivenSectors.tsx](../../components/feature/ProjectDrivenSectors.tsx). Edit this component for site-wide content and design changes. Images use `src/data/sectorHeroImages.ts`; active status is read from dashboard-managed sector records through `useActiveSectors`. Page wrappers preserve existing navigation anchors.
