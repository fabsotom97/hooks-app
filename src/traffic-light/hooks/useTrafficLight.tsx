import { useEffect, useState } from "react";

// styles based on color
const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
};

export type LightOptions = 'red' | 'yellow' | 'green';

export const useTrafficLight = () => {

    const [activeLight, setActiveLight] = useState<LightOptions>('red');
    const [countdown, setCountdown] = useState(5);

    // countdown effect
    useEffect(() => {
        if (countdown === 0) return;

        const intervalId = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        // cleanup
        return () => {
            clearInterval(intervalId);
        }
    }, [countdown]);

    // change light color effect
    useEffect(() => {
        if (countdown > 0) return;

        setCountdown(5);

        if (activeLight === 'green') {
            setActiveLight('yellow');
            return;
        }
        if (activeLight === 'yellow') {
            setActiveLight('red');
            return;
        }
        if (activeLight === 'red') {
            setActiveLight('green');
            return;
        }
    }, [countdown, activeLight]);

    const handleColorChange = (light: LightOptions) => {
        setActiveLight(light);
    };

    return {
        activeLight,
        countdown,
        percentage: (countdown / 5) * 100,
        handleColorChange,
    };
};
