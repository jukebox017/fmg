import React from 'react';
import './App.css';
import { useTracks } from './hooks/useRequest';
import { Tracks } from './components/tracks';
import { CircularProgress } from '@mui/material';

function App() {
  const { data, error, isLoading, isSuccess } = useTracks();

  return (
    <div className="App">
      <h1>Feed Media Group</h1>

      <h2>Track List</h2>

      {isLoading && <CircularProgress />}
      {isSuccess && <Tracks tracks={data} />}
    </div>
  );
}

export default App;
