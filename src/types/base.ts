import { ReactNode } from "react";

/**
 * TRoutes
 * @name displayed on page and titel
 * @key unique key for the page
 * @route the route for the page
 * @icon the icon to be displayed on the sidenav - set null for empty
 * @component the component that will be rendered
 */

export type TRoutes = {
    name: string,
    key: string,
    route: string,
    icon: null | ReactNode,
    component: JSX.Element,
}