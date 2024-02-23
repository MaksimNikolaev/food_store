import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home/home';
import { Blog } from '../pages/blog/blog';
import { Post } from '../pages/post/post';

export const Routing = () => {
  return (
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Blog />} path='/blog' />
      <Route element={<Post />} path='/blog/post/:id' />
    </Routes>
  );
};
