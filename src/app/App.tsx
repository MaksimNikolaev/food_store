import { Route, Routes } from 'react-router-dom';
import './app.css';
import { Home } from '../pages/home/home';
import { Blog } from '../pages/blog/blog';

function App() {
  return (
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Blog />} path='/blog' />
    </Routes>
  );
}

export default App;
