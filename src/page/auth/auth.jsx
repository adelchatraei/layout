import { useEffect, useState } from "react";

const Auth = () => {
    const [time, setTime] = useState(120);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        if (!started || time === 0) return;

        const timer = setInterval(() => {
            setTime((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [started, time]);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const startTimer = () => {
        setTime(120);
        setStarted(true);
    };

    return (
        <div className="w-full flex justify-center items-center h-130 bg-gray-100 mt-6">
            <div className="w-90  bg-blue-300 rounded-md m-4">
                <div className="w-full  flex flex-row-reverse px-2 py-5 justify-around">
                    <button className="bg-white px-5 rounded-md flex justify-center items-center">
                        Confirm
                    </button>
                    <div className="w-1/2 ">
                        <div
                            className={`flex justify-center items-center w-24 ml-3 rounded-md cursor-pointer ${!started ? "bg-green-300 inset-shadow-sm" : time > 0 ? "bg-green-200" : "bg-green-300 inset-shadow-sm"}`}
                        >
                            {!started ? (
                                <button
                                    onClick={startTimer}
                                    className="cursor-pointer p-2"
                                >
                                    Send code
                                </button>
                            ) : time > 0 ? (
                                <span className="p-2">
                                    {minutes}:
                                    {seconds < 10 ? `0${seconds}` : seconds}
                                </span>
                            ) : (
                                <button
                                    onClick={startTimer}
                                    className="cursor-pointer p-2"
                                >
                                    Resend
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
