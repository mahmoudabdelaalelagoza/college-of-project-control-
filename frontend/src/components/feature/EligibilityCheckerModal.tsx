import { lazy, Suspense } from 'react';
import { createPortal } from 'react-dom';
import Modal from '@/components/base/Modal';
import './eligibility-checker-modal.css';

const ApprenticeshipEligibilityChecker = lazy(() => import('@/pages/apprenticeship-eligibility-checker/components/ApprenticeshipEligibilityChecker'));

export default function EligibilityCheckerModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open || typeof document === 'undefined') return null;

  return createPortal(
    <Modal
      id="home-eligibility-modal"
      open={open}
      onClose={onClose}
      title="Check your apprenticeship eligibility"
      panelClassName="eligibility-checker-modal"
      bodyClassName="eligibility-checker-modal__body"
      closeButtonClassName="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-background-200 bg-background-50 text-primary-800 hover:bg-background-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
      closeButtonContent={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6" /></svg>}
    >
      <div className="eligibility-checker-modal__intro space-y-2">
        <p>Answer a few quick questions to find out if you may be eligible for an apprenticeship.</p>
        <p>This check provides an initial indication only. Your final eligibility will be confirmed by Kent Business College following an individual review.</p>
      </div>
      <Suspense fallback={<p role="status" className="p-6 text-sm text-foreground-600">Loading eligibility checker…</p>}>
        <ApprenticeshipEligibilityChecker embedded onResultNavigate={onClose} />
      </Suspense>
    </Modal>,
    document.body,
  );
}
