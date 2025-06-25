
export class FinishOrder {
  static perform() {
    cy.get('[data-test=finish]').click();
  }
}
