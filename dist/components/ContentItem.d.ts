import React from 'react';
export declare const styles: {
    container: {
        flexDirection: string;
        fontSize: number;
        padding: string;
    };
    leftColumn: {
        flex: number;
        alignItems: string;
        justifyItems: string;
        paddingRight: number;
    };
    rightColumn: {
        flex: number;
    };
    subTitle: {
        flexDirection: string;
        justifyContent: string;
    };
    contentContainer: {
        flexDirection: string;
        width: string;
    };
    content: {
        marginTop: number;
    };
    logo: {
        height: number;
    };
    hr: {
        width: number;
        alignSelf: string;
        margin: string;
    };
    dates: {
        flexDirection: string;
    };
};
export interface ContentItemProps {
    title: string;
    subTitle: string;
    logo: string;
    startDate: string;
    endDate: string;
    children?: React.ReactNode;
}
declare const ContentItem: ({ title, subTitle, logo, startDate, endDate, children, }: ContentItemProps) => JSX.Element;
export default ContentItem;
