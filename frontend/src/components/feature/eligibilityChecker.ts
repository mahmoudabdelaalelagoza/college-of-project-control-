export const ELIGIBILITY_OPEN_EVENT = 'cpcm:open-eligibility-checker';
/** Query flag the retired checker URLs redirect with, so old links still open the popup. */
export const ELIGIBILITY_QUERY_FLAG = 'check-eligibility';

/** Opens the site-wide eligibility popup from any button or link. */
export function openEligibilityChecker() {
  window.dispatchEvent(new Event(ELIGIBILITY_OPEN_EVENT));
}
