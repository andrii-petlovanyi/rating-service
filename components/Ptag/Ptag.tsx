import { PtagProps } from "./Ptag.props"
import cn from 'classnames';
import styles from './Ptag.module.css'

export const Ptag = ({ children, size = 'm', className, ...props }: PtagProps): JSX.Element => {

    return <p className={cn(styles.p, className, styles[size])}
        {...props}
    >{children}</p>;
}