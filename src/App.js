import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from './learn-useState/Counter';
import Effect from './learn-useEffect/index';
import Context, { UserContext } from './learn-useContext/index';
function App() {
  const [values, setValues] = useState('Dari halaman Context')
  return (
    <Router><div className="App-header">
      <nav className='NavBar'>
        <ul className='ul'>
          <li className='li'>
            <Link to="/">Use State</Link>
          </li>
          <li className='li'>
            <Link to='/effect'>Use Effect</Link>
          </li>
          <li className='li'>
            <Link to='/context'>Use Context</Link>
          </li>
        </ul>
      </nav>
      <UserContext.Provider value={{ values, setValues }}>
        <Routes>
          <Route path='/' exact element={<Counter />} />
          <Route path='/effect' exact element={<Effect />} />
          <Route path='/context' exact element={<Context />} />
        </Routes>
      </UserContext.Provider>
    </div>
    </Router>
  );
}
export default App;