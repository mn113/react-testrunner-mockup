import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    text: PropTypes.string.required,
    group: PropTypes.string.required,
    letter: PropTypes.string,
    eliminable: PropTypes.bool,
    response: PropTypes.string,
    setResponse: PropTypes.func
};

const defaultProps = {
    eliminable: false
};

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

Choice.propTypes = propTypes;
Choice.defaultProps = defaultProps;

export default Choice;
