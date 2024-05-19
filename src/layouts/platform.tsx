import { Outlet } from "react-router-dom";


const PlatformLayout = () => {

    return (
        <>
            <nav>Navigation</nav>
            <Outlet />
        </>
    )
}

export default PlatformLayout;