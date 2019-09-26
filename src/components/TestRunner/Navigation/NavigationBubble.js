import React from 'react';

function NavigationBubble(props) {
    const buttonClasses = 'navBubble connected-right ';
    const isActiveClass = props.isActive ? 'active' : '';
    return (
        <li>
            <button
                className={buttonClasses + isActiveClass}
                onClick={props.showItem.bind(this, props.label)}>
                { props.isInformational && 'i' }
                { !props.isInformational && props.label.toString().padStart(2,'0') }
            </button>
        </li>
    );
}

export default NavigationBubble;
