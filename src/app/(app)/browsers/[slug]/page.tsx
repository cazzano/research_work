import { notFound } from 'next/navigation';
import Image from 'next/image';
import { browsers } from '@/lib/data';
import { ContentSection } from '@/app/components/content/content-section';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, List, Zap } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AIExplainer } from '@/app/components/features/ai-explainer';

export default function BrowserDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const browser = browsers.find((b) => b.slug === params.slug);

  if (!browser) {
    notFound();
  }

  const architectureDiagram = PlaceHolderImages.find(
    (img) => img.id === `${browser.slug}-architecture`
  );

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold font-headline tracking-tight">
          {browser.name}
        </h1>
        <p className="text-xl text-muted-foreground">
          An in-depth look at its architecture, features, and place in the web
          ecosystem.
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          <Badge>Market Share: {browser.marketShare}</Badge>
          {browser.coreTechnology.map((tech) => (
            <Badge variant="secondary" key={tech}>
              {tech}
            </Badge>
          ))}
        </div>
      </header>

      {architectureDiagram && (
        <div className="rounded-lg overflow-hidden border shadow-sm">
          <Image
            src={architectureDiagram.imageUrl}
            alt={`${browser.name} architecture diagram`}
            width={800}
            height={500}
            className="w-full"
            data-ai-hint={architectureDiagram.imageHint}
          />
        </div>
      )}

      <div className="space-y-8">
        <ContentSection title="Technical Architecture">
          <div className="space-y-6">
            {browser.architecture.map((item) => (
              <div key={item.title} className="p-4 border rounded-lg bg-card/50">
                <h4 className="font-semibold font-headline mb-2 flex items-center gap-2">
                  <List className="h-4 w-4 text-accent" /> {item.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-3">
                  {item.content}
                </p>
                {item.points && item.points.length > 0 && (
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground pl-4 mb-3">
                    {item.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}
                 <AIExplainer contentToExplain={item.content} title={item.title} />
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection
          title="Special Features"
          aiContent={`Explain the special features of ${browser.name}: ${browser.specialFeatures.join(', ')}.`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {browser.specialFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 p-3 bg-card/50 rounded-lg"
              >
                <div className="p-2 bg-accent/20 rounded-md text-accent">
                  <Zap className="h-5 w-5" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </ContentSection>

        {browser.privacyConcerns && (
          <ContentSection title="Privacy Considerations">
            <div className="space-y-3">
              {browser.privacyConcerns.map((concern) => (
                <div
                  key={concern}
                  className="flex items-start gap-3 p-3 bg-destructive/10 border border-destructive/20 text-destructive-foreground/80 rounded-lg"
                >
                  <div className="p-1 text-destructive">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <span>{concern}</span>
                </div>
              ))}
            </div>
          </ContentSection>
        )}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return browsers.map((browser) => ({
    slug: browser.slug,
  }));
}
