import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import BookmarkTool from './BookmarkTool';

test('render: bookmarked', () => {
    const testProps = {
        itemId: 'item-1',
        isBookmarked: true,
        bookmarkItem: () => {}
    }
    const { container, getByText, getByRole } = render(<BookmarkTool {...testProps}></BookmarkTool>);

    // has active class?
    expect(container.firstChild).toHaveClass('bookmark-tool bookmarked');
    // contains button
    const b = container.getElementsByTagName('button');
    expect(b).toHaveLength(1)
    expect(b[0]).toHaveClass('button-large-circle');
    // attrs role, aria
    expect(getByRole('switch')).toBeVisible();
    // contains icon
    expect(container.getElementsByTagName('svg')).toHaveLength(1);
    // contains span with itemId
    const span = container.getElementsByTagName('span');
    expect(span).toHaveLength(1);
    expect(getByText(new RegExp(testProps.itemId))).toBeTruthy();

    // onclick event
    fireEvent.click(getByRole('switch'));
});

test('render: not bookmarked', () => {
    const testProps = {
        itemId: 'item-1',
        isBookmarked: false,
        bookmarkItem: () => {}
    }
    const { container, getByText, getByRole } = render(<BookmarkTool {...testProps}></BookmarkTool>);

    // has active class?
    expect(container.firstChild).toHaveClass('bookmark-tool');
    // contains button
    const b = container.getElementsByTagName('button');
    expect(b).toHaveLength(1)
    expect(b[0]).toHaveClass('button-large-circle');
    // attrs role, aria
    expect(getByRole('switch')).toBeVisible();
    // contains icon
    expect(container.getElementsByTagName('svg')).toHaveLength(1);
    // contains span with itemId
    const span = container.getElementsByTagName('span');
    expect(span).toHaveLength(1);
    expect(getByText(new RegExp(testProps.itemId))).toHaveClass('qti-visually-hidden');
});

test('bookmark action', () => {
    const testProps = {
        itemId: 'item-1',
        isBookmarked: false,
        bookmarkItem: jest.fn(() => {}) // spy
    }
    const { container, getByRole } = render(<BookmarkTool {...testProps}></BookmarkTool>);
    const button = getByRole('switch');

    // onclick event
    fireEvent.click(button);
    expect(testProps.bookmarkItem).toHaveBeenCalledTimes(1);
    // expect(testProps.bookmarkItem).toHaveBeenCalledWith(testProps); // not possible when full props passed
});
