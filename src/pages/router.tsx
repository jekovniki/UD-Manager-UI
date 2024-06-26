import { TRoutes } from "@/dtos/routes";
import Login from "./login";
import CompanyRegister from "./company-register";
import UserRegister from "./user-register";
import Home from "./platform/home";
import Funds from "./platform/funds";
import Team from "./platform/team";
import FundAssetsWizzard from "./platform/fund-assets-wizzard";

/**
 * @summary: This const contains public pages that can be seen by anyone
 */
export const publicRoutes: TRoutes[] = [{
    name: 'Login',
    key: 'login',
    route: '/',
    icon: null,
    component: <Login />,
}, {
    name: 'Register',
    key: 'register',
    route: '/register',
    icon: null,
    component: <CompanyRegister />,
}, {
    name: 'Register user',
    key: 'register-user',
    route: '/register/user',
    icon: null,
    component: <UserRegister />,
}];

/**
 * @summary: This const contains pages that USE the default layout of the platform and are protected.
 */
export const platformRoutes: TRoutes[] = [{
    name: 'Начало',
    key: 'home',
    route: '/:id/home',
    icon: "ud-home text-2xl text-primary sm:text-xl",
    component: <Home />
}, {
    name: 'Фондове',
    key: 'funds',
    route: '/:id/funds',
    icon: "ud-wallet text-2xl text-primary sm:text-xl",
    component: <Funds />
}, {
    name: 'Екип',
    key: 'team',
    route: '/:id/team',
    icon: "ud-users text-2xl text-primary sm:text-xl",
    component: <Team />
}];

/**
 * @summary: This const contains pages that DO NOT use the default layout of the platform,
 * but still needs to be protected
 */
export const platformRoutesCustom: TRoutes[] = [{
    name: 'Добави детайли за фонда',
    key: 'add-assets',
    route: '/:id/funds/add',
    icon: null,
    component: <FundAssetsWizzard />,
}]