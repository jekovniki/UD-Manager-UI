import { Outlet } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import {
    Bell,
    CircleUser,
    Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { platformRoutes } from "@/pages/router";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";


const PlatformLayout = () => {
    // TODO: finish the styling and implementation
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden bg-background md:block shadow-lg">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
                        <Link to="/" className="flex items-center gap-2 font-semibold">
                            <span className="">AMC Manager</span>
                        </Link>
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            {platformRoutes.map((route, index) =>
                                <NavLink
                                    key={index}
                                    to={route.route}
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:text-primary"
                                >
                                    {route.icon ? <i className={route.icon}></i> : ""}
                                    {route.name}
                                </NavLink>
                            )}
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px] lg:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col">
                            <nav className="grid gap-2 text-lg font-medium">
                                <Link
                                    to="#"
                                    className="flex items-center gap-2 text-lg font-semibold"
                                >
                                    <span className="sr-only">AMC Manager</span>
                                </Link>
                                {platformRoutes.map((route, index) =>
                                    <NavLink
                                        key={index}
                                        to={route.route}
                                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                    >
                                        {route.icon ? <i className={route.icon}></i> : ""}
                                        {route.name}
                                    </NavLink>
                                )}
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                        <Bell className="h-4 w-4" />
                        <span className="sr-only">Toggle notifications</span>
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <CircleUser className="h-5 w-5" />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <Outlet />
            </div>
        </div>
    )
}

export default PlatformLayout;