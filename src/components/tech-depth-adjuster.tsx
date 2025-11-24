'use client';

import { useState, useTransition, useEffect, useCallback } from 'react';
import { adjustTechnicalDepth } from '@/ai/flows/adjust-technical-depth';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';
import { Sparkles } from 'lucide-react';

type Depth = 'Beginner' | 'Intermediate' | 'Advanced';
const depths: Depth[] = ['Beginner', 'Intermediate', 'Advanced'];

export function TechDepthAdjuster({ intermediateText }: { intermediateText: string }) {
  const [activeDepth, setActiveDepth] = useState<Depth>('Beginner');
  const [content, setContent] = useState<Record<Depth, string | null>>({
    Beginner: null,
    Intermediate: intermediateText,
    Advanced: null,
  });
  const [isPending, startTransition] = useTransition();

  const fetchAdjustedText = useCallback((targetDepth: Depth) => {
    if (content[targetDepth]) return;

    startTransition(async () => {
      try {
        const result = await adjustTechnicalDepth({ text: intermediateText, depth: targetDepth });
        setContent(prev => ({ ...prev, [targetDepth]: result.adjustedText }));
      } catch (error) {
        console.error("Failed to adjust technical depth:", error);
        toast({
            title: "AI Error",
            description: "Could not adjust the explanation. Please try again later.",
            variant: "destructive"
        });
        setContent(prev => ({ ...prev, [targetDepth]: "Error loading content."}));
      }
    });
  }, [intermediateText, content]);

  useEffect(() => {
    fetchAdjustedText('Beginner');
  }, [fetchAdjustedText]);

  const currentContent = content[activeDepth];

  return (
    <div className="p-4 rounded-lg bg-card/50 border border-border">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 p-1 rounded-full bg-card border">
          {depths.map(depth => (
            <Button
              key={depth}
              variant={activeDepth === depth ? 'default' : 'ghost'}
              size="sm"
              className={cn(
                "rounded-full transition-all",
                activeDepth === depth ? 'bg-primary shadow-md' : 'text-muted-foreground hover:text-foreground'
              )}
              onClick={() => {
                setActiveDepth(depth)
                if (!content[depth]) {
                    fetchAdjustedText(depth)
                }
              }}
            >
              {depth}
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm text-purple-glow">
            <Sparkles className="w-4 h-4" />
            <span>Powered by GenAI</span>
        </div>
      </div>
      <div>
        {isPending && !currentContent ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ) : (
          <p className="text-base leading-relaxed text-card-foreground whitespace-pre-wrap">{currentContent}</p>
        )}
      </div>
    </div>
  );
}
