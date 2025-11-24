import { ContentDisplay } from '@/components/content/content-display';
import { subscriptionModelsData } from '@/lib/content.tsx';

export default function SubscriptionModelsPage() {
  return <ContentDisplay topicData={subscriptionModelsData} />;
}
