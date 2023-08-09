
import './App.css';
import Navbar from './componenents/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <>
    <Provider store = {store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route 
            path='/'
            element = { <Home /> } 
          />
          <Route 
            path='/cart'
            element = { <Cart /> } 
          />
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
