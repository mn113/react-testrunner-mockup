import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './ThemeContext';
import TestRunner from './components/TestRunner/TestRunner';

import * as serviceWorker from './serviceWorker';

import 'normalize.css';
import './css/App.scss';
import './css/tao-a11y-styles.css';

const baseUrl = 'data';
const testDataFile = 'testData.json';

function App() {
    const [theme, setTheme] = useState('light');
    const [testData, setTestData] = useState(null); // to block initial render

    function toggleTheme() {
        setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
    }

    // Hook to fetch data
    useEffect(() => {
        console.log('fetching testData...');
        fetch(`${baseUrl}/${testDataFile}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setTestData(data); // to force initial render
            });
    }, []); // no args => will run once only

    return testData && (
        <ThemeProvider value={theme} key={Object.keys(testData)[0]}>
            <TestRunner data={testData} toggleTheme={toggleTheme} />
        </ThemeProvider>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
