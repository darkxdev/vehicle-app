import { Route, Routes } from 'react-router';
import Makes from './components/Makes';
import Manufacturers from './components/Manufacturers';
import Homepage from './components/pages/Home';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/makes" element={<Makes />} />
      <Route path="/manufacturers" element={<Manufacturers />} />
    </Routes>
  </div>
);

export default App;
