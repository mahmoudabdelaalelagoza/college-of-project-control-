import Footer from '@/components/feature/Footer';
import EmployerPartnership from './components/EmployerPartnership';
import ExpertLedLearning from './components/ExpertLedLearning';
import FromEvidenceToAction from './components/FromEvidenceToAction';
import FundingScenariosForStartsFrom1August2026 from './components/FundingScenariosForStartsFrom1August2026';
import HowYouStudy from './components/HowYouStudy';
import ProjectControlsProfessionalLevel6 from './components/ProjectControlsProfessionalLevel6';
import StrategicPathwayComplete from './components/StrategicPathwayComplete';
import StrategicPathwayNav from './components/StrategicPathwayNav';
import TakeTheNextStep from './components/TakeTheNextStep';
import WhoShouldApply from './components/WhoShouldApply';
import WorkplaceApplication from './components/WorkplaceApplication';
import YourCreditJourney from './components/YourCreditJourney';
import './strategic.css';

export default function StrategicPathway() {
  return (
    <div className="strategic-pathway min-h-screen bg-background-50">
      <main id="hero">
        <ProjectControlsProfessionalLevel6 />
        <StrategicPathwayNav />
        <FromEvidenceToAction />
        <WhoShouldApply />
        <YourCreditJourney />
        <HowYouStudy />
        <WorkplaceApplication />
        <StrategicPathwayComplete />
        <ExpertLedLearning />
        <EmployerPartnership />
        <FundingScenariosForStartsFrom1August2026 />
        <TakeTheNextStep />
      </main>
      <Footer />
    </div>
  );
}
