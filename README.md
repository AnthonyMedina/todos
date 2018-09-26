# Front End Testing

## Why testing is important

- TESTING SAVES LIVES (and money)
- [Therac-25](https://en.wikipedia.org/wiki/Therac-25)
- [$125 million mars orbiter lost because of metric / imperial mix up](http://edition.cnn.com/TECH/space/9909/30/mars.metric.02/index.html)
- [Heartbleed / Cloudbleed](https://xkcd.com/1354/)

- Bugs are inevitable - the problem comes when a system is not in place to catch these bugs before release.

## Types of testing:

- Unit (no api calls / requests, maybe just a single component)
- Integration (multiple units together)
- Regression (testing over time confirms that changes to the code base do not break other features)
- End to end (no mocking. flow-based testing e.g. login, add item to basket, check out)
- performance, penetration, a11y, i18n, smoke, usability, stress, fuzz...
- testing diagram

| SLOW |     E2E     | $$$ |
| :--: | :---------: | :-: |
|      | Integration |     |
| FAST |    Unit     |  $  |

---

## Typechecking With PropTypes

- You can catch a lot of bugs and frustration by using [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
- Use propTypes when building components throughout lecture

## Intro to Cypress

- Cypress is an end to end / integration testing tool that runs in the browser
- Under the hood it uses Mocha and Chai, so a lot of the syntax is familiar
- `npm i -D cypress`
- look at docs: [cypress.io](https://www.cypress.io/)
- add script to package.json `"cy:open": "cypress open"`
- `npm run cy:open`
- see changes to repo / explore `./cypress/integration/examples`
- show example tests running
- make simple test in `./cypress/integration/first.spec.js`

```
describe("Our first test", () => {
  it("doesn\'t do much", () => {
    expect(true).to.equal(true);
  });
  it("shows us a failing test", () => {
    expect(true).to.equal(false);
  });
});
```

## Test Todo List

- Show todo list working
- Show code

### TaskAdder

- Test input is there
- Test input autofocusses

- Add beforeEach with `cy.visit('')` and modify cypress.json to include `"baseUrl": "http://localhost:3000"`

- Test that it accepts an input
- Test that it adds an item - will need to make api requests here

### TaskList

- Test list displaying correct items (Flaky & takes a long time - MOCK IT!)

- Test all / active / complete links
- Test for error request from server (oh no!)
