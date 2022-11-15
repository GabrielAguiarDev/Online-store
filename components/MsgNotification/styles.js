import styled from "styled-components";

export const Message = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: var(--color4);
    border-radius: 8px;
    padding: 13px 16px;

    svg {
        font-size: 22px;
    }

    p {
        font-size: 16px;
        font-weight: bold;
        color: var(--text);
    }
`; 