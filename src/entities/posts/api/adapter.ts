import { TPosts } from '../model';

export const getPostsDTO = (postsData: TPosts): TPosts => {
  const formattedPosts = postsData.posts.map(post => ({
    id: post.id,
    title: post.title,
    tags: post.tags.map(
      (tag, index) => `#${tag}${index !== post.tags.length - 1 && ','}`
    ),
    reactions: post.reactions,
    body: post.body,
  }));

  return {
    posts: formattedPosts,
    total: postsData.total,
    skip: postsData.skip,
    limit: postsData.limit,
  };
};
