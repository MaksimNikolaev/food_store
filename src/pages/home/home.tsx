import { Recipes } from '../../entities/recipes';
import { Reviews } from '../../entities/reviews';
import { menuNavigationList } from '../../shared/utils/constants/constants';
import { ControlBlock } from '../../widgets/control-block';
import { EnjoyBlock } from '../../widgets/enjoy-block';
import { Footer } from '../../widgets/footer';
import { Header } from '../../widgets/header';
import { Infographics } from '../../widgets/infographics';
import { MobileBlock } from '../../widgets/mobile-block';
import { Questions } from '../../widgets/questions';

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
