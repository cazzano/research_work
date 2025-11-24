import { ContentDisplay } from '@/components/content/content-display';
import { streamingServicesData } from '@/lib/content.tsx';

export default function StreamingServicesPage() {
  return <ContentDisplay topicData={streamingServicesData} />;
}
