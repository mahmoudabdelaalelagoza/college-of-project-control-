import SiteLink from '@/components/base/SiteLink';
import type { CaseStudySummary } from '@/services/caseStudiesApi';
import './case-studies.css';

export default function LearnerCaseStudyCard({ item }: { item: CaseStudySummary }) {
  const initials = (item.learner_name || '').split(' ').filter(Boolean).map(word => word[0]).slice(0, 2).join('');
  return (
    <article className="learner-study-card">
      <SiteLink href={'/case-studies/' + item.slug} className="learner-study-card__link">
        <p className="learner-study-card__sector">{item.sector}</p>
        <div className="learner-study-card__person">
          {item.image_url ? <img src={item.image_url} alt={item.image_alt} loading="lazy" decoding="async" width="64" height="64" className="learner-study-card__portrait" /> : <span className="learner-study-card__initials" aria-hidden="true">{initials}</span>}
          <div><p className="learner-study-card__name">{item.learner_name}</p><p className="learner-study-card__role">{item.role}</p></div>
        </div>
        <h3>{item.title}</h3>
        <p className="learner-study-card__summary">{item.summary}</p>
        <ul className="learner-study-card__themes" aria-label="Learning focus">{item.themes?.slice(0, 2).map(theme => <li key={theme}>{theme}</li>)}</ul>
        <div className="learner-study-card__bottom">
          <p>{item.client_name}</p>
          <span className="learner-study-card__action">Read the story <span aria-hidden="true">→</span></span>
        </div>
      </SiteLink>
    </article>
  );
}
