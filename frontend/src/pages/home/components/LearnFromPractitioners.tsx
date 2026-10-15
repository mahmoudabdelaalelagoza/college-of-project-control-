import MeetMentors from '@/components/feature/MeetMentors';
import { homeCopy } from '../pageCopy';

/** Original portrait-card design, with circular mobile browsing. */
export default function LearnFromPractitioners() {
  return <MeetMentors id="experts" content={homeCopy.experts} loopOnMobile />;
}
