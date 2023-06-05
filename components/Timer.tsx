import { useEffect, useState } from 'react';

import { Pause, Play } from '@phosphor-icons/react';

interface TimerProps {
  time: number;
  theme: string;
  handleTime: (num: number) => void;
}

export const Timer = ({ time, theme, handleTime }: TimerProps) => {
  const [amountSeconds, setAmountSeconds] = useState(60 * time);
  const [isActive, setIsActive] = useState(false);

  const minutes = Math.floor(amountSeconds / 60);
  const seconds = amountSeconds % 60;

  useEffect(() => {
    setAmountSeconds(60 * time);
  }, [time]);

  useEffect(() => {
    if (!isActive) {
      return;
    }

    if (amountSeconds === 0) {
      setAmountSeconds(60 * time);
      setIsActive(false);
      alert('Time is up!');
      return;
    }

    const interval = setInterval(() => {
      setAmountSeconds(amountSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, amountSeconds]);

  return (
    <div className="timer">
      <div className="numbers">
        <span className={`number ` + theme}>
          {String(minutes).padStart(2, '0')}
        </span>
        <span className={`number ` + theme}>:</span>
        <span className={`number ` + theme}>
          {String(seconds).padStart(2, '0')}
        </span>
      </div>

      <div className="buttons">
        <button
          className={`buttonActive ` + theme}
          onClick={() => {
            setAmountSeconds(60 * time);
            setIsActive(false);
          }}
        >
          Reset
        </button>

        {theme === 'dark' ? (
          <button
            className="buttonActive"
            onClick={() => setIsActive(!isActive)}
          >
            {isActive ? (
              <Pause color="#f5f6fa" weight="fill" />
            ) : (
              <Play color="#f5f6fa" weight="fill" />
            )}
          </button>
        ) : (
          <button
            className="buttonActive"
            onClick={() => setIsActive(!isActive)}
          >
            {isActive ? (
              <Pause color="#282728" weight="fill" />
            ) : (
              <Play color="#282728" weight="fill" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};
