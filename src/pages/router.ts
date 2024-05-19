import { TRoutes } from "@/types/base";
import Homepage from "./homepage";
import Login from "./login";
import CompanyRegister from "./company-register";
import UserRegister from "./user-register";
import Home from "./platform/home";
import Funds from "./platform/funds";
import Team from "./platform/team";

export const publicRoutes: TRoutes[] = [{
    name: 'Homepage',
    key: 'homepage',
    route: '/',
    icon: null,
    component: Homepage(),
}, {
    name: 'Login',
    key: 'login',
    route: '/login',
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
    route: '/home',
    icon: null,
    component: Home()
}, {
    name: 'Funds',
    key: 'funds',
    route: '/funds',
    icon: null,
    component: Funds()
}, {
    name: 'Team',
    key: 'team',
    route: '/team',
    icon: null,
    component: Team()
}];
