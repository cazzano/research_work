import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GitBranch, History, Cpu, Zap, Code } from 'lucide-react';

const engines = [
  {
    name: 'Blink',
    developedBy: 'Google',
    usedBy: ['Chrome', 'Edge', 'Opera', 'Brave'],
    origin: 'Forked from WebKit in 2013',
    details: 'An open-source engine focused on speed, standards compliance, and a multi-process architecture. It is the most widely used engine today.',
    features: [
      { icon: GitBranch, text: 'Modular Architecture' },
      { icon: Cpu, text: 'Compositor Threading' },
      { icon: Zap, text: 'GPU Acceleration' },
      { icon: Code, text: 'Written in C++' },
    ],
  },
  {
    name: 'Gecko',
    developedBy: 'Mozilla',
    usedBy: ['Firefox'],
    origin: 'Developed by Netscape/Mozilla since 1997',
    details: 'A free and open-source engine known for its strong standards support and privacy focus, with significant parts now written in Rust for safety and performance.',
    features: [
      { icon: GitBranch, text: 'WebRender (GPU rendering in Rust)' },
      { icon: Cpu, text: 'Quantum Project improvements' },
      { icon: Zap, text: 'Parallel CSS Parsing' },
      { icon: Code, text: 'Written in C++ & Rust' },
    ],
  },
  {
    name: 'WebKit',
    developedBy: 'Apple',
    usedBy: ['Safari', 'All iOS Browsers'],
    origin: 'Forked from KHTML in 2001',
    details: 'An open-source engine developed by Apple, optimized for performance and energy efficiency on Apple devices. It is the only engine allowed on iOS.',
    features: [
      { icon: GitBranch, text: 'WebCore & JavaScriptCore' },
      { icon: Cpu, text: 'Optimized for Apple Silicon' },
      { icon: Zap, text: 'Energy Efficiency Focus' },
      { icon: Code, text: 'Written in C++' },
    ],
  },
  {
    name: 'Trident & EdgeHTML',
    developedBy: 'Microsoft',
    usedBy: ['Internet Explorer', 'Legacy Edge'],
    origin: 'Legacy engines developed by Microsoft',
    details: 'Trident was the engine for Internet Explorer, known for non-standard features. EdgeHTML was a modernized fork for the original Edge, but both are now discontinued in favor of Blink.',
    features: [
      { icon: History, text: 'Legacy/Deprecated' },
      { icon: Cpu, text: 'Trident used in IE4-11' },
      { icon: Zap, text: 'EdgeHTML used in original Edge' },
      { icon: Code, text: 'Replaced by Blink' },
    ],
  },
];

export default function EnginesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline">Browser Engines</h1>
        <p className="text-muted-foreground mt-2">
          The core rendering engines that parse web content and draw it to the
          screen.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {engines.map((engine) => (
          <Card key={engine.name} className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{engine.name}</CardTitle>
              <CardDescription>{engine.origin}</CardDescription>
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
              <div className="grid grid-cols-2 gap-4 text-sm">
                {engine.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <feature.icon className="h-4 w-4 text-accent" />
                    <span className="text-muted-foreground">{feature.text}</span>
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
