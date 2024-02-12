
import { ControlBlock } from '../../entities/control-block';
import { Infographics } from '../../entities/infographics';
import { MobileBlock } from '../../entities/mobile-block';
import { Questions } from '../../entities/questions';
import { Recipes } from '../../entities/recipes';
import { Reviews } from '../../entities/reviews';
import { menuNavigationList } from '../../shared/utils/constants/constants';
import { EnjoyBlock } from '../../widgets/enjoy-block';
import { Footer } from '../../widgets/footer';
import { Header } from '../../widgets/header';

export const Home = () => {
  return (
    <>
      <Header menuNavigationList={menuNavigationList}/>
      <main>
        <EnjoyBlock/>
        <Infographics/>
        <MobileBlock/>
        <Recipes/>
        <ControlBlock/>
        <Reviews/>
        <Questions/>
      </main>
      <Footer />
    </>
  );
};
