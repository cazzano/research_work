import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Cpu, Recycle, Puzzle } from 'lucide-react';

const jsEngines = [
  {
    name: 'V8',
    developedBy: 'Google',
    usedBy: ['Chrome', 'Edge', 'Opera', 'Brave', 'Node.js'],
    details: 'The fastest and most widely used JavaScript engine. V8 is written in C++ and implements JIT (Just-In-Time) compilation for high performance.',
    pipeline: 'Ignition (Interpreter) → TurboFan (Optimizing Compiler)',
    features: [
      { icon: Zap, text: 'JIT Compilation' },
      { icon: Cpu, text: 'Hidden Classes Optimization' },
      { icon: Recycle, text: 'Generational Garbage Collection' },
      { icon: Puzzle, text: 'WebAssembly Support' },
    ],
  },
  {
    name: 'SpiderMonkey',
    developedBy: 'Mozilla',
    usedBy: ['Firefox'],
    details: 'The very first JavaScript engine, created in 1995. It features a sophisticated multi-tier JIT compilation pipeline to balance fast startup and optimized execution.',
    pipeline: 'Interpreter → Baseline JIT → Ion JIT → Warp JIT',
    features: [
      { icon: Zap, text: 'Multi-tier JIT Compilation' },
      { icon: Cpu, text: 'Latest JS & Wasm Features' },
      { icon: Recycle, text: 'Incremental Garbage Collection' },
      { icon: Puzzle, text: 'Written in C++ and Rust' },
    ],
  },
  {
    name: 'JavaScriptCore (Nitro)',
    developedBy: 'Apple',
    usedBy: ['Safari'],
    details: 'Apple\'s JavaScript engine, highly optimized for performance and energy efficiency on its devices. It employs a four-tier compilation strategy.',
    pipeline: 'LLInt → Baseline JIT → DFG JIT → FTL JIT',
    features: [
      { icon: Zap, text: 'Four-tier JIT Pipeline' },
      { icon: Cpu, text: 'Energy Efficient' },
      { icon: Recycle, text: 'Generational Garbage Collection' },
      { icon: Puzzle, text: 'Optimized for Apple Hardware' },
    ],
  },
];

export default function JavascriptEnginesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline">JavaScript Engines</h1>
        <p className="text-muted-foreground mt-2">
          The powerhouses that execute JavaScript code in modern browsers.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
        {jsEngines.map((engine) => (
          <Card key={engine.name} className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{engine.name}</CardTitle>
              <CardDescription>By {engine.developedBy}</CardDescription>
              <div className="pt-2">
                <p className="text-sm text-muted-foreground">
                  Used by:{' '}
                  {engine.usedBy.map((browser) => (
                    <Badge key={browser} variant="secondary" className="mr-1">
                      {browser}
                    </Badge>
                  ))}
                </p>
              </div>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <p className="text-sm">{engine.details}</p>
              <div>
                <h4 className="text-sm font-semibold mb-1">Compilation Pipeline:</h4>
                <p className="text-sm text-muted-foreground font-mono bg-muted px-2 py-1 rounded-md">{engine.pipeline}</p>
              </div>
              <div className="space-y-2 text-sm pt-2">
                {engine.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <feature.icon className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
