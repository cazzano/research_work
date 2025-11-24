'use client';
import { useState } from 'react';
import { comparisonData } from '@/lib/data';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { CheckCircle, XCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const renderCell = (text: string) => {
  if (text === 'Yes')
    return (
      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-500" />
    );
  if (text === 'No') return <XCircle className="h-5 w-5 text-destructive/80" />;
  if (
    [
      'Blink',
      'Gecko',
      'WebKit',
      'V8',
      'SpiderMonkey',
      'JavaScriptCore',
    ].includes(text)
  )
    return <Badge variant="outline">{text}</Badge>;
  return text;
};

export default function ComparePage() {
  const allBrowsers = comparisonData.headers.slice(1);
  const [visibleBrowsers, setVisibleBrowsers] = useState<string[]>(allBrowsers);

  const handleBrowserToggle = (browserName: string) => {
    setVisibleBrowsers((prev) =>
      prev.includes(browserName)
        ? prev.filter((b) => b !== browserName)
        : [...prev, browserName]
    );
  };

  const filteredHeaders = [
    'Feature',
    ...comparisonData.headers.slice(1).filter((h) => visibleBrowsers.includes(h)),
  ];
  const headerIndexes = filteredHeaders.map((h) =>
    comparisonData.headers.indexOf(h)
  );
  
  const filteredRows = comparisonData.rows.map((row) =>
    headerIndexes.map((index) => row[index])
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline">
          Browser Comparison Matrix
        </h1>
        <p className="text-muted-foreground mt-2">
          A side-by-side look at the core technologies and features of major
          browsers.
        </p>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Filter browsers:</h3>
            {allBrowsers.map((browser) => (
              <div key={browser} className="flex items-center space-x-2">
                <Checkbox
                  id={browser}
                  checked={visibleBrowsers.includes(browser)}
                  onCheckedChange={() => handleBrowserToggle(browser)}
                />
                <Label
                  htmlFor={browser}
                  className="text-sm font-normal"
                >
                  {browser}
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="border rounded-lg shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              {filteredHeaders.map((header) => (
                <TableHead
                  key={header}
                  className={
                    header !== 'Feature'
                      ? 'text-center font-headline text-base'
                      : 'font-headline text-base'
                  }
                >
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell className="font-semibold">{row[0]}</TableCell>
                {row.slice(1).map((cell, cellIndex) => (
                  <TableCell key={cellIndex} className="text-center">
                    <div className="flex justify-center items-center h-full">
                      {renderCell(cell)}
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
