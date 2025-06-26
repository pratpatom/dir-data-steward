import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="max-w-screen-xl mx-auto text-center">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
