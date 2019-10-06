import React, { useEffect } from 'react';
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

const choices = [
    {
        letter: 'A',
        text: 'functions as a form of self-expression'
    },
    {
        letter: 'B',
        text: 'is an inexpensive way to show appreciation'
    },
    {
        letter: 'C',
        text: 'requires the gift-recipient to reciprocate'
    },
    {
        letter: 'D',
        text: 'makes Christmas a success'
    }
];

function Item(props) {
    // const isAnimating = true;

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = props.itemData.title;
    }, [props.itemData.title]);

    return (
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
                    <p>Every day, millions of shoppers hit the stores in
                        full force—both online and on foot—searching
                        frantically for the perfect gift. Last year, Americans
                        spent over $30 billion at retail stores in the month of
                        December alone. Aside from purchasing holiday
                        gifts, most people regularly buy presents for other
                        occasions throughout the year, including weddings,
                        birthdays, anniversaries, graduations, and baby
                        showers. <span className="qti-visually-hidden">This frequent experience of gift-giving can
                        engender ambivalent feelings in gift-givers. Many
                        relish the opportunity to buy presents because
                        gift-giving offers a powerful means to build stronger
                        bonds with one’s closest peers. At the same time,
                        many dread the thought of buying gifts; they worry
                        that their purchases will disappoint rather than
                        delight the intended recipients.
                        Anthropologists describe gift-giving as a positive
                        social process, serving various political, religious, and
                        psychological functions. Economists, however, offer
                        a less favorable view. According to Waldfogel (1993),
                        gift-giving represents an objective waste of resources.
                        People buy gifts that recipients would not choose to
                        buy on their own, or at least not spend as much
                        money to purchase (a phenomenon referred to as
                        ‘‘the deadweight loss of Christmas”). To wit, givers
                        are likely to spend $100 to purchase a gift that
                        receivers would spend only $80 to buy themselves.
                        This ‘‘deadweight loss” suggests that gift-givers are
                        not very good at predicting what gifts others will
                        appreciate. That in itself is not surprising to social
                        psychologists. Research has found that people often
                        struggle to take account of others’ perspectives—
                        their insights are subject to egocentrism, social
                        projection, and multiple attribution errors.</span></p>
                </section>

                <section aria-label="question">
                    <h3 className="prompt">
                        <span className="qti-visually-hidden">Question: </span>
                        The authors indicate that people value gift-giving because they feel it ...
                    </h3>

                    <div className="qti-choices">
                        {choices.map((c) => (
                            <Choice
                                group={`${props.sectionId}_${props.itemId}`}
                                key={c.letter}
                                letter={c.letter}
                                text={c.text}
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
