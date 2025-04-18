'use client';

import * as React from 'react';
import {ThemeProvider as NextThemesProvider} from 'next-themes';
import {type ThemeProviderProps} from 'next-themes/dist/types';
import {Button} from '@/components/ui/button';
import {Moon, Sun} from 'lucide-react';
import {useTheme} from 'next-themes';
import {motion} from 'framer-motion';

export function ThemeProvider({children, ...props}: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export function ThemeToggle() {
  const {theme, setTheme} = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <motion.div
        initial={{opacity: 1, rotate: 0}}
        animate={{opacity: 1, rotate: theme === 'dark' ? 180 : 0}}
        transition={{duration: 0.2}}
        style={{position: 'absolute'}}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      </motion.div>
      <motion.div
        initial={{opacity: 0, rotate: theme === 'dark' ? 180 : 0}}
        animate={{opacity: 1, rotate: theme === 'dark' ? 0 : 180}}
        transition={{duration: 0.4}}
        style={{position: 'absolute'}}
      >
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
