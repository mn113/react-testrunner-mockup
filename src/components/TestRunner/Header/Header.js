import React from 'react';
import { FiMenu } from "react-icons/fi";
import Breadcrumbs from './Breadcrumbs';
import ToolMenu from './ToolMenu/ToolMenu';

function Header(props) {
  return (
    <header className="top-bar">
        <button aria-label="main menu" className="menu-button">
            <FiMenu></FiMenu>
        </button>
        <h1 id="assessment_name">
            <Breadcrumbs
                testTitle={'Reading & Understanding'}
                sectionTitle={'The American Dream'}
                sectionNo={1}
                sectionsTotal={2}>
            </Breadcrumbs>
            <span className="timer" id="demo-timer" aria-label="Time remaining in this part: ">09:59</span>
        </h1>
        <ToolMenu toggleTheme={props.toggleTheme}></ToolMenu>
    </header>
  );
}

export default Header;
