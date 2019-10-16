# react-testrunner-mockup

This Single-Page Web App was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and later "ejected" to a basic Webpack + React app.

## Live links

- **[The App](https://oatymart.github.io/react-testrunner-mockup)**
- [The Storybook](https://oatymart.github.io/react-testrunner-mockup/storybook)

## Design resources

- [Design mockup](docs/ux_mockup.png)
- [Static "accessibility-first" HTML template](docs/tao_deliver.html)

## Component Structure of the page

```
TestRunner [+Test]
├-JumpMenu
├-Header
│ ├-Breadcrumbs
│ └-ToolMenu
│   └-ThemeSwitcher
├-Item
│ └-Choice
│ └-BookmarkTool [+Test]
└-TestNavigation
  ├-NavigationButton
  ├-NavSection
  │ └-NavigationBubble [+Test +Story]
  └-OverviewButton
```

## Architectural choices

### React

- A mixture of functional and class-based components (for the sake of learning). 
- A couple of small uses of React 16.8's `useState` and `useEffect` hooks (experimental)
- The top-level component, `<TestRunner>`, fetches the test state from a static JSON file
- The `<TestRunner>` also tracks related app state and all of the functions which can change it
- React `Context` is used to share a global `theme` string throughout the app (only consumed in `TestRunner` and `OverviewButton`). I don't see the benefit of this over a global theme state.
- Top-level functions are passed down to the necessary child components to call back with. App state is propagated down through props in the classical React way
- I'm not in love with the functions-as-props pattern - if I had time I would try migrating to a Pub-Sub or event-driven pattern using a third-party library
- The test navigation functions are overly complex as I ended up using the section and item identifier strings as keys, rather than a number-based indexing. In TAO this is backend anyway
- No pre-made third-party components apart from SVG icons from [`react-icons`](https://react-icons.netlify.com)
- `PropTypes` used, but not required

### Styles

- Sass rules mostly reside in a global file, `App.scss`
- Light/Dark themes implemented in a crude way (fully scoped CSS and toggling a root className)
- Also tried the `styled-components` package on one component: `OverviewButton`. It hasn't convinced me.
- Flexbox used almost everywhere
- Only partially responsive, no media queries

## Tests with Jest + react-testing-library

- The `<NavigationBubble>` component has coverage using plain `jest`
- The `<BookmarkTool>` component has 100% coverage using `react-testing-library`

## Available Scripts

In the project directory, you can run:

### `yarn install`

Necessary first step to install dependencies.

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn test`

Runs the Jest test runner.

### `yarn test:watch`

Launches the Jest test runner in the interactive watch mode.

### `yarn test:coverage`

Runs the Jest test runner and calculates coverage.

## Documentation with Storybook

A [Storybook](https://github.com/storybookjs/storybook) has been created with some components. To run it:

### `yarn storybook`

The Storybook app will run on [http://localhost:6006](http://localhost:6006).

It has been configured with the following plugins:

- knobs
- actions
- a11y
- source
- console
