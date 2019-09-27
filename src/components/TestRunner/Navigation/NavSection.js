import React from 'react';
import NavigationBubble from './NavigationBubble';

class NavSection extends React.Component {

    constructor(props) {
        console.log(props);
        super(props);
        const numbers = [];
        for (let n = 1; n < 7; n++) {
            numbers.push(n);
        }
        this.listItems = numbers.map(n =>
            <NavigationBubble
                label={n}
                key={n.toString()}
                showItem={props.showItem}
                isInformational={n <= 1}
                isActive={n === props.activeItem}>
            </NavigationBubble>
        );
    }

    render() {
        return (
            <li className="nav-item">
                <ol>
                    <h3 className="qti-visually-hidden">
                        Question Group 1 of 2: Shopping in the USA. The remaining time for this group is
                        <span id="section_timer">8 minutes 22 seconds</span>
                    </h3>
                    <fieldset>
                        <legend className="qti-visually-hidden">Shopping in the USA</legend>
                        {this.listItems}
                    </fieldset>
                </ol>
            </li>
        );
    }
}

export default NavSection;
