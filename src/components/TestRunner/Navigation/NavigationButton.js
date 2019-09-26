import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { FiArrowRight } from 'react-icons/fi';

function NavigationButton(props) {
  if (props.dir === 'prev') {
    return (
      <button className="navButton prev" value="prev" onClick={props.move.bind(this)}>
        <FiArrowLeft></FiArrowLeft>
      </button>
    );  
  }
  else if (props.dir === 'next') {
    return (
      <button className="navButton next primary" value="next" onClick={props.move.bind(this)}>
        <FiArrowRight></FiArrowRight>
      </button>
    );  
  }
  return null;
}

export default NavigationButton;
