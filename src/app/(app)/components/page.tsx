import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Database, FileCode, Lock, Globe, Layers, ArrowRight } from 'lucide-react';

const components = [
    {
        icon: FileCode,
        title: "DOM & CSSOM",
        description: "The object models that represent HTML and CSS, forming the foundation of what's rendered on a page.",
        href: "#"
    },
    {
        icon: Database,
        title: "Browser Storage",
        description: "Explore Cookies, LocalStorage, SessionStorage, and IndexedDB for client-side data persistence.",
        href: "#"
    },
    {
        icon: Globe,
        title: "Browser Cache",
        description: "Understand how browsers store resources to speed up repeat visits, including HTTP and Service Worker caches.",
        href: "#"
    },
    {
        icon: Lock,
        title: "Security Features",
        description: "Dive into Same-Origin Policy, CSP, CORS, and Sandboxing that keep the web safe.",
        href: "#"
    }
];

export default function ComponentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline">Browser Components Deep Dive</h1>
        <p className="text-muted-foreground mt-2">
          Explore the fundamental building blocks of a web browser.
        </p>
      </div>

       <div className="grid gap-4 md:grid-cols-2">
        {components.map((component) => (
          <Card key={component.title} className="hover:border-primary/50 hover:shadow-md transition-all">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="font-headline text-xl">{component.title}</CardTitle>
                    <div className="p-2 bg-accent/20 rounded-md text-accent">
                        <component.icon className="h-6 w-6" />
                    </div>
                </div>
            </CardHeader>
            <CardContent>
              <CardDescription>{component.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

       <Card className="mt-8 text-center bg-card/50">
        <CardHeader>
          <div className="mx-auto bg-muted p-3 rounded-full">
            <Layers className="h-12 w-12 text-muted-foreground" />
          </div>
          <CardTitle className="font-headline mt-4">More Content Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground max-w-md mx-auto">
            Interactive simulators for cache, storage, and security models are under development to provide a hands-on learning experience.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
