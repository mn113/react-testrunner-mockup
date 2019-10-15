import React from 'react';
import PropTypes from 'prop-types';
import NavigationButton from './NavigationButton';
import OverviewButton from './OverviewButton';
import NavSection from './NavSection';

const propTypes = {
    activeItemId: PropTypes.string.isRequired,
    activeSectionId: PropTypes.string.isRequired,
    sectionsMap: PropTypes.object.isRequired,
    bookmarks: PropTypes.object,
    moveForward: PropTypes.func,
    moveBack: PropTypes.func,
    showItem: PropTypes.func
};

const defaultProps = {
    isBookmarked: false,
};

// class TestNavigation extends React.Component {
function TestNavigation(props) {
    return (
        <nav id="navigation" className="testNav">
            <h2 className="qti-visually-hidden">Navigation</h2>
            <NavigationButton dir="next" move={props.moveForward}></NavigationButton>
            <NavigationButton dir="prev" move={props.moveBack}></NavigationButton>
            <OverviewButton isFinalItem={props.activeSectionId === 'assessmentSection-3' && props.activeItemId === 'item-5'}></OverviewButton>
            <ol className="testNav-sections">
                {Object.entries(props.sectionsMap).map(([sectionId, sectionData]) =>
                    <NavSection
                        key={sectionId}
                        sectionId={sectionId}
                        sectionData={sectionData}
                        bookmarks={props.bookmarks}
                        activeSectionId={props.activeSectionId}
                        activeItemId={props.activeItemId}
                        // funcs
                        showItem={props.showItem}>
                    </NavSection>
                )}
            </ol>
        </nav>
    );
}

TestNavigation.propTypes = propTypes;
TestNavigation.defaultProps = defaultProps;

export default TestNavigation;
