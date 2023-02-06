import { ReactNode } from 'react';
import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface BadgeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    size?: 's' | 'm';
    color?: 'ghost' | 'grey' | 'green' | 'red' | 'primary';
    href?: string;
}