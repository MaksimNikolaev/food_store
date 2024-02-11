import { Icon } from '../../../shared/ui/icon/icon';
import { reviewText } from '../model';
import styles from './reviews.module.css';

export const Review = () => {
  return (
    <>
      <p className={styles.paragraph}>{reviewText}</p>
      <Icon className={styles.raiting} name='raiting' width={138} height={23} />
    </>
  );
};
