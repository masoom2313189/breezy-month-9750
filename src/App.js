import logo from './logo.svg';
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
