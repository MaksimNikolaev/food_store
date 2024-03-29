import { SpanColor } from '../../../shared/ui/span-color/span-color';
import styles from './reviews.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settingsSlider, useGetCommentsQuery } from '../model';
import { useEffect } from 'react';
import { getErrorText } from '../../../shared/utils/function/functions';
import { toast } from 'react-toastify';
import Loader from '../../../shared/ui/loaders/loader';
import { Comment } from '../../../shared/ui/comment/comment';

export const Reviews = () => {
  const { data, isError, error, isFetching } = useGetCommentsQuery();

  //Обработка ошибок
  useEffect(() => {
    if (isError && error) {
      const textError = getErrorText(error);
      toast.error(textError);
    }
  }, [isError, error]);

  return (
    <section className={styles.reviews}>
      <h2 className={styles.title}>
        <SpanColor>Customer</SpanColor> Say
      </h2>
      {isFetching ? (
        <Loader />
      ) : data?.comments.length ? (
        <Slider {...settingsSlider}>
          {data?.comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </Slider>
      ) : (
        <p className={styles.no_comment}>Comments are not available</p>
      )}
    </section>
  );
};
