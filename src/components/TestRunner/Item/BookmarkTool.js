import React from 'react';
import { FiBookmark } from "react-icons/fi";

class BookmarkTool extends React.Component {
    render() {
        return (
            <div className="bookmark-tool">
                <h3 id="flag_title" className="qti-visually-hidden">Flag for review.</h3>
                <button role="switch" aria-checked="false" className="button-large-circle">
                    <FiBookmark></FiBookmark>
                    <span className="qti-visually-hidden">Flag Question 7 for review.</span>
                </button>
            </div>
        );
    }
}

export default BookmarkTool;
