import React, {useState, useEffect}  from "react";
const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    useEffect(() => {
    let interval;
    if(isRunning){
        interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
    }, 1000);
   }
   return () => clearInterval(interval);
    }, [isRunning]);

    const toggleTimer = () => {
        setIsRunning(
            (prevIsRunning) => !prevIsRunning
        );
    };

    const ResetTimer = () => {
        setSeconds(0);
        setIsRunning(false);
    };

    const formatTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        
        if (hours > 0) {
            return `${hours}h ${minutes}m ${seconds}s`;
        } else if (minutes > 0) {
            return `${minutes}m ${seconds}s`;
        } else {
            return `${seconds}s`;
        }
};
    return (
        <div>
            <h1>Timer : {formatTime(seconds)}</h1>
            <br />
            <button onClick={toggleTimer}>{isRunning ? "Stop Timer" :" Start Timer"}</button>
            <br /><br />
            <button onClick={ResetTimer}>Reset</button>
        </div>
    );
};

export default Timer;