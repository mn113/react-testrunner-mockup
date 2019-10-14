import React from 'react';
import { addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select, number } from '@storybook/addon-knobs';

import NavigationBubble from '../src/components/TestRunner/Navigation/NavigationBubble';

export default {
    title: 'NavigationBubble',
};

addDecorator(withKnobs);

const itemData = {
    "title": "How to Navigate",
    "position": 0,
    "positionInPart": 0,
    "positionInSection": 0,
    "occurrence": 0,
    "remainingAttempts": -1,
    "answered": false,
    "viewed": false
};

const sectionId = 'section-1';
const itemId = 'item-1';

export const navBtn = () => {
    const theme = 'light';
    // Wrapping is for styling - could be avoided with component-scoped CSS
    return (
        <div className={`test-runner theme-${select('theme', { light: 'light', dark: 'dark' }, 'light')}`}>
            <nav className="testNav">
                <ol className="testNav-sections">
                    <li className="nav-section">
                        <fieldset>
                            <ol>
                                <NavigationBubble
                                    key={itemId}
                                    itemId={itemId}
                                    itemData={itemData}
                                    sectionId={sectionId}
                                    isBookmarked={boolean('isBookmarked', false)}
                                    isInformational={boolean('isInformational', false)}
                                    isActive={boolean('isActive', false)}
                                    isViewed={boolean('isViewed', false)}
                                    isAnswered={boolean('isAnswered', false)}
                                    // funcs
                                    showItem={action("show item!")}
                                />
                            </ol>
                        </fieldset>
                    </li>
                </ol>
            </nav>
        </div>
    );
};

navBtn.story = {
     name: 'basic'
};
