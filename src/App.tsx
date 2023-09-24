import React from 'react';
import './App.css';

import Home from './components/pages/Home';
const containerStyle: React.CSSProperties = {
  backgroundColor: 'blue', // Set your desired background color here
};
function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
