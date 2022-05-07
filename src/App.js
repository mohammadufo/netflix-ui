import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './app.scss';
import Watch from './pages/watch/Watch';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch" element={<Watch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
