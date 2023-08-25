'use client';
import useShowMore from '@/lib/hooks/useShowMore';
import { Project } from '@/types';
import { type FC } from 'react';
import ProjectCard from './project-card';

interface ProjectCardContainerProps {
  projects: Project[];
}

const ProjectCardContainer: FC<ProjectCardContainerProps> = ({ projects }) => {
  const {
    visibleCount,
    shouldHideButton,
    handleHideMore,
    handleShowMore,
    shouldShowButton,
  } = useShowMore(4, projects);
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.slice(0, visibleCount).map((project, index) => {
          return <ProjectCard project={project} key={index} />;
        })}
      </div>
      {shouldShowButton && (
        <button className="dark:opactiy-80" onClick={handleShowMore}>
          show more
        </button>
      )}
      {shouldHideButton && (
        <button className="dark:opactiy-80" onClick={handleHideMore}>
          hide more
        </button>
      )}
    </div>
  );
};

export default ProjectCardContainer;
