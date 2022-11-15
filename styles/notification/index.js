import styled from "styled-components";

export const Notification = styled.div`
    margin-bottom: 6rem;
    
    h1 {
        display: inline-block;
        font-size: 20px;
        margin: 1.5rem 0.5rem;
    }

    .totalNotification {
        position: relative;
        top: -5px;
        left: -3px;
        font-size: 17px;
        font-weight: bold;
        color: var(--text2);
    }

    .container_message {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
        width: 95%;
        margin: 0 auto;
    }
`;