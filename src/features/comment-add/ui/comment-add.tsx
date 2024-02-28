import { FormEvent, KeyboardEvent, useEffect, useState } from 'react';
import { Button } from '../../../shared/ui/button/button';
import { SpanColor } from '../../../shared/ui/span-color/span-color';
import styles from './comment-add.module.css';
import {
  addComment,
  clearCommentsMessage,
} from '../../../entities/comments/model';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from '../../../app/store';
import { toast } from 'react-toastify';
import { getErrorText } from '../../../shared/utils/function/functions';

export const CommentAdd = () => {
  const { id } = useParams();
  const [commentBody, setCommentBody] = useState('');
  const dispatch = useDispatch();
  const { addCommentSuccess, addCommentError } = useSelector(
    state => state.comments
  );

  //Обработчик добавления комментария
  const handleAddComment = (
    e: KeyboardEvent<HTMLTextAreaElement> | FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (id && commentBody.trim()) {
      const data = {
        body: commentBody,
        postId: +id,
        userId: 5,
      };
      dispatch(addComment(data));
      setCommentBody('');
    }
  };

  // Обработчик нажатия клавиши Enter
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAddComment(e);
    }
  };

  //Успешное добавление комментария
  useEffect(() => {
    if (addCommentSuccess) {
      toast.success('Comment added successfully');
    }
  }, [addCommentSuccess]);

  //Обработка ошибок
  useEffect(() => {
    if (addCommentError) {
      const textError = getErrorText(addCommentError);
      toast.error(textError as string);
    }
  }, [addCommentError]);

  //Обнуляем состояние сообщений при размонтировании компонента
  useEffect(() => {
    return () => {
      dispatch(clearCommentsMessage());
    };
  }, []);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        Add <SpanColor>comment</SpanColor>
      </h3>
      <form onSubmit={handleAddComment}>
        <textarea
          className={styles.textarea}
          placeholder='Enter  your comment'
          value={commentBody}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setCommentBody(e.target.value)
          }
          onKeyDown={handleKeyDown}
        />
        <Button extraClass={styles.btn} type='submit' variant='primary'>
          Send
        </Button>
      </form>
    </div>
  );
};
