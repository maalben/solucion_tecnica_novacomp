
export class Confirmation {
  static verifyMessage(expectedMessage) {
    cy.get('.complete-header').should('contain', expectedMessage);
  }
}
