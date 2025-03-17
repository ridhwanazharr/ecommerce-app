'use client'

import { useState, useEffect } from "react";
import SearchCategory from '@/components/SearchCategory';
import PriceSlider from '@/components/PriceSlider';
import MultiSlider from '@/components/MultiSlider';

import { FaSliders } from "react-icons/fa6";

interface FilterCardProps {
    onFilter: (filteredProducts: any[]) => void;
    products : any[];
};

const FilterCard = ({onFilter,products} : FilterCardProps) => {
    const maxSlide = Math.max(...products.map((product) => product.price));
    const minSlide = Math.min(...products.map((product) => product.price));
    const [sliderRange, setSliderRange] = useState<number[]>([minSlide, maxSlide]);
    const [filteredProducts,setFilteredProducts] =  useState<any[]>(products); 
    const [category,setCategory] = useState<string>('');
    const [priceRange, setPriceRange] = useState<number[]>([minSlide, maxSlide]);

    const handleCategory = (query: string) => {
        setCategory(query);
    }

    const handleSlide = (price: number[]) => {
        setPriceRange(price);
    }

    useEffect(()=>{
        let filtered = products;
        filtered = filtered.filter((product) =>
            product.category.toLowerCase().includes(category.toLowerCase())
          );
        const newMaxSlide = Math.max(...filtered.map((product) => product.price));
        const newMinSlide = Math.min(...filtered.map((product) => product.price));
        setSliderRange([newMinSlide,newMaxSlide]);
    },[category,filteredProducts])

    const handleFilter = () => {
        let filtered = products;
        if(category){
            filtered = filtered.filter((product) =>
                product.category.toLowerCase().includes(category.toLowerCase())
              );
        }

        filtered = filtered.filter(
            (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
          );

        setFilteredProducts(filtered);
        onFilter(filteredProducts);
    }
    
    const handleReset = () => {
        onFilter(products);
    }
    


    return ( 
        <div className="flex flex-col bg-default m-4 p-4 rounded-lg min-w-72 outline-1 h-full drop-shadow-lg">
            <div className="flex justify-between text-xl font-semibold text-zinc-900 dark:text-zinc-300 border-b-1 items-center border-zinc-900/25 dark:border-white/25 pb-4">Filters <FaSliders /></div>
            <div className="flex flex-col border-b-1 border-zinc-900/25 dark:border-white/25 py-4 gap-1">
                <p className="font-semibold text-zinc-900 dark:text-white text-lg">Categories</p>
                <SearchCategory onSelect={handleCategory} products={products}/>
            </div>
            <div className="flex flex-col py-4">
                <p className="font-semibold text-zinc-900 dark:text-white text-lg mb-2">Price</p>
                <PriceSlider onSlide={handleSlide} range={sliderRange}/>
            </div>
            <div className="flex justify-center items-center mt-4">
                <button className="px-4 py-2 bg-zinc-900 text-white dark:bg-white dark:text-black rounded-full text-lg" onClick={handleFilter}>Apply Filters</button>
                <button className="px-4 py-2 bg-zinc-900 text-white dark:bg-white dark:text-black rounded-full text-lg" onClick={handleReset}>Reset</button>
            </div>
        </div>
     );
}
 
export default FilterCard;