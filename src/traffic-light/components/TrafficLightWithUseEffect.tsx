import { useEffect, useState } from "react";

// styles based on color
const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
};

type LightOptions = 'red' | 'yellow' | 'green';
// type LightOptions = keyof typeof colors;

export const TrafficLightWithUseEffect = () => {

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

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-8">
                <h1 className="text-white text-3xl font-thin">Waiting for change</h1>
                <h2 className="text-white text-xl">Countdown: {countdown}</h2>

                <div className="w-64 bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
                    style={{ width: `${(countdown / 5) * 100}%`}}
                    ></div>
                </div>

                {['red', 'yellow', 'green'].map((color) => <div className={`w-32 h-32 ${activeLight === color ? colors[activeLight] : 'bg-gray-500'} rounded-full`}></div>)}

                <div className="flex gap-2">
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
                        onClick={() => handleColorChange('red')}>
                        Red
                    </button>
                    <button
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer"
                        onClick={() => handleColorChange('yellow')}>
                        Yellow
                    </button>
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer"
                        onClick={() => handleColorChange('green')}>
                        Green
                    </button>
                </div>
            </div>
        </div>
    );
}
