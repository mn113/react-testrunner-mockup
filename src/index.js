import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './ThemeContext';
import TestRunner from './components/TestRunner/TestRunner';

import * as serviceWorker from './serviceWorker';

import 'normalize.css';
import './css/App.scss';
import './css/tao-a11y-styles.css';

import data from './data/testData.json';

function App() {
    const [theme, setTheme] = useState('light');

    function toggleTheme() {
        console.log('index-level toggleTheme');
        setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
    }

    return (
        <ThemeProvider value={theme}>
            <TestRunner data={data} toggleTheme={toggleTheme} />
        </ThemeProvider>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
