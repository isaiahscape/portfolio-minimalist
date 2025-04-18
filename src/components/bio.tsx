'use client';

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

export function Bio() {
  const bio = [
    "This is Isaiah, a web developer that can do dumbshit in Android OS development.",
    "I made a lot"
  ];

  const moreInfos = [
    'Graphic designer, for myself',
    'ROM maintainer, sometimes',
    'Singing, doing tech stuffs',
    'Streaming on Twitch / Tiktok, some random clips on YouTube',
    'Web developer, still learning other languages and stuffs',
    'Working student, maybe?',
    'Gadget fixer, idk I fix those.',
  ];

  const facts = [
    "I love cats and dogs, they're adorable.",
    "I'm nonchalant, yet energetic if we matched our persona or maybe humor. I get tired of talking if we don't match.",
    "I can teach any tech-related stuffs, especially on computer, phones, some programming languages that I know of, ",
    "Media-related stuff (photography and cinematography), audiophile, technical and some gadgets that I know.",
    "Human psychology is my thing, you can't manipulate me at any circumstances. I don't bite though.",
    "I don't tolerate people who does something terrible. If you're doing something that I can't bear of, GTFO.",
  ];

  const roles = [
    'Founder at The Scape Network',
    'News Creator at Agam\'s Tech Tricks',
    'Admin Manager at Cartel International',
    'Assistant Manager at Xiaomeme',
    'Assistant Manager at Pixel Hub',
    'Assistant Manager at Pruh Bruh',
    'Instructor at Braintrust Computer Systems',
  ];

  const devices = [
    'Galaxy J7 Prime (3/32GB 2020-2021)',
    'iPhone 6 (2/64GB, 2020-2021)',
    'Redmi Note 8 (4/128GB, 2021-2022)',
    'Redmi Note 9 (6/128GB, 2021-2024)',
    'iPhone 6s (4/64GB, 2022)',
    'Redmi Note 10 Pro (8/256GB, 2022-2024)',
    'Redmi Note 11 Pro 5G (8/128GB, 2024)',
    'Xiaomi 11 Lite 5G NE (8/256, 2024)',
    'iPhone 7 Plus (4/128GB, 2024)',
    'iPhone XR (3/128GB, 2024)',
    'Xiaomi 11X / POCO F3 (8/256, 2025)',
    'Samsung Galaxy S9+ (6/128, 2025)',
  ];

  const inEarMonitors = [
    'Truthear × Crinacle ZERO 2 (dynamic)',
    '7Hz × Crinacle ZERO 2 (dynamic)',
    'KZ X HBB PR2 (planar with mesh)',
    '7Hz G1 (dynamic v-shaped)',
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card className="col-span-1 md:col-span-2 lg:col-span-3">
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-muted-foreground">{bio}</CardDescription>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>What are my hobbies?</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            {moreInfos.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Facts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            {facts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Roles</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            {roles.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Devices</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            {devices.map((device, index) => (
              <li key={index}>{device}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>In-ear Monitors</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            {inEarMonitors.map((iem, index) => (
              <li key={index}>{iem}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
