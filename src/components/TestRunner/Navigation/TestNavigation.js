import React from 'react';
import NavigationButton from './NavigationButton';
import OverviewButton from './OverviewButton';
import NavSection from './NavSection';

class TestNavigation extends React.Component {

    constructor(props) {
        console.log(props);
        super(props);
        this.sections = [1,2].map(s => {
            return (
                <NavSection
                    sectionId={s}
                    key={s.toString()}
                    showItem={props.showItem}>
                </NavSection>
            );
        });
    }

    render() {
        return (
            <nav className="testNav">
                <h2 className="qti-visually-hidden">Navigation</h2>
                <NavigationButton dir="next" move={this.props.moveForward}></NavigationButton>
                <NavigationButton dir="prev" move={this.props.moveBack}></NavigationButton>                
                <OverviewButton></OverviewButton>
                <ol className="testNav-sections">
                    {this.sections}
                </ol>
            </nav>
        );
    }
}

export default TestNavigation;
