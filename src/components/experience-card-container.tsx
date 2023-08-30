'use client';
import useShowMore from '@/lib/hooks/useShowMore';
import { Experience } from '@/types';
import { type FC } from 'react';
import ExperienceCard from './experience-card';

interface ExperienceCardContainerProps {
  experiences: Experience[];
}

const ExperienceCardContainer: FC<ExperienceCardContainerProps> = ({
  experiences,
}) => {
  const {
    handleHideMore,
    handleShowMore,
    visibleCount,
    shouldShowButton,
    shouldHideButton,
  } = useShowMore(3, experiences);

  return (
    <div className="flex flex-col gap-4">
      {experiences.slice(0, visibleCount).map((experience, index) => (
        <ExperienceCard
          experience={experience}
          key={index}
          pageLink={experience.link}
        />
      ))}
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
export default ExperienceCardContainer;
