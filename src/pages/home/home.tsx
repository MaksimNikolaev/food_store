
import { ControlBlock } from '../../entities/control-block';
import { Infographics } from '../../entities/infographics';
import { MobileBlock } from '../../entities/mobile-block';
import { Recipes } from '../../entities/recipes';
import { Reviews } from '../../entities/reviews';
import { EnjoyBlock } from '../../widgets/enjoy-block';
import { Footer } from '../../widgets/footer';
import { Header } from '../../widgets/header';
import styles from './home.module.css';

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <EnjoyBlock/>
        <Infographics/>
        <MobileBlock/>
        <Recipes/>
        <ControlBlock/>
        <Reviews/>
      </main>
      <Footer />
    </>
  );
};
