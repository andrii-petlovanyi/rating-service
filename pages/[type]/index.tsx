import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';
import { IMenuItem } from '../../interfaces/menu.interface';
import { withLayout } from '../../layout/Layout';
import { firstLevelMenu } from '../../helpers/categories';
import { ParsedUrlQuery } from 'querystring';
import { API } from '../../helpers/api';

function Type({ firstCategory }: TypeProps): JSX.Element {

    return (
        <>
            Type: {firstCategory}
        </>
    );
}

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: firstLevelMenu.map(m => '/' + m.route),
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        };
    }
    const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type);
    if (!firstCategoryItem) {
        return {
            notFound: true
        };
    }
    const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
        firstCategory: firstCategoryItem.id
    });
    return {
        props: {
            menu,
            firstCategory: firstCategoryItem.id
        }
    };
};

interface TypeProps extends Record<string, unknown> {
    menu: IMenuItem[];
    firstCategory: number;
}