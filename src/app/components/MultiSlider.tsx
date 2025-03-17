"use client";

import { useState } from "react";

const MultiSlider = () => {

    const [slideVal, setSlideVal] = useState<number[]>([1,100])

    return (
        <>
            <p>Min : {slideVal[0]} Max : {slideVal[1]}</p>
            <div className="flex absolute">
                <input type="range" min={slideVal[0]} max={slideVal[1]}/>
            </div>
        </>
    );
};

export default MultiSlider;
