import React from 'react';
import './App.css';
import Navbar from './Navbar';

function App() {

  
  return (
    <React.Fragment>
      <div className="App">
        <Navbar />
        <div className='content'>
          <h1>App Component</h1>
        </div>
      </div>
      
    </React.Fragment>
  );
}

export default App;
