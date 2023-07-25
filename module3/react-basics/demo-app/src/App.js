import './App.css';
import Weather from './components/Weather';
import AddBtn from './components/AddBtn';
import Modal from './components/Modal';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import UserProfile from './components/UserProfile';
// import MyComponent from './components/MyComponent';
// import Counter from './components/Counter';

// import Form from './components/Form';
// import Ue from './components/Ue';
// import Loading from './components/Loading';


function App() {
  let cities = ['Hanoi','Dubai','Phuket','Pune','Cairo','Istanbul','Milan','Paris','Sydney','Moscow','Reykjavik','Seoul','Miami','Brasilia','Vancouver'];

  return (
    <>
      {/* <div>Hello</div>
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
      <Footer name='IMDB Clone'/> */}
      {/* <Form /> */}
      {/* <Ue /> */}
      {cities.map(el => <Weather key={el} city={el} />)}
      <Modal list = {cities} />
      <AddBtn/>
    </>
  );
}

export default App;
