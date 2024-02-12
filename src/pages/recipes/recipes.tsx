import { useLocation, useParams } from 'react-router-dom';
import { menuNavigationList } from '../../shared/utils/constants/constants';
import { Footer } from '../../widgets/footer';
import { Header } from '../../widgets/header';
import styles from './recipes.module.css';

export const Recipes = () => {
  const {pathname} = useLocation();
  
  return (
    <>
      <Header menuNavigationList={menuNavigationList}/>
      <main className={styles.main}>
        <h1>Page {pathname.slice(1)} under development</h1>
      </main>
      <Footer />
    </>
  );
};
