import styled from "styled-components";

export const Settings = styled.div`
    position: relative;
    margin-top: 2rem;

    h1 {
        font-size: 23px;
        margin: 2rem 1rem;
    }

    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
    }

    ul li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60px;
        width: 95%;
        padding: 0 1rem;
        background-color: var(--nav);
        border-radius: 8px;
        font-size: 17px;
        font-weight: bold;
    }

    ul li label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    ul li svg {
        font-size: 26px;
    }

    ul li:nth-child(4) svg, ul li:nth-child(5) svg {
        font-size: 31px;
    }
`;

export const CheckboxEmail = styled.div`
    display: flex;
    align-items: center;
    height: 24px;
    width: 48px;
    padding: 0 2px;
    background-color: ${props => (props.active ? "var(--color2)" : "var(--color0)")};
    border-radius: 15px;
    transition: all ease 0.3s;

    .circle {
        height: 20px;
        width: 20px;
        margin-left: ${props => (props.active ? "24px" : "0")};
        border-radius: 50%;
        background-color: ${props => (props.active ? "var(--color0)" : "var(--text2)")};
        transition: all ease 0.3s;
    }

    input {
        display: none;
    }
`;

export const CheckboxMsg = styled.div`
    display: flex;
    align-items: center;
    height: 24px;
    width: 48px;
    padding: 0 2px;
    background-color: ${props => (props.active ? "var(--color2)" : "var(--color0)")};
    border-radius: 15px;
    transition: all ease 0.3s;

    .circle {
        height: 20px;
        width: 20px;
        margin-left: ${props => (props.active ? "24px" : "0")};
        border-radius: 50%;
        background-color: ${props => (props.active ? "var(--color0)" : "var(--text2)")};
        transition: all ease 0.3s;
    }

    input {
        display: none;
    }
`;