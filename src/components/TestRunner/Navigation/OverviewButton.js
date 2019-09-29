import React from 'react';
import { FiChevronUp } from 'react-icons/fi';

function OverviewButton() {
  return (
    <button className="overview-button" aria-label="Overview and Submit" id="overview">
      <FiChevronUp></FiChevronUp>Overview & Submit
    </button>
  );
}

export default OverviewButton;
