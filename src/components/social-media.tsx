'use client';

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Github, Linkedin, Mail, MessageSquare, Twitch, Twitter, Youtube, Instagram} from 'lucide-react';

const contactInfo = {
  youtube: 'https://youtube.com/@isaiahscape',
  twitch: 'https://twitch.tv/isaiahscape',
  instagram: 'https://instagram.com/isaiahscape',
  twitter: 'https://twitter.com/isaiahscape',
  telegram: 'https://t.me/thescapenetwork',
  github: 'https://github.com/isaiahscape',
  linkedin: 'https://linkedin.com/in/isaiahscape',
  email: 'isaiahscape@duck.com',
  messenger: 'https://messenger.com/t/isaiahscape',
};

const socialMediaPosts = [
  {
    title: 'YouTube',
    username: '@isaiahscape',
    link: contactInfo.youtube,
    icon: Youtube,
    color: '#FF0000',
    description: 'Subscribe to my YouTube channel!',
  },
  {
    title: 'Twitch',
    username: '@isaiahscape',
    link: contactInfo.twitch,
    icon: Twitch,
    color: '#9146FF',
    description: 'Catch me live on Twitch!',
  },
  {
    title: 'Twitter',
    username: '@isaiahscape',
    link: contactInfo.twitter,
    icon: Twitter,
    color: '#1DA1F2',
    description: 'Follow me on Twitter for updates and thoughts!',
  },
  {
    title: 'Instagram',
    username: '@isaiahscape',
    link: contactInfo.instagram,
    icon: Instagram,
    color: '#E4405F',
    description: 'Follow my daily life on Instagram!',
  },
  {
    title: 'Telegram',
    username: '@isaiahscape',
    link: contactInfo.telegram,
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-telegram"><path d="m2.43 14.46 1.54 4.58a.5.5 0 0 0 .75.34l3.45-2.42a.57.57 0 0 1 .45-.08l6.58 4.06a.75.75 0 0 0 .92-.09l4.4-5.14a1 1 0 0 0-.09-1.54l-13-6.34a.92.92 0 0 0-1.38.58Z"/><path d="M15.69 9.25 7.5 14.44"/></svg>
    ),
    color: '#2AABEE',
    description: 'Join my Telegram channel!',
  },
];

export function SocialMedia() {
  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {socialMediaPosts.map((post, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="p-0">
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 rounded-md hover:opacity-75 transition-opacity duration-200"
                style={{backgroundColor: post.color, color: 'white'}}
              >
                <post.icon className="h-6 w-6" />
              </a>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg font-semibold">{post.title}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">{post.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
