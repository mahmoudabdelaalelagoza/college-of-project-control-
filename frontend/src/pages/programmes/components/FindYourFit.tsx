import { useEffect,useRef,useState } from 'react';
import SiteLink from '@/components/base/SiteLink';

const steps = [
  { number: '01', title: 'Your Role', desc: 'What are your current professional responsibilities?', icon: 'ri-user-line' },
  { number: '02', title: 'Your Development Priorities', desc: 'Which skills or areas of expertise would you like to strengthen?', icon: 'ri-bar-chart-line' },
  { number: '03', title: 'Your Starting Point', desc: 'What relevant knowledge, qualifications and professional experience do you already have?', icon: 'ri-medal-line' },
  { number: '04', title: 'Your Learning Route', desc: 'Would a complete programme, a specialist course or a combination of modules best meet your needs?', icon: 'ri-list-check-2' },
  { number: '05', title: 'Your Professional Goals', desc: 'What responsibilities or professional opportunities would you like to work towards?', icon: 'ri-road-map-line' },
];

export default function FindYourFit() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="how-to-choose" className="py-16 md:py-20 bg-background-50 relative overflow-hidden">
      <div className="container-site relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 reveal-blur-in is-visible">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-label font-semibold uppercase tracking-wider border border-highlight-500/40 text-warm-ink mb-4">
            Find Your Fit
          </span>
          <h2 className="text-section-2xl md:text-section-3xl lg:text-section-4xl font-heading font-bold text-foreground-950 leading-tight">
            Five questions to guide your next step
          </h2>
          <p className="mt-3 text-sm md:text-base text-foreground-600 leading-relaxed">
            Not sure which development option is right for you? Start with your current responsibilities, experience and professional goals. Our team can help you explore a suitable learning route.
          </p>
        </div>

        <div ref={ref} className="relative">
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-background-300"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-4">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 450ms cubic-bezier(0.22, 1, 0.36, 1) ${150 + i * 80}ms, transform 450ms cubic-bezier(0.22, 1, 0.36, 1) ${150 + i * 80}ms`,
                }}
              >
                <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-full bg-white border-2 border-primary-300 mb-4 lift-hover">
                  <i className={`${step.icon} text-primary-500 text-xl`}></i>
                </div>
                <span className="text-xs font-label font-bold text-primary-400 mb-1">{step.number}</span>
                <h3 className="text-sm font-heading font-bold text-foreground-800 leading-snug max-w-[180px]">{step.title}</h3>
                <p className="text-xs text-foreground-600 leading-snug mt-1.5 max-w-[190px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <SiteLink href="/contact" className="btn-primary inline-flex w-full max-w-full items-center justify-center gap-2 px-6 py-3 text-center text-sm font-semibold sm:w-auto">
            Discuss Your Development Options
            <i className="ri-arrow-right-line" aria-hidden="true" />
          </SiteLink>
          <p className="mt-5 max-w-3xl mx-auto text-xs leading-relaxed text-foreground-600">
            Programme suitability and any applicable apprenticeship eligibility, funding and employer requirements are confirmed following an individual review.
          </p>
        </div>
      </div>
    </section>
  );
}