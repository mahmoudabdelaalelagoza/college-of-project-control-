import { useLocation } from 'react-router-dom';
import '@/styles/pathway-pages.css';
import Footer from '@/components/feature/Footer';
import PageSectionNav from '@/components/feature/PageSectionNav';
import CapabilityThemes from "./components/CapabilityThemes";
import EligibilityCriteria from "./components/EligibilityCriteria";
import EmployerResponsibilities from "./components/EmployerResponsibilities";
import FundingScenariosFor202627Starts from "./components/FundingScenariosFor202627Starts";
import GatewayAndEPA from "./components/GatewayAndEPA";
import InstituteOfProjectControls from './components/InstituteOfProjectControls';
import OperationalPathwayQuickEnquiry from './components/OperationalPathwayQuickEnquiry';
import ProfessionalArtefacts from "./components/ProfessionalArtefacts";
import Section202627LearnerAndEmployerPathway from "./components/Section202627LearnerAndEmployerPathway";
import SelectSixCredits from "./components/SelectSixCredits";
import TakeTheNextStep from "./components/TakeTheNextStep";
import TheOperationalRoute from "./components/TheOperationalRoute";
import WhoItIsFor from "./components/WhoItIsFor";
// Approved copy: Operational Pathway.txt. Uses the site's existing design tokens and components.
const sectionLinks = [
  { label: 'Overview', href: '#operational-overview' },
  { label: 'Roles', href: '#operational-roles' },
  { label: 'Capability', href: '#operational-capability' },
  { label: 'Evidence', href: '#operational-evidence' },
  { label: 'Structure', href: '#operational-structure' },
  { label: 'Assessment', href: '#operational-assessment' },
  { label: 'Employer', href: '#operational-employer' },
  { label: 'Funding', href: '#operational-funding' },
  { label: 'Eligibility', href: '#operational-eligibility' },
  { label: 'IPC', href: '#operational-ipc' },
  { label: 'Contact', href: '#operational-contact' },
];
export default function OperationalPcp() {
  const { pathname } = useLocation();
  return <div className="pathway-page min-h-screen bg-background-50 pb-24">
    <main id="hero">
      <Section202627LearnerAndEmployerPathway />
      <PageSectionNav pageLabel="Operational Pathway" links={sectionLinks.map(link => ({ ...link, href: link.href.startsWith('#') ? pathname + link.href : link.href }))} showCta={false} stickyTop="var(--public-header-height, 145px)" />
      <TheOperationalRoute />
      <WhoItIsFor />
      <CapabilityThemes />
      <ProfessionalArtefacts />
      <SelectSixCredits />
      <GatewayAndEPA />
      <EmployerResponsibilities />
      <FundingScenariosFor202627Starts />
      <EligibilityCriteria />
      <InstituteOfProjectControls />
      <TakeTheNextStep />
    </main>
    <Footer />
    <OperationalPathwayQuickEnquiry />
  </div>;
}
