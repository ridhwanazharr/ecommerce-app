'use client'

interface SortProps {
    onSelect: (query: string) => void;
  }

const ProductSort = ({ onSelect }: SortProps) => {

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = event.target.value;
        onSelect(selected);
      };

    return ( 
        <select defaultValue="" className="bg-default drop-shadow-md outline-1 outline-zinc-500 rounded-lg p-2 m-2" onChange={handleSelect}>
            <option value="">Sort by</option>
            <option value="highest">Price: High to Low</option>
            <option value="lowest">Price: Low to High</option>
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rating</option>
        </select>
     );
}
 
export default ProductSort;