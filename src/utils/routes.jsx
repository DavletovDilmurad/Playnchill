import { HomePage } from "../pages";
import Cart from "../pages/cart";
import Categories from "../pages/categories";
import NotFoundPage from "../pages/notfound";
import ProductPage from "../pages/product";

export const routes = [
    {
        id: 1,
        component: <HomePage />,
        path: '/'
    },
    {
        id: 2,
        component: <ProductPage />,
        path: '/product'
    },
    {
        id: 3,
        component: <NotFoundPage />,
        path: '*'
    },
    {
        id: 4,
        component: <Cart />,
        path: '/cart'
    },
    {
        id: 5,
        component: <Categories />,
        path: '/categories'
    },
]