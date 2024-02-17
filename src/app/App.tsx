import { BrowserRouter } from 'react-router-dom';
import './app.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { Routing } from './routing';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
       {/* P.S.Паттерн Одиночка В данном случае, он у нас один и все компоненты обращаются к нему */}
      <Provider store={store}>
        <Routing/>
        <ToastContainer transition={Slide} />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
