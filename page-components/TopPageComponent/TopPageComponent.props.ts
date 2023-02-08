import { ITopLevelCategory, ITopPageModel } from "../../interfaces/page.interface";
import { IProductModel } from "../../interfaces/product.interface";

export interface TopPageComponentProps extends Record<string, unknown> {
    firstCategory: ITopLevelCategory;
    page: ITopPageModel;
    products: IProductModel[];
}