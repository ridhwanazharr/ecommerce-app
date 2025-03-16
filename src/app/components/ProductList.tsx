'use client'

import { useState, useEffect } from "react";
import ProductCard from '@/components/ProductCard';
import SearchProduct from '@/components/SearchProduct';
import SearchCategory from '@/components/SearchCategory';

const ProductList = ({products} : { products: any[] } ) => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchCatQuery, setSearchCatQuery] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");
    const [filteredProducts, setFilteredProducts] = useState<any[]>(products);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    //==================Product Filter===========================

    const handleSearch = (query: string) => {
        setSearchQuery(query);
      };

      const handleCategory = (query: string) => {
        setSearchCatQuery(query);
      };
    
      useEffect(() => {
        setIsLoading(true);
    
        let filtered = products;
    
        if (searchQuery) {
          filtered = filtered.filter((product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }
    
        if (searchCatQuery) {
          filtered = filtered.filter((product) =>
            product.category.toLowerCase().includes(searchCatQuery.toLowerCase())
          );
        }

        if (sortOrder === "highest") {
            filtered = [...filtered].sort((a, b) => b.price - a.price);
          } else if (sortOrder === "lowest") {
            filtered = [...filtered].sort((a, b) => a.price - b.price);
          }else{
            setSortOrder('');
          }
    
        setFilteredProducts(filtered);
    
        setIsLoading(false);
      }, [searchQuery, searchCatQuery, sortOrder, products]);

    return ( 
            <>
                <div className="flex">
                    <div className="flex-grow flex flex-col">
                        <div className="flex text-black bg-white my-4 p-4 rounded-lg w-full">
                            <SearchProduct onSearch={handleSearch} />
                            <SearchCategory onSelect={handleCategory} products={products}/>
                            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                                <option value="">Sort by</option>
                                <option value="highest">Price: High to Low</option>
                                <option value="lowest">Price: Low to High</option>
                            </select>
                        </div>
                        {isLoading ? (
                            <div className="flex justify-center p-4">Loading...</div>
                        ) : (
                            <div className="grid max-sm:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((product: any) => (
                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    title={product.title}
                                    price={product.price}
                                    discount={product.discountPercentage}
                                    thumbnail={product.thumbnail}
                                    rating={product.rating}
                                    stock={product.stock}
                                />
                                ))
                            ) : (
                                <p>No products found</p>
                            )}
                            </div>
                        )}
                    </div> 
                </div>
            </>
     );
}
 
export default ProductList;