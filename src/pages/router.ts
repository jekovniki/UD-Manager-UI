import { TRoutes } from "@/types/base";
import Login from "./login";
import CompanyRegister from "./company-register";
import UserRegister from "./user-register";
import Home from "./platform/home";
import Funds from "./platform/funds";
import Team from "./platform/team";

export const publicRoutes: TRoutes[] = [{
    name: 'Login',
    key: 'login',
    route: '/',
    icon: null,
    component: Login(),
}, {
    name: 'Register',
    key: 'register',
    route: '/register',
    icon: null,
    component: CompanyRegister(),
}, {
    name: 'Register user',
    key: 'register-user',
    route: '/register/user',
    icon: null,
    component: UserRegister(),
}];

export const platformRoutes: TRoutes[] = [{
    name: 'Home',
    key: 'home',
    route: '/:id/home',
    icon: "ud-home text-2xl text-primary sm:text-xl",
    component: Home()
}, {
    name: 'Funds',
    key: 'funds',
    route: '/:id/funds',
    icon: "ud-wallet text-2xl text-primary sm:text-xl",
    component: Funds()
}, {
    name: 'Team',
    key: 'team',
    route: '/:id/team',
    icon: "ud-users text-2xl text-primary sm:text-xl",
    component: Team()
}];
