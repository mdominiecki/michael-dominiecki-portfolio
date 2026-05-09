type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy: string;
};

export function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-3 text-sm font-medium text-muted">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold text-graphite sm:text-4xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">{copy}</p>
    </div>
  );
}
