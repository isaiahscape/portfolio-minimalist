'use client';

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

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

export function Projects() {
  return (
    <div className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>
                {/* Code Review Style */}
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">+</span>
                  <span>Details:</span>
                </div>
                <div className="ml-4">
                  <p>{project.description}</p>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Learn More
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

