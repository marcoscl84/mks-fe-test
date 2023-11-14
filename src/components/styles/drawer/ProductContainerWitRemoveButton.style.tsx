import styled from 'styled-components';

export const ProductContainerWitRemoveButton = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

border-radius: 8px;
background-color: #ffffff;
width: 100%;
height: 100px;

padding: 0 1rem;

@media screen and (max-width: 600px) {
    height: 200px;
}
`;