import { IFirstLevelMenuItem } from "../interfaces/menu.interface";
import CourseIcon from './icons/course.svg';
import ServiceIcon from './icons/service.svg';
import BookIcon from './icons/book.svg';
import ProductIcon from './icons/product.svg';
import { ITopLevelCategory } from "../interfaces/page.interface";


export const firstLevelMenu: IFirstLevelMenuItem[] = [
    { route: 'courses', name: 'Courses', icon: <CourseIcon />, id: ITopLevelCategory.Courses },
    { route: 'services', name: 'Services', icon: <ServiceIcon />, id: ITopLevelCategory.Services },
    { route: 'books', name: 'Books', icon: <BookIcon />, id: ITopLevelCategory.Books },
    { route: 'products', name: 'Products', icon: <ProductIcon />, id: ITopLevelCategory.Products },

]