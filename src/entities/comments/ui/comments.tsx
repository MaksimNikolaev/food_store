import { useParams } from 'react-router-dom';
import styles from './comments.module.css';
import { useEffect } from 'react';
import { clearCommentsMessage, getComments, resetCommentsState } from '../model';
import { Comment } from '../../../shared/ui/comment/comment';
import { useDispatch, useSelector } from '../../../app/store';
import { toast } from 'react-toastify';
import { getErrorText } from '../../../shared/utils/function/functions';

export const Comments = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { comments: data, commentsError } = useSelector(state => state.comments);

  useEffect(() => {
    id && dispatch(getComments(+id));
  }, [dispatch, id]);

  //Обработка ошибок
  useEffect(() => {
    if (commentsError) {
      const textError = getErrorText(commentsError);
      toast.error(textError);
      dispatch(resetCommentsState());
    }
  }, [commentsError]);

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
