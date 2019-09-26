import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { FiSettings } from "react-icons/fi";

function ToolMenu() {
  return (
    <ul className="toolMenu">
        <FiSettings></FiSettings>
        <li>
          <ThemeSwitcher mode="off"></ThemeSwitcher>
        </li>
    </ul>
  );
}

export default ToolMenu;
