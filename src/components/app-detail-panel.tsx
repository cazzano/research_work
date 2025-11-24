'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { AppData, TechStackItem } from '@/lib/types';
import { TechIcon } from './icons';
import { TechDepthAdjuster } from './tech-depth-adjuster';
import { ScrollArea } from './ui/scroll-area';
import { Badge } from './ui/badge';
import { ArrowRight, Cpu, Database, Languages, Server } from 'lucide-react';

export function AppDetailPanel({ app, isOpen, onClose }: { app: AppData | null; isOpen: boolean; onClose: () => void }) {
  if (!app) return null;

  const getBadgeVariant = (type: TechStackItem['type']) => {
    switch (type) {
      case 'language': return 'bg-pink-accent/20 text-pink-accent border-pink-accent/30';
      case 'framework': return 'bg-purple-glow/20 text-purple-glow border-purple-glow/30';
      case 'database': return 'bg-warning/20 text-warning border-warning/30';
      case 'infrastructure': return 'bg-success/20 text-success border-success/30';
      case 'platform': return 'bg-accent/20 text-accent border-accent/30';
      default: return 'secondary';
    }
  };
  
  const getIconForType = (type: TechStackItem['type']) => {
    switch(type) {
        case 'language':
        case 'framework':
            return <Languages className="w-4 h-4 mr-2" />
        case 'database':
            return <Database className="w-4 h-4 mr-2" />
        case 'infrastructure':
        case 'platform':
            return <Server className="w-4 h-4 mr-2" />
        default:
            return <Cpu className="w-4 h-4 mr-2" />
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full md:max-w-2xl lg:max-w-3xl p-0" side="right">
        <ScrollArea className="h-full">
        <div className="p-6">
          <SheetHeader className="mb-6 text-left">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 rounded-lg" style={{ backgroundColor: `${app.color}20` }}>
                <TechIcon name={app.icon} className="h-8 w-8" style={{ color: app.color }} />
              </div>
              <SheetTitle className="text-4xl font-headline">{app.name}</SheetTitle>
            </div>
            <SheetDescription className="text-base">{app.useCase}</SheetDescription>
          </SheetHeader>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="protocols">Protocols</TabsTrigger>二百
              <TabsTrigger value="architecture">Architecture</TabsTrigger>
              <TabsTrigger value="data-flow">Data Flow</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <h3 className="text-2xl font-headline mb-4">How it Works</h3>
              <TechDepthAdjuster intermediateText={app.technicalExplanation} />
              
              <h3 className="text-2xl font-headline mt-8 mb-4">Core Concepts</h3>
              <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                {app.coreConcepts.map((concept, i) => <li key={i}>{concept}</li>)}
              </ul>
              
              <h3 className="text-2xl font-headline mt-8 mb-4">Key Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {app.keyTech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-sm">{tech}</Badge>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="protocols" className="mt-6">
                 <h3 className="text-2xl font-headline mb-4">Networking Protocols</h3>
                 <div className="space-y-3">
                    {app.protocols.map((protocol, i) => (
                        <div key={i} className="p-3 bg-card rounded-lg border">
                            <p className="font-semibold text-foreground">{protocol}</p>
                        </div>
                    ))}
                 </div>
            </TabsContent>

            <TabsContent value="architecture" className="mt-6 space-y-6">
              <div>
                <h3 className="text-2xl font-headline mb-4">Backend Stack</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {app.backend.map((item, i) => (
                    <div key={i} className={`flex items-center p-3 rounded-lg border ${getBadgeVariant(item.type)}`}>
                        {getIconForType(item.type)}
                        <span className="font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-headline mb-4">Frontend Stack</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {app.frontend.map((item, i) => (
                     <div key={i} className={`flex items-center p-3 rounded-lg border ${getBadgeVariant(item.type)}`}>
                        {getIconForType(item.type)}
                        <span className="font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="data-flow" className="mt-6">
                <h3 className="text-2xl font-headline mb-6">Message & Data Journey</h3>
                <div className="relative space-y-8 pl-6">
                    <div className="absolute left-[30px] top-2 bottom-2 w-0.5 bg-border -translate-x-1/2"></div>
                    {app.dataFlow.map((flow, i) => (
                        <div key={i} className="relative flex items-start gap-6">
                            <div className="z-10 flex-shrink-0 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                                {i + 1}
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-foreground font-headline">{flow.step}</h4>
                                <p className="text-muted-foreground">{flow.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </TabsContent>

          </Tabs>
        </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
