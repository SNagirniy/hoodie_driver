'use client';

import { createContext, useState, useContext, useEffect } from 'react';


const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [hydrated, setHydrated] = useState(false);
  const [cart, setCart] = useState(() => {
  
    if(typeof window !== 'undefined'){
    try {
      const value = window.localStorage.getItem('cart')
      return value ? JSON.parse(value) : []
    } catch (error) {
      console.log(error)
    }
  }});

  useEffect(() => {
    setHydrated(true);
  }, []);

  // Збереження кошика в localStorage при кожній зміні
  useEffect(() => {
    try {
      const data = JSON.stringify(cart)
        localStorage.setItem('cart', data);
    } catch (error) {
        console.log(error)
    }
    
  }, [cart]);

  const addToCart = (product) => {
    const filteredCart = cart.filter(el => el.id !== product.id);
    setCart([...filteredCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const changeCartItem =(prodId, changedValueObj)=> {
    setCart(prevArray => {
      return prevArray.map(item => 
          item.id === prodId ? { ...item, ...changedValueObj } : item
      );
  });}

  const isExist = (productId)=> {
    return cart?.some((item) => item.id === productId);
  }

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart,isExist, addToCart, removeFromCart, clearCart,changeCartItem, hydrated }}>
      {children}
    </CartContext.Provider>
  );
};