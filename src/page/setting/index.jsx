import { useContext } from "react";
import { LoginContext } from "../../context/login";

const Setting = () => {
    const { isLogin, setIsLogin } = useContext(LoginContext);
    return (
        <div className="w-full h-130 bg-gray-100 mt-6 flex justify-center items-center text-3xl font-bold">
            {isLogin ? (
                <div className="w-70 h-100 bg-blue-300 rounded-md relative">
                    <div className="absolute bottom-2 right-2">
                        <button
                            className="p-2 bg-white rounded-md text-red-500 cursor-pointer text-lg"
                            onClick={() => setIsLogin(false)}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            ) : (
                "Please log in first"
            )}
        </div>
    );
};
export default Setting;
