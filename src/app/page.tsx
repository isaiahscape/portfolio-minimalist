'use client';

import {Bio} from '@/components/bio';
import {Contact} from '@/components/contact';
import {Projects} from '@/components/projects';
import {Skills} from '@/components/skills';
import {SocialMedia} from '@/components/social-media';
import {TopNavigation} from '@/components/top-navigation';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 fade-in">
      <TopNavigation />
      <Tabs defaultValue="about" className="w-full">
        <TabsList className="space-x-2">
          <TabsTrigger value="about">About &amp; Projects</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
        </TabsList>
        <TabsContent value="about">
          <section
            id="about"
            className="motion-safe:transition-opacity motion-safe:duration-500"
          >
            <Bio />
            <Projects />
          </section>
        </TabsContent>
        <TabsContent value="skills">
          <section
            id="skills"
            className="motion-safe:transition-opacity motion-safe:duration-500"
          >
            <Skills />
          </section>
        </TabsContent>
        <TabsContent value="contact">
          <section
            id="contact"
            className="motion-safe:transition-opacity motion-safe:duration-500"
          >
            <Contact />
          </section>
        </TabsContent>
        <TabsContent value="social">
          <section
            id="social"
            className="motion-safe:transition-opacity motion-safe:duration-500"
          >
            <SocialMedia />
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
