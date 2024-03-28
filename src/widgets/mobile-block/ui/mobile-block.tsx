import styles from './mobile-block.module.css';
import mobileWebp from '../../../shared/assets/images/Mobile.webp';
import mobilePng from '../../../shared/assets/images/Mobile.png';
import { SpanColor } from '../../../shared/ui/span-color/span-color';
import { Button } from '../../../shared/ui/button/button';
import { Icon } from '../../../shared/ui/icon/icon';

export const MobileBlock = () => {
  return (
    <section className={styles.mobile_block}>
      <div className={styles.wrapper}>
        <picture>
          <source type='image/webp' srcSet={mobileWebp} />
          <img
            className={styles.img}
            loading='lazy'
            decoding='async'
            src={mobilePng}
            alt='mobile'
          />
        </picture>
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
                name='arrow'
                width={27.09}
                height={27.09}
                aria-hidden='true'
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
