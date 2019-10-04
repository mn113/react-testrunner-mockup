import React, { useState } from 'react';

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

export default ThemeSwitcher;
