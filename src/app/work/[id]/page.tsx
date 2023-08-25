import Separator from '@/components/separator';
import SkillTag from '@/components/skill-tag';
import { experiences } from '@/config/experience-info-page';
import { Skill } from '@/types';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Key, type SVGProps } from 'react';

export function generateMetadata({
  params,
}: {
  params: { id: number };
}): Promise<Metadata> {
  const experience = experiences[params.id];

  return new Promise((resolve, reject) => {
    if (experience) {
      resolve({
        title: experience.companyName,
      });
    } else {
      reject(new Error(`Experience with id ${params.id} not found.`));
    }
  });
}

export default function ExperiencePageLayout({
  params,
}: {
  params: { id: number };
}) {
  const experience = experiences[params.id];
  if (!experience) {
    return;
  }
  const LogoComponent: React.FC<SVGProps<SVGSVGElement>> =
    experience?.logo as React.FC<SVGProps<SVGSVGElement>>;
  return (
    <div>
      <header>
        <LogoComponent className="h-[80px] w-[80px]" />
        <h1 className="mt-8 text-3xl font-bold">
          {' '}
          <Link target="_blank" href={experience.link}>
            {experience?.companyName}
          </Link>
        </h1>
        <div className="experience-info mt-4 text-left dark:opacity-80">
          {experience?.companyDescription()}
        </div>
      </header>
      <section>
        {/* Skill tags */}
        <Separator />
        {/* Work description title */}
        <h2 className="text-2xl font-bold">Work Description</h2>
        {/* Work description  */}
        <div className="mt-4">
          <div className="experience-info dark:opacity-80">
            {experience?.workDescription()}
          </div>
        </div>
        <Separator />
        <h2 className="text-2xl font-bold">Tech Stack</h2>
        <div className="mt-4 flex flex-row flex-wrap gap-2">
          {experience?.techStack.map((skill: Skill, index: Key) => (
            <SkillTag skill={skill} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
