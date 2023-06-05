import { Gear, X } from '@phosphor-icons/react';
import { useState } from 'react';

interface ConfigTimeProps {
  theme: string;
  handleTime: (num: number) => void;
}

const ConfigTime = ({ theme, handleTime }: ConfigTimeProps) => {
  const [isActive, setIsActive] = useState(false);

  const changeTime = (num: number) => {
    if (num < 1) {
      num = 1;
    }
    handleTime(num);
  };

  if (isActive) {
    return (
      <div className="inputTime">
        <input
          type="number"
          placeholder="25"
          className={theme}
          onChange={(e) => changeTime(Number(e.target.value))}
        />
        <button onClick={() => setIsActive(!isActive)} type="submit">
          {theme === 'dark' ? <X color="#f5f6fa" /> : <X color="#282728" />}
        </button>
      </div>
    );
  } else {
    return (
      <button
        onClick={() => setIsActive(!isActive)}
        className={`changeTime ` + theme}
      >
        {theme === 'dark' ? (
          <Gear size={36} color="#f5f6fa" />
        ) : (
          <Gear size={36} color="#282728" />
        )}
      </button>
    );
  }
};

export default ConfigTime;
