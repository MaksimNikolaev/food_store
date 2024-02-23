import styles from './posts.module.css';
import { Post } from './post';
import { useSelector } from '../../../app/store';
import { useNavigate } from 'react-router-dom';

export const Posts = () => {
  const { posts } = useSelector(state => state.posts);
  const navigate = useNavigate();

  if (!posts) {
    return null;
  }

  return (
    <div className={styles.posts_container}>
      {posts?.posts.length ? (
        posts?.posts.map(post =>
          <article key={post.id} onClick={() => navigate(`/blog/post/${post.id}`)} className={styles.post}>
            <Post post={post} />
          </article>        
        )
      ) : (
        <p className={styles.no_posts}>Posts are not available</p>
      )}
    </div>
  );
};
