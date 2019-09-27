import React from 'react';

function NavigationBubble(props) {
    const buttonClasses = 'navBubble';
    const isActiveClass = props.isActive ? 'active' : '';
    return (
        <li className={buttonClasses + isActiveClass}>
            <label htmlFor="txt">
                <input
                    role="link"
                    aria-label="Question 1. Answered"
                    type="radio"
                    name="format"
                    id="txt"
                    value="txt"
                    onClick={props.showItem.bind(this, props.label)} />
                { props.isInformational && 'i' }
                { !props.isInformational && props.label.toString().padStart(2,'0') }
            </label>
        </li>
    );
}

export default NavigationBubble;
