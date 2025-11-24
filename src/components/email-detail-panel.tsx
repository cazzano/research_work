'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import type { EmailDifference } from '@/lib/types';
import { TechIcon } from './icons';
import { ScrollArea } from './ui/scroll-area';

export function EmailDetailPanel({ data, isOpen, onClose }: { data: EmailDifference | null; isOpen: boolean; onClose: () => void }) {
  if (!data) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full md:max-w-2xl lg:max-w-3xl p-0" side="right">
        <ScrollArea className="h-full">
        <div className="p-6">
          <SheetHeader className="mb-6 text-left">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 rounded-lg" style={{ backgroundColor: `${data.color}20` }}>
                <TechIcon name={data.icon} className="h-8 w-8" style={{ color: data.color }} />
              </div>
              <SheetTitle className="text-4xl font-headline">{data.title}</SheetTitle>
            </div>
            <SheetDescription className="text-base">{data.description}</SheetDescription>
          </SheetHeader>

          <div className="space-y-8">
            {data.keyDifferences.map((diff, index) => (
                <div key={index}>
                    <h3 className="text-2xl font-headline mb-4 border-l-4 pl-4" style={{borderColor: data.color}}>{diff.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {diff.comparison.map((comp, compIndex) => (
                            <div key={compIndex} className="p-4 bg-card rounded-lg border">
                                <h4 className="font-bold text-lg text-foreground mb-2">{comp.name}</h4>
                                <p className="text-muted-foreground text-sm">{comp.details}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
          </div>
        </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
