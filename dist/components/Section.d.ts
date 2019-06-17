import React from 'react';
export interface SectionProps {
    title: string;
    children: React.ReactNode;
}
declare const Section: ({ title, children }: SectionProps) => JSX.Element;
export default Section;
