import EligibilityCheckerSection from '@/components/feature/EligibilityCheckerSection';
import MeetMentors from '@/components/feature/MeetMentors';
import SectorPageShell from '@/components/feature/SectorPageShell';
import ChooseYourProfessionalDirection from './components/ChooseYourProfessionalDirection';
import EngineeringAdvancedManufacturing from './components/EngineeringAdvancedManufacturing';
import EngineeringProjectControlsEvidence from './components/EngineeringProjectControlsEvidence';
import FundingAndBursaryAccess from './components/FundingAndBursaryAccess';
import OneProfessionalFoundationAcrossComplexEngineeringEnvironments from './components/OneProfessionalFoundationAcrossComplexEngineeringEnvironments';
import ProjectControlsThatProtectEngineeringValue from './components/ProjectControlsThatProtectEngineeringValue';
import { links } from './sectionData';

export default function Page() {
  return (
    <SectorPageShell
      pageLabel="Engineering & Advanced Manufacturing"
      links={links}
      hero={<EngineeringAdvancedManufacturing />}
    >
      <ProjectControlsThatProtectEngineeringValue />
      <OneProfessionalFoundationAcrossComplexEngineeringEnvironments />
      <ChooseYourProfessionalDirection />
      <EngineeringProjectControlsEvidence />
      <div id="experts" className="scroll-mt-44">
        <MeetMentors />
      </div>
      <FundingAndBursaryAccess />
      <EligibilityCheckerSection />
    </SectorPageShell>
  );
}
