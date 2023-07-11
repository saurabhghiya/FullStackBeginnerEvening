import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import MyComponent from './components/MyComponent';
import Counter from './components/Counter';

function App() {
  return (
    <>
      <div>Hello</div>
      <Header/>
      <Counter />
      <UserProfile name='Alex' age='30' occupation='Instructor' />
      <Counter />
      <UserProfile name='Adam' age='Old' occupation='God' />
      <Counter />
      <UserProfile name='Anuj' age='25' occupation='SDE' />
      <UserProfile name='Ajay' age='50' occupation='Actor' />
      <UserProfile name='Stokes' age='45' occupation='Cricket' />
      <MyComponent />
      <Footer name='IMDB Clone'/>
    </>
    
    // <h1>Hello World</h1>
    
  );
}

export default App;
