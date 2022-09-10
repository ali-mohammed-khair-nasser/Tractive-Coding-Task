import React, { useRef } from 'react';
import WaveAnimation from './WaveAnimation/WaveAnimation';
import RoundedCornersFilter from './RoundedCornersFilter';
import useVideoPlayer from 'hooks/useVideoPlayer';
import { BiPlay, BiPause } from 'react-icons/bi';
import './TractiveVideo.scss';

interface IProps {
  src: string,
  muted?: boolean,
  autoPlay?: boolean,
  loop?: boolean
};

const TractiveVideo = ({ src, muted, autoPlay, loop }: IProps) => {
  const videoElement = useRef<HTMLVideoElement>(null!);
  const { playerState, togglePlay, changePlayingTime } = useVideoPlayer(videoElement);

  return (
    <div className="tractive-video" onContextMenu={ event => event.preventDefault() }>
      <div className="video-container">
        <video
          ref={ videoElement }
          src={ src } 
          onTimeUpdate={ changePlayingTime }
          onClick={ togglePlay }
          autoPlay={ autoPlay }
          muted={ muted }
          loop={ loop }
        />
          
        <div className="time-waves">
          <div className="current-time">{ playerState.playingTime }</div>
          <WaveAnimation isPlaying={ playerState.isPlaying } />
        </div>
        
        <div className="video-controls">
          <button className="action-button" aria-label="Play Button" onClick={ togglePlay }>
            { !playerState.isPlaying ? <BiPlay className="play-icon" /> : <BiPause /> }
          </button>
        </div>
      </div>

      <RoundedCornersFilter />
    </div>
  );
};

export default TractiveVideo;
