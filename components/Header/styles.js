import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
    background-color: var(--nav);

    .back {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 52px;
        padding: 9px;
        color: var(--color1);
    }

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

    .nav .notification {
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
`;

export const HeaderSecondary = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
    background-color: var(--nav);

    
`;