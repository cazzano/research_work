import Link from 'next/link';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  BarChart3,
  Globe,
  History,
  ArrowRight,
  Book,
} from 'lucide-react';

const mainSections = [
  {
    title: 'Major Browsers',
    description: 'Explore the architecture and features of top browsers.',
    href: '/browsers',
    icon: Globe,
  },
  {
    title: 'Browser Comparison',
    description: 'Compare browsers side-by-side on key metrics.',
    href: '/compare',
    icon: BarChart3,
  },
  {
    title: 'Browser Wars History',
    description: 'An interactive timeline of browser evolution.',
    href: '/history',
    icon: History,
  },
  {
    title: 'Core Concepts',
    description: 'Dive deep into engines, components, and performance.',
    href: '/engines',
    icon: Book,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold font-headline tracking-tight text-primary">
          Welcome to BrowserWise
        </h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          Your interactive guide to understanding the past, present, and future
          of web browsers. Select a section below to begin your journey.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {mainSections.map((section) => (
          <Link href={section.href} key={section.title} className="group">
            <Card className="h-full transition-all duration-200 group-hover:shadow-lg group-hover:-translate-y-1 group-hover:border-primary/30">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="space-y-1">
                  <CardTitle className="font-headline text-xl">
                    {section.title}
                  </CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </div>
                <div className="p-3 bg-accent/20 rounded-lg text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <section.icon className="h-6 w-6" />
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <div className="text-center text-muted-foreground text-sm">
        <p>Use the sidebar to navigate through all available topics.</p>
      </div>
    </div>
  );
}
