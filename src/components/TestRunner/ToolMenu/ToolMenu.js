import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

function ToolMenu() {
  return (
    <ul className="toolMenu">
        <div className="icon">?</div>
        <li>
          <ThemeSwitcher mode="off"></ThemeSwitcher>
        </li>
    </ul>
  );
}

export default ToolMenu;
