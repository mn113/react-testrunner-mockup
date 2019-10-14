import { configure, addDecorator } from '@storybook/react';

import '!style-loader!css-loader!sass-loader!./scss-loader.scss';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);

// enable A11y addon for all stories
import { withA11y } from '@storybook/addon-a11y';
addDecorator(withA11y);
