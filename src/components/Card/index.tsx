import React from 'react';

import { Container } from './styles';

interface CardProps{
  title?: string;
  subtitle?: string;
}

const Card: React.FC<CardProps> = (Props) => {
  return (
    <Container>
      <span></span>
      <h2>{Props.title}</h2>  
      <p>{Props.subtitle}</p>
    </Container>
  );
};

export default Card;
