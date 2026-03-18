import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ChevronRight } from 'lucide-react';

/**
 * Utility for merging tailwind classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Section Container
 */
export const Section = ({ 
  children, 
  className, 
  id 
}: { 
  children: React.ReactNode; 
  className?: string; 
  id?: string;
  key?: React.Key;
}) => (
  <section id={id} className={cn("py-24 px-6 md:px-12 max-w-7xl mx-auto", className)}>
    {children}
  </section>
);

/**
 * Section Title
 */
export const SectionTitle = ({ 
  title, 
  subtitle 
}: { 
  title: string; 
  subtitle?: string 
}) => (
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl mb-4 flex items-center gap-3">
      <span className="w-8 h-[1px] bg-brand-accent"></span>
      {title}
    </h2>
    {subtitle && <p className="text-zinc-500 max-w-2xl font-mono text-sm uppercase tracking-widest">{subtitle}</p>}
  </div>
);

/**
 * Card Component
 */
export const Card = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string;
  key?: React.Key;
}) => (
  <div className={cn("glass rounded-xl p-6 transition-all duration-300 hover:border-brand-accent/50 group", className)}>
    {children}
  </div>
);

/**
 * Architecture Diagram Component
 */
export const ArchitectureDiagram = ({ flow }: { flow: string[] }) => (
  <div className="flex flex-col items-center gap-4 py-8 px-4 bg-zinc-900/50 rounded-xl border border-brand-border/50">
    <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em] mb-2">System Architecture Flow</div>
    <div className="flex flex-wrap justify-center items-center gap-3">
      {flow.map((item, idx) => (
        <React.Fragment key={idx}>
          <div className="px-3 py-2 bg-brand-card border border-brand-border rounded-md text-[11px] font-mono text-zinc-300 shadow-sm group-hover:border-brand-accent/30 transition-colors">
            {item}
          </div>
          {idx < flow.length - 1 && (
            <div className="text-brand-accent/40">
              <ChevronRight size={14} />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);
