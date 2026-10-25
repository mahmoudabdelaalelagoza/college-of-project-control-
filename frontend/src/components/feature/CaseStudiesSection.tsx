import CaseStudyCard from './CaseStudyCard';
import SectionHeading from '@/components/base/SectionHeading';
import SiteLink from '@/components/base/SiteLink';
import { pcpCaseStudies } from '@/data/pcpCaseStudies';
import './case-studies.css';

export default function CaseStudiesSection({ limit = 5, showLink = true }: { limit?: number; showLink?: boolean }) {
  const stories = pcpCaseStudies.slice(0, Math.max(0, limit));
  if (!stories.length) return null;
  return (
    <section id="case-studies" aria-labelledby="learner-case-studies-heading" className="learner-study-section">
      <div className="container-site">
        <SectionHeading id="learner-case-studies-heading" tag="Learner Case Studies" title="Professional learning. Put into practice." subtitle="Meet five Project Controls Professional learners connecting new knowledge with the responsibilities, challenges and decisions in their working lives." className="max-w-4xl" />
        <div className={stories.length === 5 ? 'learner-study-preview-grid' : 'learner-study-grid'}>{stories.map(item => <CaseStudyCard key={item.slug} item={item} />)}</div>
        {showLink && <div className="mt-8 text-center"><SiteLink href="/case-studies" className="btn-primary inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3 text-sm font-bold">Explore all case studies</SiteLink></div>}
      </div>
    </section>
  );
}
