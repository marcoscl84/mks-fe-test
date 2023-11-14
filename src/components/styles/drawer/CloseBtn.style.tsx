import styled from 'styled-components';

export const CloseBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #000000;
  width: 38px;
  height: 38px;

  font-weight: 400;
  font-size: 18px;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    width: 34px;
    height: 34px;

    font-size: 15px;
  }
`;