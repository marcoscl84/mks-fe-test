'use client';

import CardComponent from '@/components/card/Card';
import { ProductsContainerHome } from '@/components/styles/ProductsContainerHome.style';
import React, { useEffect, useState } from 'react';
import { useCart } from '../../contexts/CartContext';

interface Product {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: number;
  onAddToCart: () => void;
}

const Home: React.FC = () => {
  const { cart, addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=id&orderBy=DESC');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product: Product) => {
    const isProductInCart = cart.some((cartItem) => cartItem.id === product.id);

    if (!isProductInCart) {
      addToCart(product);
    } else {
      console.log('Produto já no carrinho:', product.name);
    }
  };

  return (
      <ProductsContainerHome>
        {products.map((product) => (
          <CardComponent
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            photo={product.photo}
            price={product.price}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </ProductsContainerHome>

  );
};

export default Home;
