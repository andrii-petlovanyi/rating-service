import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { IFirstLevelMenuItem, IPageItem } from "../../interfaces/menu.interface";
import { ITopLevelCategory } from "../../interfaces/page.interface";
import StarIcon from './icons/star.svg';
import styles from './Menu.module.css';
import cn from 'classnames';

const firstLevelMenu: IFirstLevelMenuItem[] = [
    { route: 'courses', name: 'Courses', icon: <StarIcon />, id: ITopLevelCategory.Courses },
    { route: 'services', name: 'Services', icon: <StarIcon />, id: ITopLevelCategory.Services },
    { route: 'books', name: 'Books', icon: <StarIcon />, id: ITopLevelCategory.Books },
    { route: 'products', name: 'Products', icon: <StarIcon />, id: ITopLevelCategory.Products },

]

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext)

    const buildFirstLevelMenu = () => {
        return (
            <ul className={styles.firstLevelList}>
                {firstLevelMenu.map(m => (
                    <li key={m.route}>
                        <a href={`/${m.route}`}>
                            <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: m.id == firstCategory
                            })}>
                                {m.icon}
                                <span>{m.name}</span>
                            </div>
                        </a>
                        {m.id == firstCategory && buildSecondLevelMenu(m)}
                    </li>
                ))}
            </ul>
        )
    }

    const buildSecondLevelMenu = (menuItem: IFirstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(item => (
                    <div key={item._id.secondCategory}>
                        <div className={styles.secondLevel}>{item._id.secondCategory}</div>
                        <div className={cn(styles.secondLevelBlock, {
                            [styles.secondLevelBlockOpened]: item.isOpened
                        })}>
                            {buildThirdLevelMenu(item.pages, menuItem.route)}
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    const buildThirdLevelMenu = (pages: IPageItem[], route: string) => {
        return (
            pages.map(p => (
                <a href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {
                    [styles.thirdLevelActive]: false
                })}>
                    {p.category}
                </a>
            )
            )
        )
    }

    return (
        <>
            <ul className={styles.menu}>
                {buildFirstLevelMenu()}
            </ul>
        </>
    );
}