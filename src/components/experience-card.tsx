import { Experience } from '@/types';
import Link from 'next/link';
import { type FC } from 'react';

interface ExperienceCardProps {
  experience: Experience;
  pageLink: string;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ experience, pageLink }) => {
  const { comapny_name, date, icon, role } = experience;
  return (
    <Link
      href={pageLink}
      target="_blank"
      className="flex transform cursor-pointer flex-row items-center justify-between rounded-sm border  border-foreground p-2 duration-200 ease-in-out hover:scale-105"
    >
      <div className="flex flex-row items-center">
        <img
          className="dark:border-yellow h-6 w-6 rounded-sm border border-foreground object-cover"
          src={icon}
        />
        <div className="ml-4 flex flex-row items-center gap-4">
          <h3 className="font-bold">{comapny_name}</h3>
          <p className="hidden text-sm md:block">{role}</p>
        </div>
      </div>
      <div>
        <p className="hidden md:block">{date}</p>
        <p className="text-sm md:hidden">{role}</p>
      </div>
    </Link>
  );
};

export default ExperienceCard;
