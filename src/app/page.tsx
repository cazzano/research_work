import AppDashboard from '@/components/app-dashboard';
import { categories, emailComparison } from '@/lib/data';

export default function Home() {
  return <AppDashboard categories={categories} emailData={emailComparison} />;
}
