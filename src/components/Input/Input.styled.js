import styled from "styled-components";

export const Slider = styled.div`
    width: 19rem;
    height: 5.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.2rem;
    gap: 0.7rem;

    label {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 250;
        font-size: 1.3rem;
        color: #000000;
    }

    span {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 250;
        font-size: 2.2rem;
        color: #f7b718;
    }
`;

export const DivLabel = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const InputStyled = styled.input`
    appearance: none;
    width: 100%;
    height: 1.2rem;
    border-radius: 0.2rem;
    background: #ffffff;
    
    &.roll::-webkit-slider-thumb {
        appearance: none;
        width: 2.3rem;
        height: 2.3rem;
        background: #f7b718;
        border-radius: 10rem;
        cursor: pointer;
    }   
`;
