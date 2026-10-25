import SiteLink from '@/components/base/SiteLink';
import type { CaseStudyDetail } from '@/services/caseStudiesApi';
import '@/components/feature/case-studies.css';

export default function LearnerCaseStudyDetail({ item }: { item: CaseStudyDetail }) {
  const initials = (item.learner_name || '').split(' ').filter(Boolean).map(word => word[0]).slice(0, 2).join('');
  const sections = [['The professional context', item.challenge], ['Connecting learning with practice', item.approach], ['The learner’s development', item.outcome]];
  return (
    <>
      <header className="learner-study-intro">
        <div className="container-site">
          <SiteLink href="/case-studies" className="learner-study-back"><span aria-hidden="true">←</span> All case studies</SiteLink>
          <p className="learner-study-intro__eyebrow">Project Controls Professional Level 6 · Learner case study</p>
          <h1>{item.title}</h1>
          <p className="learner-study-intro__lead">{item.headline}</p>
          <div className="learner-study-intro__person">
            {item.image_url ? <img src={item.image_url} alt={item.image_alt} width="72" height="72" /> : <span aria-hidden="true">{initials}</span>}
            <div><p>{item.learner_name}</p><p>{item.role} · {item.client_name}</p></div>
          </div>
        </div>
      </header>
      <section className="learner-study-body" aria-label="Case study">
        <div className="container-site learner-study-body__grid">
          <article className="learner-study-narrative">
            <p className="learner-study-narrative__summary">{item.summary}</p>
            {item.quote && <blockquote><p>“{item.quote}”</p><cite>{item.learner_name}</cite></blockquote>}
            {sections.map(([title, body]) => <section key={title}><h2>{title}</h2>{body.split('\n\n').map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>)}
            {item.evidence && <section><h2>Learning in everyday work</h2><ul className="learner-study-evidence">{item.evidence.map(evidence => <li key={evidence.title}><h3>{evidence.title}</h3><p>{evidence.description}</p></li>)}</ul></section>}
            <p className="learner-study-source">{item.source_note}</p>
          </article>
          <aside className="learner-study-context" aria-label="Learner and programme">
            <p className="learner-study-context__label">The learning route</p>
            <h2>Project Controls Professional Level 6</h2>
            <p>Work-based professional development, connected to real project responsibilities.</p>
            <dl><div><dt>Sector</dt><dd>{item.sector}</dd></div><div><dt>Organisation</dt><dd>{item.client_name}</dd></div></dl>
            {item.employer_logo_url && <img src={item.employer_logo_url} alt={item.client_name} loading="lazy" className="learner-study-context__logo" />}
            <ul className="learner-study-card__themes" aria-label="Learning focus">{item.themes?.map(theme => <li key={theme}>{theme}</li>)}</ul>
            <SiteLink href="/project-controls-professional-level-6" className="learner-study-context__link">Explore the Level 6 apprenticeship <span aria-hidden="true">→</span></SiteLink>
            <SiteLink href="/book-a-session" className="learner-study-context__link">Discuss your development <span aria-hidden="true">→</span></SiteLink>
          </aside>
        </div>
      </section>
    </>
  );
}
