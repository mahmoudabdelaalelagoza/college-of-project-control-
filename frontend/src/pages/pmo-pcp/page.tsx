import Footer from '@/components/feature/Footer';
import SchemaOrg, { courseSchema } from '@/components/feature/SchemaOrg';
import ApmRecognition from './components/ApmRecognition';
import ProfessionalReadingAndReferences from './components/ProfessionalReadingAndReferences';
import ApplyStrongerPMOPractice from "./components/ApplyStrongerPMOPractice";
import AWorkplaceDevelopmentJourneyNotJustACourse from "./components/AWorkplaceDevelopmentJourneyNotJustACourse";
import DevelopPMOCapabilityInsideYourOrganisation from "./components/DevelopPMOCapabilityInsideYourOrganisation";
import FourCapabilitiesToHelpYourPMOBecomeTrusted from "./components/FourCapabilitiesToHelpYourPMOBecomeTrusted";
import FundingEligibilityAndIPCSupport from "./components/FundingEligibilityAndIPCSupport";
import GetDirectionForStrongerPMOCapability from "./components/GetDirectionForStrongerPMOCapability";
import ItIsTimeToStopAskingPMOsOnlyForReports from "./components/ItIsTimeToStopAskingPMOsOnlyForReports";
import LearnFromPractitioners from "./components/LearnFromPractitioners";
import LearnTogether from "./components/LearnTogether";
import PmoEditorialNavbar from './components/PmoEditorialNavbar';
import ProjectControlsProfessionalLevel6 from "./components/ProjectControlsProfessionalLevel6";
import StickyCta from './components/StickyCta';
import TrustStrip from './components/TrustStrip';
import WantThePMORouteWithoutApprenticeshipPaperwork from "./components/WantThePMORouteWithoutApprenticeshipPaperwork";
/* ── Data ─────────────────────────────────────────────────────── */
/* ── Page ─────────────────────────────────────────────────────── */
export default function PmoPcp() {
  return (<>
    <SchemaOrg type="EducationalOccupationalProgram" data={courseSchema({
      name: 'PMO Route — Project Controls Professional Level 6 Apprenticeship',
      description: 'Build a PMO that leaders trust. A Project Controls Professional Level 6 apprenticeship route for PMO, governance and reporting professionals.',
      occupationalCategory: 'PMO and Governance Project Controls Professional',
    })} />
    <div className="min-h-screen bg-background-50">
      <main>

        {/* Programme introduction */}
        <ProjectControlsProfessionalLevel6 />
        <PmoEditorialNavbar />
        <TrustStrip />

        {/* Understand the route and the need it addresses */}
        <GetDirectionForStrongerPMOCapability />
        <ItIsTimeToStopAskingPMOsOnlyForReports />

        {/* Explore the capabilities and how learning works */}
        <FourCapabilitiesToHelpYourPMOBecomeTrusted />
        <AWorkplaceDevelopmentJourneyNotJustACourse />

        {/* Connect learning to work and meet the practitioners */}
        <ApplyStrongerPMOPractice />
        <LearnFromPractitioners />

        {/* Understand professional study and its recognition */}
        <WantThePMORouteWithoutApprenticeshipPaperwork />
        <ApmRecognition />

        {/* Review employer support, funding and eligibility */}
        <DevelopPMOCapabilityInsideYourOrganisation />
        <FundingEligibilityAndIPCSupport />

        {/* Explore sessions, choose a route and consult the references */}
        <LearnTogether />
        <ProfessionalReadingAndReferences />
      </main>

      <Footer />

      {/* Sticky CTA */}
      <StickyCta />
    </div>
  </>);
}
