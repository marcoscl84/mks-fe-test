import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    

    background-color: #0F52BA;
    width: 100%;
    height: 101px;

    @media (max-width: 1200px) {
        padding: 0 6rem;
    }

    @media (max-width: 900px) {
        padding: 0 4rem;
        height: 78px;
    }

    @media (max-width: 600px) {
        padding: 0 1rem;
        height: 48px;
    }
`