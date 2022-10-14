import styled from "styled-components";

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

    h2 {
        text-align: center;
        margin: 1rem 0 2rem;
        color: var(--color1);
        font-size: 20px;
        opacity: 0.7;
        text-shadow: 5px 4px 5px #00000040;
    }

    h3 {
        font-size: 20px;
        margin: 3rem 1rem 2rem;
        color: var(--color0);
    }
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    background-color: var(--color1);
    border-radius: 10px 0px 0px 10px;

    &:hover {
        background-color: var(--color3);
    }

    svg {
        font-size: 35px;
        color: var(--text);
    }
`;

export const Links = styled.ul`
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: center;
    list-style: none;

    li a {
        display: flex;
        align-items: center;
        height: 30px;
        text-decoration: none;
        gap: 2rem;
    }


    
    li a svg {
        font-size: 25px;
        color: var(--text);
    }

    li:nth-child(7) a svg {
        color: var(--color8);
    }
    
    li a span {
        font-size: 20px;
        font-weight: bold;
        color: var(--text);
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    .image {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        margin: 0 0.7rem;
        border-radius: 50%;
        background-color: var(--color1);
    }

    .image svg {
        font-size: 27px;
        opacity: 0.8;
    }

    span {
        color: var(--color0);
    }
`;