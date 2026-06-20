import { cn } from "@/lib/utils";

export function Section({ id, className, overlay, children }) {
  return (
    <section id={id} className={cn("relative z-20", className)}>
      {overlay && <div className={overlay} />}
      {children}
    </section>
  );
}
