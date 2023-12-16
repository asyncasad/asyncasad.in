import { type FC } from 'react';

interface SkillTagProps {
  skill: string;
}

const SkillTag: FC<SkillTagProps> = ({ skill }) => {
  return (
    <div className="transform rounded-sm border border-foreground  px-2 py-1  text-foreground">
      <p className="">{skill}</p>
    </div>
  );
};

export default SkillTag;
