import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0px 0px;
    width: 237.56px;
    height: 285px;
    border-radius: 8px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 8px 0px #00000022;
    border: none;
    text-align: left;
    overflow: hidden;
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 900px) {
        width: 228.14px;

        h4 {
            font-size: 15px;
        }
    }

`