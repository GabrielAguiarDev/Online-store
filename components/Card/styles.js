import styled from "styled-components";

export const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: ${props => (props.flexDirection ? "column" : "row")};
    justify-content: center;
    align-items: center;
    background-color: var(--color4);
    padding: 10px;
    width: ${props => (props.width ? props.width : "")};
    max-width: ${props => (props.maxWidth ? props.maxWidth : "")};
    min-height: ${props => (props.minHeight ? props.minHeight : "95px")};
    border-radius: 8px;

    svg {
        position: absolute;
        top: -8px;
        right: -6px;
        box-shadow: 3px 3px 3px #00000026;
        background-color: var(--color4);
        border-radius: 50%;
        height: 35px;
        width: 34px;
        font-size: 32px;
        color: var(--color8);
        padding: 4px;
    } 

    h3 {
        transform: rotate(-45deg);
        font-size: 15px;
        letter-spacing: 2px;
        color: var(--color3);
    }

    .photoProduct {
        display: flex;
        align-items: center;
        justify-content: center;
        /* min-height: 141px;
        min-width: 147px; */
        margin-bottom: ${props => (props.marginBottom ? props.marginBottom : "")};
        background-color: var(--body);
        border-radius: 8px;

        width: ${props => (props.photoWidth ? props.photoWidth : "")};
        height: ${props => (props.photoHeight ? props.photoHeight : "")};

        min-height: 100px;
        min-width: 110px;
        margin-right: ${props => (props.marginRight ? props.marginRight : "")};
    }

    .info {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 15px;
    }

    .info h2 {
        font-size: 15px;
    }

    .info .pricing {
        display: flex;
        gap: 9px;
    }

    .info .pricing span {
        color: var(--color1);
        font-weight: bold;
        font-size: 17px;
    }

    .info .pricing span:nth-child(2) {
        font-size: 13px;
        color: var(--color7);
        text-decoration: line-through;
        font-style: italic;
        opacity: 0.6;
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

    .info .amount {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .info .amount button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        width: 25px;
        height: 25px;
        border-radius: 4px;
        background-color: var(--color0);
        color: var(--color2);
    }

    .info .amount span {
        font-size: 19px;
        font-family: monospace;
        font-weight: bold;
    }

    .info .button {
        width: 170px;
        margin: 0 auto;
        height: 25px;
        border-radius: 13px;
        background-color: var(--color0);
        font-weight: bold;
    }

    .info .info_bottom {
        display: flex;
        position: relative;
        justify-content: space-between;
    }

    .info .info_bottom .star {
        position: relative;
        display: flex;
        align-items: baseline;
        color: var(--text2);
    }

    .info .info_bottom .star svg {
        position: relative;
        left: 0;
        top: 6px;
        bottom: 0;
        right: 0;
        width: 24px;
        height: 30px;
        padding: 0;
        display: inline-block;
        box-shadow: none;
        color: #eded00;
    }

    .info .info_bottom .buy {
        position: relative;
        top: 6px;
        bottom: 0;
        left: 0;
        right: 0;
        width: 60px;
        height: 32px;
    }

    .info .info_bottom .buy svg {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: var(--color0);
        color: var(--color2);
        width: 60px;
        height: 31px;
        border-radius: 11px;
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