import { useEffect, useState } from "react";


export const TodoDate = () => {
    const [dateTime, setDateTime] = useState("");


    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const forMattedDate = now.toLocaleDateString();
            const forMattedTime = now.toLocaleTimeString();

            setDateTime(`${forMattedDate} - ${forMattedTime}`);
        }, 1000)
        return () => clearInterval(interval);
    }, []);

    return (
        <h1 className='date'>{dateTime}</h1>

    )
}