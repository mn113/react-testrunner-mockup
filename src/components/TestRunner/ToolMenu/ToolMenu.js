import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

function ToolMenu() {
  return (
    <ul>
        <li>
          <ThemeSwitcher mode="off"></ThemeSwitcher>
        </li>
    </ul>
  );
}

export default ToolMenu;
