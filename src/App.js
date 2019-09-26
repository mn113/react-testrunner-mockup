import React from 'react';
import TestRunner from './components/TestRunner/TestRunner';
import './App.css';

import testData from './data/QtiRunnerData.json';

function App() {
  return (
    <TestRunner data={testData}></TestRunner>
  );
}

export default App;
