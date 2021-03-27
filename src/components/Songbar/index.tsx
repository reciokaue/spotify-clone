import React, { useState } from "react";

import { Container, SongName, Player, Utility } from "./styles";

import {
  AiOutlineFullscreen,
  AiOutlineHeart,
  AiOutlineMenuUnfold,
} from "react-icons/ai";

import { BiPause, BiPlay } from "react-icons/bi";
import { IoIosShuffle, IoIosRepeat, IoIosArrowUp } from "react-icons/io";
import { GiMicrophone } from "react-icons/gi";
import { FiVolume1 } from "react-icons/fi";
import { MdSkipPrevious, MdSkipNext, MdDevices } from "react-icons/md";
import { useCover } from "../context/CoverContext";

const Songbar: React.FC = () => {
  const [state, setState] = useState(false);
  const { coverState, setCoverState } = useCover()


  function SwitchPlay() {
    setState(!state);
  }

  return (
    <Container>
      <SongName>
        <div className={!coverState? 'opened': ''}>
          <span onClick={() => setCoverState(!coverState)}><IoIosArrowUp/></span>
        </div>
        <div>
          <header>
            <h1>Contatos</h1>
            <span>
              <AiOutlineHeart color="var(--c01)" size="18" />
            </span>
          </header>
          <p>
            <label>Kayuá</label>,<label>BK'</label>,<label>CHS</label>
          </p>
        </div>
      </SongName>
      <Player>
        <div className="buttons">
          <article>
            <span>
              <IoIosShuffle />
            </span>
            <span>
              <MdSkipPrevious />
            </span>
            <span className="outlineCircle" onClick={SwitchPlay}>
              <BiPlay className={state ? "on play" : "off"} />
              <BiPause className={!state ? "on" : "off"} />
            </span>
            <span>
              <MdSkipNext />
            </span>
            <span>
              <IoIosRepeat />
            </span>
          </article>
        </div>
        <div className="track">
          <label>2:16</label>
          <div>
            <aside className="timePoint">
              <button />
            </aside>
            <aside />
          </div>
          <label>4:12</label>
        </div>
      </Player>
      <Utility>
        <span>
          <GiMicrophone />
        </span>
        <span>
          <AiOutlineMenuUnfold />
        </span>
        <span>
          <MdDevices />
        </span>
        <span>
          <FiVolume1 />
        </span>
        <span className="track">
          <aside className="timePoint">
            <button />
          </aside>
          <aside />
        </span>
        <span>
          <AiOutlineFullscreen />
        </span>
      </Utility>{" "}     
    </Container>
  );
};

export default Songbar;
