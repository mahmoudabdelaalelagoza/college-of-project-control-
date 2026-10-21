import Footer from '@/components/feature/Footer';
import StickyCta from '@/components/feature/StickyCta';
import CommercialAccessForNonEligibleLearners from "./components/CommercialAccessForNonEligibleLearners";
import CommercialRoute from "./components/CommercialRoute";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";
import FundingAndCosts from "./components/FundingAndCosts";
import InstituteOfProjectControls from "./components/InstituteOfProjectControls";
import ProfessionalCapabilitySection from "./components/ProfessionalCapabilitySection";
import ProfessionalRecognition from "./components/ProfessionalRecognition";
import RouteFit from "./components/RouteFit";
import WhatYouCouldApplyAtWork from "./components/WhatYouCouldApplyAtWork";
import WithoutAccessVsWithTheCommercialRoute from "./components/WithoutAccessVsWithTheCommercialRoute";
export default function CampaignCommercialRoute() {
  return (<div className="min-h-screen bg-background-50">
    <main>
      {/* Understand the commercial offer */}
      <CommercialAccessForNonEligibleLearners />
      <CommercialRoute />
      <WithoutAccessVsWithTheCommercialRoute />

      {/* Choose a direction and explore practical development */}
      <RouteFit />
      <ProfessionalCapabilitySection />
      <WhatYouCouldApplyAtWork />

      {/* Understand recognition and professional support */}
      <ProfessionalRecognition />
      <InstituteOfProjectControls />

      {/* Review costs and resolve questions before enquiring */}
      <div id="funding" aria-label="Commercial route funding">
        <FundingAndCosts />
      </div>
      <FrequentlyAskedQuestions />
    </main>
    <StickyCta />
    <Footer />
  </div>);
}
