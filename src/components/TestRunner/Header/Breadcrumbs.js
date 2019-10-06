import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    testTitle: PropTypes.string.isRequired,
    sectionTitle: PropTypes.string.isRequired,
    sectionNo: PropTypes.number.isRequired,
    sectionsTotal: PropTypes.number.isRequired,
};

function Breadcrumbs({ testTitle, sectionTitle, sectionNo, sectionsTotal}) {
    return (
        <aside className="test-breadcrumb">
            <span>{testTitle}</span>
            <span className="sep">/</span>
            <span>Section {sectionNo} of {sectionsTotal} : {sectionTitle}</span>
        </aside>
    );
}

Breadcrumbs.propTypes = propTypes;

export default Breadcrumbs;
