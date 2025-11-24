'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import {
  BarChart3,
  Book,
  Code,
  Cog,
  Component,
  GitCommit,
  Globe,
  History,
  Home,
  Layers,
  Swords,
  Zap,
} from 'lucide-react';
import { Logo } from '@/app/components/logo';

const navItems = [
  { href: '/', label: 'Dashboard', icon: Home },
  {
    label: 'Core Concepts',
    icon: Book,
    subItems: [
      { href: '/browsers', label: 'Major Browsers', icon: Globe },
      { href: '/engines', label: 'Browser Engines', icon: Cog },
      { href: '/javascript-engines', label: 'JS Engines', icon: Code },
    ],
  },
  { href: '/compare', label: 'Comparison', icon: BarChart3 },
  { href: '/history', label: 'Browser Wars', icon: History },
  {
    label: 'Deep Dive',
    icon: Layers,
    subItems: [
      { href: '/components', label: 'Browser Components', icon: Component },
      { href: '/performance', label: 'Performance', icon: Zap },
    ],
  },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              {item.subItems ? (
                <>
                  <SidebarMenuButton
                    isActive={item.subItems.some((sub) =>
                      pathname.startsWith(sub.href)
                    )}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    {item.subItems.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.href}>
                        <Link href={subItem.href}>
                          <SidebarMenuSubButton
                            isActive={pathname.startsWith(subItem.href)}
                          >
                            <subItem.icon />
                            {subItem.label}
                          </SidebarMenuSubButton>
                        </Link>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </>
              ) : (
                <Link href={item.href}>
                  <SidebarMenuButton
                    isActive={pathname === item.href}
                    tooltip={item.label}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </Link>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
