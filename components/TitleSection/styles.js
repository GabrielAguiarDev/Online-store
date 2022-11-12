import styled from "styled-components";

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    margin: ${props => (props.margin ? props.margin : "")};

    h2 {
        font-size: 17px;
    }

    a {
        font-size: 13px;
        font-weight: bold;
        color: var(--color1);
        text-decoration: none;
    }
`;