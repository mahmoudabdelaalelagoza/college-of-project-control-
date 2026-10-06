import SectorPageShell from '@/components/feature/SectorPageShell';
import ChooseYourPathwayCheckYourAccessRoute from './components/ChooseYourPathwayCheckYourAccessRoute';
import ChooseYourProfessionalDirection from './components/ChooseYourProfessionalDirection';
import ConstructionInfrastructure from './components/ConstructionInfrastructure';
import CoreProfessionalCapability from './components/CoreProfessionalCapability';
import EmployerCapability from './components/EmployerCapability';
import ExpertLedPerspectives from './components/ExpertLedPerspectives';
import FundingBursaryAccess from './components/FundingBursaryAccess';
import ProfessionalProgression from './components/ProfessionalProgression';
import QuickAccessRouteCheck from './components/QuickAccessRouteCheck';
import SectorApplication from './components/SectorApplication';
import TheConstructionChallenge from './components/TheConstructionChallenge';
import TheLearningExperience from './components/TheLearningExperience';
import WorkplaceEvidence from './components/WorkplaceEvidence';
import { links } from './sectionData';

export default function Page() {
  return (
    <SectorPageShell
      pageLabel="Construction & Infrastructure"
      links={links}
      hero={<ConstructionInfrastructure />}
    >
      <TheConstructionChallenge />
      <ChooseYourProfessionalDirection />
      <FundingBursaryAccess />
      <CoreProfessionalCapability />
      <SectorApplication />
      <WorkplaceEvidence />
      <ProfessionalProgression />
      <EmployerCapability />
      <ExpertLedPerspectives />
      <TheLearningExperience />
      <QuickAccessRouteCheck />
      <ChooseYourPathwayCheckYourAccessRoute />
    </SectorPageShell>
  );
}
