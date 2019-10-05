import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBubble from './NavigationBubble';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <NavigationBubble
            key={'item-1'}
            itemId={'item-1'}
            itemData={{}}
            sectionId={'section-1'}
            isBookmarked={true}
            isInformational={false}
            isActive={true}
            isViewed={true}
            isAnswered={false}
            // funcs
            showItem={() => {}}
        />
        , div);
    expect(div.innerHTML).toMatch(/class="navBubble/);
    ReactDOM.unmountComponentAtNode(div);
});
