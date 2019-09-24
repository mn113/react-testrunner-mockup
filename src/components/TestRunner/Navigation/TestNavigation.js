import React from 'react';
import NavigationButton from './NavigationButton';
import NavigationBubble from './NavigationBubble';


function TestNavigation() {
  return (
    <nav className="testNav">
        <NavigationButton dir="prev"></NavigationButton>
        <nav className="testNav-pages">
            <NavigationBubble pageId={1}></NavigationBubble>
            <NavigationBubble pageId={2}></NavigationBubble>
            <NavigationBubble pageId={3}></NavigationBubble>
            <NavigationBubble pageId={3}></NavigationBubble>
            <NavigationBubble pageId={3}></NavigationBubble>
            <NavigationBubble pageId={3}></NavigationBubble>
            <NavigationBubble pageId={3}></NavigationBubble>
            <NavigationBubble pageId={3}></NavigationBubble>
            <NavigationBubble pageId={3}></NavigationBubble>
            <NavigationBubble pageId={3}></NavigationBubble>
        </nav>
        <NavigationButton dir="next"></NavigationButton>
    </nav>
  );
}

export default TestNavigation;
