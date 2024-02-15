import Home from '~/pages/Home';
import Login from '~/pages/Login';
import DefaultLayout from '~/layouts/DefaultLayout';
import HeaderOnly from '~/layouts/HeaderOnly';
import NotFound from '~/pages/NotFound';
import RemoveBackground from '~/pages/RemoveBackground';
import RemoveObjects from '~/pages/RemoveObjects';
import Upscale from '~/pages/Upscale';
import Relight from '~/pages/Relight';
import SignUp from '~/pages/SignUp';

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
            path: 'signup',
            component: SignUp,
            layout: HeaderOnly,
      },
      {
            path: '/remove-background',
            component: RemoveBackground,
            layout: DefaultLayout,
      },
      {
            path: '/remove-objects',
            component: RemoveObjects,
            layout: DefaultLayout,
      },
      {
            path: '/upscale',
            component: Upscale,
            layout: DefaultLayout,
      },
      {
            path: '/relight',
            component: Relight,
            layout: DefaultLayout,
      },
      {
            path: '/*',
            component: NotFound,
            layout: null,
      },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
