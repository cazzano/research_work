import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { glossaryData } from '@/lib/content.tsx';

export default function GlossaryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-headline text-3xl font-bold tracking-tight lg:text-4xl">
          Glossary
        </h2>
        <p className="mt-2 text-muted-foreground">
          A comprehensive list of technical terms related to entertainment and
          media technology.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {glossaryData
          .sort((a, b) => a.term.localeCompare(b.term))
          .map(item => (
            <AccordionItem value={item.term} key={item.term}>
              <AccordionTrigger className="font-headline text-lg">
                {item.term}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{item.definition}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>
    </div>
  );
}
