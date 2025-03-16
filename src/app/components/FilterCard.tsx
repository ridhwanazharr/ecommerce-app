'use client'

import { useRouter } from 'next/navigation';
import { useState, useEffect } from "react";

const FilterCard = () => {
    const [categories, setCategories] = useState<any[]>([]);
    const [loading, isLoading] = useState(true);
    const router = useRouter();

    const Spinners = () => {
        return (
            <div className="flex items-center justify-center">
                <div className="animate-spin h-5 w-5 border-4 border-orange-600 border-t-transparent rounded-full"></div>
                <p className="ml-4 text-lg">Loading...</p>
            </div>
        )
    };

    useEffect(() => {
        fetch('https://dummyjson.com/products')
          .then((res) => res.json())
          .then((data) => {
            const mapCategories = [...new Set(data.products.map((product : any) => product.category))];
            setCategories(mapCategories)
            isLoading(false)
          })
      }, [])

    const redirectCategory = (category: string) => {
        router.push(`/shop/category/${category}`);
    };

    return ( 
        <div className="transition-all duration-150 m-4 pb-8 flex flex-col p-2 bg-white dark:bg-zinc-900 outline-1 outline-white drop-shadow-lg rounded-lg h-fit min-w-64">
            <p className="opacity-75 pb-2 border-b-1 border-black/25 mb-2 font-semibold">Filter by categories :</p>
            <div className="flex flex-col px-4">
                {!loading ? 
                    <>
                        {categories.map((category : any, index) => (
                            <a  
                                className="px-2 py-1 outline-1 outline-zinc-300 dark:outline-zinc-700 drop-shadow-md my-1 flex dark:hover:bg-orange-400/50 hover:bg-orange-300/50 rounded-lg transition-all duration-150"
                                key={index} 
                                onClick={()=>redirectCategory(category)}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </a>
                        ))}
                    </> 
                    :
                    <>
                        <div className="flex-grow justify-center items-center py-4">
                            <Spinners />
                        </div> 
                    </>
                }
                
            </div>
        </div>
     );
}
 
export default FilterCard;