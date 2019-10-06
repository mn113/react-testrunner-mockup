import React from 'react';
import PropTypes from 'prop-types';
import { FiArrowLeft } from 'react-icons/fi';
import { FiArrowRight } from 'react-icons/fi';

const propTypes = {
  move: PropTypes.func.isRequired,
  dir: PropTypes.string.isRequired
};

function NavigationButton(props) {
  if (props.dir === 'prev') {
    return (
      <button
        aria-label="go to previous question"
        className="button-large-circle navButton scaling prev secondary"
        value="prev"
        onClick={props.move.bind(this)}>
        <FiArrowLeft></FiArrowLeft>
      </button>
    );
  }
  else if (props.dir === 'next') {
    return (
      <button
        aria-label="go to next question"
        className="button-large-circle navButton scaling next primary"
        value="next"
        onClick={props.move.bind(this)}>
        <FiArrowRight></FiArrowRight>
      </button>
    );
  }
  return null;
}

NavigationButton.propTypes = propTypes;

export default NavigationButton;
