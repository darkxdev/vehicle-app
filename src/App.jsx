import { Route, Routes } from 'react-router';
import Makes from './components/pages/Makes';
import Manufacturers from './components/pages/Manufacturers';
import Homepage from './components/pages/Home';
import Parts from './components/pages/Parts';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/makes" element={<Makes />} />
      <Route path="/manufacturers" element={<Manufacturers />} />
      <Route path="/parts" element={<Parts />} />
      <Route path="/a" element={<Manufacturers />} />
      <Route path="/b" element={<Manufacturers />} />
    </Routes>
  </div>
);

export default App;
