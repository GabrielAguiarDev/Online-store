import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
    background-color: var(--nav);

    .logo a {
        margin-left: 1rem;
        font-size: 23px;
        font-weight: bold;
        animation: none;
        text-decoration: none;
        color: var(--text);
    }

    .nav {
        display: flex;
        justify-content: right;
        width: 75%;
        height: 65%;
        gap: 10px;
    }

    .nav a {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--color1);
        font-size: 30px;
        animation: notification 2s ease-in-out infinite;

        &:before {
           content: "";
           width: 8px;
           height: 8px;
           background-color: var(--color8);
           border-radius: 50%;
           position: absolute;
           top: 10px;
           right: 4px;
           z-index: 1; 
        }

        &:hover {
            color: var(--color3);
        }
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45px;
        background-color: var(--color1);
        border-radius: 10px 0px 0px 10px;

        &:hover {
            background-color: var(--color3);
        }
    }

    button svg {
        font-size: 35px;
        color: var(--text);
    }
`;

export const Search = styled.div`
    position: relative;
    display: flex;
    width: 185px;
    justify-content: right;
    align-items: center;

    input {
        display: ${props => (props.display ? "block" : "none")};
        position: absolute;
        width: 100%;
        height: 40px;
        outline: none;
        border-radius: 20px;
        background-color: var(--body);
        color: var(--text);
        font-size: 20px;
        padding: 0px 15px;
        z-index: ${props => (props.display ? "2" : "-1")}
    }

    svg {
        display: ${props => (props.display ? "none" : "flex")};
        justify-content: center;
        align-items: center;
        color: var(--color1);
        font-size: 25px;
    }
`;

export const Menu = styled.div`
    position: fixed;
    right: ${props => (props.visible ? "0" : "-65vw")};
    top: 0;
    bottom: 0;
    height: 100vh;
    width: 65vw;
    background-color: var(--nav);
    z-index: 3;
    box-shadow: -10px 0px 21px #00000021;
    transition: all ease 0.3s;
`;

export const Overlay = styled.div`
    display: ${props => (props.zIndex ? "block" : "none")};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${props => (props.zIndex ? "2" : "-1")};
`;