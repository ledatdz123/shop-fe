import Home from '@/pages/Home';
import ProductInfo from '@/pages/Product';

const publicRoutes = [
    { path: '/', component: Home },
    {
        path: '/product',
        component: ProductInfo,
    },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
