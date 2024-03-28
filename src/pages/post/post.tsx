import { Comments } from '../../entities/comments';
import { CommentAdd } from '../../features/comment-add';
import { FullPost } from '../../features/full-post';
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
        <CommentAdd/>
      </main>
      <Footer />
    </>
  );
};
