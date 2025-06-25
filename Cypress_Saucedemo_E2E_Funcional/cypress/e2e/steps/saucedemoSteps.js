
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { Login } from '../../support/screenplay/tasks/login';
import { AddToCart } from '../../support/screenplay/tasks/addToCart';
import { Checkout } from '../../support/screenplay/tasks/checkout';
import { FinishOrder } from '../../support/screenplay/tasks/finishOrder';
import { Confirmation } from '../../support/screenplay/questions/confirmation';

Given('el usuario accede a la pagina de login', () => {
  cy.visit('https://www.saucedemo.com/');
});

When('inicia sesión con usuario {string} y contraseña {string}', (user, password) => {
  Login.perform(user, password);
});

When('agrega dos productos al carrito', () => {
  AddToCart.perform();
});

When('navega al carrito y procede al checkout', () => {
  cy.get('.shopping_cart_link').click();
  cy.get('[data-test=checkout]').click();
});

When('ingresa el nombre {string}, apellido {string} y código postal {string}', (firstName, lastName, postalCode) => {
  Checkout.perform(firstName, lastName, postalCode);
});

When('finaliza la compra', () => {
  FinishOrder.perform();
});

Then('debería ver el mensaje {string}', (expectedMessage) => {
  Confirmation.verifyMessage(expectedMessage);
});
