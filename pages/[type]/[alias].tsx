import { withLayout } from "../../layout/Layout";
import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { IMenuItem } from "../../interfaces/menu.interface";
import { ITopLevelCategory, ITopPageModel } from "../../interfaces/page.interface";
import { ParsedUrlQuery } from "querystring";
import { IProductModel } from "../../interfaces/product.interface";
import { firstLevelMenu } from "../../helpers/categories";
import { TopPageComponent } from "../../page-components";

function TopPage({ firstCategory, products, page }: TopPageProps): JSX.Element {
    return (
        <>
            <TopPageComponent firstCategory={firstCategory} products={products} page={page} />
        </>
    );
}

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = [];
    for (const m of firstLevelMenu) {
        const { data: menu } = await axios.post<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
            firstCategory: m.id
        });
        paths = paths.concat(menu.flatMap(s => s.pages.map(p => `/${m.route}/${p.alias}`)))
    }

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<TopPageProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        }
    }
    try {
        const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type);
        if (!firstCategoryItem) {
            return {
                notFound: true
            }
        }
        const { data: menu } = await axios.post<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
            firstCategory: firstCategoryItem.id
        });
        if (menu.length == 0) {
            return {
                notFound: true
            }
        }
        const { data: page } = await axios.get<ITopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);
        const { data: products } = await axios.post<IProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
            category: page.category,
            limit: 10
        });

        return {
            props: {
                menu,
                firstCategory: firstCategoryItem.id,
                page,
                products
            }
        }
    } catch {
        return {
            notFound: true
        }
    }
}

interface TopPageProps extends Record<string, unknown> {
    menu: IMenuItem[];
    firstCategory: ITopLevelCategory;
    page: ITopPageModel;
    products: IProductModel[];
}