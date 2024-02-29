import { useEffect, useState } from 'react';
import styles from './navigation-post.module.css';
import { useDispatch, useSelector } from '../../../app/store';
import { getPosts } from '../model';
import { Icon } from '../../../shared/ui/icon/icon';
import { getErrorText } from '../../../shared/utils/function/functions';
import { toast } from 'react-toastify';

export const NavigationPosts = () => {
  const { posts, postsError } = useSelector(state => state.posts);
  const [total, setTotal] = useState(0);
  const limit = 12;
  const [skip, setSkip] = useState(limit);
  const maxPages = Math.ceil(total / limit);
  const isDisabledPrevious = skip === limit;
  const isDisabledNext =
    skip + limit >= total || skip + limit > maxPages * limit;
  const dispatch = useDispatch();

  //Устанавливаем количество всех постов
  useEffect(() => {
    if (posts) {
      setTotal(posts.total);
    }
  }, [posts]);

  //Обработчик стрелки навегиции "Следующий"
  const handleNextPage = () => {
    setSkip(prevSkip => prevSkip + limit);
  };

  //Обработчик стрелки навегиции "Предыдущий"
  const handlePreviousPage = () => {
    if (skip === limit) return;
    setSkip(prevSkip => Math.max(prevSkip - limit, 0));
  };

  //Получение постов
  useEffect(() => {
    dispatch(getPosts(skip));
  }, [dispatch, skip]);

  //Обработка ошибок
  useEffect(() => {
    if (postsError) {
      const textError = getErrorText(postsError);
      toast.error(textError);
    }
  }, [postsError]);

  //Убираем кнопки навигации если данных нет
   if (!posts?.posts.length) {
    return null;
  }

  return (
    <div className={styles.btn_container}>
      <button
        aria-label='Previous posts'
        disabled={isDisabledPrevious}
        className={`${styles.btn} ${styles.btn_rotate} ${
          isDisabledPrevious ? styles.btn_disabled : ''
        }`}
        onClick={handlePreviousPage}
      >
        <Icon
          aria-hidden='true'
          name='arrow_navigation'
          width={45}
          height={60}
        />
      </button>
      <button
        aria-label='Next posts'
        disabled={isDisabledNext}
        className={`${styles.btn} ${isDisabledNext ? styles.btn_disabled : ''}`}
        onClick={handleNextPage}
      >
        <Icon
          aria-hidden='true'
          name='arrow_navigation'
          width={45}
          height={60}
        />
      </button>
    </div>
  );
};
