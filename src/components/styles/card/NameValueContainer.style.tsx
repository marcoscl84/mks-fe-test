import styled from "styled-components";

export const NameValueContainer = styled.div`
    display: flex;
    width: 100%;
    height: 25px;
    margin: 0.3rem 0 0.8rem;
    padding: 0.1rem 0;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.1rem;
    background-color: #FFFFFF;
    border: none;
    text-align: left;

    h4 {
        margin: 0;
        line-height: 1;

        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
    }

    h3 {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        line-height: 1;

        padding: 0.3rem;
        text-align: center;

        font-size: 15px;
        font-weight: 700;
        line-height: 15px;
        color: #ffffff;
        background-color: #373737;
        border-radius: 5px;
    }
`;
