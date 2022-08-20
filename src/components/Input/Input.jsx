import React from 'react'
import { InputStyled, Slider,  DivLabel } from './Input.styled';

const Input = ({min, max, label, step, id, span, value, onChange }) => {

  // const [valor, setValor] = useState(0);

  // const handleChange = (e) => {
  //   setValor(e.target.value);
  //   console.log(e.target.value);
  // }

  return (
    <Slider>
        <DivLabel>
            <label>{label}</label>
            <span>{span}</span>
        </DivLabel>
        <InputStyled id={id} className="roll" type='range' min={min} max={max} step={step} value={value} onChange={onChange}/>
      </Slider>
  )
};

export default Input;