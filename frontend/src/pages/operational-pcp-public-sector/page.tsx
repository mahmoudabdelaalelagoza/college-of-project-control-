import SectorPageShell from '@/components/feature/SectorPageShell';
import ApprenticeshipFunding from './components/ApprenticeshipFunding';
import CareerDevelopment from './components/CareerDevelopment';
import CareerProgression from './components/CareerProgression';
import EmployerJourney from './components/EmployerJourney';
import IllustrativePublicSectorApplication from './components/IllustrativePublicSectorApplication';
import LearningGroundedInGovernmentDelivery from './components/LearningGroundedInGovernmentDelivery';
import PublicSector from './components/PublicSector';
import RoleToProgrammePathway from './components/RoleToProgrammePathway';
import TheProjectControlsCapabilityModel from './components/TheProjectControlsCapabilityModel';
import WhyPublicSectorDeliveryIsDifferent from './components/WhyPublicSectorDeliveryIsDifferent';

const links = [
  { label: 'Challenge', href: '#challenge' },
  { label: 'Programmes', href: '#pathways' },
  { label: 'Capability', href: '#capability' },
  { label: 'Governance', href: '#governance' },
  { label: 'Careers', href: '#careers' },
  { label: 'Delivery', href: '#delivery' },
  { label: 'Funding', href: '#employers' },
];

export default function Page() {
  return (
    <SectorPageShell pageLabel="Public Sector" links={links} hero={<PublicSector />}>
      <WhyPublicSectorDeliveryIsDifferent />
      <RoleToProgrammePathway />
      <TheProjectControlsCapabilityModel />
      <LearningGroundedInGovernmentDelivery />
      <CareerProgression />
      <EmployerJourney />
      <IllustrativePublicSectorApplication />
      <ApprenticeshipFunding />
      <CareerDevelopment />
    </SectorPageShell>
  );
}
