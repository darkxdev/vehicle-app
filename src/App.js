import { Route, Routes } from 'react-router';
import Makes from './components/pages/Makes';
import Manufacturers from './components/pages/Manufacturers';
import Homepage from './components/pages/Home';
import Parts from './components/pages/Parts';
import Cars from './components/pages/Cars';
import Motos from './components/pages/Motos';
import Trucks from './components/pages/Trucks';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/makes" element={<Makes />} />
      <Route path="/manufacturers" element={<Manufacturers />} />
      <Route path="/parts" element={<Parts />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/motos" element={<Motos />} />
      <Route path="/trucks" element={<Trucks />} />
    </Routes>
  </div>
);

export default App;
