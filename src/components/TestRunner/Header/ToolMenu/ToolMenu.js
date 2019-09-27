import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { FiSettings } from "react-icons/fi";

function ToolMenu(props) {
    return (
        <aside aria-labelledby="tools" className="toolMenu">
            <FiSettings></FiSettings>
            <div className="popup-menu">
                <h2 id="tools" className="qti-visually-hidden">tool box & configuration</h2>
                <h3 id="tool_title" className="qti-visually-hidden">My Test Tools</h3>
                <ThemeSwitcher toggleTheme={props.toggleTheme}></ThemeSwitcher>
                <button>Calculator</button>
                <button>Highlighter</button>
                <h3 className="qti-visually-hidden">My Exhibits</h3>
                <button>Exhibit: Periodic Table of Elements</button>
                <h3 className="qti-visually-hidden">My Test Configuration</h3>
                <button>Test Configuration</button>
            </div>
        </aside>
    );
}

export default ToolMenu;
