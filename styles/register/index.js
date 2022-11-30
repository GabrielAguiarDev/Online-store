import styled from "styled-components";

export const StyleRegister = styled.section`
    height: ${props => (props.height ? props.height+"px" : "45rem")};
    width: ${props => (props.width ? props.width+"px" : "100%")};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    form {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-top: 1em;
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

    .link {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .link button {
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