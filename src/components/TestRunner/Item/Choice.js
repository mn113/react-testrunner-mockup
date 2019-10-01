import React from 'react';

function Choice(props) {
    return (
        <div className="qti-choice">
            <label>
                <input
                    type="radio"
                    name={props.group}
                    value={`${props.group}_choice${props.letter}`}
                    checked={props.response === props.letter}
                    onChange={props.setResponse.bind(null, props)}
                />
                {props.letter}. {props.text}
            </label>
            {props.eliminable && <button>Eliminate answer {props.letter}</button>}
        </div>
    );
}

export default Choice;
