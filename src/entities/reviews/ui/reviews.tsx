import { Icon } from '../../../shared/ui/icon/icon';
import { SpanColor } from '../../../shared/ui/span-color/span-color';
import styles from './reviews.module.css';
import avatar from '../../../shared/assets/images/avatar.webp';
import { Review } from './review';

export const Reviews = () => {
  return (
    <section className={styles.reviews}>
      <h2 className={styles.title}>
        <SpanColor>Customer</SpanColor> Say
      </h2>
      <div className={styles.wrapper}>
        <article className={styles.review}>
          <img
            loading='lazy'
            decoding='async'
            className={styles.img}
            src={avatar}
            alt='avatar'
          ></img>
          <div className={styles.group}>
            <p className={styles.name}>Alexander R.</p>
            <p className={styles.date}>01 Year With Us</p>
          </div>
          <Icon
            className={styles.quote}
            name='quote'
            width={58.69}
            height={44.25}
          />
          <Review />
        </article>
        <div className={styles.review_slide}>
          <article className={styles.review_text}>
            <Review />
          </article>
          <article className={styles.review_text}>
            <Review />
          </article>
          <article className={styles.review_text}>
            <Review />
          </article>
        </div>
      </div>
    </section>
  );
};
