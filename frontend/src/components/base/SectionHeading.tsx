interface SectionHeadingProps {
  id?: string;
  tag?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

export default function SectionHeading({ id, tag, title, subtitle, light = false, className = '', as = 'h2' }: SectionHeadingProps) {
  const HeadingTag = as;
  return (
    <div className={`text-center mx-auto ${className}`}>
      {tag && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-label font-semibold uppercase tracking-wider mb-4 border ${
          light
            ? 'border-highlight-400/50 text-highlight-400'
            : 'border-highlight-500/40 text-warm-ink'
        }`}>
          {tag}
        </span>
      )}
      <HeadingTag id={id} className={`mx-auto max-w-4xl text-balance ${as === 'h2' ? 'text-section-2xl md:text-section-3xl lg:text-section-4xl' : 'text-2xl md:text-3xl lg:text-4xl'} font-heading font-bold leading-tight ${
        light ? 'text-background-50' : 'text-foreground-950'
      }`}>
        {title}
      </HeadingTag>
      {subtitle && (
        <p className={`mx-auto mt-3 max-w-2xl text-sm md:mt-4 md:text-base leading-relaxed ${
          light ? 'text-support-on-dark' : 'text-foreground-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}