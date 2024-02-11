
import { Infographics } from '../../entities/infographics';
import { MobileBlock } from '../../entities/mobile-block';
import { EnjoyBlock } from '../../widgets/enjoy-block';
import { Footer } from '../../widgets/footer';
import { Header } from '../../widgets/header';
import styles from './home.module.css';

export const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <EnjoyBlock/>
        <Infographics/>
        <MobileBlock/>
      </main>
      <Footer />
    </div>
  );
};
