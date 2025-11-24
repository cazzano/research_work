import Link from 'next/link';
import {
  ArrowRight,
  BookText,
  Bot,
  Calculator,
  Clapperboard,
  CreditCard,
  Gamepad2,
  Laptop,
  Users,
  Youtube,
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import React from 'react';

type FeatureCardProps = {
  title: string;
  description: string;
  href: string;
  Icon: LucideIcon;
};

const mainFeatures: FeatureCardProps[] = [
  {
    title: 'Streaming Services',
    description: 'Dive into ABR, CDNs, codecs, and DRM systems.',
    href: '/streaming-services',
    Icon: Youtube,
  },
  {
    title: 'Online Gaming',
    description: 'Explore game servers, netcode, and cloud gaming tech.',
    href: '/online-gaming',
    Icon: Gamepad2,
  },
  {
    title: 'Content Creation',
    description: 'Understand the tech behind YouTube, Twitch, and TikTok.',
    href: '/content-creation',
    Icon: Clapperboard,
  },
  {
    title: 'Subscription Models',
    description: 'Learn about ad-supported, premium, and bundled services.',
    href: '/subscription-models',
    Icon: CreditCard,
  },
  {
    title: 'Tech Requirements',
    description: 'Discover the hardware and network needs for media.',
    href: '/technology-requirements',
    Icon: Laptop,
  },
  {
    title: 'Cultural Impact',
    description: 'Analyze binge-watching, influencers, and gaming communities.',
    href: '/cultural-impact',
    Icon: Users,
  },
];

const toolFeatures: FeatureCardProps[] = [
  {
    title: 'AI Learning Path Optimizer',
    description: 'Get a personalized learning path tailored to your needs.',
    href: '/learning-path-optimizer',
    Icon: Bot,
  },
  {
    title: 'Glossary',
    description: 'Quickly look up key technical terms and concepts.',
    href: '/glossary',
    Icon: BookText,
  },
  {
    title: 'Bandwidth Estimator',
    description: 'Calculate bandwidth needs for various media types.',
    href: '/bandwidth-estimator',
    Icon: Calculator,
  },
];

function FeatureCard({ title, description, href, Icon }: FeatureCardProps) {
  return (
    <Card className="h-full transform transition-all hover:-translate-y-1 hover:shadow-lg">
      <Link href={href} className="block h-full w-full">
        <CardHeader>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="font-headline">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Link>
    </Card>
  );
}

export default function Home() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border bg-card p-8 text-center shadow-sm">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
          Welcome to StreamEdia
        </h1>
        <p className="max-w-3xl text-muted-foreground md:text-lg">
          Your complete educational resource for understanding modern
          entertainment and media technology — from backend architecture to
          cultural impact.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/streaming-services">
              Start Learning <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/learning-path-optimizer">
              AI Optimizer <Bot className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="mb-4 font-headline text-3xl font-bold">
            Explore Core Concepts
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {mainFeatures.map(feature => (
              <FeatureCard key={feature.href} {...feature} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 font-headline text-3xl font-bold">
            Interactive Tools
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {toolFeatures.map(feature => (
              <FeatureCard key={feature.href} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
