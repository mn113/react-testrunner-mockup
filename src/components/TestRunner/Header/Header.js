import React from 'react';
import { FiMenu } from "react-icons/fi";
import Breadcrumbs from './Breadcrumbs';
import ToolMenu from './ToolMenu/ToolMenu';

function Header(props) {
  return (
    <header>
        <button aria-label="main menu">
            <FiMenu></FiMenu>
        </button>
        <h1 id="assessment_name">
            <Breadcrumbs title={props.title}></Breadcrumbs>
            Reading & Understanding - Part 1 of 2: The American Dream
            <span id="demo" aria-label="Time remaining in this part: ">09:59</span>
        </h1>
        <ToolMenu></ToolMenu>
    </header>
  );
}

export default Header;
