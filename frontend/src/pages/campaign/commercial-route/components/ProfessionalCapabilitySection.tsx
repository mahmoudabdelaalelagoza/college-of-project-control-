import ProfessionalCapability from '@/pages/project-controls-professional-level-6/components/ProfessionalCapability';
import { professionalCapabilities } from '../campaignData';

/** Section: Professional Capability. */
export default function ProfessionalCapabilitySection() {
  return (
    <ProfessionalCapability
      title="Apply Project Controls Skills to Real Projects"
      subtitle="Develop practical expertise across key project controls disciplines, with learning tailored to your selected pathway and professional goals."
      tracks={professionalCapabilities}
      gridClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
      note="The capabilities covered depend on your selected route, modules and agreed learning plan."
    />
  );
}
