import React from 'react';
import Navbar from './Navbar';
import Home from './Home';

function App() {

  
  return (
    <React.Fragment>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Home />
        </div>
      </div>
      
    </React.Fragment>
  );
}

export default App;
