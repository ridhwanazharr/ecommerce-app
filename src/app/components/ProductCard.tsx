import { FaStar } from "react-icons/fa6";

type ProductCardProps = {
    id: any;
    title: string;
    thumbnail: any;
    price: number;
    discount: number;
    rating: number;
    stock: number;
  };
  
  const ProductCard = ({ id, title, thumbnail, price, discount, rating, stock }: ProductCardProps) => {
    return ( 
        <div className="product-card" key={id}>
            <div className="product-img">
                <img src={thumbnail} alt="Product Image"/>
            </div>
            <div className="product-card-body">
                <h3 className="product-title">{title}</h3>
                <div className="price-discount">
                    <h4 className="font-bold">${price}</h4>
                    <p className="discount-badge">-{discount}%</p>
                </div>
                <div className="rating-stock">
                    <div className="rating"><FaStar/> {rating}</div>
                    <p className={stock <= 5 ? 'stock-low' : 'stock'}>Stock : {stock}</p>
                </div>
            </div>
        </div>
    );
}
 
export default ProductCard;