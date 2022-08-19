import React from 'react';
import { CardStyled } from './Card.styled';

const Card = ({content}) => {
  return (
    <>
    <CardStyled>{content}</CardStyled>
    </>
  )
};

export default Card;