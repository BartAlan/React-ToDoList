import React, { useState } from 'react';
import Todo from './components/Todo';
import Header from './components/layout/Header';
import './App.css';

function App() { 
  
  const [theme, setTheme] = useState('light');

  const handleToggle = (newTheme) =>{
    setTheme(newTheme)
  }

  return (
    <div className="App" data-theme={theme}>
      <Header
        handleToggle={handleToggle}
        theme={theme} />
      <main className='main'>
        <Todo />
      </main>
    </div>
  );
}

export default App;