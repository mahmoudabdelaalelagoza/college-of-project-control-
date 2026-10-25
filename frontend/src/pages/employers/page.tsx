import Footer from '@/components/feature/Footer';
import PageSectionNav from '@/components/feature/PageSectionNav';
import ApprenticeshipFunding from './components/ApprenticeshipFunding';
import ARealPartnership from './components/ARealPartnership';
import BuiltForProjectDrivenOrganisations from "./components/BuiltForProjectDrivenOrganisations";
import CapabilityPlanning from './components/CapabilityPlanning';
import EmployerResources from './components/EmployerResources';
import ExampleScenarios from "./components/ExampleScenarios";
import HowThePartnershipWorks from './components/HowThePartnershipWorks';
import LearningAppliedAtWork from "./components/LearningAppliedAtWork";
import ProgressYouCanSee from './components/ProgressYouCanSee';
import ProjectControlsEmployerPartnerships from "./components/ProjectControlsEmployerPartnerships";
import ProjectControlsPathways from './components/ProjectControlsPathways';
import StartWithYourNeed from './components/StartWithYourNeed';
import WhyWorkWithKBC from './components/WhyWorkWithKBC';
const sectionLinks = [
  ['Overview', '#overview'], ['Employer Needs', '#employer-needs'], ['How It Works', '#how-it-works'], ['Programmes', '#programmes'], ['Progress', '#progress'], ['Funding', '#funding'], ['Responsibilities', '#responsibilities'], ['Services', '#workforce-services'], ['Stories', '#stories'], ['Resources', '#resources'],
].map(([label, href]) => ({ label, href }));
export default function EmployersPage() {
  return <div className="min-h-screen overflow-x-clip bg-background-50"><main>
    <ProjectControlsEmployerPartnerships />
    <PageSectionNav pageLabel="Employer Hub" links={sectionLinks} showCta={false} />
    <WhyWorkWithKBC />
    <StartWithYourNeed />
    <HowThePartnershipWorks />
    <ProgressYouCanSee />
    <ProjectControlsPathways />
    <LearningAppliedAtWork />
    <ApprenticeshipFunding />
    <ARealPartnership />
    <CapabilityPlanning />
    <ExampleScenarios />
    <BuiltForProjectDrivenOrganisations />
    <EmployerResources />
  </main><Footer /></div>;
}
