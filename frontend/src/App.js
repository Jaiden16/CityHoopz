import React from 'react';
import './App.css';
import SignIn from './Components/SignIn';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SignIn/>
    </div>
  );
}

export default App;
