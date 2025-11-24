import { ContentDisplay } from '@/components/content/content-display';
import { contentCreationData } from '@/lib/content.tsx';

export default function ContentCreationPage() {
  return <ContentDisplay topicData={contentCreationData} />;
}
