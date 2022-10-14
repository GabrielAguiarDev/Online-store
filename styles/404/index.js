import styled from "styled-components";

export const MessageError = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 80vh;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1rem;


    h1 {
        font-size: 21px;
    }

    p {
        font-size: 17px;
        margin: 1rem 0 2rem;
        width: 80%;
        font-weight: bold;
        text-align: center;
        color: var(--color0);
        letter-spacing: 1px;
    }

    a {
        background-color: var(--color2);
        padding: 10px 20px;
        border-radius: 28px;
        text-decoration: none;
        color: var(--text);
        font-size: 19px;
        font-weight: bold;
    }

    span {
        margin: 1rem 0 2rem;
    }

    span img {
        border-radius: 10px;
    }
`;