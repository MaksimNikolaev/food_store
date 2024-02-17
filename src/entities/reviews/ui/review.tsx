import { FC } from 'react';
import { Icon } from '../../../shared/ui/icon/icon';
import styles from './reviews.module.css';
import { TReview } from '../model/types';

export const Review: FC<TReview> = ({comment}) => {
  const { user, body } = comment;
  
  return (
    <article className={styles.review_text}>
      <div className={styles.group}>
        <p className={styles.name}>{user.username}</p>
        <Icon
          className={styles.quote}
          name='quote'
          width={58.69}
          height={44.25}
        />
      </div>
      <p className={styles.paragraph}>{body}</p>
    </article>
  );
};
