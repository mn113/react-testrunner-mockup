import React from 'react';
import PropTypes from 'prop-types';
import { FiBookmark } from "react-icons/fi";

const propTypes = {
    itemId: PropTypes.string.isRequired,
    isBookmarked: PropTypes.bool,
    bookmarkItem: PropTypes.func
};

const defaultProps = {
    isBookmarked: false,
};

function BookmarkTool(props) {
    return (
        <div className={'bookmark-tool ' + (props.isBookmarked ? 'bookmarked' : '')}>
            <h3 id="flag_title" className="qti-visually-hidden">Flag for review</h3>
            <button
                role="switch"
                aria-checked="false"
                className="button-large-circle scaling secondary"
                onClick={props.bookmarkItem.bind(null, props)}>
                <FiBookmark></FiBookmark>
                <span className="qti-visually-hidden">Flag Question {props.itemId} for review</span>
            </button>
        </div>
    );
}

BookmarkTool.propTypes = propTypes;
BookmarkTool.defaultProps = defaultProps;

export default BookmarkTool;
