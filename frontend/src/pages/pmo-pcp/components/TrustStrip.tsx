const trustItems = [
  'Project Controls Professional Level 6',
  'Funded Where Eligible',
  'Employer-Supported Learning',
  'Workplace Evidence',
  'Progress Reviews',
  'APM Recognised Assessment Route',
  'ChPP Readiness Support',
  'Live Online Delivery',
];

export default function TrustStrip() {
  return (
    <section aria-label="Programme features" className="border-b border-background-200 bg-white py-6 md:py-8">
      <div className="container-site">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map(item => <li key={item} className="flex items-start gap-3 text-sm font-semibold leading-6 text-foreground-700"><i className="ri-checkbox-circle-line mt-0.5 shrink-0 text-lg text-secondary-500" aria-hidden="true" />{item}</li>)}
        </ul>
      </div>
    </section>
  );
}
