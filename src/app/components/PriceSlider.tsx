'use client'

import { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';

interface PriceSliderProps {
    onSlide: (price: number[]) => void;
    range: any[];
  }

const PriceSlider = ({ onSlide, range }: PriceSliderProps) => {
    const [slideRange,setSlideRange] = useState<number[]>(range);
    const [minSlide,setMinSlide] = useState<number>(slideRange[0]);
    const [maxSlide,setMaxSlide] = useState<number>(slideRange[1]);

    const debounceSlide = useCallback(
            debounce((val: any[]) => {
                onSlide(val);
            }, 300),
            []
        );
    
    useEffect(() => {
        const value = [minSlide,maxSlide];
        debounceSlide(value);
    }, [minSlide, maxSlide, debounceSlide]);

    const handleMaxInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value <= slideRange[1]) {
            setMaxSlide(value);
        }
    };

    const handleMinInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value >= slideRange[0]) {
            setMinSlide(value);
        }
    };

    useEffect(() => {
        if (range[0] !== slideRange[0] || range[1] !== slideRange[1]) {
            setSlideRange(range);
            setMinSlide(range[0]);
            setMaxSlide(range[1]);
        }
    }, [range, slideRange]);

    return (
        <div className="flex flex-col text-sm font-semibold gap-1">
            <p className="text-zinc-700">Max Price $<input type="number" className="ms-2 p-1 outline-1 rounded-lg" onChange={handleMaxInput} value={maxSlide}/></p>
            <input min={minSlide + 1} max={slideRange[1]} step="0.01" type="range" value={maxSlide} onChange={(e) => setMaxSlide(Number(e.target.value))}/>
            <div className="flex text-zinc-700 items-center">
                <p className="me-2">Min Price</p>
                <div className="flex items-center space-x-1">
                    <span>$</span>
                    <input
                    type="number"
                    className="p-1 outline-1 rounded-lg flex-grow"
                    onChange={handleMinInput}
                    value={minSlide}
                    />
                </div>
            </div>
            <input min={slideRange[0]} max={maxSlide - 1} step="0.01" type="range" value={minSlide} onChange={(e) => setMinSlide(Number(e.target.value))}/>
        </div> 
     );
}
 
export default PriceSlider;