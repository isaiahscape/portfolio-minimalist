'use client';

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

export function Bio() {
  const bio = `A passionate software engineer with experience in building scalable web applications. 
    I thrive on solving complex problems and creating innovative solutions.`;

  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of Project 1.',
      link: '#',
    },
    {
      title: 'Project 2',
      description: 'A brief description of Project 2.',
      link: '#',
    },
  ];

  return (
    <div className="grid gap-4">
      <Card className="grid gap-4">
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-muted-foreground">
            <div className="flex items-center space-x-2">
              <span className="text-green-500">+</span>
              <span>Excellent summary:</span>
            </div>
            <div className="ml-4">
              {bio}
            </div>
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}

