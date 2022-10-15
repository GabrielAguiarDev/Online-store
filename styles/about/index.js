import styled from "styled-components";

export const About = styled.section`
    min-height: 90vh;
    padding: 25px 10px;

    h1 {
        font-size: 20px;
        margin: 3rem 0 2rem;
    }

    p {
        font-size: 18px;
        margin-bottom: 1rem;
    }

    .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        font-size: 23px;
        font-weight: bold;
        color: var(--text);
    }

    .logo span {
        background-color: var(--color2);
        color: var(--text2);
        padding: 5px 14px;
        border-radius: 5px;
        font-size: 25px;
        font-weight: bold;
    }
`;