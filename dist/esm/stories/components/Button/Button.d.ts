/// <reference types="react" />
interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    variant?: "primary" | "secondary";
    /**
     * How large should the button be?
     */
    size?: "small" | "medium" | "large";
    /**
     * Button contents
     */
    title: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
export declare const Button: ({ size, variant, title, }: ButtonProps) => JSX.Element;
export {};
