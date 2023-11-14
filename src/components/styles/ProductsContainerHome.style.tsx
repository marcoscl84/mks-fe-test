import styled from "styled-components";

export const ProductsContainerHome = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.5rem 1.5rem;
  padding: 6rem 9rem;

  @media (max-width: 1200px) {
    padding: 4rem 6rem;
  }

  @media (max-width: 900px) {
    padding: 3rem 4rem;
  }

  @media (max-width: 600px) {
    padding: 2rem 1rem;
  }
`;
