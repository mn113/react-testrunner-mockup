import React from 'react';
import Choice from './Choice';

function Item(props) {
    console.log(props);
  return (
    <div className="item">
        <h1>Item {props.id}</h1>
        <p className="prompt">Lorem ipsum blah blah dipsum</p>
        <Choice id="1" groupName="x"></Choice>
        <Choice id="2" groupName="x"></Choice>
        <Choice id="3" groupName="x"></Choice>
        <Choice id="4" groupName="x"></Choice>
    </div>
  );
}

export default Item;
