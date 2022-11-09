import styled from "styled-components";

export const ProfileEdit = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;

    .container-image {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80px;
        margin: 0 auto;
    }

    .container-image .image {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        height: 80px;
        width: 80px;
        background-color: var(--color1);
        color: var(--text);
    }

    .container-image .camera {
        position: absolute;
        bottom: -8px;
        right: 1px;
        font-size: 31px;
        background-color: var(--color4);
        border-radius: 50%;
        padding: 6px 6px;
    }

    .container-image .image svg {
        font-size: 45px;
    }

    .container-info {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 90%;
        margin: 0 auto;
        margin-top: 2rem;
    }

    .container-info input {
        height: 40px;
        border-radius: 25px;
        padding: 5px 15px;
        font-size: 16px;
        border: 0;
        outline: 0;
        background-color: var(--color4);
        color: var(--text);
    }
`;

export const Button = styled.button`
    font-size: 19px;
    font-weight: bold;
    background-color: ${props => (props.change ? "var(--color1)" : "var(--color4)")};
    color: var(--text);
    border-radius: 25px;
    border: none;
    margin: 0 auto;
    margin-top: 1rem;
    outline: none;
    width: 90%;
    height: 43px;
    transition: all ease 0.3s;
`;