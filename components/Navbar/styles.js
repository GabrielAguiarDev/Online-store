import styled from "styled-components";

export const Nav = styled.nav`
    position: fixed;
    bottom: 20px;
    width: 100%;
    height: 4rem;
    
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        height: 100%;
        background-color: var(--nav);
        margin: 0 auto;
        width: 95%;
        box-shadow: 3px 4px 5px #00000024;
        border-top: 1px solid #ffffff38;
        border-radius: 13px;
    }

    ul li {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 17px;
        width: 100%;
    }

    ul li a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        align-items: center;
        color: var(--text2);
        text-decoration: none;
    }

    ul li a svg {
        font-size: 30px;
    }

    ul li a span {
        display: block;
        font-size: 13px;
        letter-spacing: 1px;
    }

    ul li a.active {
        color: var(--text)
    }
`;