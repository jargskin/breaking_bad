import './App.css';
import Navbar from './components/NavBar';
import HomePage from './pages/homePage';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const  App = () => {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
