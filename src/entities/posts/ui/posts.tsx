import styles from './posts.module.css';
import { Post } from './post';
import { useSelector } from '../../../app/store';

export const Posts = () => {
  const { posts } = useSelector(state => state.posts);

  return (
    <div className={styles.posts_container}>
      {posts?.posts.length ? (
        posts?.posts.map(post => <Post key={post.id} post={post} />)
      ) : (
        <p className={styles.no_posts}>Posts are not available</p>
      )}
    </div>
  );
};
