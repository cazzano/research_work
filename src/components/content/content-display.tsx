import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { MainTopic } from '@/types';
import { Progress } from '@/components/ui/progress';

export function ContentDisplay({ topicData }: { topicData: MainTopic }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-headline text-3xl font-bold tracking-tight lg:text-4xl">
          {topicData.title}
        </h2>
        <p className="mt-2 text-muted-foreground">{topicData.description}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Your Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Progress value={33} aria-label="33% complete" />
            <span className="font-medium text-muted-foreground">33%</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            You're just getting started! Complete more sections to improve your
            progress.
          </p>
        </CardContent>
      </Card>

      <Accordion type="multiple" className="w-full space-y-4">
        {topicData.subTopics.map((subTopic, index) => (
          <AccordionItem
            value={`item-${index}`}
            key={index}
            className="rounded-lg border bg-card"
          >
            <AccordionTrigger className="p-6 text-left font-headline text-xl hover:no-underline">
              {subTopic.title}
            </AccordionTrigger>
            <AccordionContent className="border-t px-6">
              <div className="space-y-4 py-6">
                {subTopic.blocks.map((block, blockIndex) => (
                  <div key={blockIndex}>
                    <h4 className="mb-2 font-headline text-lg font-semibold">
                      {block.title}
                    </h4>
                    <div className="text-muted-foreground [&_a]:text-primary [&_a]:underline [&_b]:font-semibold [&_b]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                      {block.content}
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
