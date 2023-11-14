import styled from 'styled-components';

export const PurchaseBtn = styled.div`
background-color: #000000;
width: 100%;

display: flex;
justify-content: center;
align-items: center;

height: 97px;
font-size: 28px;
font-weight: 700;
margin-top: auto;

cursor: pointer;

@media screen and (max-width: 600px) {
  height: 57px;
  font-size: 18px;
}
`;