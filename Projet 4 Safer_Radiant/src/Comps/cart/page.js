"use client"

import React, { useState } from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Produits</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} $
            <button onClick={() => addToCart(product)}>Ajouter au panier</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ShoppingCart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h2>Panier</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price} $
            <button onClick={() => removeFromCart(item)}>Retirer du panier</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

function Cart  () {
  const [products, setProducts] = useState([
    { id: 1, name: 'Produit 1', price: 10 },
    { id: 2, name: 'Produit 2', price: 15 },
    { id: 3, name: 'Produit 3', price: 20 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };

  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  return (
    <div>
      <ProductList products={products} addToCart={addToCart} />
      <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default Cart;
