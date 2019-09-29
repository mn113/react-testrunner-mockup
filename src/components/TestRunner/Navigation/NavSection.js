import React from 'react';
import NavigationBubble from './NavigationBubble';

class NavSection extends React.Component {

    render() {
        const groupSizes = [3,8,5];
        const numbers = [];
        for (let n = 0; n < groupSizes[this.props.sectionId]; n++) {
            numbers.push(n+1);
        }

        return (
            <li className="nav-section">
                <ol>
                    <h3 className="qti-visually-hidden">
                        Question Group {this.props.sectionId} of 2: Shopping in the USA. The remaining time for this group is
                        <span id="section_timer">8 minutes 22 seconds</span>
                    </h3>
                    <fieldset>
                        <legend className="qti-visually-hidden">Shopping in the USA</legend>
                        {numbers.map(newItemId =>
                            <NavigationBubble
                                sectionId={this.props.sectionId}
                                itemId={newItemId}
                                key={`s${this.props.sectionId}_b${newItemId}`}
                                showItem={this.props.showItem}
                                isBookmarked={!!this.props.bookmarksMap[this.props.sectionId][newItemId]}
                                isInformational={this.props.sectionId === 0}
                                isActive={this.props.sectionId === this.props.activeSectionId && newItemId === this.props.activeItemId}>
                            </NavigationBubble>
                        )}
                    </fieldset>
                </ol>
            </li>
        );
    }
}

export default NavSection;
