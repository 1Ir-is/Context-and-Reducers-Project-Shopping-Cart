import React from 'react'
import './CartCard.css';


export const CartCard = ({cartItem}) => {

  const { name, price, image } = cartItem;

  return (
    <div className="cartCard">
      <img src={image} alt="" />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button>Remove</button>
    </div>
  )
}
