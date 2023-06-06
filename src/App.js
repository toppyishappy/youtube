import logo from './logo.svg';
import './App.css';
import React from 'react'
import IndexLayout from './routers/IndexLayout';

import {VideoProvider} from './context/VideoProvide';


function App() {

  return (
      <>
      <VideoProvider>
        <IndexLayout/>
      </VideoProvider>
      </>
  );
}

export default App;






