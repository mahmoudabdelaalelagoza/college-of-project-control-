import { useId, useState } from 'react';
import SiteLink from '@/components/base/SiteLink';
import { experienceMonth, type LearnerExperience } from '@/data/learnerExperiences';
import './learner-experiences.css';

export default function LearnerExperienceCard({ experience, compact = false }: {
  experience: LearnerExperience;
  compact?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const [photoFailed, setPhotoFailed] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const quoteId = useId();
  const nameId = useId();
  const initials = experience.name.trim().split(/\s+/).slice(0, 2).map(part => part[0]).join('');
  const month = experienceMonth(experience.date);
  const longQuote = experience.review.split(/\s+/).length > 42;

  return (
    <article className="experience-card" aria-labelledby={nameId}>
      <header className="experience-card__person">
        {experience.photo_url && !photoFailed ? (
          <img className="experience-card__portrait" src={experience.photo_url} alt={experience.name} width="80" height="80" loading="lazy" decoding="async" onError={() => setPhotoFailed(true)} />
        ) : <span className="experience-card__initials" aria-hidden="true">{initials}</span>}
        <div className="experience-card__identity">
          <p id={nameId} className="experience-card__name">{experience.name}</p>
          {experience.organisation && <p className="experience-card__organisation">{experience.organisation}</p>}
          {month && <time className="experience-card__date" dateTime={experience.date}>{month}</time>}
        </div>
      </header>
      <p className="experience-card__programme">{experience.programme_label}</p>
      <blockquote className="experience-card__quote">
        <svg className="experience-card__quote-mark" width="28" height="24" viewBox="0 0 28 24" fill="currentColor" aria-hidden="true"><path d="M2 22V12C2 5 5 2 11 1v4C7 6 6 8 6 11h5v11H2Zm15 0V12C17 5 20 2 26 1v4c-4 1-5 3-5 6h5v11h-9Z" /></svg>
        <p id={quoteId} className={!expanded && longQuote ? 'experience-card__text experience-card__text--clamped' : 'experience-card__text'}>{experience.review}</p>
      </blockquote>
      {longQuote && <button className="experience-card__more" type="button" aria-expanded={expanded} aria-controls={quoteId} onClick={() => setExpanded(value => !value)}>{expanded ? 'Show less' : compact ? 'Read this experience' : 'Read full reflection'} <span aria-hidden="true">{expanded ? '−' : compact ? '→' : '+'}</span></button>}
      <footer className="experience-card__footer">
        {experience.employer_logo_url && !logoFailed && <img src={experience.employer_logo_url} alt={experience.employer_logo_alt} width="140" height="40" loading="lazy" decoding="async" className="experience-card__employer-logo" onError={() => setLogoFailed(true)} />}
        <a href={experience.source_url} target="_blank" rel="noopener noreferrer" className="experience-card__source" aria-label={`View ${experience.name}'s original experience on Kent Business College`}>Published by KBC <span aria-hidden="true">↗</span></a>
      </footer>
    </article>
  );
}
