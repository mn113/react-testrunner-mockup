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
            activeItem: 1
        };
    }

    bookmarkItem() {
        
    }

    toggleTheme() {
        this.setState({
            theme: this.state.theme === 'light' ? 'dark' : 'light'
        });
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
                <main id="main" className="qti-ItemBody">
                    <Item
                        id={this.state.activeItem}
                        bookmarkItem={this.bookmarkItem}>
                    </Item>
                </main>
                <TestNavigation
                    testMap={this.props.data.testMap}
                    showItem={this.showItem}
                    moveForward={this.moveForward}
                    moveBack={this.moveBack}
                    activeItem={this.state.activeItem}>
                </TestNavigation>
            </div>
        );
    }

    showItem(id) {
        this.setState({ 'activeItem': id });
    }

    moveForward() {
        this.setState({ 'activeItem': this.state.activeItem + 1 });
    }

    moveBack() {
        this.setState({ 'activeItem': this.state.activeItem - 1 });
    }
}

export default TestRunner;
