# react-testrunner-mockup

This Single-Page Web App was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and later "ejected" to a basic Webpack + React app.

## Design resources

- [Design mockup](docs/ux_mockup.png)
- [Static "accessibility-first" HTML template](docs/tao_deliver.html)

## Component Structure of the page

```
TestRunner
  JumpMenu
  Header
    Breadcrumb
    ToolMenu
      ThemeSwitcher
  Item
    Choice
    BookmarkTool
  Navigation
    NavigationButton
    NavSection
      NavigationBubble
    OverviewButton
```

## Architectural choices

- A mixture of functional and class-based components (for the sake of learning)
- A couple of small uses of React 16's `useState` and `useEffect` hooks (experimental)
- The top-level component, `<TestRunner>`, fetches the test state from a static JSON file
- The `<TestRunner>` also tracks related app state and all of the functions which can change it.
- Top-level functions are passed down to the necessary child components to call back with. App state is propagated down through props in the classical React way.
- I'm not in love with the functions-as-props pattern, and would prefer to migrate to a Pub-Sub or event-driven pattern using a third-party library.
- The navigation functions are overly complex as I ended up using the section and item identifier strings as keys, rather than a number-based indexing.

## Tests with Jest + react-testing-library

- The `<NavigationBubble>` component has coverage using plain `jest`
- The `<BookmarkTook>` component has coverage using `react-testing-library`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn test`

Runs the Jest test runner.

### `yarn test:watch`

Launches the Jest test runner in the interactive watch mode.

### `yarn test:coverage`

Runs the Jest test runner and calculates coverage.

## Documentation with Storybook

A [Storybook]() has been created with some components. To run it:

### `yarn storybook`

The Storybook app will run on [http://localhost:6006](http://localhost:6006).

It has been configured with the following plugins:

- knobs
- a11y
