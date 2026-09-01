import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export default function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <div className="max-w-4xl">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">{eyebrow}</p>
      <h1 className="mt-5 text-5xl font-light leading-none tracking-tight text-white sm:text-7xl">{title}</h1>
      <p className="mt-7 max-w-2xl text-lg font-light leading-8 text-white/60">{description}</p>
      {children}
    </div>
  );
}




