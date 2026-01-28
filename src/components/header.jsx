import { Link, Outlet, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div
                className="flex bg-blue-100 w-full p-2 h-25 text-blue-500 font-medium gap-10 justify-center items-center
"
            >
                <NavLink
                    to={"/"}
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "bg-blue-100 p-2 rounded-md"
                            : isActive
                              ? "bg-blue-400 p-2 rounded-md text-white "
                              : "bg-blue-100 p-2 rounded-md"
                    }
                >
                    {" "}
                    Home
                </NavLink>
                <NavLink
                    to={"/contact"}
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "bg-blue-100 p-2 rounded-md"
                            : isActive
                              ? "bg-blue-400 p-2 rounded-md text-white "
                              : "bg-blue-100 p-2 rounded-md"
                    }
                >
                    {" "}
                    Contact
                </NavLink>
                <NavLink
                    to={"/login"}
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "bg-blue-100 p-2 rounded-md"
                            : isActive
                              ? "bg-blue-400 p-2 rounded-md text-white "
                              : "bg-blue-100 p-2 rounded-md"
                    }
                >
                    Login{" "}
                </NavLink>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default Header;
