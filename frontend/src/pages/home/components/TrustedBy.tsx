import SiteLink from '@/components/base/SiteLink';
import useCollection from '@/hooks/useCollection';
import { fetchPartners, type Partner } from '@/services/partnersApi';
import type { CSSProperties } from 'react';

function PartnerLogo({ partner, duplicate = false }: { partner: Partner; duplicate?: boolean }) {
  const logo = (
    <img
      src={partner.imageUrl}
      alt=""
      loading="lazy"
      decoding="async"
      width={144}
      height={64}
      className="trusted-logo-image"
    />
  );

  return partner.linkUrl ? (
    <SiteLink
      href={partner.linkUrl}
      className="trusted-logo transition hover:border-primary-200 hover:shadow-sm"
      aria-label={duplicate ? undefined : partner.name}
      aria-hidden={duplicate || undefined}
      tabIndex={duplicate ? -1 : undefined}
    >
      {logo}
    </SiteLink>
  ) : (
    <div
      className="trusted-logo"
      aria-label={duplicate ? undefined : partner.name}
      aria-hidden={duplicate || undefined}
      role={duplicate ? undefined : 'img'}
    >
      {logo}
    </div>
  );
}

export default function TrustedBy() {
  const { items, loading, error } = useCollection(fetchPartners);
  if (loading || error || !items.length) return null;

  const partners = items.filter((item, index) => item.imageUrl && items.findIndex((other) => other.imageUrl === item.imageUrl) === index);
  if (!partners.length) return null;

  const trackStyle = {
    '--logos-duration': `${Math.max(32, partners.length * 3.5)}s`,
  } as CSSProperties;

  return (
    <section className="trusted-logos border-b border-background-200" aria-labelledby="organisation-proof-heading">
      <div className="container-site">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
          <h2 id="organisation-proof-heading" className="max-w-xs shrink-0 text-xs font-label font-bold uppercase tracking-[0.18em] text-primary-700">
            Professionals from organisations including
          </h2>
          <div className="trusted-logos-window" style={trackStyle}>
            <div className="trusted-logos-track" aria-label="Partner organisations">
              <div className="trusted-logos-group">
                {partners.map((partner) => <PartnerLogo key={partner.id} partner={partner} />)}
              </div>
              <div className="trusted-logos-group" aria-hidden="true">
                {partners.map((partner) => <PartnerLogo key={`duplicate-${partner.id}`} partner={partner} duplicate />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}