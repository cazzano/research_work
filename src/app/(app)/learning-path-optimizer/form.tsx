'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  personalizeLearningPath,
  type PersonalizedLearningPathOutput,
} from '@/ai/flows/personalized-learning-paths';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Loader2, Wand2, Lightbulb, TrendingUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';

const formSchema = z.object({
  topic: z.string().min(3, 'Topic must be at least 3 characters.'),
  userPerformance: z
    .string()
    .min(10, 'Please provide more detail on your performance.'),
  userEngagement: z
    .string()
    .min(10, 'Please provide more detail on your engagement.'),
});

export function LearningPathForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PersonalizedLearningPathOutput | null>(
    null
  );
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: '',
      userPerformance: '',
      userEngagement: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    try {
      const output = await personalizeLearningPath({
        ...values,
        currentSequence: ['Intro', 'Core Concepts', 'Deep Dive', 'Quiz'],
      });
      setResult(output);
    } catch (error) {
      console.error('Error personalizing learning path:', error);
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description:
          'Failed to generate the learning path. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Learning Topic</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Video Codecs" {...field} />
                </FormControl>
                <FormDescription>
                  What topic are you currently studying?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="userPerformance"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Performance</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., 'I understand H.264 well, but I'm struggling with the differences between VP9 and AV1.'"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Describe your strengths and weaknesses on this topic.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="userEngagement"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Engagement</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., 'I find the diagrams helpful, but the long text blocks are getting boring.'"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  How are you feeling about the learning materials?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-4 w-4" />
                Optimize My Path
              </>
            )}
          </Button>
        </form>
      </Form>

      {isLoading && (
         <Card>
           <CardContent className="p-6">
             <div className="flex items-center justify-center gap-4 text-muted-foreground">
               <Loader2 className="h-6 w-6 animate-spin" />
               <p>AI is thinking... Please wait a moment.</p>
             </div>
           </CardContent>
         </Card>
      )}

      {result && (
        <Card className="bg-primary/5">
          <CardHeader>
            <CardTitle className="font-headline">
              Your Personalized Learning Path
            </CardTitle>
            <CardDescription>
              Based on your input, here is a suggested path to optimize your
              learning.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="mb-2 flex items-center gap-2 font-semibold">
                <TrendingUp className="h-5 w-5 text-primary" />
                Difficulty Adjustment
              </h4>
              <p className="text-muted-foreground">
                {result.difficultyAdjustment}
              </p>
            </div>
            <Separator />
            <div>
              <h4 className="mb-2 flex items-center gap-2 font-semibold">
                <Lightbulb className="h-5 w-5 text-primary" />
                Revised Content Sequence
              </h4>
              <ol className="list-decimal space-y-2 rounded-md border bg-background p-4 pl-9">
                {result.revisedSequence.map((step, index) => (
                  <li key={index} className="font-medium">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
