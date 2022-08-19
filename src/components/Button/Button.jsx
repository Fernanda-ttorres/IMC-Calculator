import React from 'react';
import { ButtonStyled } from './Button.styled';

export const Button = ({text, type}) => {
  return (
    <ButtonStyled type={type}> {text} </ButtonStyled>
  )
};
