import styled from "styled-components";

export const Profile = styled.section`
    .noLogin {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 80vh;
    }

    .noLogin h1 {
        font-size: 20px;
        margin: 1.5rem 0.5rem;
    }

    .noLogin .links {
        display: flex;
        gap: 1rem;
    }

    .noLogin .links a {
        text-decoration: none;
        color: var(--text);
        background-color: var(--color2);
        padding: 15px;
        border-radius: 11px;
        font-weight: bold;
        transition: all ease 0.3s;

        &:hover {
            background-color: var(--color4);
        }
    }
`;