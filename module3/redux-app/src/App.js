
import './App.css';
import Navbar from './componenents/Navbar';
import Products from './componenents/Products';
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {
  return (
    <>
    <div>Redux App</div>
    <Navbar />
    <Cart />
    <Home />
    <Products />
    </>
  );
}

export default App;
