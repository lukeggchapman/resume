import React from 'react';
export interface PDFLiProps {
    content: React.ReactNode;
}
declare const PDFLi: ({ content }: PDFLiProps) => JSX.Element;
export interface PDFBulletListProps {
    list: React.ReactNode[];
}
declare const PDFBulletList: ({ list }: PDFBulletListProps) => JSX.Element;
export { PDFLi };
export default PDFBulletList;
