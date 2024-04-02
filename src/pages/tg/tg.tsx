import { useEffect } from 'react';
import style from './tg.module.css';

export const Tg = () => {
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    tg.ready();
  }, []);

  const handleAuthorization = () => {
    tg.openTelegramLink(
      'https://t.me/BearsWb_bot?start=e356458e-11eb-4f79-baf7-c3da7ace3ae0'
    );
  };

  useEffect(() => {
    document.body.style.backgroundColor = 'var(--tg-theme-bg-color)';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <>
      <div className={style.container}>
        <button onClick={handleAuthorization} className={style.button}>
          Пройти авторизацию
        </button>
      </div>
    </>
  );
};
