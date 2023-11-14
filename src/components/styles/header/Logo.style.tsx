import styled from "styled-components";

export const Logo = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: flex-end;
    text-align: center;
    padding: 0 4rem;
    color: #FFFFFF;

    h1 {
      font-size: 2rem;
      font-weight: bold;
    }

    h5 {
      font-size: 1rem;
      font-weight: normal;
    }

    @media screen and (max-width: 600px) {
      padding: 0 1rem;

      h1 {
        font-size: 1.7rem;
        font-weight: bold;
      }
  
      h5 {
        font-size: 0.8rem;
      }
    }
`;
