import styled from "styled-components";

export const Products = styled.section`
    margin-top: 2rem;
    margin-bottom: 6rem;

    .container_top {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .container_top h1 {
        display: inline-block;
        margin-left: 0.5rem;
        font-size: 20px;
    }

    .container_top .buttonList {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-right: 10px;
    }

    .container_top .buttonList button {
        background-color: transparent;
    }

    .container_top .buttonList button svg {
        font-size: 28px;
        color: var(--text);
    }

    .container_top .buttonList button.active svg {
        color: var(--color1);
    }

    .container_products {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin: 0 auto;
        gap: 12px;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
`;