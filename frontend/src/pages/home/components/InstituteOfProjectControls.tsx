import IpcAuthority from '@/components/feature/IpcAuthority';
import { homeCopy } from '../pageCopy';

const featureIcons = ['ri-shield-check-line', 'ri-team-line', 'ri-graduation-cap-line'];

/** Original IPC design with the supplied homepage content. */
export default function InstituteOfProjectControls() {
  const copy = homeCopy.ipc;
  return <IpcAuthority content={{
    name: copy.tag,
    heading: copy.title,
    description: copy.intro,
    features: copy.cards.map((card, index) => ({ icon: featureIcons[index], title: card.title, copy: card.body })),
    recognitionCta: copy.recognitionCta,
    aboutCta: copy.aboutCta,
    strapline: copy.strapline,
    recognitionHref: '/institute-of-project-controls#membership',
    aboutHref: '/institute-of-project-controls',
  }} />;
}
