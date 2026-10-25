export default function ForEmployers() {
  return (
    <header
      aria-labelledby="employer-agreement-title"
      className="bg-primary-950 pb-6 text-white"
      style={{ paddingTop: 'calc(var(--public-header-height, 145px) + 1.5rem)' }}
    >
      <div className="container-site">
        <h1 id="employer-agreement-title" className="text-2xl font-extrabold leading-tight text-white md:text-3xl">
          Employer Agreement
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/80">
          Complete this form to confirm your organisation&apos;s participation and agree the next steps with Kent Business College.
        </p>
      </div>
    </header>
  );
}
