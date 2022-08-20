import React from 'react';
import { ButtonStyled } from './Button.styled';

export const Button = ({text, type, id, onClick}) => {
  return (
    <ButtonStyled id={id} type={type} onClick={onClick} > {text} </ButtonStyled>
  )
};
