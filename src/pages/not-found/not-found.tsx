import { menuNavigationList } from "../../shared/utils/constants/constants";
import { Footer } from "../../widgets/footer";
import { Header } from "../../widgets/header";
import styles from './not-found.module.css';

export const NotFound = () => {
  return (
    <>
      <Header menuNavigationList={menuNavigationList}/>
      <main className={styles.main}>
        <h1>Page doesn't exist</h1>
      </main>
      <Footer />
    </>
  );
};