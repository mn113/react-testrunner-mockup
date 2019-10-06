import React from 'react';
import PropTypes from 'prop-types';
import NavigationBubble from './NavigationBubble';

const propTypes = {
    activeItemId: PropTypes.string.isRequired,
    activeSectionId: PropTypes.string.isRequired,
    sectionId: PropTypes.string.isRequired,
    sectionData: PropTypes.object.isRequired,
    bookmarks: PropTypes.object,
    showItem: PropTypes.func.isRequired
};

// class NavSection extends React.Component {
function NavSection(props) {
    return (
        <li className="nav-section">
            <h3 className="qti-visually-hidden">
                Question Group {props.sectionId} of 2: Shopping in the USA. The remaining time for this group is
                <span id="section_timer">8 minutes 22 seconds</span>
            </h3>
            <fieldset>
                <legend className="qti-visually-hidden">Shopping in the USA</legend>
                <ol>
                {Object.entries(props.sectionData.items).map(([itemId, itemData]) =>
                    <NavigationBubble
                        key={itemId}
                        itemId={itemId}
                        itemData={itemData}
                        sectionId={props.sectionId}
                        isBookmarked={!!props.bookmarks[`${props.sectionId}_${itemId}`]}
                        isInformational={props.sectionId === 'assessmentSection-1' && itemId === 'item-1'}
                        isActive={props.sectionId === props.activeSectionId && itemId === props.activeItemId}
                        isViewed={itemData.viewed}
                        isAnswered={itemData.answered}
                        // funcs
                        showItem={props.showItem}
                    />
                )}
                </ol>
            </fieldset>
        </li>
    );
}

NavSection.propTypes = propTypes;

export default NavSection;
