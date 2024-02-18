import { useNavigate, useParams } from 'react-router-dom';
import styles from './full-post.module.css';
import { useLazyGetPostQuery, useLazyGetUserQuery } from '../model';
import { useEffect } from 'react';
import { Raiting } from '../../../shared/ui/raiting/raiting';
import { Button } from '../../../shared/ui/button/button';
import { Icon } from '../../../shared/ui/icon/icon';
import { getErrorText } from '../../../shared/utils/function/functions';
import { toast } from 'react-toastify';

export const FullPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [getPost, { data: post, isError: postIsError, error: postError }] =
    useLazyGetPostQuery();
  const [getUser, { data: user, isError: userIsError, error: userError }] =
    useLazyGetUserQuery();

  useEffect(() => {
    id && getPost(id);
  }, [getPost, id]);

  useEffect(() => {
    if (post) {
      getUser(post.userId);
    }
  }, [getUser, post]);

  //Обработка ошибок
  useEffect(() => {
    if (postIsError && postError) {
      const textError = getErrorText(postError);
      toast.error(textError as string);
    }
    if (userIsError && userError) {
      const textError = getErrorText(userError);
      toast.error(textError as string);
    }
  }, [postIsError, postError, userIsError, userError]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post?.title}</h1>
      <div className={styles.wrapper}>
        <div className={styles.group}>
          <img className={styles.avatar} src={user?.image} alt='avatar'></img>
          <div>
            <p className={styles.written}>Written By</p>
            <p
              className={styles.user_name}
            >{`${user?.firstName} ${user?.lastName}`}</p>
          </div>
        </div>
        <div>
          <Raiting raiting={post?.reactions} isRevert={true} />
          <p className={styles.tags}>{post?.tags}</p>
        </div>
      </div>
      <p className={styles.text}>{post?.body}</p>
      <Button onClick={() => navigate(-1)} variant='secondary'>
        <Icon aria-hidden="true" name='arrow_left' width={31} height={34} />
        All Articles
      </Button>
    </div>
  );
};
