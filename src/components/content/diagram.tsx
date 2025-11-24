import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function Diagram({
  imageId,
  title,
  description,
  caption,
}: {
  imageId: string;
  title: string;
  description: string;
  caption: string;
}) {
  const image = PlaceHolderImages.find(img => img.id === imageId);

  if (!image) {
    console.warn(`Placeholder image with id "${imageId}" not found.`);
    return null;
  }

  return (
    <div className="my-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative aspect-video w-full overflow-hidden rounded-md border bg-muted">
            <Image
              src={image.imageUrl}
              alt={image.description}
              fill
              className="object-cover"
              data-ai-hint={image.imageHint}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </CardContent>
        {caption && (
          <CardFooter>
            <p className="w-full text-center text-sm text-muted-foreground">
              {caption}
            </p>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
