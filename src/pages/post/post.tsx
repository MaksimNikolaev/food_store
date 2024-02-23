import { Comments } from '../../entities/comments';
import { FullPost } from '../../entities/full-post';
import { menuNavigationList } from '../../shared/utils/constants/constants';
import { Footer } from '../../widgets/footer';
import { Header } from '../../widgets/header';
import styles from './post.module.css';

export const Post = () => {
  return (
    <>
      <Header menuNavigationList={menuNavigationList}/>
      <main className={styles.main}>
        <FullPost/>
        <Comments/>
      </main>
      <Footer />
    </>
  );
};
