'use client';

import {Bio} from '@/components/bio';
import {Contact} from '@/components/contact';
import {Projects} from '@/components/projects';
import {Skills} from '@/components/skills';
import {SocialMedia} from '@/components/social-media';
import {TopNavigation} from '@/components/top-navigation';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {motion} from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      className="container mx-auto px-4 py-16 fade-in"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.3}}
    >
      <TopNavigation />
      <Tabs defaultValue="about" className="w-full">
        <TabsList className="space-x-2">
          <TabsTrigger value="about">About &amp; Projects</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="social">Socials</TabsTrigger>
        </TabsList>
        <TabsContent value="about">
          <motion.section
            id="about"
            className="motion-safe:transition-opacity motion-safe:duration-500"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
          >
            <Bio />
            <Projects />
          </motion.section>
        </TabsContent>
        <TabsContent value="skills">
          <motion.section
            id="skills"
            className="motion-safe:transition-opacity motion-safe:duration-500"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
          >
            <Skills />
          </motion.section>
        </TabsContent>
        <TabsContent value="contact">
          <motion.section
            id="contact"
            className="motion-safe:transition-opacity motion-safe:duration-500"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
          >
            <Contact />
          </motion.section>
        </TabsContent>
        <TabsContent value="social">
          <motion.section
            id="social"
            className="motion-safe:transition-opacity motion-safe:duration-500"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
          >
            <SocialMedia />
          </motion.section>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
