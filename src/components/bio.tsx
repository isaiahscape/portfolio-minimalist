'use client';

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

export function Bio() {
  const bio = `A passionate and versatile professional with a diverse skill set encompassing graphic design, social media management, and web development. 
    I am adept at crafting visually appealing designs, managing and growing social media presence, and building responsive, user-friendly websites. 
    My goal is to leverage my skills to create impactful and innovative solutions.`;

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my skills and projects. Built with Next.js and Tailwind CSS.',
      link: '#',
    },
    {
      title: 'Social Media Campaigns',
      description: 'Managed and executed various social media campaigns for different brands, resulting in increased engagement and followers.',
      link: '#',
    },
    {
      title: 'Web Development Projects',
      description: 'Developed and maintained multiple responsive websites using modern web technologies.',
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
            {/* Code Review Style */}
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
