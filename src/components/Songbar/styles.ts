import styled from 'styled-components';

export const Container = styled.div`
    grid-area: song;
    background: var(--c02);

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px;
`;
export const SongName = styled.div`
        display: flex;
        align-items: center;
        width: 45%;
        height: 100%;

        > div:first-child{
            width: 0px;
            height: 50px;
            background: #101010;
            margin-right: 10px;
            transition: 300ms;

            display: flex;
            justify-content: flex-end;

            &.opened{
                width: 50px;
            }

            > span{
                width: 24px;
                height: 24px;
                border-radius: 50%;
                background: rgba(40,40,40, .5);

                display: none;
                align-items: center;
                justify-content: center;

                margin: 5px;
                transition: 300ms;

                > Svg{
                    color: var(--c01);
                }
            }

            &:hover span{
                display: flex;
            }
        }
        > div:last-child{
            margin: 8px 0;
            > header{
                display: flex;
              >h1{
                display: flex;
                align-items: center;
                font-size: 14px;
                font-weight:  400;
                color: var(--c11);
                line-height: 20px;
                cursor: pointer;
                    &:hover{
                        text-decoration: underline;
                    }
                }
                > span{
                        margin-left: 5px;
                }  
            }
            > p{
                font-size: 12px;
                font-weight:  400;
                color: var(--c01);
                line-height: 20px;
                cursor: pointer;
                > label{
                    &:hover{
                        color: var(--c11);
                        text-decoration: underline;
                    } 
                }
                > label + label{margin-left: 5px;}
            }    
        } 
`;
export const Player = styled.div`
    display: flex;
        flex-direction: column;
        justify-content: center;

        width: 100%;
        height: 100%;
        > .track{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;

            > label{
                font-size: 12px;
                line-height: 16px;
                text-align: center;
                color: var(--c01);
                padding: 0 5px; 
            }
            > div{
                display: flex;
                align-items: center;
                position: relative;
                width: 100%;
                height: 15px;

                &:hover{
                    .timePoint{
                        background: var(--primary);
                        transition: 200ms;
                        button{
                            display: flex;
                            transition: 200ms;
                        }
                    }
                }

               > aside{
                    position: absolute;
                    right: 0;
                    width: 100%;
                    height: 4px;
                    background: var(--c03);
                    border-radius: 15px;
                } 
                .timePoint{
                    left: -1px;
                    background: var(--c01);
                    width: 15%;
                    z-index: 5;

                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    transition: 200ms;

                    > button{
                        width: 12px;
                        height: 12px;
                        background: var(--c01);
                        border-radius: 50%;
                        display: none;
                        transition: 200ms;
                        cursor: pointer;
                    }
                }
                
            }
            
        }
        > .buttons{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
            > article{
                display: flex;
                justify-content: space-between;
                align-items: center;

                span + span{
                    margin-left: 25px;
                }
                span{
                    width: 32px;
                    height: 32px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    position: relative;

                    .on{
                        display: flex;
                    }.off{
                        display: none;
                    }
                    .play{
                        margin-left: 3px;
                    }
                    &:hover > svg{
                        color: var(--c11);
                    }
                    > svg{
                        color: var(--c01);
                        width: 22px;
                        height: 22px;
                    }
                    &.outlineCircle{
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        border: 2px solid var(--c01);
                    }
                }
            }
        }
`;
export const Utility = styled.div`
     display: flex;
        justify-content: flex-end;
        align-items: center;

        width: 45%;
        padding-left: 50px;

        span + span {
            margin-left: 5px;
        }
        > span{
            width: 32px;
            height: 32px;

            display: flex;
            align-items: center;
            justify-content: center;
            > svg{
                color: var(--c01);
                width: 16px;
                height: 16px;
            }
            &:hover > svg{
                color: var(--c11);
            }
        }
        > .track{
                display: flex;
                align-items: center;
                position: relative;
                width: 93px;
                height: 15px;

                &:hover{
                    .timePoint{
                        background: var(--primary);
                        transition: 200ms;
                        button{
                            display: flex;
                            transition: 200ms;
                        }
                    }
                }

               > aside{
                    position: absolute;
                    right: 0;
                    width: 93px;
                    height: 4px;
                    background: var(--c03);
                    border-radius: 15px;
                } 
                .timePoint{
                    left: -1px;
                    background: var(--c01);
                    width: 25%;
                    z-index: 5;

                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    transition: 200ms;

                    > button{
                        width: 12px;
                        height: 12px;
                        background: var(--c01);
                        border-radius: 50%;
                        display: none;
                        transition: 200ms;
                        cursor: pointer;
                    }
                }
                
            }
`;