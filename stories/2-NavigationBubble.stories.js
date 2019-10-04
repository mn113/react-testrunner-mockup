import React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import NavigationBubble from '../src/components/TestRunner/Navigation/NavigationBubble';

export default {
    title: 'NavigationBubble',
};

const stories = storiesOf('NavigationBubble', module);
stories.addDecorator(withKnobs);

// Knobs for React props
stories.add('with a button', () => (
    <button disabled={boolean('Disabled', false)} >
      {text('Label', 'Hello Storybook')}
    </button>
));

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

export const navBtn = () => {
    const sectionId = 'section-1';
    const itemId = 'item-1';
    const theme = 'dark';
    return (
        <div className={`test-runner theme-${theme}`}>
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
                                    isBookmarked={false}
                                    isInformational={false}
                                    isActive={false}
                                    isViewed={false}
                                    isAnswered={false}
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

stories.add('basic', () => {
    const sectionId = 'section-1';
    const itemId = 'item-1';
    const theme = 'dark';
    return (
        <div className={`test-runner theme-${theme}`}>
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
                                    isBookmarked={false}
                                    isInformational={false}
                                    isActive={boolean('isActive', false)}
                                    isViewed={false}
                                    isAnswered={false}
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
});

navBtn.story = {
    name: 'basic',
};
