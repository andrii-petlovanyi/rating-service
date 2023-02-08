import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { IFirstLevelMenuItem, IPageItem } from "../../interfaces/menu.interface";
import styles from './Menu.module.css';
import cn from 'classnames';
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "../../helpers/categories";



export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext)
    const router = useRouter()

    const openSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory == secondCategory) {
                m.isOpened = !m.isOpened;
            }
            return m;
        }));
    };

    const buildFirstLevelMenu = () => {
        return (
            <ul className={styles.firstLevelList}>
                {firstLevelMenu.map(m => (
                    <li key={m.route}>
                        <Link href={`/${m.route}`}>
                            <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: m.id == firstCategory
                            })}>
                                {m.icon}
                                <span>{m.name}</span>
                            </div>
                        </Link>
                        {m.id == firstCategory && buildSecondLevelMenu(m)}
                    </li>
                ))}
            </ul>
        )
    }

    const buildSecondLevelMenu = (menuItem: IFirstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(item => {
                    if (item.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                        item.isOpened = true;
                    }
                    return (
                        <div key={item._id.secondCategory}>
                            <div className={styles.secondLevel} onClick={() => openSecondLevel(item._id.secondCategory)}>{item._id.secondCategory}</div>
                            <div className={cn(styles.secondLevelBlock, {
                                [styles.secondLevelBlockOpened]: item.isOpened
                            })}>
                                {buildThirdLevelMenu(item.pages, menuItem.route)}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    const buildThirdLevelMenu = (pages: IPageItem[], route: string) => {
        return (
            pages.map(p => (
                <Link key={p._id} href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {
                    [styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath
                })}>
                    {p.category}
                </Link>
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