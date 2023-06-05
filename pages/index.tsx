import Head from 'next/head';
import { useEffect, useState } from 'react';

import { Sun, Moon } from '@phosphor-icons/react';
import { Timer } from '@/components/Timer';
import ConfigTime from '@/components/ConfigTime';

const Home = () => {
  const [theme, setTheme] = useState('');
  const [time, setTime] = useState(25);

  const changeTheme = () => {
    var theme = localStorage.getItem('theme');

    if (theme === 'dark') {
      localStorage.setItem('theme', 'light');
      setTheme('');
    } else {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  const handleTime = (num: number) => {
    setTime(num);
  };

  useEffect(() => {
    changeTheme();
  }, []);

  return (
    <>
      <Head>
        <title>Pomodoro</title>
        <link rel="icon" type="imagem/png" href="../public/icon.png" />
      </Head>
      <main className={theme}>
        <div className={`card ` + theme}>
          <h1 className={theme}>Pomodoro</h1>
          <Timer time={time} theme={theme} handleTime={handleTime} />
          <ConfigTime theme={theme} handleTime={handleTime} />
          <button
            className={`changeTheme ` + theme}
            onClick={() => changeTheme()}
          >
            {theme === 'dark' ? (
              <Moon size={36} color="#f5f6fa" />
            ) : (
              <Sun size={36} color="#282728" />
            )}
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
