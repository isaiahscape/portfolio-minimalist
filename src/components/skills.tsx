'use client';

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

const skills = [
  {
    skill: 'Graphic Designer',
    description: 'Proficient in creating visual concepts and designs for various media.',
  },
  {
    skill: 'Social Media Manager',
    description: 'Experienced in managing and growing social media presence for brands.',
  },
  {
    skill: 'Graphic designer, for myself',
    description: 'Creating graphics and designs for personal projects.',
  },
  {
    skill: 'ROM maintainer, sometimes',
    description: 'Maintaining and updating custom ROMs.',
  },
  {
    skill: 'Singing, doing tech stuffs',
    description: 'Combining technical skills with singing.',
  },
  {
    skill: 'Streaming on Twitch / Tiktok, some random clips on YouTube',
    description: 'Streaming content on various platforms.',
  },
  {
    skill: 'Web developer, still learning other languages and stuffs',
    description: 'Continuously learning and improving web development skills.',
  },
  {
    skill: 'Working student, maybe?',
    description: 'Balancing work and studies.',
  },
  {
    skill: 'Gadget fixer, idk I fix those.',
    description: 'Repairing and troubleshooting gadgets.',
  },
];

export function Skills() {
  return (
    <div className="grid gap-4">
      <h2 className="text-2xl font-bold">Skills</h2>
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
        {skills.map((skill, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{skill.skill}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-muted-foreground">
                {/* Code Review Style */}
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">+</span>
                  <span>Excellent skills:</span>
                </div>
                <div className="ml-4">
                  <p>{skill.description}</p>
                </div>
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
