import styles from './posts.module.css';
import { Post } from './post';
import { useSelector } from '../../../app/store';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../shared/ui/loaders/loader';

export const Posts = () => {
  const { posts, postsLoading } = useSelector(state => state.posts);
  const navigate = useNavigate();

  return (
    <div className={styles.posts_container}>
      {postsLoading ? (
        // Если данные загружаются, показать скелеты карточек с лоадером
        Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className={styles.post_skelet}>
            <Loader />
          </div>
        ))
      ) : posts?.posts.length ? (
        posts?.posts.map(post => (
          <article
            key={post.id}
            onClick={() => navigate(`/blog/post/${post.id}`)}
            className={styles.post}
          >
            <Post post={post} />
          </article>
        ))
      ) : (
        <p className={styles.no_posts}>Posts are not available</p>
      )}
    </div>
  );
};
