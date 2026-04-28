import type { ReactNode, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number;
  threshold?: number;
}

export function ScrollReveal({ children, delay = 0, threshold: _threshold = 0.15, className = "", ...rest }: Props) {
  const delayClass = delay > 0 ? ` reveal-delay-${delay}` : "";

  return (
    <div className={`reveal${delayClass} ${className}`} {...rest}>
      {children}
    </div>
  );
}
