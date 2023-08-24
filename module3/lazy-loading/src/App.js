// import {moviesData} from "./data"
import {lazy, Suspense, useState} from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import Navbar from "./components/Navbar";
// import About from "./Pages/About";
// import Home from "./Pages/Home";
// import Products from "./Pages/Products";
// import Testimonials from "./Pages/Testimonial";

//lazy loading pages in seperate bundles
const Home = lazy(()=>import("./Pages/Home"));
const Products = lazy(()=>import("./Pages/Products"));
const About = lazy(()=>import("./Pages/About"));
const Testimonial = lazy(()=>import("./Pages/Testimonials"));

function App() {
  /* let [movies,setMovies] = useState([]);

  function handleClick(){
    import('./data').then((module)=>{
      setMovies(module.data);
    }); //dynamic import - v imp for interviews
    // setMovies(data);
  }
 */
  return (
    // <div>
    //   <h1>Movies</h1>
    //   <button onClick={handleClick} >Show Movies</button>
    //   {movies.map((obj)=>{
    //     return <div key={obj.id} >{obj.title}</div>
    //   })}
    // </div>

    <Suspense fallback={<h2>...Loading</h2>}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/testimonials" element={<Testimonial/>}></Route>
          <Route path="/about" element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
    </Suspense>
  );
}

export default App;
