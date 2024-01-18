import HeaderOnly from '@/components/Layout/HeaderOnly';
import Home from '@/pages/Home';
import ProductInfo from '@/pages/Product';
import Voucher from '@/pages/Voucher';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/product', component: ProductInfo, layout: HeaderOnly },
    { path: '/voucher', component: Voucher, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
