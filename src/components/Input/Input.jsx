import React from 'react'
import { InputStyled, Slider,  DivLabel } from './Input.styled';

const Input = ({min, max, label, span}) => {
  return (
    <Slider>
        <DivLabel>
            <label>{label}</label>
            <span>{span}</span>
        </DivLabel>
        <InputStyled className="roll" type='range' min={min} max={max}  />      
    </Slider>
  )
};

export default Input;