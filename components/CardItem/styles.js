import styled from "styled-components";

export const Card = styled.div`
    min-width: ${props => (props.width ? props.width : "150px")};
    min-height: 200px;
    background-color: var(--color4);
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    h3 {
        color: var(--color3);
        transform: rotate(-45deg);
    }
`;

export const CardRequest = styled.div`

`;