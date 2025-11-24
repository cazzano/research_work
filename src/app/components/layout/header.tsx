import { SidebarTrigger } from '@/components/ui/sidebar';
import { Logo } from '../logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur md:px-6">
      <div className="md:hidden">
        <SidebarTrigger />
      </div>
      <div className="hidden md:block">
        <Logo />
      </div>
      <div className="flex-1">
        <h1 className="text-lg font-semibold md:text-xl font-headline">
          The Comprehensive Guide to Web Browsers
        </h1>
      </div>
    </header>
  );
}
