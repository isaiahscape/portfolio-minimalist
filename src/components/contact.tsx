'use client';

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Github, Linkedin, Mail, MessageSquare, Twitch, Youtube, Instagram} from 'lucide-react';

const contactInfo = {
  messenger: 'https://messenger.com/t/isaiahscape',
  telegram: 'https://t.me/isaiahscape',
  linkedin: 'https://linkedin.com/in/isaiahscape',
  email: 'isaiahscape@duck.com',
  github: 'https://github.com/isaiahscape',
};

const contactMethods = [
  {
    title: 'Messenger',
    username: '@isaiahscape',
    link: contactInfo.messenger,
    icon: MessageSquare,
    color: '#0078FF',
    description: 'Chat with me on Messenger!',
  },
  {
    title: 'Telegram',
    username: '@isaiahscape',
    link: `https://t.me/isaiahscape`,
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-telegram"><path d="m2.43 14.46 1.54 4.58a.5.5 0 0 0 .75.34l3.45-2.42a.57.57 0 0 1 .45-.08l6.58 4.06a.75.75 0 0 0 .92-.09l4.4-5.14a1 1 0 0 0-.09-1.54l-13-6.34a.92.92 0 0 0-1.38.58Z"/><path d="M15.69 9.25 7.5 14.44"/></svg>
    ),
    color: '#2AABEE',
    description: 'Chat with me on Telegram for inquiries.',
  },
  {
    title: 'Email',
    username: 'isaiahscape@duck.com',
    link: `mailto:${contactInfo.email}`,
    icon: Mail,
    color: '#808080',
    description: 'Send me an email for inquiries and collaborations!',
  },
  {
    title: 'LinkedIn',
    username: 'isaiahscape',
    link: `https://linkedin.com/in/isaiahscape`,
    icon: Linkedin,
    color: '#0077B5',
    description: 'Connect with me on LinkedIn for professional networking!',
  },
  {
    title: 'GitHub',
    username: 'isaiahscape',
    link: `https://github.com/isaiahscape`,
    icon: Github,
    color: '#333',
    description: 'Explore my projects and contributions on GitHub!',
  },
  {
    title: 'YouTube',
    username: '@isaiahscape',
    link: `https://youtube.com/@isaiahscape`,
    icon: Youtube,
    color: '#FF0000',
    description: 'Subscribe to my YouTube channel!',
  },
  {
    title: 'Twitch',
    username: '@isaiahscape',
    link: `https://twitch.tv/isaiahscape`,
    icon: Twitch,
    color: '#9146FF',
    description: 'Catch me live on Twitch!',
  },
  {
    title: 'Instagram',
    username: '@isaiahscape',
    link: `https://instagram.com/isaiahscape`,
    icon: Instagram,
    color: '#E4405F',
    description: 'Follow my daily life on Instagram!',
  },
];

export function Contact() {
  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {contactMethods.map((contact, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="p-0">
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 rounded-md hover:opacity-75 transition-opacity duration-200"
                style={{backgroundColor: contact.color, color: 'white'}}
              >
                <contact.icon className="h-6 w-6" />
              </a>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg font-semibold">
                {contact.title}
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                {contact.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
