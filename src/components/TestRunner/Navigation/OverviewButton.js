import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FiChevronUp } from 'react-icons/fi';
import ThemeContext from '../../../ThemeContext';
import styled from 'styled-components';

const propTypes = {
  isFinalItem: PropTypes.bool
};

const defaultProps = {
  isFinalItem: false,
};

function OverviewButton(props) {
  const theme = useContext(ThemeContext);

  const ThemedButton = styled.button`
    height: 36px;
    width: unset;
    border-radius: 18px;
    text-transform: uppercase;
    order: 3;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    line-height: 1;
    padding: 0.2rem 0.6rem;
    background: ${ theme === 'light' ? 'white' : '#444' };
    border: 2px solid;
    border-color: ${ theme === 'light' ? 'black' : '#767676' };
    color: ${ theme === 'light' ? 'black' : 'white' };
    &:hover {
        background-color: ${ theme === 'light' ? '#4469bb' : '#da4045' };
        border-color: ${ theme === 'light' ? '#4469bb' : '#da4045' };
        color: ${ theme === 'light' ? 'white' : 'black' };
    }
  `;

  let label = 'Overview';
  if (props.isFinalItem) label += ' & Submit';

  return (
    <ThemedButton className={'overview-button theme-' + theme} aria-label={label} id="overview">
      <FiChevronUp></FiChevronUp>{label}
    </ThemedButton>
  );
}

OverviewButton.propTypes = propTypes;
OverviewButton.defaultProps = defaultProps;

export default OverviewButton;
