import React from 'react';
import { FiMenu } from "react-icons/fi";
import Breadcrumbs from './Breadcrumbs';
import ToolMenu from './ToolMenu/ToolMenu';

function Header(props) {
  return (
    <header>
        <FiMenu></FiMenu>
        <Breadcrumbs title={props.title}></Breadcrumbs>
        <ToolMenu></ToolMenu>
    </header>
  );
}

export default Header;
