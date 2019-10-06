import React, { useState } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  toggleTheme: PropTypes.func.isRequired
};

function ThemeSwitcher(props) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    props.toggleTheme();
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme}>Light/dark mode</button>
  );
}

ThemeSwitcher.propTypes = propTypes;

export default ThemeSwitcher;
