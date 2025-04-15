'use client';

import {Github, Linkedin, Mail} from 'lucide-react';
import {ThemeToggle} from '@/components/theme-provider';
import {motion} from 'framer-motion';

const socialMedia = {
  email: 'isaiahscape@duck.com',
  github: 'https://github.com/yourgithub',
  linkedin: 'https://linkedin.com/in/yourlinkedin',
};

export function TopNavigation() {
  return (
    <nav className="flex items-center mb-8 justify-center">
      <div className="text-xl font-bold mr-auto">Leonardo</div>
      <div className="flex items-center space-x-4 justify-end ">
        <motion.a
          href={`mailto:${socialMedia.email}`}
          className="hover:text-primary"
          whileHover={{scale: 1.1, transition: {duration: 0.2}}}
        >
          <Mail className="h-5 w-5" />
        </motion.a>
        <motion.a
          href={socialMedia.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary"
          whileHover={{scale: 1.1, transition: {duration: 0.2}}}
        >
          <Github className="h-5 w-5" />
        </motion.a>
        <motion.a
          href={socialMedia.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary"
          whileHover={{scale: 1.1, transition: {duration: 0.2}}}
        >
          <Linkedin className="h-5 w-5" />
        </motion.a>
        <ThemeToggle />
      </div>
    </nav>
  );
}

