import styled from "styled-components";

export const Favorites = styled.section`
    margin-bottom: 6rem;
    
    h1 {
        display: inline-block;
        font-size: 20px;
        margin: 1.5rem 0.5rem;
    }

    span {
        position: relative;
        top: -5px;
        left: -3px;
        font-size: 17px;
        font-weight: bold;
        color: var(--text2);
    }

    .container-products {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
`;