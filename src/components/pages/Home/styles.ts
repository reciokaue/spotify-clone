import styled from 'styled-components';

export const Container = styled.div`

`;
export const Frame = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    width: fit-content;
    margin-bottom: 3.5rem;

    > header{
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-top: 2.5rem;
        padding-bottom: .3rem;
        margin-bottom: 1rem;

        border-bottom: 1px solid var(--c02);
        > h1{
            display: flex;
            flex-direction: column;
            font-size: 1.2rem;
            color: var(--c11);
            > h2{
                font-size: .85rem;
                color: var(--c03);
                margin-top: 3px;
            }
        }
        > div{
            display: flex;
            align-items: center;
            color: var(--c03);

            > svg{
                width: 18px;
                height: 18px;
                margin-left: 1rem;
                cursor: pointer;

                &:hover{
                    color: var(--c01)
                }
            }
        }
    }
    
    > article{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;

        > div + div{
            margin-left: 1.3rem;
        }

        > div{
            display:flex;
            flex-direction: column;
                        > span{
                display: flex;
                height: 12.188rem;
                width: 12.188rem;
                background: var(--c04);

                margin-bottom: .75rem;
            }
            > h2{
                font-size: 1rem;
                color: var(--c11);
                padding-bottom: .2rem;
            }
            > p{
                color: var(--c03);
            }
        }
    }
`;
