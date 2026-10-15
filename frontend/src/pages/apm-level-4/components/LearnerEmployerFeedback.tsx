import TestimonialsSection from '@/components/feature/TestimonialsSection';
import { level4Copy } from '../pageCopy';
export default function LearnerEmployerFeedback() {
  const copy = level4Copy.feedback;
  return <TestimonialsSection id="testimonials" programme="associate-project-manager-level-4" tag={copy.tag} title={copy.title} introduction={copy.intro} shareLabel="Share Your Experience" notice={copy.note} />;
}
