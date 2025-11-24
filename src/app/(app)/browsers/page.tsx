import Link from 'next/link';
import { browsers } from '@/lib/data';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Chrome, Globe } from 'lucide-react';

const BrowserIcon = ({ name }: { name: string }) => {
  switch (name.toLowerCase()) {
    case 'chrome':
      return <Chrome className="h-8 w-8" />;
    case 'firefox':
      return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-8 w-8 text-[#ff7139]"
          >
            <path d="M21.5,8.1a4.9,4.9,0,0,0-1-2.6,11.8,11.8,0,0,0-5.9-4.3,12.1,12.1,0,0,0-1.8-.4,4.2,4.2,0,0,0-1.3.1,2.8,2.8,0,0,0-1,.7,4.9,4.9,0,0,0-1,1.1,5.5,5.5,0,0,1,2.2.3,4.1,4.1,0,0,1,1.9,1.3,4.5,4.5,0,0,1,.9,2.1,10.7,10.7,0,0,1,.1,2.1,6.2,6.2,0,0,1-.5,2.7,4,4,0,0,1-2.7,2.4,5.4,5.4,0,0,1-3.2,0,5.1,5.1,0,0,1-2.4-2.1,6.9,6.9,0,0,1-.5-3.3c0-.3,0-.5.1-.8a4,4,0,0,0-1.2-3.1,3.4,3.4,0,0,0-2.8-1.1,4.4,4.4,0,0,0-2,.5,6,6,0,0,0-1.5,1.2,5.2,5.2,0,0,0-1,2.3,8.2,8.2,0,0,0,.2,4.6,9.2,9.2,0,0,0,2,3.7,10.9,10.9,0,0,0,4.2,2.8,11.8,11.8,0,0,0,5.9,1.1,10.9,10.9,0,0,0,4.7-1.3,9.4,9.4,0,0,0,3.5-3.3,8.6,8.6,0,0,0,1.3-4.5A7.1,7.1,0,0,0,21.5,8.1Z" />
          </svg>
      );
    case 'safari':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8"
        >
          <path d="m7 11 2-2-2-2" />
          <path d="m17 13 2 2-2 2" />
          <path d="m13 2-2 10 2 10" />
          <path d="m3.5 7 10 10" />
          <path d="M20.5 17 10.5 7" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
    case 'edge':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-8 w-8 text-[#0078d7]"
        >
          <path d="M12.393 2.022c-5.59 1.137-9.45 6.403-8.313 11.993 1.137 5.59 6.403 9.45 11.993 8.313 5.59-1.137 9.45-6.403 8.313-11.993-1.01-4.962-5.06-8.74-9.993-8.313zm4.07 8.763c.094 1.39-.176 2.762-1.026 3.96-.86.13-1.748.165-2.61.165-2.06 0-3.953-.35-5.32-.82v-2.18c.95.42 2.21.72 3.66.72 1.48 0 2.87-.29 2.87-1.18 0-.66-1.08-.94-2.73-.94H5.03v-1.6h6.3c1.77 0 2.82-.26 2.82-1.03 0-.6-1.1-.96-2.5-.96-1.1 0-2.22.25-3.13.5V5.5c1.1-.3 2.37-.47 3.73-.47 2.4 0 4.12.53 4.12 1.95 0 1.1-.9 1.7-2.1 1.9.9.2 2.3.6 2.3 2.22z" />
        </svg>
      );
    case 'opera':
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-[#ff1b2d]">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 15c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5zm0-2c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z"/>
            </svg>
        );
    case 'brave':
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-[#fb542b]">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.62 14.11L12 14.86l-3.62 1.25L7.5 9.14l3.75-6.5h1.5l3.75 6.5-1.38 4.97zM12 5.5l-2.25 3.9 3.12 1.08 3.12-1.08L12 5.5z"/>
            </svg>
        );
    default:
      return <Globe className="h-8 w-8" />;
  }
};

export default function BrowsersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline">Major Web Browsers</h1>
        <p className="text-muted-foreground mt-2">
          An in-depth look at the market leaders and their underlying
          technology.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {browsers.map((browser) => (
          <Card key={browser.slug} className="flex flex-col">
            <CardHeader className="flex-row items-start gap-4 space-y-0">
              <div className="p-3 bg-muted rounded-lg text-muted-foreground">
                <BrowserIcon name={browser.logo} />
              </div>
              <div className="flex-1">
                <CardTitle className="font-headline text-xl">
                  {browser.name}
                </CardTitle>
                <CardDescription>
                  Market Share:
                  <Badge variant="secondary" className="ml-2">
                    {browser.marketShare}
                  </Badge>
                </CardDescription>
              </div>
            </CardHeader>
            <div className="px-6 pb-6 flex-grow">
                <p className="text-sm text-muted-foreground">
                    Core technologies include {browser.coreTechnology[0].toLowerCase()}, the {browser.coreTechnology[1]}, and its {browser.coreTechnology[2]}.
                </p>
            </div>
            <CardFooter>
              <Link href={`/browsers/${browser.slug}`} className="w-full">
                <Button className="w-full" variant="outline">
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
