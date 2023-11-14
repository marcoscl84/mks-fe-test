import styled from 'styled-components';

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem 0rem;

  h2 {
    width: 40%;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;
    padding: 0.5rem 2rem 1rem;

    h2 {
        width: 50%;
    }
  }
`;