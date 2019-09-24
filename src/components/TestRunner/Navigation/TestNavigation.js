import React from 'react';
import NavigationButton from './NavigationButton';
import NavigationBubble from './NavigationBubble';


function TestNavigation() {
  return (
    <nav className="testNav">
        <NavigationButton dir="prev"></NavigationButton>
        <nav>
            <NavigationBubble pageId={1}></NavigationBubble>
            <NavigationBubble pageId={2}></NavigationBubble>
            <NavigationBubble pageId={3}></NavigationBubble>
        </nav>
        <NavigationButton dir="next"></NavigationButton>
    </nav>
  );
}

export default TestNavigation;
