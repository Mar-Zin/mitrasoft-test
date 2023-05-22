import { RouteProps } from 'react-router-dom';
import { AboutPage } from '../../../../pages/AboutPage';
import { MainPage } from '../../../../pages/MainPage';
import { UserPage } from '../../../../pages/UserPage';
import { NotFoundPage } from '../../../../pages/NotFoundPage';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  USER = 'user',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.USER] : '/users/:userId',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.USER]: {
        path: RoutePath.user,
        element: <UserPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
