import { Button } from '../../../shared/ui/button/button';
import { Notification } from '../../../shared/ui/notification/notification';
import { SpanColor } from '../../../shared/ui/span-color/span-color';
import styles from './enjoy-block.module.css';
import food from '../../../shared/assets/icons/food.svg';
import graphWebp from '../../../shared/assets/images/Graph.webp';
import graphPng from '../../../shared/assets/images/graph.png';
import { notification } from '../model';

export const EnjoyBlock = () => {
  return (
    <section className={styles.container}>
      <div className={styles.enjoy_food}>
        <p className={styles.count_user}>OVER 1000 USERS</p>
        <h1 className={styles.title}>
          Enjoy Foods All Over The <SpanColor>World</SpanColor>
        </h1>
        <p className={styles.paragraph}>
          EatLy help you set saving goals, earn cash back offers, Go to
          disclaimer for more details and get paychecks up to two days early.
          Get a <SpanColor>$20 bonus.</SpanColor>
        </p>
        <div className={styles.btn_group}>
          <Button variant='primary'>Get Started</Button>
          <Button variant='secondary'>Go Pro</Button>
        </div>
      </div>
      <div className={styles.enjoy_photo}>
        <img
          className={styles.img}
          src={food}
          alt='plate of food'
          role='presentation'
        />
        <Notification extraClass={styles.notification} card={notification} />
        <picture>
          <source type='image/webp' srcSet={graphWebp} />
          <img className={styles.graph} src={graphPng} alt='line graph' />
        </picture>
      </div>
    </section>
  );
};
