import { useContext } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import { LoginContext } from "../context/login";

const Header = () => {
    const { isLogin, setIsLogin } = useContext(LoginContext);

    return (
        <>
            <header
                className="flex bg-blue-100 w-full p-2 h-25 text-blue-500 font-medium gap-10 justify-between items-center rounded-md
"
            >
                <ul className="flex justify-around w-1/2">
                    <NavLink
                        to={"/home"}
                        className={({ isActive, isPending }) =>
                            isPending
                                ? "bg-blue-100 p-2 rounded-md"
                                : isActive
                                  ? "bg-blue-400 p-2 rounded-md text-white "
                                  : "bg-blue-100 p-2 rounded-md"
                        }
                    >
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
                        Contact
                    </NavLink>
                    <NavLink
                        to={"/auth"}
                        className={({ isActive, isPending }) =>
                            isPending
                                ? "bg-blue-100 p-2 rounded-md"
                                : isActive
                                  ? "bg-blue-400 p-2 rounded-md text-white "
                                  : "bg-blue-100 p-2 rounded-md"
                        }
                    >
                        Authentication
                    </NavLink>
                    <NavLink
                        to={"/setting"}
                        className={({ isActive, isPending }) =>
                            isPending
                                ? "bg-blue-100 p-2 rounded-md"
                                : isActive
                                  ? "bg-blue-400 p-2 rounded-md text-white "
                                  : "bg-blue-100 p-2 rounded-md"
                        }
                    >
                        Profile
                    </NavLink>
                </ul>
                <button
                    className="ml-5 rounded-full bg-white px-3 py-2 cursor-pointer"
                    onClick={() => setIsLogin(true)}
                >
                    {isLogin ? "Hi Adel" : "Login"}
                </button>
            </header>
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default Header;
