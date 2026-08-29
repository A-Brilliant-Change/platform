import type { AnchorHTMLAttributes } from "react";

export default function PrimaryButton({ children, className = "", ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a {...props} className={`group inline-flex min-h-12 items-center justify-center gap-4 rounded-full bg-[#D4AF37] px-6 text-xs font-bold uppercase tracking-[0.16em] text-[#091B36] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37] ${className}`}>
      {children}
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">-&gt;</span>
    </a>
  );
}
