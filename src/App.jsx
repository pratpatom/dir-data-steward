import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <div className="flex justify-center mt-8">
        <Link to="/learn" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
          Go to Learning Page
        </Link>
      </div>
    </div>
  );
}

export default App;
