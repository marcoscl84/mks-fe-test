import styled from 'styled-components';
import Image from 'next/image';

export const ResponsiveImage = styled(Image)`
    max-width: 100%;
    height: auto;

    @media screen and (max-width: 600px) {
        width: 100px;
        height: 100px;

        margin-bottom: -18px;
    }

`;