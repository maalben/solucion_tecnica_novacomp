
export class Login {
  static perform(user, password) {
    cy.get('[data-test=username]').type(user);
    cy.get('[data-test=password]').type(password);
    cy.get('[data-test=login-button]').click();
  }
}
