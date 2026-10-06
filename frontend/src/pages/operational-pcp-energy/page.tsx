import SectorPageShell from '@/components/feature/SectorPageShell';
import ChooseYourProfessionalDirection from './components/ChooseYourProfessionalDirection';
import EmployerCapability from './components/EmployerCapability';
import EnergyUtilities from './components/EnergyUtilities';
import ExpertLedPerspectives from './components/ExpertLedPerspectives';
import FundingBursaryAccess from './components/FundingBursaryAccess';
import OneFoundation from './components/OneFoundation';
import ProfessionalProgression from './components/ProfessionalProgression';
import TheEnergyDeliveryChallenge from './components/TheEnergyDeliveryChallenge';
import TheLearningExperience from './components/TheLearningExperience';
import WorkplaceEvidence from './components/WorkplaceEvidence';
import { links } from './sectionData';

export default function Page() {
  return (
    <SectorPageShell pageLabel="Energy & Utilities" links={links} hero={<EnergyUtilities />}>
      <OneFoundation />
      <TheEnergyDeliveryChallenge />
      <ChooseYourProfessionalDirection />
      <FundingBursaryAccess />
      <WorkplaceEvidence />
      <ProfessionalProgression />
      <EmployerCapability />
      <ExpertLedPerspectives />
      <TheLearningExperience />
    </SectorPageShell>
  );
}
