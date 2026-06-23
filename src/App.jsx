import { useState } from 'react';
import './App.css';
import { MovieList } from './componenets/MovieList';
import { MovieInput } from './componenets/MovieInput';
import { PostList } from './componenets/PostList';
import { PostInput } from './componenets/PostInput';

function App() {

  return (

    <div className="app-container">
      <main className="glass-panel">
        <h1 className="title">DummyJSON USERS LIST</h1>
        <MovieInput />
        <MovieList />
        <PostInput />
        <PostList />
      </main>
    </div>
  );
}

export default App
