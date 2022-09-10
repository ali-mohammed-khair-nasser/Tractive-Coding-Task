import React, { useEffect } from 'react';
import './WaveAnimation.scss';

interface IProps {
  isPlaying?: boolean
};

const WaveAnimation = ({ isPlaying = false }: IProps) => {
  useEffect(() => {
    const bar: NodeListOf<HTMLElement> = document.querySelectorAll('.bar');
    for (let i = 0; i < bar.length; i++) {
      bar.forEach(item => item.style.animationDuration = `${ Math.random() * (0.7 - 0.2) + 0.2 }s`);
    }
  }, []);

  return (
    <div className={['wave-animation', isPlaying && 'animation-on'].join(' ')}>
      { Array.from({ length: 6}, (_, index) => <div key={ index } className='bar'></div>) }
    </div>
  );
};

export default WaveAnimation;
