import styled from "styled-components";

export const Overlay = styled.div`
    display: ${props => (props.zIndex ? "block" : "none")};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${props => (props.background ? props.background : "rgba( 0, 0, 0, 0.2)")};
    z-index: ${props => (props.zIndex ? "2" : "-1")};
`;