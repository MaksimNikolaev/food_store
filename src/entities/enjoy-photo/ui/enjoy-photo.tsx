import styles from './enjoy-photo.module.css';
import food from '../../../shared/assets/icons/food.svg'
import im3 from '../../../shared/assets/images/Graph.webp'
import { Notification } from '../../../shared/ui/notification/notification';
import { notification } from '../model';

export const EnjoyPhoto = () => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={food} alt='plate of food' role='presentation'/>    
      <Notification extraClass={styles.notification} card={notification}/>
      <img className={styles.graph} src={im3} alt='line graph'/>
    </div>
  );
};
