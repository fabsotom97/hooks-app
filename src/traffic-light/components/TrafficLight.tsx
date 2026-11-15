import { useState } from "react";

// styles based on color
const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
};

type LightOptions = 'red' | 'yellow' | 'green';
// type LightOptions = keyof typeof colors;

export const TrafficLight = () => {

    const [activeLight, setActiveLight] = useState<LightOptions>('red');

    const handleColorChange = (light: LightOptions) => {
        setActiveLight(light);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-8">
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
