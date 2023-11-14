import Image from "next/image";
import { Card } from "../styles/card/Card.style";
import { ButtonAddToCart } from "../styles/card/ButtonAdd.style";
import { NameValueContainer } from "../styles/card/NameValueContainer.style";
import { CardSubContainer } from "../styles/card/CardSubContainer.style";
import { FiShoppingBag } from 'react-icons/fi';

interface CardProps {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: number;
  onAddToCart: () => void;
}

const CardComponent: React.FC<CardProps> = ({
  id,
  name,
  description,
  photo,
  price,
  onAddToCart,
}) => {
  const limitedDescription =
    description.length > 100 ? `${description.slice(0, 80)}...` : description;

  return (
    <Card>
      <CardSubContainer>
        <Image src={photo} alt={name} width={150} height={150} />
        
        <NameValueContainer>
          <h4>{name}</h4>
          <h3>R${(Math.round(price * 100) / 100).toLocaleString('pt-BR')}</h3>

        </NameValueContainer>
        
        <p>{limitedDescription}</p>
      </CardSubContainer>

      <ButtonAddToCart onClick={onAddToCart}><FiShoppingBag />Comprar</ButtonAddToCart>
    </Card>
  );
};

export default CardComponent;
