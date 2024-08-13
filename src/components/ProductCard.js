import React, { useEffect ,  useState } from 'react'
import { useCart } from '../context/CartContext';
import './ProductCard.css';


export const ProductCard = ({ product }) => {

  const { addToCart , removeFromCart , cartList} = useCart();

  const [isInCart, setIsInCart] = useState(false);

  const { name, price, image } = product;

  useEffect(() => {
    const productIsInCart = cartList.find((cartProduct) => cartProduct.id === product.id);

    if(productIsInCart){
      setIsInCart(true);
    }
    else{
      setIsInCart(false);
    }

  }, [cartList, product.id]);

  return (
    <div className="product">
      <img src={image} alt="" />
      <p className='name'>{name}</p>
      <div className="action">
        <p>${price}</p>
        { isInCart ? (<button className='remove' onClick={() => removeFromCart(product)}>Remove</button>) : (<button onClick={() => addToCart(product)}>Add To Cart</button>) }
      </div>
    </div>
  )
}
