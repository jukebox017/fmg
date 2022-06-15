import React from 'react';
import './App.css';
import { useTracks } from './hooks/useRequest';
import { Tracks } from './components/tracks';

function App() {
  const { data, error, isLoading, isSuccess } = useTracks();

  return (
    <div className="App">
      <h1>Track List</h1>

      {isSuccess && <Tracks tracks={data} />}
    </div>
  );
}

export default App;
