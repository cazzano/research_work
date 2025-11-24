'use client';

import { usePathname } from 'next/navigation';
import { SidebarTrigger } from '@/components/ui/sidebar';
import {
  BookText,
  Bot,
  Calculator,
  Clapperboard,
  CreditCard,
  Gamepad2,
  Home,
  Laptop,
  Users,
  Youtube,
} from 'lucide-react';

const navItems = [
  { href: '/', title: 'Home' },
  { href: '/streaming-services', title: 'Streaming Services' },
  { href: '/online-gaming', title: 'Online Gaming' },
  { href: '/content-creation', title: 'Content Creation' },
  { href: '/subscription-models', title: 'Subscription Models' },
  { href: '/technology-requirements', title: 'Technology Requirements' },
  { href: '/cultural-impact', title: 'Cultural Impact' },
  { href: '/learning-path-optimizer', title: 'AI Learning Path Optimizer' },
  { href: '/glossary', title: 'Glossary' },
  { href: '/bandwidth-estimator', title: 'Bandwidth Estimator' },
];

function getPageTitle(pathname: string): string {
  const item = navItems.find(item => item.href === pathname);
  return item ? item.title : 'StreamEdia';
}

export default function AppHeader() {
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);

  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
      <SidebarTrigger className="md:hidden" />
      <div className="flex-1">
        <h1 className="font-headline text-xl font-semibold">{pageTitle}</h1>
      </div>
    </header>
  );
}
