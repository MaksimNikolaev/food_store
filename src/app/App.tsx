import { Route, Routes } from 'react-router-dom';
import './app.css';
import { Home } from '../pages/home/home';

function App() {
  return (
    <Routes>
      <Route element={<Home />} path='/' />
    </Routes>
  );
}

export default App;
