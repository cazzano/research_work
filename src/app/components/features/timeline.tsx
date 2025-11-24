import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative pl-6 before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-border">
      {children}
    </div>
  );
}

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  tags: string[];
}

export function TimelineItem({
  year,
  title,
  description,
  tags,
}: TimelineItemProps) {
  return (
    <div className="relative mb-8 pl-8">
      <div className="absolute -left-2.5 top-2 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <div className="h-2 w-2 rounded-full bg-primary-foreground"></div>
      </div>
      <Card>
        <CardHeader>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <CardTitle className="font-headline">{title}</CardTitle>
            <time className="text-sm font-medium text-muted-foreground">
              {year}
            </time>
          </div>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-muted-foreground">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge variant="secondary" key={tag}>
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
