import { useEffect, useId, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import LearnerExperienceCard from '@/components/feature/LearnerExperienceCard';
import { experienceGroup, experienceGroups, pcpLearnerExperiences, type ExperienceGroupId, type LearnerExperience } from '@/data/learnerExperiences';

function ExperienceGroup({ title, description, experiences, initialCount = 3 }: {
  title: string;
  description: string;
  experiences: LearnerExperience[];
  initialCount?: number;
}) {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const headingId = useId();
  if (!experiences.length) return null;
  return (
    <section className="experience-group" aria-labelledby={headingId}>
      <div className="experience-group__heading">
        <div><h3 id={headingId}>{title} <span className="experience-group__count">{experiences.length}</span></h3><p>{description}</p></div>
      </div>
      <div className="experience-card-grid">
        {experiences.slice(0, visibleCount).map(experience => <LearnerExperienceCard key={experience.id} experience={experience} />)}
      </div>
      {visibleCount < experiences.length && <div className="experience-group__more"><button type="button" onClick={() => setVisibleCount(count => count + 6)} className="experience-outline-button" aria-label={`Show more ${title.toLowerCase()}`}>Show more <span aria-hidden="true">+</span><span className="experience-group__remaining">{experiences.length - visibleCount} remaining</span></button></div>}
    </section>
  );
}

/** Published PCP accounts are grouped by topic; live College submissions follow below. */
export default function ProfessionalExperience() {
  const [params] = useSearchParams();
  const initialQuery = params.get('learner') || params.get('search') || '';
  const [query, setQuery] = useState(initialQuery);
  const [topic, setTopic] = useState<ExperienceGroupId | 'all'>('all');
  const [sort, setSort] = useState('newest');
  const [shortOpen, setShortOpen] = useState(false);
  const searchId = useId();
  const sortId = useId();
  useEffect(() => { setQuery(initialQuery); }, [initialQuery]);

  const normalisedQuery = query.trim().toLowerCase();
  const textMatches = pcpLearnerExperiences.filter(experience =>
    [experience.name, experience.organisation, experience.review, ...experience.tags].join(' ').toLowerCase().includes(normalisedQuery),
  );
  const matching = textMatches.filter(experience => topic === 'all' || experienceGroup(experience) === topic)
    .sort((a, b) => sort === 'name' ? a.name.localeCompare(b.name) : sort === 'oldest' ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date));
  const featured = matching.filter(experience => experience.detailed);
  const short = matching.filter(experience => !experience.detailed);
  const hasFilters = Boolean(normalisedQuery) || topic !== 'all';
  const availableGroups = experienceGroups.filter(group => pcpLearnerExperiences.some(experience => experienceGroup(experience) === group.id));
  const clear = () => { setQuery(''); setTopic('all'); setSort('newest'); };

  const shortCollection = <ExperienceGroup key={`short-${normalisedQuery}-${topic}-${sort}`} title="Short learner reflections" description="Brief observations shared about the programme, teaching, coaching and learner events." experiences={short} initialCount={9} />;

  return (
    <section id="pcp-experiences" className="experience-directory" aria-labelledby="pcp-experiences-title">
      <div className="container-site">
        <div className="experience-directory__heading">
          <p className="experience-directory__eyebrow">Published PCP learner experiences</p>
          <h2 id="pcp-experiences-title">Find the experiences that matter to you</h2>
          <p>Browse by topic, search for a learner or organisation, and explore the original experiences published by Kent Business College.</p>
        </div>
        <div className="experience-filters">
          <div className="experience-filters__fields">
            <div className="experience-filters__search"><label htmlFor={searchId}>Search experiences</label><input id={searchId} type="search" maxLength={200} value={query} onChange={event => setQuery(event.target.value)} placeholder="Learner, organisation or keyword" /></div>
            <div className="experience-filters__sort"><label htmlFor={sortId}>Order within each group</label><select id={sortId} value={sort} onChange={event => setSort(event.target.value)}><option value="newest">Newest first</option><option value="oldest">Oldest first</option><option value="name">Name A–Z</option></select></div>
          </div>
          <div className="experience-topics" role="group" aria-label="Experience topics">
            <button type="button" aria-pressed={topic === 'all'} onClick={() => setTopic('all')}>All topics <span>{textMatches.length}</span></button>
            {availableGroups.map(group => <button type="button" key={group.id} aria-pressed={topic === group.id} onClick={() => setTopic(group.id)}>{group.label} <span>{textMatches.filter(experience => experienceGroup(experience) === group.id).length}</span></button>)}
          </div>
          <div className="experience-filters__status">
            <p role="status" aria-live="polite">{matching.length} {matching.length === 1 ? 'reflection' : 'reflections'} · {featured.length} featured {featured.length === 1 ? 'experience' : 'experiences'} · {short.length} short {short.length === 1 ? 'reflection' : 'reflections'}</p>
            {(hasFilters || sort !== 'newest') && <button type="button" onClick={clear}>Clear filters</button>}
          </div>
        </div>
        {!matching.length ? <div className="experience-empty" role="status"><h3>No matching experiences</h3><p>Try another learner, organisation or topic.</p><button type="button" className="experience-outline-button" onClick={clear}>Clear filters</button></div> : (
          <>
            {featured.length > 0 && <div className="experience-directory__featured">
              <h2 className="experience-directory__collection-title">Featured learner experiences</h2>
              {availableGroups.map(group => <ExperienceGroup key={`${group.id}-${normalisedQuery}-${sort}`} title={group.label} description={group.description} experiences={featured.filter(experience => experienceGroup(experience) === group.id)} />)}
            </div>}
            {short.length > 0 && (hasFilters ? shortCollection : <details className="experience-short-collection" open={shortOpen} onToggle={event => setShortOpen(event.currentTarget.open)}><summary><span>More learner reflections <span className="experience-group__count">{short.length}</span></span><span className="experience-short-collection__hint">Explore brief feedback <span aria-hidden="true">+</span></span></summary>{shortCollection}</details>)}
          </>
        )}
        <p className="experience-directory__source">These experiences were published by <a href="https://kentbusinesscollege.com/testimonials/" target="_blank" rel="noopener noreferrer">Kent Business College</a>. Each card links to its original account. Experiences describe individual perspectives.</p>
      </div>
    </section>
  );
}
