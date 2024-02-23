import { useNavigate, useParams } from 'react-router-dom';
import styles from './full-post.module.css';
import { useLazyGetPostQuery } from '../model';
import { useEffect } from 'react';
import { Button } from '../../../shared/ui/button/button';
import { Icon } from '../../../shared/ui/icon/icon';
import { getErrorText } from '../../../shared/utils/function/functions';
import { toast } from 'react-toastify';
import { Post } from '../../../entities/posts/ui/post';

export const FullPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [getPost, { data: post, isError: postIsError, error: postError }] =
    useLazyGetPostQuery();

  useEffect(() => {
    id && getPost(id);
  }, [getPost, id]);

  //Обработка ошибок
  useEffect(() => {
    if (postIsError && postError) {
      const textError = getErrorText(postError);
      toast.error(textError as string);
    }
  }, [postIsError, postError]);

  return (
    <div className={styles.container}>
      {post && <Post key={post.id} post={post} isFullPost={true} />}
      <Button onClick={() => navigate('/blog')} variant='secondary'>
        <Icon aria-hidden='true' name='arrow_left' width={31} height={34} />
        All Articles
      </Button>
    </div>
  );
};
