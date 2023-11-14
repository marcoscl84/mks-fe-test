import styled from 'styled-components';

export const ValueCounterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    width: 45%;

    align-items: center;

    @media screen and (max-width: 600px) {
        width: 100%;

        h3 {
            font-size: 22px;
        }
    }
`;