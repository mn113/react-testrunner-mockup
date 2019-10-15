import React from 'react';
import PropTypes from 'prop-types';
import { FiChevronUp } from 'react-icons/fi';

const propTypes = {
  isFinalItem: PropTypes.bool
};

const defaultProps = {
  isFinalItem: false,
};

function OverviewButton(props) {
  return (
    <button className="overview-button" aria-label="Overview and Submit" id="overview">
      <FiChevronUp></FiChevronUp>Overview{ props.isFinalItem && ' & Submit'}
    </button>
  );
}

OverviewButton.propTypes = propTypes;
OverviewButton.defaultProps = defaultProps;

export default OverviewButton;
