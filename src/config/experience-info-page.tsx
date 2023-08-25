import { ExperiencePage } from '@/types';
import { MechaLogo } from '../../public/svgs/icons/iconcomponents';

export const experiences: ExperiencePage[] = [
  {
    title: 'SDE Fulltime',
    link: 'https://www.mechasystems.com/',
    logo: MechaLogo,
    companyDescription: function () {
      return (
        <>
          <p>
            Mecha is a developer platform to help developers and enterprises
            build connected smart devices.
          </p>
          <p>
            From students to Business owners, this is for all, who wish to learn
            and build smart devices, as a personal project or as a product
            solution for market!
          </p>
        </>
      );
    },
    techStack: ['Nextjs', 'TailwindCSS', 'Typescript', 'Strapi', 'Turnstile'],
    companyName: 'Mecha Systems',
    workDescription: function () {
      return (
        <>
          <p>
            As a Software Development Engineer at Mecha Systems, I was deeply
            involved in crafting elegant user interfaces and seamlessly
            integrating logic.
          </p>
          <p>
            My work encompassed technologies like Next.js, Tailwind CSS,
            TypeScript, and more.
          </p>
          <p>
            I played a pivotal role in developing captivating UIs that combined
            aesthetics with functionality, contributing to the realization of
            our company&apos;s vision.
          </p>
        </>
      );
    },
  },
  {
    title: 'SDE Intern',
    logo: MechaLogo,
    link: 'https://www.mechasystems.com/',
    companyDescription: function () {
      return (
        <>
          <p>
            Mecha is a developer platform to help developers and enterprises
            build connected smart devices.
          </p>
          <p>
            From students to Business owners, this is for all, who wish to learn
            and build smart devices, as a personal project or as a product
            solution for market!
          </p>
        </>
      );
    },
    techStack: ['Nextjs', 'TailwindCSS', 'Typescript'],
    companyName: 'Mecha Systems',
    workDescription: function () {
      return (
        <>
          <p>
            As a Software Development Intern at Mecha Systems, I was deeply
            involved in crafting elegant user interfaces and seamlessly
            integrating logic.
          </p>
          <p>
            My work encompassed technologies like Next.js, Tailwind CSS,
            TypeScript, and more.
          </p>
          <p>
            I played a pivotal role in developing captivating UIs that combined
            aesthetics with functionality, contributing to the realization of
            our company&apos;s vision.
          </p>
        </>
      );
    },
  },
];
