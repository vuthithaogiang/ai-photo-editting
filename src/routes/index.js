import Home from '~/pages/Home';
import Login from '~/pages/Login';
import DefaultLayout from '~/layouts/DefaultLayout';
import HeaderOnly from '~/layouts/HeaderOnly';
import NotFound from '~/pages/NotFound';

const publicRoutes = [
      {
            path: '/',
            component: Home,
            layout: DefaultLayout,
      },
      {
            path: '/login',
            component: Login,
            layout: HeaderOnly,
      },
      {
            path: '/*',
            component: NotFound,
            layout: null,
      },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
