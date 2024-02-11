import { Icon } from '../../../shared/ui/icon/icon';
import { Notification } from '../../../shared/ui/notification/notification';
import { SpanColor } from '../../../shared/ui/span-color/span-color';
import { notifications, purchases } from '../model';
import styles from './control-block.module.css';

export const ControlBlock = () => {
  return (
    <section className={styles.control}>
      <div className={styles.wrapper}>
        <div>
          <h2 className={styles.title}>Control <SpanColor>Purchases</SpanColor> Via Dashboard</h2>
          <ul className={styles.list}>
            {notifications.map((food, i) => (
              <li key={i}>
                <Notification size='sm' card={food}/>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.dashboard}>
          <div className={styles.group}>
            <h3 className={styles.dashboard_title}>Purchases</h3>
            <select className={styles.select}>
              <option>This month</option>
            </select>
          </div>
          <ul>
            {
              purchases.map((item) => (
                <li key={item.id} className={styles.list_item}>
                  <Icon className={styles.icon} name={item.icon} width={50.26} height={50.26}/>
                  <div className={styles.purchase_info}>
                    <p className={styles.purchase_title}>{item.title}</p>
                    <p className={styles.purchase_subtitle}>{item.subtitle}</p>
                  </div>                  
                  <p className={styles.purchase_sum}>{item.sum}</p>
                  <div className={`${styles.bar} ${styles[`bar_${item.color}`]}`}></div>            
                </li>
              ))
            }
          </ul>
        </div>
      </div>      
    </section>
  )
}
