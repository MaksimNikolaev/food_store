import { FC } from 'react';
import { Icon } from '../icon/icon';
import styles from './comment.module.css';
import { TCommentComponent } from './types';

export const Comment: FC<TCommentComponent> = ({comment, extraClass}) => {
  const { user, body } = comment;
  
  return (
    <article className={`${styles.review_text} ${extraClass ?? ''}`}>
      <div className={styles.group}>
        <p className={styles.name}>{user.username}</p>
        <Icon
          aria-hidden="true"
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
