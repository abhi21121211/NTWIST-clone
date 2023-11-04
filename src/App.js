import logo from './logo.svg';
import './App.css';
import AllRoutes from './AllRoutes';
import NavBar from './Components/NavBar';
import HomeAdd from './Components/HomeAdd';
import Home from './Pages/Home';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <NavBar/>
     
      <AllRoutes/>

      <Footer/>
    </div>
  );
}

export default App;
