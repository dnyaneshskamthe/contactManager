import React, { useEffect, useState, useRef } from 'react';

const Counter = (props) => {
    const [time, setTime] = useState(props.direction === "clockwise" ? 0 : props.time);
    const direction = props.direction;
    const intervalIdRef = useRef(null);

    const incrementTime = () => {
        setTime(prevTime => {
            if (prevTime === props.time) {
                clearInterval(intervalIdRef.current);
                return 0;
            }
            return prevTime + 1;
        });
    };

    const decrementTime = () => {
        setTime(prevTime => {
            if (prevTime === 0) {
                clearInterval(intervalIdRef.current);
                return 0;
            }
            return prevTime - 1;
        });
    };

    useEffect(() => {
        const handleEvent = () => {
            if (direction === "clockwise") {
                incrementTime();
            } else if (direction === "anticlockwise") {
                decrementTime();
            }
        };

        intervalIdRef.current = setInterval(handleEvent, 1000);

        return () => {
            clearInterval(intervalIdRef.current);
        };
    }, [direction, props.time]);

    return (
        <div>
            <h2>{time}</h2>
        </div>
    );
};

export default Counter;
