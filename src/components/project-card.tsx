import { Project } from '@/types';
import Link from 'next/link';
import { type FC } from 'react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { title, link, description } = project;
  return (
    <Link
      target="_blank"
      href={link}
      className="tranform flex min-h-[180px] cursor-pointer flex-col justify-center gap-2 rounded-sm border border-foreground p-4 transition duration-200 ease-in-out hover:-translate-x-[5px] hover:-translate-y-[5px] hover:shadow-card "
    >
      <div>
        <h3 className="text-[18px] font-bold">{title}</h3>
        <p className="text-sm dark:opacity-80">{description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
