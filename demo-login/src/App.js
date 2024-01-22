
import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';

function App() {
  const [currenform, setCurrentForm] = useState('login')
  const toggleForm = (form) => {
    setCurrentForm(form)
  }

  return (
    <div className="App">
      {
        currenform === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
