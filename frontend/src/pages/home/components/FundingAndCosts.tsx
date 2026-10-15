import FundingOptionsSection from '@/components/feature/FundingOptionsSection';
import { AGE_25_PLUS, employerContributionPercent, fundingContributionPercent, formatPercent, fundingWindowPhrase } from '@/data/apprenticeshipFundingPolicy';
import { homeCopy } from '../pageCopy';

export default function FundingAndCosts() {
  const copy = homeCopy.funding;
  const rows = [
    ['Apprentices aged 16–24','Up to 100% of eligible training and assessment costs may be covered, subject to funding rules.'],
    ['Levy-paying employers with sufficient funds',"Eligible costs can be paid through the employer's apprenticeship service account."],
    ['Levy-paying employers with insufficient funds — aged 25+',`Government contributes ${formatPercent(fundingContributionPercent('levy-insufficient',AGE_25_PLUS)!)} of eligible costs, with ${formatPercent(employerContributionPercent('levy-insufficient',AGE_25_PLUS)!)} employer co-investment.`],
    ['Non-levy employers — aged 25+',`Government contributes ${formatPercent(fundingContributionPercent('non-levy',AGE_25_PLUS)!)} of eligible costs, with ${formatPercent(employerContributionPercent('non-levy',AGE_25_PLUS)!)} employer co-investment.`],
  ];

  return (
    <FundingOptionsSection
      id="funding-options"
      tag={copy.tag}
      title={copy.title}
      description={copy.intro}
      overviewCards={[
        { title: copy.apprenticeship.title, content: copy.apprenticeship.body },
        {
          title: copy.professional.title,
          content: copy.professional.body.map(text => <p key={text} className="mt-2 first:mt-0">{text}</p>),
        },
      ]}
      includedSupport={{
        title: copy.support.title,
        description: copy.support.body.map(text => <p key={text}>{text}</p>),
      }}
      includedBenefits={[]}
      supportCards={copy.professional.cards.map(card => ({ title: card.title, description: card.body }))}
      supportNote={copy.professional.note}
      contributionCards={rows.map(([title, description]) => ({ title, description }))}
      contributionTitle={`Funding for starts ${fundingWindowPhrase()}`}
      contributionNote={copy.note}
      footerNote={copy.finalNote}
      secondaryCta={{ label: copy.exploreCta, href: '/knowledge-hub/employer-apprenticeship-funding' }}
      ctaContent={{ title: copy.title, description: copy.intro, label: copy.discussCta, href: '/book-a-session' }}
    />
  );
}
