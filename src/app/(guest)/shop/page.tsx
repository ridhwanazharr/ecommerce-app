import ProductList from '@/components/ProductList';


const ShopPage = async () => {
    let res = await fetch('https://dummyjson.com/products')
    let {products} = await res.json()

    return (
        <div className="w-9/10 justify-center mx-auto">
            <ProductList products={products}/>
        </div>
     );
}
 
export default ShopPage;