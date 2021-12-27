import React from 'react';
import './App.css';
import Title from './components/Title';
import Cards from './components/Cards';

function App() {
  return (
    <div className='card-library'>
      <Title/>
      <Cards/>
    </div>
  );
}

export default App;
