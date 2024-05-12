import { TPublicRoutes } from "@/types/base";
import Homepage from "./homepage";
import Login from "./login";
import CompanyRegister from "./company-register";
import UserRegister from "./user-register";

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
}, {
    name: 'Register user',
    key: 'register-user',
    route: '/register/user',
    icon: null,
    component: UserRegister(),
    sideNav: false
}];

export const routes = [...publicRoutes];