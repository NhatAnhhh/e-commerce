import { useRoutes } from 'react-router-dom';
import Layout from '../pages/Layout/Client/Layout';
import Login from '../pages/Login/Login';
import { Home } from '../pages/Home';
import Register from '../pages/Register/Register';
import PageNotFound from '../pages/404NOTFOUND/PageNotFound';
import LayoutAdmin from '../pages/Layout/Admin/Layout';
import Dashboard from '../pages/Dashboard/Dashboard';
import Guide from '@/pages/Guide/Guide';
import User from '@/pages/User/User';
import { Shop } from '@/pages/Shop';
import { Blog } from '@/pages/Blog';
import { Sale } from '@/pages/Sale';
import { Contact } from '@/pages/Contact';

import AccountPage from '@/pages/AccountPage/AccountPage';
import AccountDashboard from '@/pages/AccountDashboard/AccountDashboard';
import AccountInformation from '@/pages/AccountInformation/AccountInformation';
import AccountAddress from '@/pages/AccountAddress/AccountAddress';
import AccountOrders from '@/pages/AccountOrders/AccountOrders';
import AccountWishlist from '@/pages/AccountWishlist/AccountWishlist';
import AccountNewsletters from '@/pages/AccountNewsletters/AccountNewsletters';
import { CreateOrderPage } from '@/pages/CreateOrderPage/CreateOrderPage';
import Product from '@/pages/Product/Product';
import { ProtecredRoute } from '@/components/ProtectedRoute';
import Detail from '@/pages/Detail/Detail';
import { ShoppingCart } from '@/pages/ShoppingCart/ShoppingCart';
import { CheckOutPage } from '@/components/CheckOutPage';
import { ProductAdminPage } from '@/pages/ProductAdminPage/ProductAdminPage';
import { UserDetailPage } from '@/pages/UserDetailPage/UserDetailPage';
import { ProductSizes } from '@/pages/ProductSizes/ProductSizes';
import { ProductColors } from '@/pages/ProductColors/ProductColors';
import { ProductCatalogs } from '@/pages/ProductCatalogs/ProductCatalogs';
import { FormCreateProduct } from '@/pages/FormCreateProduct/FormCreateProduct';
import { ProductLengths } from '@/pages/ProductLengths/ProductLengths';
import { ProtectedAccount } from '@/components/ProtectedRoute/ProtectedAccount';
import { CheckoutSucess } from '@/pages/CheckoutSuccess/CheckoutSucess';
import { CheckoutSuccesDirect } from '@/pages/CheckoutSuccesDirect/CheckoutSuccesDirect';
import { TableOrder } from '@/components/TableOrder/TableOrder';

const routerList = [
  {
    path: '/',
    element: <Layout />,

    children: [
      { index: true, element: <Home /> },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'product/:slug',
        element: <Product />,
      },
      {
        path: 'sale',
        element: <Sale />,
      },

      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'detail/:slug',
        element: <Detail />,
      },
      {
        path: 'orders',
        element: <CreateOrderPage />,
      },
      {
        path: 'shoppingcart',
        element: <ShoppingCart />,
      },
      {
        path: 'checkout',
        element: <CheckOutPage />,
      },
      {
        path: 'checkout/success',
        element: <CheckoutSucess />,
      },
      {
        path: 'checkout/successdirect',
        element: <CheckoutSuccesDirect />,
      },
      {
        path: 'account',

        element: (
          <ProtectedAccount>
            <AccountPage />
          </ProtectedAccount>
        ),
        children: [
          { index: true, element: <AccountDashboard /> },
          { path: 'edit', element: <AccountInformation /> },
          { path: 'address', element: <AccountAddress /> },
          { path: 'myorders', element: <AccountOrders /> },
          { path: 'wishlist', element: <AccountWishlist /> },
          { path: 'newsletter', element: <AccountNewsletters /> },
        ],
      },
    ],
  },
  {
    path: '/admin',
    element: (
      <ProtecredRoute>
        <LayoutAdmin />
      </ProtecredRoute>
    ),

    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'guide',
        element: <Guide />,
      },
      {
        path: 'user/list',
        element: <User />,
      },
      {
        path: 'user/detail',
        element: <UserDetailPage />,
      },
      {
        path: 'product/list',
        element: <ProductAdminPage />,
      },
      {
        path: 'product/form',
        element: <FormCreateProduct />,
      },
      {
        path: 'product/size',
        element: <ProductSizes />,
      },
      {
        path: 'product/color',
        element: <ProductColors />,
      },
      {
        path: 'product/length',
        element: <ProductLengths />,
      },
      {
        path: 'product/catalog',
        element: <ProductCatalogs />,
      },
      {
        path: 'order/list',
        element: <TableOrder />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
];

const RenderRouter = () => {
  const element = useRoutes(routerList);

  return element;
};

export default RenderRouter;
