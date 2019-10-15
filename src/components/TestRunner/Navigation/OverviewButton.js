import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FiChevronUp } from 'react-icons/fi';
import ThemeContext from '../../../ThemeContext';

const propTypes = {
  isFinalItem: PropTypes.bool
};

const defaultProps = {
  isFinalItem: false,
};

function OverviewButton(props) {
  const theme = useContext(ThemeContext);
  let label = 'Overview';
  if (props.isFinalItem) label += ' & Submit';

  return (
    <button className={'overview-button theme-' + theme} aria-label={label} id="overview">
      <FiChevronUp></FiChevronUp>{label}
    </button>
  );
}

OverviewButton.propTypes = propTypes;
OverviewButton.defaultProps = defaultProps;

export default OverviewButton;
