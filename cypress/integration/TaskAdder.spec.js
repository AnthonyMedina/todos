describe('TaskAdder', () => {
  beforeEach(() => {
    cy.visit('');
    cy.server({
      urlMatchingOptions: { matchBase: false }
    })
    cy.route('http://localhost:3030/api/tasks', [])
  })
  it('autofocusses on an input', () => {
    cy.focused().should('have.class', 'new-todo')
  });
  it('new todo', () => {
    const text = 'hmm'
    cy.get('input').type(text).should('have.value', text);
  });
  it('adds an item to the list', () => {

    const text = 'hello, world!'
    cy.get('input').type('text{enter}');

    cy.get('li').should('have.length', 1);
  });
});