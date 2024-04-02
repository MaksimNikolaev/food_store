import { useEffect } from 'react';
import style from './tg.module.css';
import { Header } from '../../widgets/header';
import { menuNavigationList } from '../../shared/utils/constants/constants';
import { Footer } from '../../widgets/footer';

export const Tg = () => {
  const tg = window.Telegram.WebApp;
  const token = localStorage.getItem('accessToken');
  const isTelegramWebApp = window.navigator.userAgent.includes('TelegramBot');

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
      {!isTelegramWebApp && <Header menuNavigationList={menuNavigationList} />}
      <div className={style.container}>
        {token ? (
          <h2 className={style.balance}>Ваш баланс: 12 Р</h2>
        ) : (
          <button onClick={handleAuthorization} className={style.button}>
            Пройти авторизацию
          </button>
        )}
      </div>
      {!isTelegramWebApp && <Footer />}
    </>
  );
};
