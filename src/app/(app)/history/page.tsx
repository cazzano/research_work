import { historyEvents } from '@/lib/data';
import { Timeline, TimelineItem } from '@/app/components/features/timeline';

export default function HistoryPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold font-headline">Browser Wars History</h1>
        <p className="text-muted-foreground mt-2">
          An interactive timeline of the key events that shaped the web.
        </p>
      </div>

      <Timeline>
        {historyEvents.map((event) => (
          <TimelineItem
            key={`${event.year}-${event.title}`}
            year={event.year}
            title={event.title}
            description={event.description}
            tags={event.tags}
          />
        ))}
      </Timeline>
    </div>
  );
}
