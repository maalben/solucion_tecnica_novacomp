
Feature: Compra E2E en SauceDemo

  Scenario: Usuario realiza una compra exitosa
    Given el usuario accede a la pagina de login
    When inicia sesión con usuario "standard_user" y contraseña "secret_sauce"
    And agrega dos productos al carrito
    And navega al carrito y procede al checkout
    And ingresa el nombre "John", apellido "Doe" y código postal "12345"
    And finaliza la compra
    Then debería ver el mensaje "Thank you for your order!"
