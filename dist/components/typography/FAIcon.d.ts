/**
 * FAIcon is an implementation of Font Awesome Free for use with React-PDF.
 *
 * <FAIcon icon="github" fab /> for brand icons.
 * <FAIcon icon="envelope" far /> for regular icons.
 * <FAIcon icon="envelope" fas /> for solid icons.
 */
/// <reference types="react" />
import './fonts/fontawesome';
import fa from './fonts/fontawesome/faUnicode.json';
export declare const styles: {
    icon: {
        fontFamily: string;
    };
    fab: {
        fontWeight: number;
    };
    far: {
        fontWeight: number;
    };
    fas: {
        fontWeight: number;
    };
};
export declare type IconStyleProps = {
    fab: true;
    far?: false;
    fas?: false;
} | {
    fab?: false;
    far: true;
    fas?: false;
} | {
    fab?: false;
    far?: false;
    fas: true;
};
export interface FAIconProps {
    icon: keyof typeof fa;
}
declare const _default: ({ icon, fab, far, fas }: (FAIconProps & {
    fab: true;
    far?: false | undefined;
    fas?: false | undefined;
}) | (FAIconProps & {
    fab?: false | undefined;
    far: true;
    fas?: false | undefined;
}) | (FAIconProps & {
    fab?: false | undefined;
    far?: false | undefined;
    fas: true;
})) => JSX.Element;
export default _default;
