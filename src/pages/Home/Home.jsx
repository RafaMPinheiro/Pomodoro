import React, { useEffect, useState } from 'react';
import '../../styles/Home.scss';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const AMOUNT_SECONDS_IN_MINUTES = 60 * 30; // 25 minutes

export default function Home() {
  const [amountSeconds, setAmountSeconds] = useState(AMOUNT_SECONDS_IN_MINUTES);
  const [play, setPlay] = useState(false);

  const minutes = Math.floor(amountSeconds / 60);
  const seconds = amountSeconds % 60;

  useEffect(() => {
    if (!play) {
      return;
    }

    if (amountSeconds === 0) {
      alert('Time is up!');
      return;
    }

    const interval = setInterval(() => {
      setAmountSeconds(amountSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [play, amountSeconds]);

  return (
    <div className="container">
      <div className="numbers">
        <span className="number">{String(minutes).padStart(2, '0')}</span>
        <span className="number">{String(seconds).padStart(2, '0')}</span>
      </div>

      <div className="buttons">
        <button
          className="button"
          onClick={() => {
            setAmountSeconds(AMOUNT_SECONDS_IN_MINUTES);
            setPlay(false);
          }}
        >
          Reset
        </button>

        <button className="button" onClick={() => setPlay(!play)}>
          {play ? <PauseIcon /> : <PlayArrowIcon />}
        </button>
      </div>
    </div>
  );
}
