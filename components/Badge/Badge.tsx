import { BadgeProps } from "./Badge.props"
import cn from 'classnames'
import styles from './Badge.module.css'

export const Badge = ({ size = 's', color = 'ghost', className, children, href, ...props }: BadgeProps): JSX.Element => {
    return (
        <div
            className={cn(styles.tag, className, {
                [styles.s]: size == 's',
                [styles.m]: size == 'm',
                [styles.ghost]: color == 'ghost',
                [styles.red]: color == 'red',
                [styles.green]: color == 'green',
                [styles.grey]: color == 'grey',
                [styles.primary]: color == 'primary',
            })}
            {...props}
        >
            {
                href
                    ? <a href={href}>{children}</a>
                    : <>{children}</>
            }
        </div>
    )
}