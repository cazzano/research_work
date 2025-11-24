'use client';
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
    {
        title: 'Parsing',
        description: 'Browser parses HTML into a DOM Tree and CSS into a CSSOM Tree.',
        details: 'The DOM (Document Object Model) is a tree of objects representing the HTML structure. The CSSOM (CSS Object Model) is a similar tree for styles. These are independent data structures.'
    },
    {
        title: 'Render Tree',
        description: 'DOM and CSSOM trees are combined to form the Render Tree.',
        details: 'The Render Tree captures only the visible content. For example, elements with `display: none` are omitted. Each node in the tree knows its CSS styles.'
    },
    {
        title: 'Layout',
        description: 'The browser calculates the exact size and position of each object in the Render Tree.',
        details: 'This phase, also known as "reflow", determines the geometry of the page. It calculates where each element should go and how large it should be.'
    },
    {
        title: 'Paint',
        description: 'The browser fills in the pixels for each element in layers.',
        details: 'In this stage, the browser converts each node in the layout tree to actual pixels on the screen. It paints elements into multiple layers, like a Photoshop document.'
    },
    {
        title: 'Composite',
        description: 'The separate layers are drawn to the screen in the correct order.',
        details: 'Because some parts of the page (like a pop-up menu) might overlap, they are painted on separate layers. The GPU then composites these layers together to create the final image on screen.'
    }
]

export function RenderingPipeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full overflow-x-auto pb-4">
        <div className="flex items-center gap-2 md:gap-4 min-w-max">
            {steps.map((step, index) => (
                <div key={step.title} className="flex items-center gap-2 md:gap-4">
                    <Card 
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                        className="w-56 h-48 flex flex-col transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50"
                    >
                        <CardHeader className="pb-2">
                            <CardTitle className="font-headline text-lg">{index + 1}. {step.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground flex-grow">
                            {step.description}
                        </CardContent>
                    </Card>

                    {index < steps.length - 1 && (
                        <ArrowRight className="h-6 w-6 text-muted-foreground flex-shrink-0" />
                    )}
                </div>
            ))}
        </div>
        <div className="mt-4 p-4 border rounded-lg bg-muted/50 min-h-[100px] transition-all duration-300">
            {activeIndex !== null ? (
                <div>
                    <h3 className="font-headline text-lg text-primary">{steps[activeIndex].title}</h3>
                    <p className="text-sm text-foreground/80 mt-1">{steps[activeIndex].details}</p>
                </div>
            ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                    <p>Hover over a step to see more details.</p>
                </div>
            )}
        </div>
    </div>
  );
}
