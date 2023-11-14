'use client';

import React from "react";
import { useCart } from "../../../contexts/CartContext";
import { Header } from "../styles/header/Header.style";
import { Logo } from "../styles/header/Logo.style";
import Drawer from "../drawer/Drawer";
import { ButtonCart } from "../styles/header/ButtonCart.style";
import { BsCart4 } from 'react-icons/bs';
import { BtnContainer } from "../styles/header/BtnContainer";

export const HeaderComponent: React.FC = () => {
  const { cart, removeFromCart } = useCart();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [removeItemFunction, setRemoveItemFunction] = React.useState<((itemId: number) => void) | null>(null);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  React.useEffect(() => {
    if (!isDrawerOpen) {
      setRemoveItemFunction(null);
      return;
    }

    setRemoveItemFunction((itemId: number) => {
      if (itemId !== undefined) {
        removeFromCart(itemId);
      }
    });
  }, [isDrawerOpen]);
    
  return (
    <>
      <Header>
        <Logo>
          <h1>MKS</h1>
          <h5>Sistemas</h5>
        </Logo>
        
        <BtnContainer>
          <ButtonCart onClick={openDrawer}>
            <BsCart4 />
            {cart.length}
          </ButtonCart>
        </BtnContainer>

      </Header>

      <Drawer cartItems={cart} $isOpen={isDrawerOpen} onClose={closeDrawer} onRemoveItem={removeItemFunction} />
    </>
  );
}