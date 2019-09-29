import React from 'react';
import JumpMenu from './Header/JumpMenu';
import Header from './Header/Header';
import Item from './Item/Item';
import TestNavigation from './Navigation/TestNavigation';

class TestRunner extends React.Component {

    constructor(props) {
        super(props);
        this.showItem = this.showItem.bind(this);
        this.moveForward = this.moveForward.bind(this);
        this.moveBack = this.moveBack.bind(this);
        this.bookmarkItem = this.bookmarkItem.bind(this);
        this.toggleTheme = this.toggleTheme.bind(this);

        this.state = {
            theme: 'light',
            activeSectionId: 1,
            activeItemId: 5,
            bookmarksMap: {0: {}, 1: {}, 2: {}}
        };
    }

    toggleTheme() {
        this.setState({
            theme: this.state.theme === 'light' ? 'dark' : 'light'
        });
    }

    bookmarkItem({ sectionId, itemId }) {
        console.log('bkmk', sectionId, itemId );
        // set multi-level state
        // section may not be defined yet, so create it
        if (!(sectionId in Object.keys(this.state.bookmarksMap))) {
            this.setState({
                bookmarksMap: Object.assign(this.state.bookmarksMap, {
                    [sectionId]: {}
                })
            });
        }
        // item value may not be defined yet, but it's ok, we'll set it true
        this.setState({
            bookmarksMap: Object.assign(this.state.bookmarksMap, {
                [sectionId]: Object.assign(this.state.bookmarksMap[sectionId], {
                    [itemId]: !this.state.bookmarksMap[sectionId][itemId]
                })
            })
        });
    }

    showItem({ sectionId, itemId }) {
        console.log('si', sectionId, itemId );
        this.setState({ activeSectionId: sectionId, activeItemId: itemId });
    }

    moveForward() {
        console.log('mf');
        // TODO: check max
        this.setState({ activeItemId: this.state.activeItemId + 1 });
    }

    moveBack() {
        // TODO: check min
        console.log('mb');
        this.setState({ activeItemId: this.state.activeItemId - 1 });
    }

    render() {
        return (
            <div className="test-runner">
                <link rel="stylesheet" type="text/css" href={`themes/${this.state.theme}.css`} />
                <JumpMenu></JumpMenu>
                <Header
                    title={this.props.data.testData.title}
                    section="..."
                    toggleTheme={this.toggleTheme}>
                </Header>
                <main id="main" className="qti-itemBody">
                    <Item
                        sectionId={this.state.activeSectionId}
                        itemId={this.state.activeItemId}
                        isBookmarked={this.state.bookmarksMap[this.state.activeSectionId][this.state.activeItemId]}
                        bookmarkItem={this.bookmarkItem}>
                    </Item>
                </main>
                <TestNavigation
                    testMap={this.props.data.testMap}
                    showItem={this.showItem}
                    moveForward={this.moveForward}
                    moveBack={this.moveBack}
                    bookmarksMap={this.state.bookmarksMap}
                    activeSectionId={this.state.activeSectionId}
                    activeItemId={this.state.activeItemId}>
                </TestNavigation>
            </div>
        );
    }
}

export default TestRunner;
