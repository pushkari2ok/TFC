// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Template from './pages/Template';
import Dishes from './pages/Dishes';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/template' element={<Template/>}/>
        <Route path='/dishes' element={<Dishes/>}/>
      </Routes>
    </Router>
  );
}

export default App;
