import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Details from './Details';
import Home from './Home';
function App() {
  
  return (
    <Router>
    <div>
      <Routes>
      <Route exact path="/" element={<Details/>}></Route>
      <Route exact path="/Home" element={<Home/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;