import React from 'react';
import TestRunner from './components/TestRunner/TestRunner';
import 'normalize.css';
import './css/App.scss';
import './css/tao-a11y-styles.css';

import testData from './data/QtiRunnerData.json';

function App() {
    return (
        <TestRunner data={testData}></TestRunner>
    );
}

export default App;
