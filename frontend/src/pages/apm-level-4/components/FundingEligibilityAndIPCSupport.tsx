import SiteLink from '@/components/base/SiteLink';
import { AGE_16_TO_24, AGE_25_PLUS, employerContributionPercent, fundingContributionPercent, fundsUpToBandMaximum, fundingRoutes, fundingWindowPhrase, formatPercent, type FundingRouteId } from '@/data/apprenticeshipFundingPolicy';
import { level4Copy } from '../pageCopy';
import ProgrammeContentSection, { CopyBody, CopyCallout, CopyGrid, CopyList, CopyNote } from './ProgrammeContentSection';
function FundingPosition({ route, age }: { route: FundingRouteId; age: string }) {
  if (route === 'levy-sufficient') return <>Eligible costs are met through the employer's apprenticeship service account.</>;
  if (fundsUpToBandMaximum(route, age)) return <>Government funds {formatPercent(100 - (employerContributionPercent(route, age) ?? 0))} of eligible costs up to the funding-band maximum.</>;
  return <>Government contributes {formatPercent(fundingContributionPercent(route, age)!)}; employer contributes {formatPercent(employerContributionPercent(route, age)!)}.</>;
}
export default function FundingEligibilityAndIPCSupport() {
  const copy = level4Copy.funding;
  return <ProgrammeContentSection id="funding" copy={copy}>
    <article className="mt-10 rounded-xl border border-background-200 bg-white p-5 md:p-8">
      <h3 className="text-xl">{copy.apprenticeship.title}</h3><p className="mt-2 text-base font-semibold text-primary-700">{copy.apprenticeship.subtitle}</p><CopyBody body={copy.apprenticeship.body} />
      <h4 className="mt-8 text-lg">{copy.apprenticeship.matrixTitle}</h4><p className="mt-2 text-xs leading-6 text-foreground-500">For apprenticeship starts {fundingWindowPhrase()}</p>
      <div role="region" aria-label="Apprenticeship funding by employer and age" tabIndex={0} className="mt-5 overflow-x-auto rounded-xl border border-background-200">
        <table className="w-full min-w-[640px] table-fixed text-left text-sm"><caption className="sr-only">Apprenticeship funding contributions by employer funding position and apprentice age.</caption><thead className="bg-primary-700 text-white"><tr><th scope="col" className="p-4">Employer funding position</th><th scope="col" className="p-4">Apprentices aged 16–24</th><th scope="col" className="p-4">Apprentices aged 25+</th></tr></thead><tbody>{fundingRoutes.map(route => <tr key={route.id} className="border-t border-background-200 align-top"><th scope="row" className="break-words p-4 font-semibold text-primary-800">{route.id === 'levy-sufficient' ? 'Levy-paying employer with sufficient funds' : route.id === 'levy-insufficient' ? 'Levy-paying employer with insufficient funds' : 'Employer not paying the apprenticeship levy'}</th>{[AGE_16_TO_24, AGE_25_PLUS].map(age => <td key={age} className="break-words p-4 leading-7 text-foreground-600"><FundingPosition route={route.id} age={age} /></td>)}</tr>)}</tbody></table>
      </div><CopyNote text={copy.apprenticeship.matrixNote} />
      <h4 className="mt-8 text-lg">{copy.apprenticeship.criteriaTitle}</h4><p className="mt-3 text-sm text-foreground-600">{copy.apprenticeship.criteriaIntro}</p><CopyList items={copy.apprenticeship.criteria} /><CopyNote text={copy.apprenticeship.note} />
      <SiteLink href="/apprenticeship-eligibility-checker" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary-700">Check Apprenticeship Eligibility<i className="ri-arrow-right-line" aria-hidden="true" /></SiteLink>
    </article>
    <article className="mt-8 rounded-xl border border-background-200 bg-white p-5 md:p-8"><h3 className="text-xl">{copy.professional.title}</h3><p className="mt-2 text-base font-semibold text-primary-700">{copy.professional.subtitle}</p><CopyBody body={copy.professional.body} /><CopyCallout block={copy.professional.tuition} /></article>
    <article id="ipc-bursary" className="mt-8 scroll-mt-48 rounded-xl border border-accent-200 bg-accent-50/40 p-5 md:p-8"><p className="mb-3 text-xs font-bold uppercase tracking-wider text-accent-700">IPC Bursary</p><h3 className="text-xl">{copy.ipc.title}</h3><p className="mt-2 text-base font-semibold text-primary-700">{copy.ipc.subtitle}</p><CopyBody body={copy.ipc.body} /><CopyGrid blocks={copy.ipc.cards} columns={2} /><CopyCallout block={copy.ipc.application} /><CopyNote text={copy.ipc.note} /></article>
    <article className="mt-8 rounded-xl border border-background-200 bg-white p-5 md:p-8"><h3 className="text-xl">{copy.benefits.title}</h3><p className="mt-2 text-base font-semibold text-primary-700">{copy.benefits.subtitle}</p><CopyBody body={copy.benefits.body} /><CopyGrid blocks={copy.benefits.cards} /><CopyNote text={copy.benefits.note} /></article>
    <CopyCallout block={{ title: copy.confirm.title, body: [copy.confirm.subtitle, copy.confirm.intro], items: copy.confirm.items }}><SiteLink href="/book-a-session" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary-700">Discuss Your Funding Options<i className="ri-arrow-right-line" aria-hidden="true" /></SiteLink><CopyNote text={copy.confirm.note} /></CopyCallout>
  </ProgrammeContentSection>;
}
