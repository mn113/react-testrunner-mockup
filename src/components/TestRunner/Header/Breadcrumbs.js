import React from 'react';

function Breadcrumbs({ testTitle, sectionTitle, sectionNo, sectionsTotal}) {
    return (
        <aside className="test-breadcrumb">
            <span>{testTitle}</span>
            <span className="sep">/</span>
            <span>Section {sectionNo} of {sectionsTotal} : {sectionTitle}</span>
        </aside>
    );
}

export default Breadcrumbs;
