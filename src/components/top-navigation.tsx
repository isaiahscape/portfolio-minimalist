'use client';

import {Github, Linkedin, Mail} from 'lucide-react';
import {ThemeToggle} from '@/components/theme-provider';

const socialMedia = {
  email: 'youremail@example.com',
  github: 'https://github.com/yourgithub',
  linkedin: 'https://linkedin.com/in/yourlinkedin',
};

export function TopNavigation() {
  return (
    <nav className="flex items-center justify-between mb-8">
      <div className="text-xl font-bold">Leonardo</div>
      <div className="flex items-center space-x-4">
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

