import React from 'react';
import NavigationButton from './NavigationButton';
import NavigationBubble from './NavigationBubble';
import OverviewButton from './OverviewButton';

function TestNavigation(props) {
    console.log(props);
    const numbers = [];
    for (let n = 1; n < 15; n++) {
        numbers.push(n);
    }
    const listItems = numbers.map(n =>
        <NavigationBubble
            label={n}
            key={n.toString()}
            showItem={props.showItem}
            isInformational={n <= 3}
            isActive={n === props.activeItem}>
        </NavigationBubble>
    );
  return (
    <nav className="testNav">
        <NavigationButton dir="prev" move={props.moveBack}></NavigationButton>
        <ol className="testNav-pages">
            {listItems}
        </ol>
        <OverviewButton></OverviewButton>
        <NavigationButton dir="next" move={props.moveForward}></NavigationButton>
    </nav>
  );
}

export default TestNavigation;
