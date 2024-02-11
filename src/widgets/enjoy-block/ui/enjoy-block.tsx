import { EnjoyFoods } from '../../../entities/enjoy-foods';
import { EnjoyPhoto } from '../../../entities/enjoy-photo';
import styles from './enjoy-block.module.css';

export const EnjoyBlock = () => {
  return (
    <section className={styles.container}>
      <EnjoyFoods/>
      <EnjoyPhoto/>
    </section>
  )
}
