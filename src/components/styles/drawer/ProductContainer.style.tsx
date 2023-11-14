import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  width: 100%;
  height: 100px;

  h3 {
    font-weight: 900;
    font-size: 15px;
    line-height: 17px;
    color: #000000;
  }

  h5 {
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    color: #000000;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: 180px;
    gap: 0;

    h5 {
        font-size: 15px;
        line-height: 17px;
    }
  }
`;