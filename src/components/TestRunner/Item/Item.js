import React from 'react';
import BookmarkTool from './BookmarkTool';

function Item(props) {
    return (
        <article aria-labelledby="question_title" className="qti-itemBody">
            <h2 id="question_title" className="visually-hidden">
                Question 7 of 14  - unanswered. In Question Group 1 of 2.
            </h2>

            <section aria-label="reading passage">
                <h3 id="passage_title"><span className="visually-hidden">Passage: </span>Shopping in the USA</h3>
                <p>Every day, millions of shoppers hit the stores in
                    full force—both online and on foot—searching
                    frantically for the perfect gift. Last year, Americans
                    spent over $30 billion at retail stores in the month of
                    December alone. Aside from purchasing holiday
                    gifts, most people regularly buy presents for other
                    occasions throughout the year, including weddings,
                    birthdays, anniversaries, graduations, and baby
                    showers. This frequent experience of gift-giving can
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
                    projection, and multiple attribution errors.</p>
            </section>

            <section aria-label="question">
                <h3 className="prompt">
                    <span className="visually-hidden">Question: </span>
                    The authors indicate that people value gift-giving because they feel it ...
                </h3>
                <button>A) functions as a form of self-expression.</button>
                <button>eliminate answer A</button>
                <br/>
                <button>B) is an inexpensive way to show appreciation.</button>
                <button>eliminate answer B</button>
                <br/>
                <button>C) requires the gift-recipient to reciprocate.</button>
                <button>eliminate answer C</button>
                <br/>
            </section>

            <BookmarkTool itemId={props.itemId}></BookmarkTool>
        </article>
    );
}

export default Item;
