'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
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

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';

const navItems = {
  main: [
    {
      href: '/streaming-services',
      icon: Youtube,
      title: 'Streaming',
    },
    {
      href: '/online-gaming',
      icon: Gamepad2,
      title: 'Gaming',
    },
    {
      href: '/content-creation',
      icon: Clapperboard,
      title: 'Creation',
    },
    {
      href: '/subscription-models',
      icon: CreditCard,
      title: 'Subscriptions',
    },
    {
      href: '/technology-requirements',
      icon: Laptop,
      title: 'Tech',
    },
    {
      href: '/cultural-impact',
      icon: Users,
      title: 'Culture',
    },
  ],
  tools: [
    {
      href: '/learning-path-optimizer',
      icon: Bot,
      title: 'AI Optimizer',
    },
    {
      href: '/glossary',
      icon: BookText,
      title: 'Glossary',
    },
    {
      href: '/bandwidth-estimator',
      icon: Calculator,
      title: 'Bandwidth Calc',
    },
  ],
};

export default function AppSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-primary"
          >
            <path d="m12 8 9.04 6.78a2 2 0 0 1-1.04 3.44H4a2 2 0 0 1-1.04-3.44L12 8Z" />
            <path d="M21 17.22v-2.22" />
            <path d="m3 15 9 7 9-7" />
            <path d="M3 15V7.78" />
            <path d="M21 15V7.78" />
          </svg>
          <h1 className="font-headline text-xl font-semibold text-sidebar-foreground">
            StreamEdia
          </h1>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              as={Link}
              href="/"
              isActive={isActive('/')}
              tooltip="Home"
            >
              <Home />
              <span>Home</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarGroup>
            <SidebarGroupLabel>Learn</SidebarGroupLabel>
            {navItems.main.map(item => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  as={Link}
                  href={item.href}
                  isActive={isActive(item.href)}
                  tooltip={item.title}
                >
                  <item.icon />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Tools</SidebarGroupLabel>
            {navItems.tools.map(item => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  as={Link}
                  href={item.href}
                  isActive={isActive(item.href)}
                  tooltip={item.title}
                >
                  <item.icon />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarGroup>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <p className="p-2 text-center text-xs text-sidebar-foreground/50 group-data-[collapsible=icon]:hidden">
          © {new Date().getFullYear()} StreamEdia
        </p>
      </SidebarFooter>
    </Sidebar>
  );
}
