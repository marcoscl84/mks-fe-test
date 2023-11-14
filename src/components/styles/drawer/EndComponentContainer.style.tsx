import styled from 'styled-components';

export const EndComponentContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 180px;
  margin-top: auto;

  @media screen and (max-width: 600px) {
    height: 90px;
  }
`;