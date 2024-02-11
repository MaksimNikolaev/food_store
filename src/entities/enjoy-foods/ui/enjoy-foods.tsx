import styles from './enjoy-foods.module.css';
import { SpanColor } from '../../../shared/ui/span-color/span-color';
import { Button } from '../../../shared/ui/button/button';

export const EnjoyFoods = () => {
  return (
    <div className={styles.container}>
      <p className={styles.count_user}>OVER 1000 USERS</p>
      <h1 className={styles.title}>
        Enjoy Foods All Over The <SpanColor>World</SpanColor>
      </h1>
      <p className={styles.paragraph}>
        EatLy help you set saving goals, earn cash back offers, Go to disclaimer
        for more details and get paychecks up to two days early. Get a{' '}
        <SpanColor>$20 bonus.</SpanColor>
      </p>
      <div className={styles.btn_group}>
        <Button variant='primary'>Get Started</Button>
        <Button variant='secondary'>Go Pro</Button>
      </div>
    </div>
  );
};
