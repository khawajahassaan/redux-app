import { useState } from 'react';
import './App.css';
import { MovieList } from './componenets/MovieList';
import { MovieInput } from './componenets/MovieInput';

function App() {

  return (

    <>
      <MovieInput />
      <MovieList />

    </>
  );
}

export default App
