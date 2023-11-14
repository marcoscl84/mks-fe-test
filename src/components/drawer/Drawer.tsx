import React, { useState } from 'react';
import styled from 'styled-components';
import { Product } from '../../../@types/types';
import { useCart } from '../../../contexts/CartContext';

import { TopContainer } from '../styles/drawer/TopContainer.style';
import { CloseBtn } from '../styles/drawer/CloseBtn.style';
import { ProductsContainer } from '../styles/drawer/ProductsContainer.style';
import { ProductContainerWitRemoveButton } from '../styles/drawer/ProductContainerWitRemoveButton.style';
import { ProductContainer } from '../styles/drawer/ProductContainer.style';
import { RemoveButton } from '../styles/drawer/RemoveButton.style';
import { NameImgContainer } from '../styles/drawer/NameImgContainer.style';
import { ValueCounterContainer } from '../styles/drawer/ValueCounterContainer.style';
import { EndComponentContainer } from '../styles/drawer/EndComponentContainer.style';
import { ProductsPriceSum } from '../styles/drawer/ProductsPriceSum.style';
import { PurchaseBtn } from '../styles/drawer/PurchaseBtn.style';
import { CounterContainer } from '../styles/drawer/CounterContainer.style';
import { CalcButton } from '../styles/drawer/CalcButton.style';
import { Count } from '../styles/drawer/Count.style';
import { ResponsiveImage } from '../styles/drawer/ResponsiveImage.style';

interface DrawerProps {
  cartItems: Product[];
  $isOpen: boolean;
  onClose: () => void;
  onRemoveItem?: ((itemId: number) => void) | null;
}

const StyledDrawer = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: 33.33%; 
  background-color: #0F52BA;
  color: white;
  box-shadow: -5px 0px 6px 0px #00000021;

  transition: transform 0.6s ease-in-out;

  transform: translateX(${(props) => (props.$isOpen ? '0%' : '100%')});

  @media (max-width: 900px) {
        width: 95%;
    }
`;

const Drawer: React.FC<DrawerProps> = ({ cartItems, $isOpen, onClose, onRemoveItem }) => {
    const { removeFromCart } = useCart();
    const [counts, setCounts] = useState<{ [key: string]: number }>({});
  
    const increment = (itemId: number) => {
      setCounts((prevCounts) => ({
        ...prevCounts,
        [itemId]: (prevCounts[itemId] || 0) + 1,
      }));
    };
  
    const decrement = (itemId: number) => {
      setCounts((prevCounts) => ({
        ...prevCounts,
        [itemId]: Math.max(0, (prevCounts[itemId] || 0) - 1),
      }));
    };
  
    const calculateTotal = () => {
      let total = 0;
  
      cartItems.forEach((item) => {
        const itemCount = counts[String(item.id)] || 0;
        total += item.price * itemCount;
      });
  
      return total;
    };
  
    const removeItem = (itemId: number) => {
      const updatedCounts = { ...counts };
      delete updatedCounts[itemId];
      setCounts(updatedCounts);

      removeFromCart(itemId);
  
      if (onRemoveItem) {
        console.log('ZZZZAZ')
        onRemoveItem(itemId);
      }
    };
    
    return (
        <StyledDrawer $isOpen={$isOpen}>
            <TopContainer>
                <h2>Carrinho de Compras</h2>
                <CloseBtn onClick={onClose}>X</CloseBtn>
            </TopContainer>
            
            <ProductsContainer>
                {cartItems.map((item, index) => (
                    <ProductContainerWitRemoveButton key={index}>
                        <ProductContainer>
                            <NameImgContainer>
                                <ResponsiveImage src={item.photo} alt={''} width={80} height={80} />
                                <h5>{item.name}</h5>
                            </NameImgContainer>
                
                            <ValueCounterContainer>
                                <CounterContainer>
                                    <CalcButton onClick={() => decrement(Number(item.id))}>-</CalcButton>
                                    <Count>{counts[String(item.id)] || 0}</Count>
                                    <CalcButton onClick={() => increment(Number(item.id))}>+</CalcButton>
                                </CounterContainer>
                    
                                <h3>
                                    {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0,
                                    }).format(item.price)}
                                </h3>
                
                            </ValueCounterContainer>
                        </ProductContainer>
                        <RemoveButton onClick={() => removeItem(Number(item.id))}>X</RemoveButton>
                    </ProductContainerWitRemoveButton>
                ))}
            </ProductsContainer>
        
            <EndComponentContainer>
                <ProductsPriceSum>
                    <h2>Total:</h2>
                    <h1>{calculateTotal().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h1>
                </ProductsPriceSum>
        
                <PurchaseBtn>Finalizar Compra</PurchaseBtn>
            </EndComponentContainer>
        </StyledDrawer>
    );  
};

export default Drawer;

