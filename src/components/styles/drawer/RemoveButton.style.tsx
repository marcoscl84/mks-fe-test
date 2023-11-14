import styled from 'styled-components';

export const RemoveButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #000000;
    width: 14px;
    height: 14px;

    color: #ffffff;
    font-weight: 300;
    font-size: 10px;
    cursor: pointer;

    margin-right: -23px;
    margin-top: -87px;

    @media screen and (max-width: 600px) {
        margin-top: -137px;
        margin-right: -5px;
        font-size: 16px;

        color: #000000;
        background-color: #ffffff;
    }
`;