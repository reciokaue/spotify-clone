import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    grid-area: cont;
    background: var(--c05);
    overflow-y: auto;   

    > div{
        display: flex;
        flex-direction: column;
        position: relative;

        width: 100%;
        max-height: 100%;


        > nav{
            color: var(--c11);
            font-size: 41px;

            padding-left: 35px;
            width: 100%;
            height: 130px;
            
            display: flex;
            align-items: flex-end;

            background: linear-gradient(#3E3E3E, #191919);

            position: sticky;
            position:-webkit-sticky;
            top: 0;
        }
        > div{
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;

            padding-left: 35px;
            margin-bottom: 17rem;
        }
    }
`;

