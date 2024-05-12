import { TPublicRoutes } from "@/types/base";
import Homepage from "./homepage";
import Login from "./login";
import CompanyRegister from "./register";

const publicRoutes: TPublicRoutes[] = [{
    name: 'Homepage',
    key: 'home',
    route: '/',
    icon: null,
    component: Homepage(),
    sideNav: false,
}, {
    name: 'Login',
    key: 'login',
    route: '/login',
    icon: null,
    component: Login(),
    sideNav: false,
}, {
    name: 'Register',
    key: 'register',
    route: '/register',
    icon: null,
    component: CompanyRegister(),
    sideNav: false
}];

export const routes = [...publicRoutes];