import { Icon } from '../../../../shared/ui/icon/icon';
import styles from './social.module.css';
import { TSocialList } from './types';

export const Social = () => {
  const socialList: TSocialList[] = [
    { id: 1, name: 'inst', width: 21.34, height: 21.42, link: 'https://www.instagram.com/#' },
    { id: 2, name: 'linkedin', width: 21.34, height: 20.36, link: 'https://ru.linkedin.com/#' },
    { id: 3, name: 'facebook', width: 9.88, height: 21.34, link: 'https://www.facebook.com/#' },
    { id: 4, name: 'twitter', width: 21.34, height: 17.37, link: 'https://twitter.com/#' },
  ];

  return (
    <ul className={styles.list}>
      {socialList.map(item => (
        <li key={item.id}>
          <Icon
            name={item.name}
            width={item.width}
            height={item.height}
            colorHover='var(--blue-color)'
            handleClick={() => {window.open(item.link, '_blank')}}
          />
        </li>
      ))}
    </ul>
  );
};
