import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { LearningPathForm } from './form';

export default function LearningPathOptimizerPage() {
  return (
    <div className="space-y-6">
       <div>
        <h2 className="font-headline text-3xl font-bold tracking-tight lg:text-4xl">
          AI Learning Path Optimizer
        </h2>
        <p className="mt-2 text-muted-foreground">
          Use AI to dynamically adjust your learning path based on your performance and engagement.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Generate Your Path</CardTitle>
          <CardDescription>
            Fill in the details about your learning progress on a specific topic. Our AI will suggest a revised sequence and difficulty adjustment to help you learn more effectively.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LearningPathForm />
        </CardContent>
      </Card>
    </div>
  );
}
