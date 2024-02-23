import { useParams } from 'react-router-dom';
import styles from './comments.module.css';
import { useEffect } from 'react';
import { useLazyGetCommentsQuery } from '../model';
import { Comment } from '../../../shared/ui/comment/comment';

export const Comments = () => {
  const { id } = useParams();
  const [getComments, { data }] = useLazyGetCommentsQuery();

  useEffect(() => {
    id && getComments(id);
  }, [getComments, id]);

  if (!data) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Comments</h2>
      {data?.comments.length ? (
        data?.comments.map(comment => (
          <Comment
            key={comment.id}
            comment={comment}
            extraClass={styles.comment}
          />
        ))
      ) : (
        <p className={styles.no_comment}>No comments yet</p>
      )}
    </div>
  );
};
