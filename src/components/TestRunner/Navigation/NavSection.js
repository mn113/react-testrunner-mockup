import React from 'react';
import NavigationBubble from './NavigationBubble';

class NavSection extends React.Component {

    render() {
        return (
            <li className="nav-section">
                <h3 className="qti-visually-hidden">
                    Question Group {this.props.sectionId} of 2: Shopping in the USA. The remaining time for this group is
                    <span id="section_timer">8 minutes 22 seconds</span>
                </h3>
                <fieldset>
                    <legend className="qti-visually-hidden">Shopping in the USA</legend>
                    <ol>
                    {Object.entries(this.props.sectionData.items).map(([itemId, itemData]) =>
                        <NavigationBubble
                            key={itemId}
                            itemId={itemId}
                            itemData={itemData}
                            sectionId={this.props.sectionId}
                            isBookmarked={!!this.props.bookmarks[`${this.props.sectionId}_${itemId}`]}
                            isInformational={this.props.sectionId === 0}
                            isActive={this.props.sectionId === this.props.activeSectionId && itemId === this.props.activeItemId}
                            isViewed={itemData.viewed}
                            isAnswered={itemData.answered}
                            // funcs
                            showItem={this.props.showItem}
                        />
                    )}
                    </ol>
                </fieldset>
            </li>
        );
    }
}

export default NavSection;
