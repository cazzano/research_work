import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { BandwidthCalculator } from './calculator';

export default function BandwidthEstimatorPage() {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="mb-6">
        <h2 className="font-headline text-3xl font-bold tracking-tight lg:text-4xl">
          Bandwidth Estimator
        </h2>
        <p className="mt-2 text-muted-foreground">
          Calculate the estimated internet bandwidth required for various
          streaming and gaming activities.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Calculator</CardTitle>
          <CardDescription>
            Select an activity and quality to see the recommended minimum
            internet speed.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <BandwidthCalculator />
        </CardContent>
      </Card>
    </div>
  );
}
