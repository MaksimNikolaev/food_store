import styles from './posts.module.css';
import { Raiting } from '../../../shared/ui/raiting/raiting';
import { FC, useEffect, useRef, useState } from 'react';
import { TPost, useLazyGetUserQuery } from '../model';
import LoaderSmall from '../../../shared/ui/loaders/loader-small/loader-small';
import { getErrorText } from '../../../shared/utils/function/functions';
import { toast } from 'react-toastify';

export const Post: FC<{ post: TPost; isFullPost?: boolean }> = ({
  post,
  isFullPost,
}) => {
  const { body, reactions, tags, title } = post;

  const [
    getUser,
    { data: user, isError: userIsError, error: userError, isFetching },
  ] = useLazyGetUserQuery();
  const [clippedText, setClippedText] = useState(body);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (post) {
      getUser(post.userId);
    }
  }, [getUser, post]);

  //Умная обрезка
  useEffect(() => {
    if (!isFullPost) {
      const clipText = () => {
        const card = cardRef.current;
        if (!card) return;

        /* Получаем текущую высоту строки текста и вычисляем максимальную высоту карточки,
        чтобы текст всегда оставался на трёх строках */
        const lineHeight = parseInt(window.getComputedStyle(card).lineHeight);
        const maxLines = 3;
        const maxHeight = maxLines * lineHeight;

        /* Разбиваем текст на слова, чтобы обрезать его по словам. 
        Инициализируем переменные для обрезанного текста и текущей высоты */
        const words = body.split(' ');
        let clipped = '';
        let currentHeight = 0;

        /* Перебираем каждое слово в тексте. */
        for (let word of words) {
          /* Добавляем текущее слово к обрезанному тексту и обновляем текст в карточке,
          чтобы получить текущую высоту карточки после добавления нового слова */
          const newText = clipped + word + ' ';
          card.innerText = newText + '...';
          currentHeight = card.scrollHeight;
          /* Если текущая высота карточки превышает максимальную высоту 
          (т.е. текст уже занимает больше трёх строк), мы должны обрезать текст */
          if (currentHeight > maxHeight) {
            while (card.scrollHeight > maxHeight && clipped) {
              clipped = clipped.slice(0, -1);
              card.innerText = clipped + '...';
            }
            break;
          }
          clipped = newText;
        }

        setClippedText(clipped.trim() + '...');
      };

      clipText();
      window.addEventListener('resize', clipText);

      return () => {
        window.removeEventListener('resize', clipText);
      };
    }
  }, [body, isFullPost]);

  //Обработка ошибок
  useEffect(() => {
    if (userIsError && userError) {
      const textError = getErrorText(userError);
      toast.error(textError);
    }
  }, [userIsError, userError]);

  return (
    <>
      <h2
        className={`${styles.post_title} ${
          isFullPost ? styles.post_title_full : ''
        }`}
      >
        {title}
      </h2>
      {isFetching ? (
        <LoaderSmall />
      ) : (
        <div className={styles.user_group}>
          <img className={styles.avatar} src={user?.image} alt='avatar'></img>
          <div>
            <p className={styles.written}>Written By</p>
            <p
              className={styles.user_name}
            >{`${user?.firstName} ${user?.lastName}`}</p>
          </div>
        </div>
      )}
      <Raiting
        extraClass={styles.raiting}
        raiting={reactions}
        isRevert={true}
      />
      <p
        className={`${styles.post_hash} ${
          isFullPost ? styles.post_hash_full : ''
        }`}
      >
        {tags}
      </p>
      <div
        ref={cardRef}
        className={`${styles.post_text} ${
          isFullPost ? styles.post_text_full : ''
        }`}
      >
        {isFullPost ? body : clippedText}
      </div>
    </>
  );
};
