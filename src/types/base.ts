import { ReactNode } from "react";

export type TRoutes = {
    name: string,
    key: string,
    route: string,
    icon: null | ReactNode,
    component: JSX.Element,
}

/**
 * TPublicRoutes
 * @name = displayed on page and titel
 * @key = unique key for the page
 * @route = the route for the page
 * @icon = the icon to be displayed on the sidenav - set null for empty
 * @component = the component that will be rendered
 * @sideNav = should be displayed in the sidenav. False for public routes
 */
export type TPublicRoutes = TRoutes & {
    sideNav: false
}

/**
 * TPrivateRoutes
 * @name = displayed on page and titel
 * @key = unique key for the page
 * @route = the route for the page
 * @icon = the icon to be displayed on the sidenav - set null for empty
 * @component = the component that will be rendered
 * @sideNav = should be displayed in the sidenav. True for public routes
 */
 export type TPrivateRoutes = TRoutes & {
    sideNav: true
}