import styled from "styled-components";

export const AllCategories = styled.div`
    h1 {
        font-size: 20px;
        margin: 1.5rem 0.5rem;
    }

    .container_products {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        width: 95vw;
        margin: 0 auto;
        gap: 12px;
        margin-top: 2rem;
        margin-bottom: 6rem;
    }

    .container_products > div {
        min-width: 163px;
    }

    .container_products div svg {
        box-shadow: 3px 3px 3px #00000026;
        top: -8px;
        right: -6px;
        background-color: var(--color4);
        border-radius: 50%;
        height: 38px;
        width: 37px;
    } 

    .container_products div .photoProduct {
        height: 141px;
        width: 147px;
        margin-bottom: 10px;
    }

    .container_products div .info {
        padding: 0;
    }

    .container_products div .info h2 {
        font-size: 15px;
    }

    .container_products div .pricing {
        gap: 9px;
    }

    .container_products div .pricing span:nth-child(2) {
        font-size: 13px;
    }
`;