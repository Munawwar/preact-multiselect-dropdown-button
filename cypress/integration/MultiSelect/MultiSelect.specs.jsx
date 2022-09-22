/* global cy */
describe('MultiSelect tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/example/');
  });

  it('Open a MultiSelect Button Dropdown', () => {
    cy.get('.MultiSelect-dropdownButton')
      .first()
      .click();

    // Assertion
    cy.get('.MultiSelect-dropdownButton').should('have.class', 'MultiSelect-dropdownButton--opened');

    cy.get('.MultiSelect-sectionWrapper')
      .find('button.MultiSelect-listButtonsSelectAll')
      .should('be.visible');
    cy.get('.MultiSelect-sectionWrapper')
      .find('button.MultiSelect-listButtonsReset')
      .should('be.visible');
  });

  it('Close a MultiSelect Button Dropdown', () => {
    cy.get('.MultiSelect-dropdownButton')
      .first()
      .click();

    cy.get('.MultiSelect-dropdownButton')
      .first()
      .click();

    // Assertion
    cy.get('.MultiSelect-dropdownButton').should('not.have.class', 'MultiSelect-dropdownButton--opened');
  });

  it('Select all options', () => {
    cy.get('.MultiSelect-dropdownButton')
      .first()
      .click();

    cy.get('.MultiSelect-sectionWrapper')
      .get('.MultiSelect-listButtonsSelectAll')
      .click();

    // Assertion
    cy.get('.MultiSelect-listItemCheckbox').each(checkbox => {
      cy.wrap(checkbox).should('be.checked');
    });
  });

  it('Reset all options', () => {
    cy.get('.MultiSelect-dropdownButton')
      .first()
      .click();

    cy.get('.MultiSelect-sectionWrapper')
      .get('.MultiSelect-listButtonsReset')
      .click();

    // Assertions
    cy.get('.MultiSelect-listItemCheckbox').each(checkbox => {
      cy.wrap(checkbox).should('not.be.checked');
    });
  });

  it('Unselect the first element', () => {
    cy.get('.MultiSelect-dropdownButton')
      .first()
      .click();

    cy.get('.MultiSelect-sectionWrapper')
      .get('.MultiSelect-listItemLabel')
      .first()
      .click();

    // Assertion
    cy.get('.MultiSelect-listItemCheckbox')
      .first()
      .should('not.be.checked');
  });

  it('Select the last element', () => {
    cy.get('.MultiSelect-dropdownButton')
      .first()
      .click();

    cy.get('.MultiSelect-sectionWrapper')
      .get('.MultiSelect-listItemLabel')
      .last()
      .click();

    // Assertion
    cy.get('.MultiSelect-listItemCheckbox')
      .last()
      .should('be.checked');
  });

  it('Check if fist item of the list is focused on dropdown open', () => {
    cy.get('.MultiSelect-dropdownButton')
      .first()
      .click();

    cy.focused().should('have.attr', 'for', 'first-option-1');

    cy.get('.MultiSelect-sectionWrapper')
      .get('.MultiSelect-listItemLabel')
      .last()
      .click();

    cy.focused().should('have.attr', 'for', 'third-option-3');
  });

  it('Check if focused change on click', () => {
    cy.get('.MultiSelect-dropdownButton')
      .first()
      .click();

    cy.get('.MultiSelect-sectionWrapper')
      .get('.MultiSelect-listItemLabel')
      .last()
      .click();

    cy.focused().should('have.attr', 'for', 'third-option-3');
  });
});
