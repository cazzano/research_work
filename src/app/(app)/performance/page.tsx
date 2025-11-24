import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { RenderingPipeline } from '@/app/components/features/rendering-pipeline';
import { Rabbit, Shrink, Image, FastForward } from 'lucide-react';

const topics = [
    {
        icon: FastForward,
        title: 'Resource Loading',
        description: 'Optimize asset delivery with preload, prefetch, and preconnect.'
    },
    {
        icon: Rabbit,
        title: 'JavaScript Performance',
        description: 'Improve execution with code splitting, tree shaking, and defer loading.'
    },
    {
        icon: Image,
        title: 'Image Optimization',
        description: 'Serve responsive images in modern formats like WebP and AVIF.'
    },
    {
        icon: Shrink,
        title: 'Minification',
        description: 'Reduce file sizes by removing unnecessary characters from code.'
    }
]

export default function PerformancePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Browser Performance Optimization</h1>
        <p className="text-muted-foreground mt-2">
          Learn the techniques to make websites load and run faster.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold font-headline mb-4">Critical Rendering Path</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl">
            The Critical Rendering Path refers to the sequence of steps the browser takes to convert HTML, CSS, and JavaScript into pixels on the screen. Optimizing this path is key to improving initial page load time.
        </p>
        <RenderingPipeline />
      </div>

      <div>
        <h2 className="text-2xl font-bold font-headline mb-4">Other Key Optimization Areas</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {topics.map(topic => (
                 <Card key={topic.title} className="h-full">
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-accent/20 rounded-md text-accent">
                                <topic.icon className="h-6 w-6" />
                            </div>
                            <CardTitle className="font-headline text-lg">{topic.title}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>{topic.description}</CardDescription>
                    </CardContent>
                 </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
