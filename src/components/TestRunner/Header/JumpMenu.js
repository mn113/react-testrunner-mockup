import React from 'react';

function JumpMenu(props) {
    return (
        <div className="jump-menu">
            <h2 className="qti-visually-hidden">Skip menu</h2>
            <a href="#main" className="jump-link" tabIndex="0" role="button">Skip to question 7</a>
            <a href="#navigation" className="jump-link" tabIndex="0" role="button">Skip to navigation</a>
            <a href="#tools" className="jump-link" tabIndex="0" role="button">Skip to tool box & configuration</a>
	    </div>
    );
}

export default JumpMenu;
