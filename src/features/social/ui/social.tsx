import { Icon } from '../../../shared/ui/icon/icon';
import { socialList } from '../model';
import styles from './social.module.css';

export const Social = () => { 
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
