import { AIExplainer } from '@/app/components/features/ai-explainer';

export function ContentSection({
  title,
  children,
  aiContent,
}: {
  title: string;
  children: React.ReactNode;
  aiContent?: string;
}) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-xl font-semibold font-headline text-primary/90">{title}</h3>
        {aiContent && <AIExplainer contentToExplain={aiContent} title={title} />}
      </div>
      <div className="text-foreground/90 space-y-4 leading-relaxed">{children}</div>
    </div>
  );
}
