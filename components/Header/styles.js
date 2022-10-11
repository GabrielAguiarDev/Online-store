import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
    background-color: var(--nav);

    .logo {
        margin-left: 1rem;
        font-size: 23px;
        font-weight: bold;
    }

    .nav {
        display: flex;
        justify-content: right;
        width: 75%;
        height: 65%;
        gap: 10px;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--color1);
        font-size: 30px;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45px;
        background-color: var(--color1);
        border-radius: 10px 0px 0px 10px;
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

export const Overlay = styled.div`
    display: ${props => (props.zIndex ? "block" : "none")};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${props => (props.zIndex ? "1" : "-1")};
`;