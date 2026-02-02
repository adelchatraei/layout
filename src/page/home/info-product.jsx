import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const InfoProduct = () => {
    const { poductId } = useParams();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchData = async () => {
        try {
            const respons = await fetch(
                `https://fakestoreapi.com/products/${poductId}`,
            );
            const result = await respons.json();
            setData(result);
        } catch (error) {
            setError("Error .please try agin");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [poductId]);

    return (
        <div
            key={data.id}
            className="flex flex-col justify-center items-center"
        >
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            <img src={data?.image} alt="" className="w-60 h-50" />

            <span>{data?.price} $</span>
            <span>{data?.title}</span>
        </div>
    );
};

export default InfoProduct;
