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
    display: flex;
    align-items: center;
    background-color: #c6e6ff21;
    padding: 10px;
    width: 95%;
    border-radius: 8px;

    .photoProduct {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 130px;
        height: 90px;
        background-color: var(--color4);
        border-radius: 8px;
    }

    .photoProduct h3 {
        transform: rotate(-45deg);
        font-size: 15px;
        letter-spacing: 2px;
        color: var(--color3);
    }

    .info {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 15px;
        padding-left: 15px;
    }

    .info h2 {
        font-size: 17px;
    }

    .info .pricing {
        display: flex;
        gap: 15px;
    }

    .info .pricing span {
        color: var(--color1);
        font-weight: bold;
        font-size: 17px;
    }

    .info .pricing span:nth-child(2) {
        font-size: 16px;
        color: var(--color7);
        text-decoration: line-through;
        font-style: italic;
    }

    .info .status span:nth-child(1) {
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 1px;
    }

    .info .status span:nth-child(2) {
        font-size: 13px;
        font-weight: bold;
        opacity: 0.4;
        letter-spacing: 1px;
    }

    .Delivered {
        color: var(--color6);
    }

    .Pending {
        color: var(--color7);
    }

    .Cancelled {
        color: var(--color8);
    }

    .Processing {
        color: var(--color5);
    }
`;