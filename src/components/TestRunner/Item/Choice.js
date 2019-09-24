import React from 'react';

class Choice extends React.Component {
    render() {
        return (
            <div className="item qti-choice">
                <label>
                    <input type="radio" name="{this.props.groupName}" />
                    Text
                    <img src="" alt="qti choice" />
                </label>
            </div>
        );
    }
}

export default Choice;
