import React from 'react';

import { Container, Options, Navigation, Library, NewPlaylist, AlbumCover } from './styles';

import { AiOutlineHome, AiOutlinePlus } from  'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import { RiNavigationLine } from 'react-icons/ri';
import { FiRadio } from 'react-icons/fi';

import { useCover } from '../context/CoverContext'
import { usePage } from '../context/PageContext';

const Sidebar: React.FC = () => {

  const { coverState, setCoverState } = useCover()
  const { page, setPage } = usePage()

  return (
    <Container>
      <Navigation>
        <Options><IoEllipsisHorizontalSharp size="25"/></Options>
        <h1 onClick={() => setPage('home')} className={page === 'home'? 'active':''}><AiOutlineHome/> Home</h1>
        <h1 onClick={() => setPage('navi')} className={page === 'navi'? 'active':''}><RiNavigationLine/> Navigate</h1>
        <h1 onClick={() => setPage('radi')} className={page === 'radi'? 'active':''}><FiRadio/> Radio</h1>
      </Navigation>
      <Library>
        <h1>sua  biblioteca</h1>
        <div>
          <h2>Feito para você</h2>
          <h2>Tocados recentemente</h2>
          <h2>Músicas Curtidas</h2>
          <h2>Álbuns</h2>
          <h2>Artistas</h2>
          <h2>Podcasts</h2>
        </div>
        <h1>playlists</h1>
        <div>
        <p>playlists1</p>
          <p>playlists 2</p>
          <p>playlists 3</p>
          <p>playlists 4</p>
          <p>playlists 5</p>
          <p>playlists 6</p>
          <p>playlists 7</p>
          <p>playlists 8</p>
          <p>playlists 9</p>
          <p>playlists 10</p>
          <p>playlists 11</p>
          <p>playlists 12</p>
          <p>playlists 13</p>
          <p>playlists 14</p>
          <p>playlists 15</p>
        </div>
      </Library>

      <section>
        <NewPlaylist>
          <span><AiOutlinePlus/></span>
          <h1>New Playlist</h1>
        </NewPlaylist>
        <AlbumCover className={coverState? 'opened': ''}>
          <span onClick={() => setCoverState(!coverState)}><IoIosArrowDown/></span>
        </AlbumCover>
      </section>
    </Container>
  );
};

export default Sidebar;
