import React from 'react';
import './App.css';
import TableGrid from './TableGrid';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Periodic Table</h1>
      </header>
      <main>
        <TableGrid></TableGrid>
      </main>
    </div>
  );
}

export default App;
