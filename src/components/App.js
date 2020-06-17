import React from 'react';
import Button from './Button/Button';
import Homepage from './Homepage'

import Footer from './Footer/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App" >
        <Route path='/' exact>
          <Homepage />
        </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
