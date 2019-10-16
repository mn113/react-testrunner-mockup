import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Choice from './Choice';
import BookmarkTool from './BookmarkTool';

const propTypes = {
    itemId: PropTypes.string.isRequired,
    sectionId: PropTypes.string.isRequired,
    itemAnimation: PropTypes.string,
    itemData: PropTypes.object.isRequired,
    response: PropTypes.string,
    setResponse: PropTypes.func.isRequired,
    isBookmarked: PropTypes.bool,
    bookmarkItem: PropTypes.func
};

const baseUrl = '/data';
const itemDataFiles = ['choiceItem1.json', 'choiceItem2.json', 'choiceItem3.json'];

function Item(props) {
    // let qtiItemData = null;
    const [qtiItemData, setQtiItemData] = useState(null); // to block initial render

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = props.itemData.title;

        // Fetch item data from a semi-random json file
        console.log('fetching itemData...');
        fetch(`${baseUrl}/${itemDataFiles[props.itemData.position % 3]}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data.attributes.title, Object.values(data.body.elements)[0].prompt.body);
                // qtiItemData = data;
                setQtiItemData(data); // to force render
            });

    }, [props.itemData.title]);

    return qtiItemData && (
        <React.Fragment>
            <article
                aria-labelledby="question_title"
                key={`${props.sectionId}_${props.itemId}`}
                className={'qti-itemBody anim-' + props.itemAnimation}
            >
                <h2 id="question_title" className="qti-visually-hidden">
                    Question {props.itemId} of 14  - unanswered. In Question Group {props.sectionId} of 2.
                </h2>

                <section aria-label="reading passage">
                    <h3 id="passage_title"><span className="not-visually-hidden">Passage: </span>{props.itemData.title}</h3>
                    <span dangerouslySetInnerHTML={{ __html: qtiItemData.body.body }}></span>
                </section>

                <section aria-label="question">
                    <h3 className="prompt">
                        <span className="qti-visually-hidden">Question: </span>
                        {Object.values(qtiItemData.body.elements)[0].prompt.body}
                    </h3>

                    <div className="qti-choices">
                        {Object.values(Object.values(qtiItemData.body.elements)[0].choices).map((c) => (
                            <Choice
                                group={`${props.sectionId}_${props.itemId}`}
                                key={c.identifier}
                                letter={c.identifier}
                                text={c.body.body}
                                eliminable={true}
                                sectionId={props.sectionId}
                                itemId={props.itemId}
                                response={props.response}
                                // funcs
                                setResponse={props.setResponse}>
                            </Choice>
                        ))}
                    </div>
                </section>
            </article>
            <BookmarkTool
                itemId={props.itemId}
                sectionId={props.sectionId}
                isBookmarked={props.isBookmarked}
                // funcs
                bookmarkItem={props.bookmarkItem}>
            </BookmarkTool>
        </React.Fragment>
    );
}

Item.propTypes = propTypes;

export default Item;
