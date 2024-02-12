import { Route, Routes } from 'react-router-dom';
import './app.css';
import { Home } from '../pages/home/home';
import { Blog } from '../pages/blog/blog';
import { Recipes } from '../pages/recipes/recipes';
import { Contact } from '../pages/contact/contact';
import { About } from '../pages/about/about';

function App() {
  return (
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Blog />} path='/blog' />
      <Route element={<Recipes />} path='/recipes' />
      <Route element={<Contact />} path='/contact' />
      <Route element={<About />} path='/about' />
    </Routes>
  );
}

export default App;
