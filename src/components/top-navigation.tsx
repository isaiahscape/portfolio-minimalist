'use client';

import {Github, Linkedin, Mail} from 'lucide-react';
import {ThemeToggle} from '@/components/theme-provider';

const socialMedia = {
  email: 'isaiahscape@duck.com',
  github: 'https://github.com/yourgithub',
  linkedin: 'https://linkedin.com/in/yourlinkedin',
};

export function TopNavigation() {
  return (
    <nav className="flex items-center mb-8">
      <div className="text-xl font-bold mr-auto">Leonardo</div>
      <div className="flex items-center space-x-4 justify-end ">
        <a href={`mailto:${socialMedia.email}`} className="hover:text-primary">
          <Mail className="h-5 w-5" />
        </a>
        <a
          href={socialMedia.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href={socialMedia.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}

