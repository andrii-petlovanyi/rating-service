import { BadgeProps } from "./Badge.props"
import cn from 'classnames'
import styles from './Badge.module.css'

export const Badge = ({ size = 's', color = 'ghost', className, children, href, ...props }: BadgeProps): JSX.Element => {
    return (
        <div
            className={cn(styles.tag, className, styles[size], styles[color])}
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