import React from 'react';

function Breadcrumbs(props) {
  return (
    <aside>
      <span>{props.title}</span>
      <span className="sep">&gt;</span>
      <span>Section Title</span>
    </aside>
  );
}

export default Breadcrumbs;
