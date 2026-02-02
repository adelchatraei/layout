import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Page = () => {
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchData = async () => {
        try {
            const respons = await fetch("https://fakestoreapi.com/products");
            const result = await respons.json();
            setDatas(result);
        } catch (error) {
            setError("Error .please try agin");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className=" grid grid-cols-4 bg-gray-100 mt-2 rounded-md">
            <aside className=" p-2">
                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
                <ul className="col-end-2 border-r-2 border-gray-300">
                    {datas.map((post) => {
                        return (
                            <NavLink to={`/home/${post.id}`}>
                                <li
                                    key={post.id}
                                    className="mb-2.5 border-b-2 border-gray-300 p-1"
                                >
                                    <h2>{post.title}</h2>
                                </li>
                            </NavLink>
                        );
                    })}
                </ul>
            </aside>
            <main className="col-start-2 col-end-5 items-center">
                <Outlet />
            </main>
        </div>
    );
};

export default Page;
