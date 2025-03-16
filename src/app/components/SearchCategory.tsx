'use client'

interface SearchCategoryProps {
    onSelect: (query: string) => void;
    products: any[];
  }
  
  const SearchCategory = ({ onSelect, products }: SearchCategoryProps) => {

    const categoryList = [...new Set(products.map((product : any) => product.category))];

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCategory = event.target.value;
        onSelect(selectedCategory);
      };

    return ( 
        <select defaultValue="" className="drop-shadow-md outline-1 outline-zinc-500 rounded-lg p-2 m-2" onChange={handleSelect}>
            <option value="">All</option>
            {categoryList.map((category:string, index) => (
                <option key={index} value={category}>{category}</option>
            ))}
        </select>
     );
}
 
export default SearchCategory;