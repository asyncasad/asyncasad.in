import { type FC } from 'react';

interface SkillTagProps {
  skill: string;
}

const SkillTag: FC<SkillTagProps> = ({ skill }) => {
  return (
    <div className="hover:-translate-y-3 cursor-pointer transform rounded-sm border border-foreground  px-2 py-1  text-foreground duration-200 ease-in-out">
      <p className="">{skill}</p>
    </div>
  );
};

export default SkillTag;
