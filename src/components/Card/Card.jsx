import { CardStyled } from './Card.styled';
import  Title  from '../Title/Title';
import Input from '../Input/Input';
import { Button } from '../Button/Button';

const Card = () => {
  return (
    <>
    <CardStyled>
      <Title title="Calcule seu IMC"/>
      <Input min="0" max="100" label="Peso" span="65" />
      <Input min="0" max="100" label="Altura" span="1.64" />
      <Button type="submit" text="Calcular" />
    </CardStyled>
    </>
  )
};

export default Card;