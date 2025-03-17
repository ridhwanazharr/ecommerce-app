'use client'

import { FaAngleRight } from "react-icons/fa6";
import {  useState  } from 'react';

interface SearchCategoryProps {
    onSelect: (query: string) => void;
    products: any[];
  }
  
  const SearchCategory = ({ onSelect, products }: SearchCategoryProps) => {

    const categoryList = [...new Set(products.map((product : any) => product.category))];
    const [selected,setSelected] = useState<string>('');

    const handleSelect = (selectedCategory : string) => {
        setSelected(selectedCategory);
        onSelect(selectedCategory);
      };

    return ( 
        <div className="flex flex-col gap-1">
          {categoryList.map((category:string, index) => (
            <a className={`py-1 items-center px-2 flex justify-between text-zinc-800 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg transition-all duration-150 ${category == selected && 'bg-primary text-primary'}`}
            key={index} onClick={() => handleSelect(category)}>
                {category.charAt(0).toUpperCase() + category.slice(1)} <FaAngleRight/>
            </a>
          ))}
        </div>
     );
}
 
export default SearchCategory;