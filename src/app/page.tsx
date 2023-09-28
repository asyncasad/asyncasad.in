import ContactCard from '@/components/contact-card';
import ExperienceCardContainer from '@/components/experience-card-container';
import ProjectCardContainer from '@/components/project-card-container';
import Separator from '@/components/separator';
import SkillTag from '@/components/skill-tag';
import ThemeToggler from '@/components/theme-togller';
import { home_page_config } from '@/config/home-page';
import { Contact, Skill } from '@/types';
import Link from 'next/link';
import { Key } from 'react';
import { Asyncasadlogo } from '../../public/svgs/icons/iconcomponents';

export default function Home() {
  return (
    <main>
      <section className="mt-4">
        {/* Name and bio section */}
        <header>
          <Asyncasadlogo className="h-[80px] w-[80px]" />
          {/* <Asyncasadlogo className="h-[80px] w-[80px]" /> */}
          <h1 className="mt-8 text-3xl font-bold">{home_page_config.name}</h1>
          <p className="mt-4 text-left dark:opacity-80">
            {home_page_config.bio}
          </p>
        </header>
        {/* Social Links and theme toggler section */}
        <nav className="my-4 flex flex-row items-center justify-between">
          <ul className="flex flex-row gap-4">
            {home_page_config.socials.map((social: any, index: number) => (
              <li
                key={index}
                className="transform transition duration-200 ease-in-out hover:scale-105"
              >
                <Link href={social.link} target="_blank">
                  {<social.icon />}
                </Link>
              </li>
            ))}
          </ul>
          <div>
{/*             <ThemeToggler /> */}
          </div>
        </nav>
        {/* Skill tags */}
        <div className="mt-4 flex flex-row flex-wrap gap-2">
          {home_page_config.skills.map((skill: Skill, index: number) => (
            <SkillTag skill={skill} key={index} />
          ))}
        </div>
        <Separator />
        {/* Projects */}
        <section>
          <h2 className="text-2xl font-bold">Major Projects</h2>
          <div className="mt-4">
            <ProjectCardContainer projects={home_page_config.projects} />
          </div>
        </section>
        <Separator />
        {/* Experience */}
        <section>
          <h2 className="text-2xl font-bold">Experience</h2>
          <div className="mt-4">
            <ExperienceCardContainer
              experiences={home_page_config.experiences}
            />
          </div>
        </section>
        <Separator />
        {/* Contact */}
        <section>
          <h2 className="text-2xl font-bold">Contact</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {home_page_config.contacts.map(
              (contact: Contact, index: Key | null | undefined) => (
                <ContactCard contact={contact} key={index} />
              )
            )}
          </div>
        </section>
        <Separator />
        {/* Footer */}
        <footer className="flex justify-center">
          <p className="text-center">
            © 2023 asyncasad.in | Built with Nextjs & TailwindCss
          </p>
        </footer>
      </section>
    </main>
  );
}
