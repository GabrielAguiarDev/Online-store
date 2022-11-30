import styled from "styled-components";

export const InputForm = styled.label`
    position: relative;

    span {
        position: absolute;
        top: -7px;
        left: 8px;
        background-color: var(--nav);
        color: var(--color0);
        padding: 0px 10px 3px;
        border-radius: 0 0 5px 5px;
        font-size: 14px;
    }

    input {
        width: 100%;
        height: 49px;
        padding: 9px 9px 1px;
        background-color: var(--body);
        color: var(--text);
        border-radius: 5px;
        font-size: 19px;
        font-weight: 500;
        transition: all 0.5s ease;
        outline: none;

        &:focus {
            box-shadow: 4px 3px 7px #00000026;
        }
    }
`;

export const ButtonForm = styled.button`
    position: relative;
    bottom: 10px;
    width: 55%;
    height: 40px;
    margin: 0 auto;
    margin-top: 1rem;
    font-size: 22px;
    font-weight: bold;
    border-radius: 5px;
    background-color: var(--color2);
    color: var(--text);
    outline: none;
    box-shadow: 4px 3px 7px #00000026;
`;