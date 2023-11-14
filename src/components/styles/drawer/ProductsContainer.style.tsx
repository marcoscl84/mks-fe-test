import styled from 'styled-components';

export const ProductsContainer = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
width: 100%;
max-height: 800px;
overflow-y: auto;
padding: 0rem 2rem;

scrollbar-width: thin;
scrollbar-color: transparent transparent;

&::-webkit-scrollbar {
    width: 6px;
}

&::-webkit-scrollbar-thumb {
    background-color: transparent;
}

@media screen and (max-width: 600px) {
    gap: 1rem;
}
`;