import { menuNavigationList } from '../../shared/utils/constants/constants';
import { Footer } from '../../widgets/footer';
import { Header } from '../../widgets/header';
import { PostsBlock } from '../../widgets/posts-block';
import styles from './blog.module.css';

export const Blog = () => {
  return (
    <>
      <Header menuNavigationList={menuNavigationList}/>
      <main className={styles.main}>
        <PostsBlock/>
      </main>
      <Footer />
    </>
  );
};
