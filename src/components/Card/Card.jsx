import React, { useState } from 'react'
import { CardStyled } from './Card.styled';
import  Title  from '../Title/Title';
import Input from '../Input/Input';
import { Button } from '../Button/Button';
import { Result } from '../Result/Result';

const Card = ({}) => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState('');

  const handleChange1 = (e) => {
    setWeight(e.target.value);
    console.log(e.target.value);
  }
  const handleChange2 = (e) => {
    setHeight(e.target.value);
    console.log(e.target.value);
  }

  const ImcCalc = () => {
    
    if(weight || height) {
      const imc = (weight/(height*height))
      let classification = ''
      
      if (imc < 18.5) {
        classification = 'Abaixo do peso'
        return ("IMC: " + imc + "(" + classification + ")" )
      } else if (imc < 25) {
        classification = 'Peso normal'
      } else if (imc < 30) {
        classification = 'Acima do peso'
      } else if (imc < 35) {
        classification = 'Obesidade Grau I'
      } else if (imc < 41) {
        classification = 'Obesidade Grau II'
      } else {
        classification = 'Obesidade Grau III'
      }
        setResult("IMC: " + imc.toFixed(2) + " (" + classification + ")." )
    } else {
      setResult('Insira a altura e o peso')
    }
  }

  return (
    <>
    <CardStyled>
      <Title title="Calcule seu IMC"/>
      <Input id="weight" min="0" max="100" label="Peso" step="1" span={weight} value={weight} onChange={handleChange1}/>
      <Input id="height" min="0" max="2.51" label="Altura"  step="0.01" span={height} value={height} onChange={handleChange2}/>
      <Button id="calcular" type="submit" text="Calcular" onClick={ImcCalc} />
      <Result result={result} />
    </CardStyled>
    </>
  )
};

export default Card;