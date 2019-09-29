import React from 'react';
import NavigationButton from './NavigationButton';
import OverviewButton from './OverviewButton';
import NavSection from './NavSection';

class TestNavigation extends React.Component {

    constructor(props) {
        console.log(props);
        super(props);
    }

    render() {
        return (
            <nav id="navigation" className="testNav">
                <h2 className="qti-visually-hidden">Navigation</h2>
                <NavigationButton dir="next" move={this.props.moveForward}></NavigationButton>
                <NavigationButton dir="prev" move={this.props.moveBack}></NavigationButton>
                <OverviewButton></OverviewButton>
                <ol className="testNav-sections">
                    {Object.entries(this.props.sectionsMap).map(([sectionId, sectionData]) =>
                        <NavSection
                            key={sectionId}
                            sectionId={sectionId}
                            sectionData={sectionData}
                            bookmarks={this.props.bookmarks}
                            activeSectionId={this.props.activeSectionId}
                            activeItemId={this.props.activeItemId}
                            // funcs
                            showItem={this.props.showItem}>
                        </NavSection>
                    )}
                </ol>
            </nav>
        );
    }
}

export default TestNavigation;
