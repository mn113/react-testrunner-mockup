import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { FiArrowRight } from 'react-icons/fi';

function NavigationButton(props) {
  if (props.dir === 'prev') {
    return (
      <button
        aria-label="go to previous question"
        className="navButton prev"
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
        className="navButton next primary" 
        value="next"
        onClick={props.move.bind(this)}>
        <FiArrowRight></FiArrowRight>
      </button>
    );  
  }
  return null;
}

export default NavigationButton;
