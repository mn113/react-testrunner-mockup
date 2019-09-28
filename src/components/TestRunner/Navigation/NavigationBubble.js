import React from 'react';
import { TiInfoLarge } from 'react-icons/ti';

function NavigationBubble(props) {
    const buttonClasses = 'navBubble';
    const isActiveClass = props.isActive ? 'active' : '';
    return (
        <li className={buttonClasses + isActiveClass}>
            <label htmlFor="txt">
                <input
                    className="qti-visibility-hidden"
                    role="link"
                    aria-label="Question 1. Answered"
                    type="radio"
                    name="format"
                    id="txt"
                    value="txt"
                    onClick={props.showItem.bind(this, props.label)} />
                { props.isInformational && <TiInfoLarge className="informational"></TiInfoLarge> }
                { !props.isInformational && props.label.toString().padStart(2,'0') }
            </label>
        </li>
    );
}

export default NavigationBubble;
