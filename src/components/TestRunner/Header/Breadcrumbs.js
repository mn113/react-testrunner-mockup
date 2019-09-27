import React from 'react';

function Breadcrumbs({ testTitle, sectionTitle, sectionNo, sectionsTotal}) {
    return (
        <aside className="test-breadcrumb">
            <span>{testTitle}</span>
            <span className="sep">&gt;</span>
            <span>{sectionTitle}</span>
            <span>[{sectionNo}/{sectionsTotal}]</span>
        </aside>
    );
}

export default Breadcrumbs;
