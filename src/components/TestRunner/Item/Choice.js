import React, { useState } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    text: PropTypes.string,
    group: PropTypes.string,
    letter: PropTypes.string,
    eliminable: PropTypes.bool,
    response: PropTypes.string,
    setResponse: PropTypes.func
};

const defaultProps = {
    eliminable: false
};

function Choice(props) {
    const [isEliminated, toggleEliminated] = useState(false);

    const eliminate = (e) => {
        e.preventDefault();
        toggleEliminated(!isEliminated);
    };

    return (
        <div className={'qti-choice ' + (isEliminated ? 'eliminated' : '')}>
            <label>
                <input
                    type="radio"
                    name={props.group}
                    value={`${props.group}_choice${props.letter}`}
                    checked={props.response === props.letter}
                    onChange={props.setResponse.bind(null, props)}
                />
                <span dangerouslySetInnerHTML={{ __html: `${props.letter}. ${props.text}` }}></span>
            </label>
            {props.eliminable && <button onClick={eliminate}>{isEliminated ? 'Une' : 'E'}liminate answer {props.letter}</button>}
        </div>
    );
}

Choice.propTypes = propTypes;
Choice.defaultProps = defaultProps;

export default Choice;
