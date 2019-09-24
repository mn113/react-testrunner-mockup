import React from 'react';
import Header from './components/TestRunner/Header/Header';
import Item from './components/TestRunner/Item/Item';
import TestNavigation from './components/TestRunner/Navigation/TestNavigation';
import ToolMenu from './components/TestRunner/ToolMenu/ToolMenu';
import Footer from './components/TestRunner/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header className="header"></Header>
      <section id="page">
        <div className="qti-ItemBody">
          <Item id="1"></Item>
        </div>
        <TestNavigation map="{}"></TestNavigation>
        <ToolMenu></ToolMenu>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
