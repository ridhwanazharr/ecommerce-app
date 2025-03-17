'use client'

import { useState, useEffect } from "react";
import ProductCard from '@/components/ProductCard';
import ProductSort from '@/components/ProductSort';
import FilterCard from '@/components/FilterCard';

import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";

const ProductList = ({products} : { products: any[] } ) => {
    const [sortOrder, setSortOrder] = useState<string>("");
    const [filteredProducts, setFilteredProducts] = useState<any[]>(products);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 8;
    

    //==================Product Filter===========================

    const handleSort = (query: string) => {
      setSortOrder(query);
      };

    const handleFilter = (filteredProducts: any[]) => {
      setFilteredProducts(filteredProducts);
      setSortOrder('');
      setCurrentPage(1);
    };

    
    useEffect(() => {
        setIsLoading(true);
    
        let filtered = filteredProducts;

        if (sortOrder === "highest") {
            filtered = [...filtered].sort((a, b) => b.price - a.price);
          } else if (sortOrder === "lowest") {
            filtered = [...filtered].sort((a, b) => a.price - b.price);
          } else if (sortOrder === "popular") {
            filtered = [...filtered].sort((a, b) => b.reviews.length - a.reviews.length);
          }else if (sortOrder === "rating") {
            filtered = [...filtered].sort((a, b) => b.rating - a.rating);
          }else{
            setSortOrder('');
          }
    
        //Final Proccess
        setFilteredProducts(filtered);
        setCurrentPage(1);
        setIsLoading(false);
      }, [sortOrder, products]);

      const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = Math.min(startIndex + itemsPerPage, filteredProducts.length);
      const showingOf = `Showing ${startIndex + 1}-${endIndex} of ${filteredProducts.length} Products`;
      const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

    return ( 
            <>
                <div className="flex flex-row my-10">
                    {/* Filter Card */}
                    <FilterCard products={products} onFilter={handleFilter} />

                    {/* Product List */}

                    <div className="flex-grow flex flex-col">

                        <div className="flex justify-between items-center px-4">
                          <div className="flex gap-4 items-center">
                            <p>{showingOf} </p>
                            <ProductSort onSelect={handleSort}/>
                          </div>
                        </div>
                        
                        {isLoading ? (
                            <div className="flex justify-center p-4">Loading...</div>
                        ) : (
                            <div className="grid max-sm:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                            {paginatedProducts.length > 0 ? (
                                paginatedProducts.map((product: any) => (
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

                        <div className="flex m-4 justify-between border-t-1 py-2">
                          <button className="btn-default"
                            disabled={currentPage === 1} 
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                          >
                           <FaArrowLeft /> Previous
                          </button>

                          <span> Page {currentPage} of {totalPages} </span>

                          <button className="btn-default"
                            disabled={currentPage === totalPages} 
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                          >
                           <FaArrowRight /> Next
                          </button>
                        </div>
                    </div> 
                </div>
            </>
     );
}
 
export default ProductList;