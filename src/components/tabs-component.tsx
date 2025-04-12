'use client';

import {Bio} from '@/components/bio';
import {Contact} from '@/components/contact';
import {Projects} from '@/components/projects';
import {Skills} from '@/components/skills';
import {SocialMedia} from '@/components/social-media';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

export function TabsComponent() {
  return (
    <Tabs defaultValue="bio" className="w-full">
      <TabsList>
        <TabsTrigger value="bio">Bio</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="contact">Contact</TabsTrigger>
        <TabsTrigger value="social">Social Media</TabsTrigger>
      </TabsList>
      <TabsContent value="bio" className="space-y-4">
        <section id="bio">
          <Bio />
        </section>
      </TabsContent>
      <TabsContent value="projects" className="space-y-4">
        <section id="projects">
          <Projects />
        </section>
      </TabsContent>
      <TabsContent value="skills" className="space-y-4">
        <section id="skills">
          <Skills />
        </section>
      </TabsContent>
      <TabsContent value="contact" className="space-y-4">
        <section id="contact">
          <Contact />
        </section>
      </TabsContent>
      <TabsContent value="social" className="space-y-4">
        <section id="social">
          <SocialMedia />
        </section>
      </TabsContent>
    </Tabs>
  );
}
