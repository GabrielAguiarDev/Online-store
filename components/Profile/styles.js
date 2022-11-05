import styled from "styled-components";

export const InfoProfile = styled.div`

    .container-user {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin: 1.5rem 0 3rem;
    }

    .container-user .imageDefault {
        display: flex;
        justify-content: center;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: var(--color2);
    }

    .container-user .imageDefault svg {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        font-size: 50px;
        color: var(--text2);
    }

    .container-user .wallet {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
        font-size: 25px;
        font-weight: bold;
        color: var(--color6);
        margin-top: 1rem;
    }

    .container-user .wallet span {
        color: var(--text2);
        font-size: 16px;
        font-weight: 500;
        opacity: 0.5;
    }

    .container-info {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 0 15px;
    } 

    .container-info .info {
        display: flex;
        gap: 1rem;
    }

    .container-info .info svg {
        font-size: 40px;
        color: var(--color2);
    }

    .container-info .info .info-data {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .container-info .info .info-data span:nth-child(1) {
        color: var(--text2);
        font-size: 15px;
    }

    .container-info .info .info-data span:nth-child(2) {
        font-weight: bold;
        font-size: 17px;
        opacity: 0.8;
    }
`;