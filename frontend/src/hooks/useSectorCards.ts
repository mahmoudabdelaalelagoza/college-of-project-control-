import { useEffect, useState } from 'react';
import { sectorCards } from '@/components/feature/navMegaMenuData';
import { fetchSectors, type Sector } from '@/services/sectorsApi';

let activeSectors: Promise<Sector[]> | null = null;

/**
 * Sector cards for the header menus, limited to sectors that are active in the dashboard.
 * A sector saved as a draft is left out and the remaining cards share the space.
 * All cards are shown while the list loads or if it cannot be loaded.
 */
export default function useSectorCards() {
  const [sectors, setSectors] = useState<Sector[] | null>(null);

  useEffect(() => {
    let active = true;
    activeSectors ??= fetchSectors().catch((error) => {
      activeSectors = null;
      throw error;
    });
    activeSectors.then((items) => { if (active) setSectors(items); }).catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  if (!sectors) return sectorCards;
  const bySlug = new Map(sectors.map((sector) => [sector.slug, sector]));
  return sectorCards
    .filter((card) => !card.slug || bySlug.has(card.slug))
    .map((card) => ({ ...card, image: (card.slug && bySlug.get(card.slug)?.imageUrl) || card.image }));
}
