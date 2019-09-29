import React from 'react';
import { FiBookmark } from "react-icons/fi";

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

export default BookmarkTool;
