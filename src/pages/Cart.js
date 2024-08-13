import React from 'react'
import { useCart } from '../context/CartContext';
import { CartCard } from '../components';
import { useTitle } from '../hooks/useTitle';

export const Cart = () => {

  const { total } = useCart();

  useTitle('Cart');

  const cartItems = [
    {"id":1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price":149, "image":"assets/images/1001.png"},
    {"id":2, "name": "boAt Rockerz 450", "price":200, "image":"assets/images/1002.png"},
  ]

  return (
    <main>
      <section className='cart'>
        <h1>Cart Items: {cartItems.length} / ${total}</h1>
        {cartItems.map((cartItem) => (
          <CartCard key={cartItem.id} cartItem={cartItem} />
        ))}
      </section>
    </main>
  )
}
