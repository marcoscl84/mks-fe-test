import styled from "styled-components";

export const ButtonCart = styled.div`
    display: flex;
    gap: 0.8rem;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem;

    height: 45px;
    border-radius: 8px;
    border: none;
    background-color: #FFFFFF;
    color: #000000;
    cursor: pointer;

    font-weight: 700;
    font-size: 18px;
    line-height: 21.94px;

    @media screen and (max-width: 600px) {
        gap: 0.5rem;
        font-size: 12px;
        padding: 0 1rem;
        height: 25px;
    }
`