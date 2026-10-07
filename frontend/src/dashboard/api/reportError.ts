function errorDetail(error: unknown) {
  if (!error || typeof error !== 'object') return '';
  const { message, code } = error as { message?: unknown; code?: unknown };
  if (typeof message !== 'string' || !message) return '';
  return typeof code === 'string' && code ? `${message} (${code})` : message;
}

/** Editors keep their local draft after an API error; retry the original action. */
export function reportCmsError(error: unknown) {
  const detail = errorDetail(error);
  const message = error instanceof Error && error.name === 'TimeoutError'
    ? 'The request timed out. Your changes may not have been saved. Please refresh the list before trying again.'
    : `Unable to complete the request. Check your connection and try again.${detail ? ` Details: ${detail}` : ''}`;
  console.error('Dashboard request failed', error);
  window.dispatchEvent(new CustomEvent('cms-request-error', { detail: message }));
}
