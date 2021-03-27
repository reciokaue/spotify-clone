import styled from "styled-components";

import { IoIosArrowUp } from 'react-icons/io'

export const Container = styled.div`
  grid-area: side;
  display: flex;
  flex-direction: column;

  background: #121212;
  color: var(--c11);
  position: relative;
`;
export const Options = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 0 20px 15px ;
`;
export const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;

    >h1.active{
        border-left: 4.5px solid var(--primary);
        color: var(--c11);
        padding-left: 10.5px;

        > svg{
            color: var(--c11);
        }
    }

    > h1{
        display: flex;
        align-items: center;

        font-size: 14px;
        line-height: 16px;
        color: var(--c01);

        padding-left: 15px;
        margin-bottom: 17px;

        cursor: pointer;

        > svg{
            width: 27px;
            height: 27px;
            margin-right: 15px;

            color: var(--c01);
        }

        &:hover{
            color: var(--c11);
            > svg{
                color: var(--c11);
            }
        }
    }
`;
export const Library = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: top;
  padding: 20px 15px 25px 15px;

  overflow: auto;

  > h1{
    text-align: left;
    font-size: 12px;
    line-height: 32px;
    letter-spacing: 1.6px;
    text-transform: uppercase; 
    font-weight: 400;
    color: var(--c01); 
  }
  h2{
    text-align: left;
    font-size: 13px;
    letter-spacing: 1px;
    margin-bottom: 18px;
    text-transform: capitalize; 
    font-weight: 700;
    color: var(--c01);
    cursor: context-menu;

    &:hover{
      color: var(--c11);
    }
  }
  p{
    text-align: left;
    font-size: 13px;
    letter-spacing: 1px;
    margin-bottom: 14px;
    text-transform: capitalize; 
    font-weight: 500;
    color: var(--c01);
    cursor: context-menu;

    &:hover{
      color: var(--c11);
    }
  }
  h2,p{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
export const NewPlaylist = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 15px;
  border-top: 1px solid var(--c02);
  width: 100%;

  > h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--c01);

    font-size: 14px;
    line-height: 32px;
    text-align: left;
    letter-spacing: 0.21px;
    font-weight: 400;
  }
  > span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 25px;
    height: 25px;

    margin-right: 10px;
    border: 1.5px solid var(--c01);
    border-radius: 50%;

    > svg {
      color: var(--c01);
      width: 20px;
      height: 20px;
    }
  }
`;
export const AlbumCover = styled.div`
  display: flex;
  justify-content: flex-end;
  background: #070707;

  width: 100%;
  height: 0;

  transition: 300ms;
  &.opened {
    height: 195px;
  }

  > span {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: rgba(40, 40, 40, 0.5);

    display: none;
    align-items: center;
    justify-content: center;

    margin: 5px;
    transition: 300ms;

    > Svg {
      color: var(--c01);
    }
  }

  &:hover span {
    display: flex;
  }
`;
export const ArrowUp  = styled(IoIosArrowUp)`
  width: 24px;
  height: 24px;
  color: #fff;
`;