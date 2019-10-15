import React from 'react';
import PropTypes from 'prop-types';
import { set } from 'object-path-immutable';

import ThemeContext from '../../ThemeContext';
import JumpMenu from './Header/JumpMenu';
import Header from './Header/Header';
import Item from './Item/Item';
import TestNavigation from './Navigation/TestNavigation';

import '../../css/themes/light.scss';
import '../../css/themes/dark.scss';

const propTypes = {
    data: PropTypes.object.isRequired,
    toggleTheme: PropTypes.func
};

class TestRunner extends React.Component {

    constructor(props) {
        console.log(props);
        super(props);
        //this.toggleTheme = this.toggleTheme.bind(this);
        this.moveForward = this.moveForward.bind(this);
        this.moveBack = this.moveBack.bind(this);
        this.showItem = this.showItem.bind(this);
        this.bookmarkItem = this.bookmarkItem.bind(this);
        this.setResponse = this.setResponse.bind(this);

        this.state = {
            _theme: 'light',
            sectionsMap: props.data.testMap.parts["testPart-1"].sections,
            activeSectionId: props.data.testContext.sectionId,
            activeItemId: props.data.testContext.itemIdentifier,
            itemAnimation: '',
            bookmarks: {},
            responses: {}
        };
    }

    componentDidMount() {
        // start by marking current item as viewed
        this.markItemViewed({
            sectionId: this.state.activeSectionId,
            itemId: this.state.activeItemId
        });
    }

    /**
     * Toggles the test runner theme stylesheet
     * @affects {TestRunner.state}
     */
    // toggleTheme() {
    //     this.setState((state) => ({
    //         theme: state.theme === 'light' ? 'dark' : 'light',
    //     }));
    // }

    /**
     * Toggles the bookmark status for a specific item in the test runner
     * @param {String} sectionId
     * @param {String} itemId
     * @affects {TestRunner.state}
     */
    bookmarkItem({ sectionId, itemId }) {
        const key = `${sectionId}_${itemId}`;
        this.setState((state) => ({
            bookmarks: Object.assign(state.bookmarks, {
                [key]: !state.bookmarks[key]
            })
        }));
    }

    /**
     * Sets the response variable for a specific item in the test runner
     * @param {String} sectionId
     * @param {String} itemId
     * @param {String} letter
     * @affects {TestRunner.state}
     */
    setResponse({ sectionId, itemId, letter }) {
        const key = `${sectionId}_${itemId}`;
        this.setState((state) => ({
            responses: Object.assign(state.responses, {
                [key]: letter
            })
        }));
        this.markItemAnswered({ sectionId, itemId });
    }

    /**
     * Shows a specific item in the test runner
     * @param {String} sectionId
     * @param {String} itemId
     * @affects {TestRunner.state}
     */
    showItem({ sectionId, itemId }) {
        console.log('Go to', sectionId, 'from', this.state.activeSectionId, 'and', itemId, 'from', this.state.activeItemId);

        // which way to animate?
        if (sectionId < this.state.activeSectionId) {
            this.setState({ itemAnimation: 'translateRight' });
        }
        else if (sectionId > this.state.activeSectionId) {
            this.setState({ itemAnimation: 'translateLeft' });
        }
        else if (itemId < this.state.activeItemId) {
            this.setState({ itemAnimation: 'translateRight' });
        }
        else if (itemId > this.state.activeItemId) {
            this.setState({ itemAnimation: 'translateLeft' });
        }
        else {
            this.setState({ itemAnimation: '' });
        }

        this.setState(() => ({
            activeSectionId: sectionId,
            activeItemId: itemId
            // sectionsMap: set(state.sectionsMap, [sectionId, 'items', itemId, 'viewed'], true)
        }));
        this.markItemViewed({ sectionId, itemId });
    }

    /**
     * Marks a specific item as viewed
     * @param {String} sectionId
     * @param {String} itemId
     * @affects {TestRunner.state}
     */
    markItemViewed({ sectionId, itemId }) {
        this.setState((state) => ({
            sectionsMap: set(state.sectionsMap, [sectionId, 'items', itemId, 'viewed'], true)
        }));
    }

    /**
     * Marks a specific item as answered
     * @param {String} sectionId
     * @param {String} itemId
     * @affects {TestRunner.state}
     */
    markItemAnswered({ sectionId, itemId }) {
        this.setState((state) => ({
            sectionsMap: set(state.sectionsMap, [sectionId, 'items', itemId, 'answered'], true)
        }));
    }

    /**
     * Gets the data pertaining to the active section
     * @returns {Object} section data
     */
    getActiveSection() {
        return this.state.sectionsMap[this.state.activeSectionId];
    }

    /**
     * Gets the data pertaining to the active item
     * @returns {Object} item data
     */
    getActiveItem() {
        return this.getActiveSection().items[this.state.activeItemId];
    }

    /**
     * Gets all the items in a given section
     * @returns {Object} items as { id: {data} }
     */
    getItems(sectionId) {
        console.log('gi', sectionId);
        return this.state.sectionsMap[sectionId].items;
    }

    /**
     * Gets the identifier of the next section
     * @returns {String}
     */
    getNextSectionId() {
        const currentSectionPos = this.getActiveSection().position;
        const nextSection = Object.entries(this.state.sectionsMap).filter(([k, v]) => k && v.position === currentSectionPos + 1)[0];
        return nextSection ? nextSection[0] : null;
    }

    /**
     * Gets the identifier of the previous section
     * @returns {String}
     */
    getPreviousSectionId() {
        const currentSectionPos = this.getActiveSection().position;
        const prevSection = Object.entries(this.state.sectionsMap).filter(([k, v]) => k && v.position === currentSectionPos - 1)[0];
        return prevSection ? prevSection[0] : null;
    }

    /**
     * Gets the data pertaining to the previous section
     * @returns {Object}
     */
    getPreviousSection() {
        const id = this.getPreviousSectionId();
        return id ? this.state.sectionsMap[id] : null;
    }

    /**
     * Moves forward to the next item or section
     */
    moveForward() {
        console.log('mf');
        const currentPos = this.getActiveItem().positionInSection;
        const currentSection = this.getActiveSection();
        const maxPos = Object.keys(currentSection.items).length - 1;
        if (currentPos < maxPos) {
            this.moveTo(this.state.activeSectionId, currentPos + 1);
        }
        else {
            const nextSectionId = this.getNextSectionId();
            if (!nextSectionId) return;
            this.moveTo(nextSectionId, 0); // ok
        }
    }

    /**
     * Moves back to the previous item or section
     */
    moveBack() {
        console.log('mb');
        const currentPos = this.getActiveItem().positionInSection;
        const minPos = 0;
        if (currentPos > minPos) {
            this.moveTo(this.state.activeSectionId, currentPos - 1);
        }
        else {
            const previousSectionId = this.getPreviousSectionId();
            const previousSection = this.getPreviousSection();
            if (!previousSection) return;
            const previousSectionEnd = Object.keys(previousSection.items).length - 1;
            this.moveTo(previousSectionId, previousSectionEnd);
        }
    }

    /**
     * Move anywhere within the test part
     * @param {String} sectionId
     * @param {Integer} pos
     * @affects {TestRunner.state}
     */
    moveTo(sectionId, pos) {
        console.log('moveTo', sectionId, pos);
        if (typeof sectionId === 'undefined' || typeof pos === 'undefined') return;

        const itemId = Object.entries(this.getItems(sectionId)).filter(([k,v]) => k && v.position === pos )[0][0];
        this.showItem({ sectionId, itemId });
    }

    render() {
        return (
            <div className={`test-runner theme-${this.context}`}>
                <JumpMenu></JumpMenu>
                <Header
                    testTitle={this.props.data.testData.title}
                    sectionData={this.state.sectionsMap[this.state.activeSectionId]}
                    // funcs
                    toggleTheme={this.props.toggleTheme}>
                </Header>
                <main id="main">
                    <Item
                        itemData={this.state.sectionsMap[this.state.activeSectionId].items[this.state.activeItemId]}
                        sectionId={this.state.activeSectionId}
                        itemId={this.state.activeItemId}
                        itemAnimation={this.state.itemAnimation}
                        isBookmarked={this.state.bookmarks[`${this.state.activeSectionId}_${this.state.activeItemId}`]}
                        response={this.state.responses[`${this.state.activeSectionId}_${this.state.activeItemId}`]}
                        // funcs
                        bookmarkItem={this.bookmarkItem}
                        setResponse={this.setResponse}>
                    </Item>
                </main>
                <TestNavigation
                    sectionsMap={this.state.sectionsMap}
                    bookmarks={this.state.bookmarks}
                    activeSectionId={this.state.activeSectionId}
                    activeItemId={this.state.activeItemId}
                    // funcs
                    showItem={this.showItem}
                    moveForward={this.moveForward}
                    moveBack={this.moveBack}>
                </TestNavigation>
            </div>
        );
    }
}
TestRunner.contextType = ThemeContext;

TestRunner.propTypes = propTypes;

export default TestRunner;
