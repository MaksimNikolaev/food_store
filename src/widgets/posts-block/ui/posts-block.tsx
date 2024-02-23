import { Posts } from '../../../entities/posts'
import { NavigationPosts } from '../../../features/navigation-posts';
import { SpanColor } from '../../../shared/ui/span-color/span-color'
import styles from './posts-block.module.css';

export const PostsBlock = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Latest <SpanColor>Articles</SpanColor>
      </h1>
      <Posts/>
      <NavigationPosts/>
      </div>
  )
}
