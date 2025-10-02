import { useEffect, useState } from "react";

const DateCard = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const getDayName = (date) => {
        return date.toLocaleString("en-US", { weekday: "short" });
    };

    const getDayNumber = (date) => {
        return date.getDate();
    };

    const getMonth = (date) => {
        return date.toLocaleString("en-US", { month: "long" });
    };

    const getYear = (date) => {
        return date.getFullYear();
    };

    const formatTime = (date) => {
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const suffix = hours >= 12 ? "PM" : "AM";
        if (hours > 12) hours = hours % 12;
        if (hours === 0) hours = 12;
        return `${hours}:${minutes} ${suffix}`;
    };

    return (
        <div className="w-full h-full flex flex-row items-center justify-center text-gray-900 gap-6">
            <div className="font-mono text-left">
                <div className="flex items-center gap-4">
                    <div>
                        <p className="md:text-3xl">{getDayNumber(dateTime)}</p>
                    </div>
                    <div>
                        <p className="md:text-4xl">{getDayName(dateTime)}</p>
                    </div>
                </div>
                <p className="md:text-sm text-gray-900">
                     {getMonth(dateTime)}
                </p>
            </div>
            <div>
                <p className="md:text-4xl mt-4">{formatTime(dateTime)}</p>
            </div>
        </div>
    );
};

export default DateCard;
