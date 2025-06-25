# Cypress + BDD + Screenplay: E2E SauceDemo

Este proyecto automatiza el flujo completo de compra en [https://www.saucedemo.com](https://www.saucedemo.com) usando Cypress, Gherkin (BDD) y el patrón Screenplay.

---

## 🎯 Objetivo
Simular el siguiente flujo de usuario:
1. Iniciar sesión con usuario y contraseña válidos.
2. Agregar dos productos al carrito.
3. Navegar al carrito y proceder al checkout.
4. Ingresar datos del usuario.
5. Finalizar la compra.
6. Verificar el mensaje "Thank you for your order!"

---

## ⚙ Tecnologías utilizadas
- **Cypress**: framework de testing moderno y rápido.
- **Cucumber / Gherkin**: sintaxis BDD para escenarios comprensibles.
- **Screenplay Pattern**: patrón de diseño que organiza las pruebas en actores, tareas y preguntas.
- **Node.js + npm**: gestor de dependencias.

---

## 📂 Estructura del proyecto
```
CYPRESS_SAUCEDEMO_E2E_FUNCIONAL/
├── cypress/
│   ├── downloads/
│   ├── e2e/
│   │   ├── features/
│   │   │   └── saucedemo.feature
│   │   └── steps/
│   │       └── saucedemoSteps.js
│   ├── reports/
│   ├── screenshots/
│   ├── support/
│   │   ├── screenplay/
│   │   │   ├── questions/
│   │   │   │   └── confirmation.js
│   │   │   └── tasks/
│   │   │       ├── addToCart.js
│   │   │       ├── checkout.js
│   │   │       ├── finishOrder.js
│   │   │       └── login.js
│   │   ├── commands.js
│   │   └── e2e.js
│   └── videos/
├── cypress-cucumber-preprocessor.config.js
├── cypress.config.js
├── package.json
└── README.md
```

---

## 🚀 Instalación
```bash
npm install
```

---

## 🧪 Ejecución de pruebas
Ejecutar en modo interactivo:
```bash
npx cypress open
```
Ejecutar en modo headless:
```bash
npx cypress run
```

---

## 📝 Escenario en Gherkin
```gherkin
Feature: Compra E2E en SauceDemo

  Scenario: Usuario realiza una compra exitosa
    Given el usuario accede a la página de login
    When inicia sesión con usuario "standard_user" y contraseña "secret_sauce"
    And agrega dos productos al carrito
    And navega al carrito y procede al checkout
    And ingresa el nombre "John", apellido "Doe" y código postal "12345"
    And finaliza la compra
    Then debería ver el mensaje "Thank you for your order!"
```

---

## ✅ Beneficios de esta arquitectura
- **Modularidad y reutilización**: tareas pequeñas y fáciles de mantener.
- **Escalabilidad**: fácil de ampliar a otros flujos.
- **Legibilidad**: BDD facilita la comprensión para equipos funcionales y de QA.
- **Integrable en CI/CD**: compatible con GitLabCI, GitHub Actions, etc.

---

## 📌 Recomendaciones
- Usar variables de entorno o fixtures para credenciales reales en ambientes seguros.
- Extender este flujo con validaciones de inventario o errores de autenticación.

---

## 👤 Autor
Proyecto generado como ejemplo profesional de QA Automation con enfoque BDD + Screenplay + Cypress.