export type Skill = string;
export type Contact = {
  icon: any;
  title: string;
  link: string;
};
export type Project = {
  title: string;
  description: string;
  link: string;
};

export type ExperiencePage = {
  title: string;
  // eslint-disable-next-line no-undef
  logo: React.FC<SVGProps<SVGSVGElement>>;
  companyDescription: any;
  companyName: string;
  techStack: string[];
  workDescription: any;
  link: string;
};
export type Social = {
  icon: any;
  link: string;
};
export type Experience = {
  comapny_name: string;
  date: string;
  icon: string;
  role: string;
  link: string;
};
export type HomePageConfig = {
  avatar: string;
  name: string;
  bio: string;
  skills: Skill[];
  projects: Project[];
  experiences: Experience[];
  socials: Social[];
  contacts: Contact[];
};
