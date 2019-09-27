import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { FiSettings } from "react-icons/fi";

function ToolMenu() {
    return (
        <aside aria-labelledby="tools">
            <h2 id="tools" className="qti-visually-hidden">tool box & configuration</h2>
            <h3 id="tool_title" className="qti-visually-hidden">My Test Tools</h3>
            <ThemeSwitcher mode="off"></ThemeSwitcher>
            <button>Calculator</button>
            <button>Highlighter</button>
            <h3 className="qti-visually-hidden">My Exhibits</h3>
            <button>Exhibit: Periodic Table of Elements</button>

            <h3 className="qti-visually-hidden">My Test Configuration</h3>
            <button><FiSettings></FiSettings>Test Configuration</button>
        </aside>
    );
}

export default ToolMenu;
