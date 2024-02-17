import styles from './mobile-block.module.css';
import mobileImg from '../../../shared/assets/images/Mobile.webp';
import { SpanColor } from '../../../shared/ui/span-color/span-color';
import { Button } from '../../../shared/ui/button/button';
import { Icon } from '../../../shared/ui/icon/icon';

export const MobileBlock = () => {
  return (
    <section className={styles.mobile_block}>
      <div className={styles.wrapper}>
        <img
          className={styles.img}
          loading='lazy'
          decoding='async'
          src={mobileImg}
          alt='mobile'
        />
        <div className={styles.group}>
          <h2 className={styles.title}>
            Premium <SpanColor>Quality</SpanColor>
            <br />
            For Your Health
          </h2>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              Premium quality food is made with ingredients that are packed with
              essential vitamins, minerals.
            </li>
            <li className={styles.list_item}>
              These foods promote overall wellness by support healthy digestion
              and boosting immunity
            </li>
          </ul>
          <div className={styles.btn}>
            <Button variant='primary'>
              Download
              <Icon
                className={styles.icon}
                name='arrow'
                width={27.09}
                height={27.09}
                aria-hidden="true"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
