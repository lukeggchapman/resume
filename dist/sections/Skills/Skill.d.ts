/// <reference types="react" />
export interface SkillProps {
    title: string;
    skills: string[];
}
declare const Skill: ({ title, skills }: SkillProps) => JSX.Element;
export default Skill;
