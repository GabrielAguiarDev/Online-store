import styled from "styled-components";

export const Language = styled.div`
    position: absolute;
    bottom: ${props => (props.show ? "0px" : "-60vh")};
    width: 100%;
    height: 60vh;
    background-color: var(--nav);
    border-radius: 30px 30px 0 0;
    transition: all ease 0.3s;
    z-index: 3;

    h2 {
        margin: 2rem 1rem;
        font-size: 23px;
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin-top: 2rem;
    }

    ul li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 43px;
        width: 95%;
        padding: 0px 9px;
        border-radius: 7px;
        box-shadow: 3px 3px 5px #00000061;
        background-color: var(--body);
    }

    ul li .nameCountry {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    ul li .nameCountry svg {
        font-size: 35px;
    }

    ul li .nameCountry span {
        font-size: 20px;
        font-weight: bold;
    }

    ul li:nth-child(1) .nameCountry {
        color: ${props => (props.active === "br" ? "var(--color2)" : "var(--text)")};
    }

    ul li:nth-child(2) .nameCountry {
        color: ${props => (props.active === "us" ? "var(--color2)" : "var(--text)")};
    }

    ul li:nth-child(3) .nameCountry {
        color: ${props => (props.active === "it" ? "var(--color2)" : "var(--text)")};
    }

    ul li:nth-child(4) .nameCountry {
        color: ${props => (props.active === "es" ? "var(--color2)" : "var(--text)")};
    }

    ul li:nth-child(5) .nameCountry {
        color: ${props => (props.active === "cn" ? "var(--color2)" : "var(--text)")};
    }

    ul li:nth-child(6) {
            color: ${props => (props.active === "de" ? "var(--color2)" : "var(--te)x)")};
    }
`;