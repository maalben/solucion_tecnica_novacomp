
# 🧪 Prueba Técnica de Automatización QA - Mario Alejandro Benítez Orozco

Este repositorio contiene la solución completa a una **prueba técnica de automatización QA**, abordando diferentes niveles de pruebas (UI web, móvil, teoría QA) y aplicando buenas prácticas como el patrón **Screenplay**, ejecución desacoplada, manejo de reportes, y limpieza de estado en dispositivos móviles.

---

## 📁 Estructura del Repositorio

```
📦 Cypress_Saucedemo_E2E_Funcional       # Proyecto Cypress con Screenplay
📦 gmail_appium_screenplay              # Proyecto Appium Android para Gmail
📦 netflix_playwright_screenplay        # Proyecto Playwright Web con Screenplay
📄 PruebaTecnicaQA.pdf                  # Enunciado de la prueba técnica
📄 Solucion teorica (PDF y DOCX)        # Respuestas a la parte teórica
📄 README.md                            # Este archivo
```

---

## ✅ Resumen de los Proyectos

### 1. **Cypress + Cucumber - SauceDemo**

> 📍 Ubicación: `/Cypress_Saucedemo_E2E_Funcional`

- Automatiza el flujo de login, compra y logout sobre el sitio de prueba [saucedemo.com](https://www.saucedemo.com/).
- Se implementó con **Cypress 14**, usando **Cucumber (Gherkin)** y el **patrón Screenplay**.
- Se añadieron **reportes Mochawesome**, pasos reutilizables y una estructura mantenible orientada al actor.

### 2. **Playwright - Web Netflix**

> 📍 Ubicación: `/netflix_playwright_screenplay`

- Automatiza el flujo de login sobre [Netflix.com](https://www.netflix.com/) (versión web).
- Se accede con un perfil específico y se listan títulos del género "Suspenso".
- Implementación moderna con **Playwright 1.44+** y patrón **Screenplay**.

### 3. **Appium + WebdriverIO - Gmail Móvil (Android)**

> 📍 Ubicación: `/gmail_appium_screenplay`

- Automatiza el proceso de login sobre la app nativa de Gmail en Android.
- Incluye manejo de popups, validación del correo logueado y **limpieza previa del estado del dispositivo** (desinstalación/reinstalación de Gmail, eliminación de cuentas).
- Se generó un **reporte HTML personalizado** sin depender de `wdio.conf.js`.

---

## ⚙️ Tecnologías y Herramientas Usadas

- **Lenguaje**: JavaScript (Node.js)
- **Automatización Web**: Cypress, Playwright
- **Automatización Mobile**: Appium 2 + WebdriverIO
- **Patrón de Diseño**: Screenplay Pattern
- **Reportes**: Mochawesome (web), HTML personalizado (mobile)
- **Gestión de dispositivos**: ADB (Android Debug Bridge)

---

## 💡 Retos Técnicos Abordados

- 🧼 **Reset completo del estado de Gmail móvil** mediante comandos ADB y Shell con Appium.
- 👥 **Login dinámico y validación de identidad del usuario logueado** (en web y mobile).
- 🔌 **Desacoplamiento de lógica, actores y tareas** para facilitar mantenimiento y extensibilidad.
- 📑 **Respuestas argumentadas en la solución teórica** considerando enfoques de testing, UX, procesos QA y casos de prueba funcionales/manuales.

---

## 📌 Cómo Ejecutar

Cada proyecto tiene su propio README dentro de su carpeta con instrucciones detalladas para:

- Instalación de dependencias
- Ejecución de pruebas
- Generación de reportes

---

## 📄 Archivos Incluidos

- `PruebaTecnicaQA.pdf`: enunciado original de la prueba.
- `Solucion teorica - QA Automation - Mario Alejandro Benitez Orozco.pdf`: análisis y respuestas detalladas a la parte teórica.
- `README.md`: descripción general del repositorio y componentes.

---

## ✍️ Autor

**Mario Alejandro Benítez Orozco**  
Senior QA Automation Engineer  
💼 [LinkedIn](#) | 📬 [Email](#)
