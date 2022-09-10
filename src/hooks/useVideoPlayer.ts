import { useState, useEffect, useMemo, MutableRefObject } from 'react';
import timeConvertor from 'utils/TimeConvertor';

interface IVideoPlayerData {
  isPlaying: boolean,
  playingTime: string,
  // We can add any other needed properties.
  // Like muted, loop, autoplay...etc.
  // Any new value needs to handle it in it's own method.
  // I didn't handled other properties because they're not mentioned or displayed in the design :)
}

const useVideoPlayer = (videoElement: MutableRefObject<HTMLVideoElement>) => {
  const initialPlayerState: IVideoPlayerData = useMemo(() => {
    return {
      isPlaying: false,
      playingTime: '00:00'
    }
  }, []);

  const [playerState, setPlayerState] = useState<IVideoPlayerData>(initialPlayerState);

  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  };

  useEffect(() => {
    playerState.isPlaying ? videoElement.current.play() : videoElement.current.pause();
  }, [playerState.isPlaying, videoElement]);

  const changePlayingTime = () => {
    setPlayerState({
      ...playerState,
      playingTime: timeConvertor(videoElement.current.currentTime),
    });
  };

  useEffect(() => {
    if (playerState.playingTime === timeConvertor(videoElement.current.duration)) {
      setPlayerState(initialPlayerState);
      videoElement.current.currentTime = 0;
    }
  }, [playerState.playingTime, initialPlayerState, videoElement]);

  return { playerState, togglePlay, changePlayingTime };
};

export default useVideoPlayer;
