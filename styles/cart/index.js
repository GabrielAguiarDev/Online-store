import styled from "styled-components";

export const Cart = styled.section`
    h1 {
        font-size: 20px;
        margin: 1.5rem 0.5rem;
    }

    .container-products {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    .insertCoupon {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        margin: 1.5rem 0;
    }

    .insertCoupon input {
        padding: 5px 12px;
        height: 50px;
        width: 55%;
        font-size: 18px;
        outline: none;
        border-radius: 25px 0 0 25px;
        background-color: var(--color4);
        color: var(--text);
        box-shadow: 4px 3px 8px #0000004f;
        transition: all ease 0.5s;
    }

    .insertCoupon button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        font-weight: bold;
        color: var(--color2);
        padding: 15px 8px;
        border-radius: 0 25px 25px 0;
        box-shadow: 4px 3px 8px #0000004f;
        transition: all ease 0.3s;
    }

    .insertCoupon.error input {
        border: 2px solid var(--color8);
        border-right: 0;
    }

    .insertCoupon.error button {
        color: var(--color8);
        border: 2px solid var(--color8);
        border-left: 0;
    }

    .infoCoupon {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #c6e6ff21;
        height: 70px;
        width: 95%;
        margin: 0 auto;
        border-radius: 8px;
        padding: 6px 45px 6px 15px;
        box-shadow: 5px 5px 6px #00000030;
        margin-bottom: 1.5rem;
        gap: 10px;
    }

    .infoCoupon svg {
        position: absolute;
        right: -5px;
        top: -9px;
        background-color: var(--color8);
        color: var(--color4);
        border-radius: 50%;
        font-size: 26px;
    }

    .infoCoupon p {
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        font-size: 17px;
    }

    .infoCoupon p span:nth-child(2) {
        color: var(--color6);
    }

    .final-price {
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
        padding: 0 15px;
        gap: 1.5rem;
        color: var(--text);
        opacity: 0.9;
        font-size: 16px;
    }

    .final-price .sub, .final-price .coupon, .final-price .total {
        display: flex;
        justify-content: space-between;
    }

    .final-price .sub:nth-child(2) span, .final-price .coupon:nth-child(2) span {
        font-size: 16px;
        font-weight: bold;
    }

    .final-price .coupon span:nth-child(2) {
        color: var(--text2);
    }

    .final-price .total {
        color: var(--color6);
        font-size: 18px;
        font-weight: bold;
    }

    .checkout {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        margin-bottom: 1.5rem;
        height: 45px;
        width: 70%;
        text-decoration: none;
        font-size: 19px;
        font-weight: bold;
        border-radius: 25px;
        background-color: var(--color2);
        color: var(--text);
    }
`;