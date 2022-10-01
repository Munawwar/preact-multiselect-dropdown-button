/* global cy */
// eslint-disable jest/expect-expect
describe('MultiSelect tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/example/');
  });

  it('Open a MultiSelect Button Dropdown', () => {
    cy.get('.PreactMultiSelect-dropdownButton').first().click();

    // Assertion
    cy.get('.PreactMultiSelect-dropdownButton').should('have.class', 'PreactMultiSelect-dropdownButton--opened');

    cy.get('.PreactMultiSelect-sectionWrapper').find('button.PreactMultiSelect-listButtonsSelectAll').should('be.visible');
    cy.get('.PreactMultiSelect-sectionWrapper').find('button.PreactMultiSelect-listButtonsReset').should('be.visible');
  });

  it('Close a MultiSelect Button Dropdown', () => {
    cy.get('.PreactMultiSelect-dropdownButton').first().click();

    cy.get('.PreactMultiSelect-dropdownButton').first().click();

    // Assertion
    cy.get('.PreactMultiSelect-dropdownButton').should('not.have.class', 'PreactMultiSelect-dropdownButton--opened');
  });

  it('Select all options', () => {
    cy.get('.PreactMultiSelect-dropdownButton').first().click();

    cy.get('.PreactMultiSelect-sectionWrapper').get('.PreactMultiSelect-listButtonsSelectAll').click();

    // Assertion
    cy.get('.PreactMultiSelect-listItemCheckbox').each((checkbox) => {
      cy.wrap(checkbox).should('be.checked');
    });
  });

  it('Reset all options', () => {
    cy.get('.PreactMultiSelect-dropdownButton').first().click();

    cy.get('.PreactMultiSelect-sectionWrapper').get('.PreactMultiSelect-listButtonsReset').click();

    // Assertions
    cy.get('.PreactMultiSelect-listItemCheckbox').each((checkbox) => {
      cy.wrap(checkbox).should('not.be.checked');
    });
  });

  it('Unselect the first element', () => {
    cy.get('.PreactMultiSelect-dropdownButton').first().click();

    cy.get('.PreactMultiSelect-sectionWrapper').get('.PreactMultiSelect-listItemLabel').first().click();

    // Assertion
    cy.get('.PreactMultiSelect-listItemCheckbox').first().should('not.be.checked');
  });

  it('Select the last element', () => {
    cy.get('.PreactMultiSelect-dropdownButton').first().click();

    cy.get('.PreactMultiSelect-sectionWrapper').get('.PreactMultiSelect-listItemLabel').last().click();

    // Assertion
    cy.get('.PreactMultiSelect-listItemCheckbox').last().should('be.checked');
  });

  it('Check if fist item of the list is focused on dropdown open', () => {
    cy.get('.PreactMultiSelect-dropdownButton').first().click();

    cy.focused().should('have.attr', 'for', 'first-option-1');

    cy.get('.PreactMultiSelect-sectionWrapper').get('.PreactMultiSelect-listItemLabel').last().click();

    cy.focused().should('have.attr', 'for', 'third-option-3');
  });

  it('Check if focused change on click', () => {
    cy.get('.PreactMultiSelect-dropdownButton').first().click();

    cy.get('.PreactMultiSelect-sectionWrapper').get('.PreactMultiSelect-listItemLabel').last().click();

    cy.focused().should('have.attr', 'for', 'third-option-3');
  });
});
