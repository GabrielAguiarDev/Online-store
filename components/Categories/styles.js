import styled from "styled-components";

export const Categories = styled.div`
    margin-top: 2rem;

    .category { 
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        width: 90vw;
        height: 90px;
        margin: 0 auto;
        margin-top: 1.5rem;
        gap: 10px;
    }

    .category a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        font-size: 36px;
        color: var(--color3);
        border-radius: 10px;
        max-width: 105px;
        min-width: 100px;
        background-color: var(--color4);
    }
`;