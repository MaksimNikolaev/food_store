import styles from './posts.module.css';
import { Raiting } from '../../../shared/ui/raiting/raiting';
import { FC, useEffect, useRef, useState } from 'react';
import { TPost } from '../model';
import { useNavigate } from 'react-router-dom';

export const Post: FC<{ post: TPost }> = ({ post }) => {
  const { body, reactions, tags, title } = post;
  const navigate = useNavigate();

  const [clippedText, setClippedText] = useState(body);
  const cardRef = useRef<HTMLDivElement>(null);

  //Умная обрезка
  useEffect(() => {
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
  }, [body]);

  return (
    <article
      onClick={() => navigate(`/blog/post/${post.id}`)}
      className={styles.post}
    >
      <h2 className={styles.post_title}>{title}</h2>
      <div className={styles.post_group}>
        <p className={styles.post_hash}>{tags}</p>
        <Raiting raiting={reactions} isRevert={true} />
      </div>
      <div ref={cardRef} className={styles.post_text}>{clippedText}</div>
    </article>
  );
};
