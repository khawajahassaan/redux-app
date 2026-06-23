import { useState } from 'react';
import './App.css';
import { MovieList } from './componenets/MovieList';
import { MovieInput } from './componenets/MovieInput';

function App() {

  return (

    <div className="app-container">
      <main className="glass-panel">
        <h1 className="title">Fetched List from DummyJSON</h1>
        <MovieInput />
        <MovieList />
      </main>
    </div>
  );
}

export default App
