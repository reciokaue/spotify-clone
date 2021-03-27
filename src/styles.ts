import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    width: 100vw;
    height: 100vh;
    overflow: none;

    grid-template-columns: 195px 1fr;
    grid-template-rows: 60px 1fr 70px;
    grid-template-areas: 
    'side . .'
    'side cont cont'
    'song song song';
`;
export const Pages = styled.div`
    display: flex;
    grid-area: cont;
    overflow: none;

    > div{
        display: flex;
        width: 100%;
        height: 100%;
    }
`;