import React from 'react';
import ReactDOM from 'react-dom';
import TestRunner from './TestRunner';

import data from '../../data/testData.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestRunner data={data} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
