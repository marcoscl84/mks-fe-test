import styled from 'styled-components';

export const CounterContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border: 1px solid #BFBFBF;
    border-radius: 4px;
    padding: 3px;
    color: #000000;

    font-size: 8px;
    font-weight: 400;

    @media screen and (max-width: 600px) {
    font-size: 18px;
    padding: 8px;
    }
`;