import React from 'react';
import PropTypes from 'prop-types';
import { TiInfoLarge } from 'react-icons/ti';
import { FaBookmark } from "react-icons/fa";

const propTypes = {
    showItem: PropTypes.func.isRequired,
    itemId: PropTypes.number.isRequired,
    sectionId: PropTypes.number.isRequired,
    isInformational: PropTypes.bool,
    isActive: PropTypes.bool.isRequired
};

const defaultProps = {
    isInformational: false,
};

// class NavigationBubble extends React.Component {
function NavigationBubble(props) {
    return (
        <li className={'navBubble ' + (props.isActive ? 'active' : '')}>
            <label htmlFor="txt">
                <input
                    className="qti-visibility-hidden"
                    role="link"
                    aria-label={'Question ' + props.itemId + ' Answered'}
                    type="radio"
                    id="txt"
                    value="txt"
                />
                <span className="bubble-content" onClick={props.showItem.bind(null, props)}>
                    { props.isInformational && <TiInfoLarge className="informational"></TiInfoLarge> }
                    { !props.isInformational && props.itemId.toString().padStart(2,'0') }
                    { props.isBookmarked && <FaBookmark className="mini-indicator"></FaBookmark>}
                </span>
            </label>
        </li>
    );
}

NavigationBubble.propTypes = propTypes;
NavigationBubble.defaultProps = defaultProps;

export default NavigationBubble;
