import { HomePageConfig } from '@/types';
import {
  Discord,
  Github,
  Instagram,
  LinkedIn,
  Mail,
  X,
} from '../../public/svgs/icons/iconcomponents';

export const home_page_config: HomePageConfig = {
  avatar: '/imgs/asyncasadgrayscale.png',
  bio: "Hey there, I'm Asad, and you might recognize me as asyncasad online. I'm a fulltack developer and an illustrator. I like to build blazing fast ⚡ and good looking web apps.",
  name: 'AsadKhan Pathan',
  skills: [
    'Nextjs',
    'Reactjs',
    'Typescript',
    'TailwindCss',
    'Javascript',
    'Node',
    'Figma',
    'Prisma',
    'Trpc',
    'T3',
  ],
  // Make the project description of lengthe atleas greater than 123
  projects: [
    {
      title: 'Ezicons',
      description:
        'Simplify icon integration! Ezicons: Your go to place for seamless icon usage anywhere, from GitHub ReadMe, Websites to Resumes. 🎉🖼️ #Ezicons',
      link: 'https://github.com/asyncasad/ezicons',
    },
    {
      title: 'Twitmoji',
      description:
        'Twitmoji: Express without words! T3-powered app resembling Twitter, sharing emotions and thoughts through emojis alone. 🚀📱 #EmojiExpression',
      link: 'https://github.com/asyncasad/twitmoji',
    },
    {
      title: 'Scalable Nextjs template',
      description:
        'Nextjs template: Build robust Next.js apps effortlessly! Your go-to template for the next project. 🚀🌐 #Scalable',
      link: 'https://github.com/asyncasad/next-archi',
    },
  ],
  experiences: [
    {
      comapny_name: 'Mecha Systems',
      date: 'Jul 2023',
      role: 'SDE-Fulltime',
      icon: '/imgs/experience/mecha_banner.png',
      link: 'https://www.mechasystems.com/',
    },
    {
      comapny_name: 'Mecha Systems',
      date: 'Feb 2023',
      role: 'SDE-Intern',
      icon: '/imgs/experience/mecha_banner.png',
      link: 'https://www.mechasystems.com/',
    },
  ],
  socials: [
    {
      icon: Instagram,
      link: 'https://www.instagram.com/asyncasad/',
    },
    {
      icon: X,
      link: 'https://twitter.com/asyncasad',
    },
    {
      icon: Github,
      link: 'https://github.com/asyncasad',
    },
    {
      icon: LinkedIn,
      link: 'https://www.linkedin.com/in/asyncasad/',
    },
  ],
  contacts: [
    {
      icon: Discord,
      link: 'https://discord.gg/X6T7YmUu',
      title: 'asyncasad#1895',
    },
    {
      icon: X,
      link: 'https://twitter.com/asyncasad',
      title: '@asyncasad',
    },
    {
      icon: Mail,
      link: 'mailto:asyncasad@gmail.com',
      title: 'asyncasad@gmail.com',
    },
    {
      icon: Github,
      link: 'https://github.com/asyncasad',
      title: 'asyncasad',
    },
  ],
};
