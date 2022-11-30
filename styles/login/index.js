import styled from "styled-components";

export const StyleLogin = styled.section`
    height: ${props => (props.height ? props.height+"px" : "45rem")};
    width: ${props => (props.width ? props.width+"px" : "100%")};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    form {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        width: 95%;
        padding: 8px;
        background-color: var(--color4);
        border-radius: 8px;
        color: var(--text);
    }

    form h1 {
        margin: 0 auto;
        margin-top: 13px;
    }

    .msg {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        position: absolute;
        top: 25px;
        right: 10px;
        color: var(--text);
        font-size: 18px;
        padding: 0 10px;
        height: 50px;
        border-radius: 8px;
        box-shadow: 4px 3px 7px #00000026;
        white-space: nowrap;
        overflow: hidden;
        transition: all 0.3s ease;
        animation: msgError 0.3s ease forwards;
    }

    .msg.success {
        background-color: var(--color6);
    }

    .msg.error {
        background-color: var(--color8);
    }

    .links {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        align-items: center;
    }

    .links button {
        padding: 10px 15px;
        font-size: 15px;
        border-radius: 5px;
        outline: none;
        background-color: var(--color4);
        color: var(--color1);
        font-weight: bold;
        box-shadow: 4px 3px 7px #00000026;
    }
`;