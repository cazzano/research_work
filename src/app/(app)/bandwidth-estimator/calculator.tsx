'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DownloadCloud } from 'lucide-react';

const bandwidthData = {
  video: {
    label: 'Video Streaming',
    qualities: {
      SD: 3,
      HD: 5,
      'Full HD': 8,
      '4K UHD': 25,
    },
  },
  music: {
    label: 'Music Streaming',
    qualities: {
      Standard: 0.3,
      High: 0.5,
      Lossless: 1.5,
    },
  },
  gaming: {
    label: 'Online Gaming',
    qualities: {
      Standard: 3,
      Competitive: 6,
    },
    note: 'Low latency (ping < 50ms) is more important than speed.',
  },
  cloudGaming: {
    label: 'Cloud Gaming',
    qualities: {
      '720p': 15,
      '1080p': 25,
      '4K': 35,
    },
    note: 'Requires very low latency (< 80ms) for a good experience.',
  },
};

type Activity = keyof typeof bandwidthData;

export function BandwidthCalculator() {
  const [activity, setActivity] = useState<Activity>('video');
  const [quality, setQuality] = useState<string>(
    Object.keys(bandwidthData.video.qualities)[0]
  );
  const [result, setResult] = useState<number | null>(null);
  const [note, setNote] = useState<string | undefined>(undefined);

  const handleActivityChange = (value: string) => {
    const newActivity = value as Activity;
    setActivity(newActivity);
    const newQualities = Object.keys(bandwidthData[newActivity].qualities);
    setQuality(newQualities[0]);
    setResult(null);
    setNote(undefined);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const speed = (bandwidthData[activity].qualities as Record<string, number>)[
      quality
    ];
    setResult(speed);
    setNote(bandwidthData[activity].note);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">Activity</label>
            <Select onValueChange={handleActivityChange} defaultValue={activity}>
              <SelectTrigger>
                <SelectValue placeholder="Select an activity" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(bandwidthData).map(([key, value]) => (
                  <SelectItem key={key} value={key}>
                    {value.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Quality</label>
            <Select
              onValueChange={setQuality}
              value={quality}
              key={activity}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select quality" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(bandwidthData[activity].qualities).map(q => (
                  <SelectItem key={q} value={q}>
                    {q}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button type="submit" className="w-full">
          Calculate
        </Button>
      </form>

      {result !== null && (
        <Card className="bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <DownloadCloud className="h-6 w-6 text-primary" />
              Recommended Speed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-primary">{result} Mbps</p>
            <p className="text-sm text-muted-foreground">
              Minimum recommended download speed.
            </p>
            {note && (
              <p className="mt-2 text-sm font-semibold text-accent-foreground/80">
                Note: {note}
              </p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
