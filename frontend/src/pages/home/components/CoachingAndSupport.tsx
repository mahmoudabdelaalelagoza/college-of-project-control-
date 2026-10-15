import CoachingSupport from '@/components/feature/CoachingSupport';
import { homeCopy } from '../pageCopy';

/** Shared coach profiles with the supplied homepage heading and support copy. */
export default function CoachingAndSupport() {
  return <CoachingSupport content={homeCopy.coaching} />;
}
