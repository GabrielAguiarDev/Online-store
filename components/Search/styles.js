import styled from "styled-components";

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