import CampaignRouteFit from '@/components/feature/CampaignRouteFit';
import { routeFitCards } from '../campaignData';

/** Section: Route Fit. */
export default function RouteFit() {
  return (
    <CampaignRouteFit
      tag="Route Fit"
      title="Which Project Controls Pathway Fits Your Goals?"
      subtitle="Explore three professional development directions, with learning options matched to your experience and career ambitions."
      routes={routeFitCards}
      note="Commercial programme availability, selected modules and professional recognition support are confirmed individually. Chartered status is awarded separately by APM."
    />
  );
}
