import React from 'react';

function ThemeSwitcher(props) {
  const toggleTheme = () => {
    props.toggleTheme(); 
  };

  return (
    <button onClick={toggleTheme}>Light/dark mode</button>
  );
}

export default ThemeSwitcher;
