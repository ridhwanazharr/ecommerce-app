import ProductCard from '@/components/ProductCard';

export async function generateMetadata({ params }: { params: { category: string } }) {
    return {
      title: `Buy the Best Deals for ${params.category} for sale | RawingShop`,
      description: `Find the best deals for ${params.category}`,
    };
  }

const CategoryShopPage = async ({params} : {params : Promise<{category : any}>}) => {
    const categoryQuery = (await params).category;
    let res = await fetch('https://dummyjson.com/products')
    let {products} = await res.json()
    const filteredProducts = products.filter((product: any) =>
        product.category.toLowerCase().includes(categoryQuery.toLowerCase())
      );

    const firstProduct = filteredProducts[0];

    const relevantProducts = products.filter((product: any) =>
        product.category.toLowerCase().includes(firstProduct.category.toLowerCase())
      );

    return (
        <div>
            <div className="flex p-4 justify-center">
                <h2 className="font-semibold text-xl text-center p-4"> {categoryQuery}</h2>
            </div>
            <div className="justify-center mx-auto grid max-sm:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
                {filteredProducts.map((product : any) => (
                    <ProductCard key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        discount={product.discountPercentage}
                        thumbnail={product.thumbnail}
                        rating={product.rating}
                        stock={product.stock}
                    />
                ))}
            </div>
        </div> 
     );
}
 
export default CategoryShopPage;