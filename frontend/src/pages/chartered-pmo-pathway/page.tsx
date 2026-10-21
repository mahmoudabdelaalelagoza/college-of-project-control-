import { useLocation } from 'react-router-dom';
import '@/styles/pathway-pages.css';
import Footer from '@/components/feature/Footer';
import ApmProfessionalRecognition from './components/ApmProfessionalRecognition';
import PageSectionNav from '@/components/feature/PageSectionNav';
import APMGInternationalCertificationContext from "./components/APMGInternationalCertificationContext";
import CollegeSpecialistDevelopment from "./components/CollegeSpecialistDevelopment";
import EligibilityCriteria from "./components/EligibilityCriteria";
import IndependentProfessionalDevelopmentRoute from "./components/IndependentProfessionalDevelopmentRoute";
import LiveTeachingCoachingAndWorkplaceApplication from "./components/LiveTeachingCoachingAndWorkplaceApplication";
import OccupationalAssessmentAndFutureChPPApplication from "./components/OccupationalAssessmentAndFutureChPPApplication";
import PMOProfessionalDevelopmentModule1 from "./components/PMOProfessionalDevelopmentModule1";
import PMOProfessionalDevelopmentModule2 from "./components/PMOProfessionalDevelopmentModule2";
import PMOProfessionalDevelopmentModule3 from "./components/PMOProfessionalDevelopmentModule3";
import PMOProfessionalDevelopmentModule4 from "./components/PMOProfessionalDevelopmentModule4";
import ProgrammeInformationAndNextSteps from "./components/ProgrammeInformationAndNextSteps";
import ProjectControlsProfessionalLevel6 from "./components/ProjectControlsProfessionalLevel6";
import TechnicalKnowledgeProfessionalPracticeCharteredAmbition from "./components/TechnicalKnowledgeProfessionalPracticeCharteredAmbition";
import TheCompleteST0845CapabilityRemainsMandatory from "./components/TheCompleteST0845CapabilityRemainsMandatory";
import TheProfessionalDevelopmentArchitecture from "./components/TheProfessionalDevelopmentArchitecture";
import TheTechnicalKnowledgeDevelopmentComponent from "./components/TheTechnicalKnowledgeDevelopmentComponent";
import WhoShouldChooseTheCharteredPathway from "./components/WhoShouldChooseTheCharteredPathway";
import WorkplaceApplication from './components/WorkplaceApplication';
import EmployerPartnership from './components/EmployerPartnership';
import FundingAndCosts from './components/FundingAndCosts';
const sectionLinks = [
  { label: 'Overview', href: '#pathway-overview' },
  {
    "label": "Role fit",
    "href": "#role-fit"
  },
  {
    "label": "Structure",
    "href": "#pathway-structure"
  },
  {
    "label": "Capability",
    "href": "#occupational-standard"
  },
  { label: 'Workplace Application', href: '#workplace-application' },
  { label: 'APM Recognition', href: '#apm-recognition' },
  { label: 'How You Learn', href: '#delivery' },
  { label: 'For Employers', href: '#chartered-employers' },
  { label: 'Assessment', href: '#professional-evidence' },
  {
    "label": "PMO development",
    "href": "#certified-pmo-core"
  },
  {
    "label": "Module 1",
    "href": "#module-1"
  },
  {
    "label": "Module 2",
    "href": "#module-2"
  },
  {
    "label": "Module 3",
    "href": "#module-3"
  },
  {
    "label": "Module 4",
    "href": "#module-4"
  },
  {
    "label": "AI",
    "href": "#ai-project-controls"
  },
  {
    "label": "Portfolio",
    "href": "#portfolio-management"
  },
  {
    "label": "EVM",
    "href": "#earned-value-management"
  },
  { label: 'Funding', href: '#chartered-funding' },
  {
    "label": "Eligibility",
    "href": "#chartered-eligibility"
  },
  {
    "label": "Contact",
    "href": "#sources-contact"
  }
];
export default function CharteredPathway() {
  const { pathname } = useLocation();
  return <div className="pathway-page min-h-screen bg-background-50"><main id="hero">
    <ProjectControlsProfessionalLevel6 />
    <PageSectionNav pageLabel="Chartered Pathway" links={sectionLinks.map(link => ({ ...link, href: link.href.startsWith('#') ? pathname + link.href : link.href }))} showCta={false} stickyTop="var(--public-header-height, 145px)" />
    <TechnicalKnowledgeProfessionalPracticeCharteredAmbition />
    <WhoShouldChooseTheCharteredPathway />
    <TheProfessionalDevelopmentArchitecture />
    <TheCompleteST0845CapabilityRemainsMandatory />
    <WorkplaceApplication />
    <ApmProfessionalRecognition />
    <LiveTeachingCoachingAndWorkplaceApplication />
    <EmployerPartnership />
    <OccupationalAssessmentAndFutureChPPApplication />
    <TheTechnicalKnowledgeDevelopmentComponent />
    <PMOProfessionalDevelopmentModule1 />
    <PMOProfessionalDevelopmentModule2 />
    <PMOProfessionalDevelopmentModule3 />
    <PMOProfessionalDevelopmentModule4 />
    <CollegeSpecialistDevelopment />
    <IndependentProfessionalDevelopmentRoute />
    <APMGInternationalCertificationContext />
    <FundingAndCosts />
    <EligibilityCriteria />
    <ProgrammeInformationAndNextSteps />

  </main><Footer /></div>;
}
