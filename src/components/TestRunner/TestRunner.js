import React from 'react';
import Header from './Header/Header';
import Item from './Item/Item';
import TestNavigation from './Navigation/TestNavigation';

class TestRunner extends React.Component {
    constructor(props) {
        super(props);
        this.showItem = this.showItem.bind(this);
        this.moveForward = this.moveForward.bind(this);
        this.moveBack = this.moveBack.bind(this);
        this.state = { activeItem: 1 };
    }

    render() {
        return (
            <div className="app">
                <Header title={this.props.data.testData.title} section="..."></Header>
                <section id="page">
                    <div className="qti-ItemBody">
                        <Item id={this.state.activeItem}></Item>
                    </div>
                    <TestNavigation
                        testMap={this.props.data.testMap}
                        showItem={this.showItem}
                        moveForward={this.moveForward}
                        moveBack={this.moveBack}
                        activeItem={this.state.activeItem}>
                    </TestNavigation>
                </section>
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
