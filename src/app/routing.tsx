import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home/home';
import { Blog } from '../pages/blog/blog';

export const Routing = () => {
  return (
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Blog />} path='/blog' />
    </Routes>
  );
};
