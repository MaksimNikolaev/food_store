import styles from './posts.module.css';
import { Raiting } from '../../../shared/ui/raiting/raiting';
import { FC } from 'react';
import { TPost } from '../model';

export const Post: FC<{post: TPost}> = ({ post }) => {
  const { body, reactions, tags, title } = post;  

  return (
    <article className={styles.post}>
      <h2 className={styles.post_title}>{title}</h2>
      <div className={styles.post_group}>
        <p className={styles.post_hash}>{tags}</p>
        <Raiting raiting={reactions} isRevert={true} />
      </div>
      <p className={styles.post_text}>{body}</p>     
    </article>
  );
};
