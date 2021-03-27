import styled from "styled-components";

export const Container = styled.div`
    > & + & {
        margin-left: 1.3rem;
    }

    display: flex;
    flex-direction: column;
    
    > span {
        display: flex;
        height: 12.188rem;
        width: 12.188rem;
        background: var(--c04);

        margin-bottom: 0.75rem;
    }
    > h2 {
        font-size: .90rem;
        color: var(--c11);
        padding-bottom: 0.2rem;
        cursor: pointer;
    }
    > p {
        max-width: 12.188rem;
        font-size: .90rem;
        color: var(--c03);
        word-wrap: break-word;
        cursor: pointer;
    }
`;
