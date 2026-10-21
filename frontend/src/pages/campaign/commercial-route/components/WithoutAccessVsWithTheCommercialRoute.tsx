import CampaignTransformation from '@/components/feature/CampaignTransformation';
import { afterItems, beforeItems } from '../campaignData';

/** Section: The Difference. */
export default function WithoutAccessVsWithTheCommercialRoute() {
  return (
    <CampaignTransformation
      tag="The Difference"
      title="From Independent Learning to Structured Professional Development"
      subtitle="Build your project controls expertise through a connected learning pathway, with practical application and professional support."
      beforeTitle="Without a Structured Pathway"
      afterTitle="With the KBC Commercial Route"
      beforeItems={beforeItems}
      afterItems={afterItems}
      note="Learning support, assessments and professional progression services depend on your agreed programme. Chartered status is awarded separately by APM."
    />
  );
}
