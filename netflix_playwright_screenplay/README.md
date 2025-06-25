# Netflix Playwright Screenplay

## 🛠 Herramientas necesarias

- Node.js >= 16
- npm >= 8

## 🚀 Instalación

```bash
npm install
```

## ▶ Ejecución

```bash
npm test
```

Por si en algún momento obtienes el siguiente error al ejecutar la prueba:


Running 1 test using 1 worker
  1) src/tests/netflix.spec.js:9:1 › Netflix Suspense Movies Automation ────────────────────────────

    Error: browserType.launch: Executable doesn't exist at /Users/xxxx/Library/Caches/ms-playwright/chromium-1179/chrome-mac/Chromium.app/Contents/MacOS/Chromium
    ╔═════════════════════════════════════════════════════════════════════════╗
    ║ Looks like Playwright Test or Playwright was just installed or updated. ║
    ║ Please run the following command to download new browsers:              ║
    ║                                                                         ║
    ║     npx playwright install                                              ║
    ║                                                                         ║
    ║ <3 Playwright Team                                                      ║
    ╚═════════════════════════════════════════════════════════════════════════╝

  1 failed
    src/tests/netflix.spec.js:9:1 › Netflix Suspense Movies Automation ─────────────────────────────

Ese error indica que debes instalar el navegador para lograr realizar la ejecución, en ese caso ejecuta el siguiente comando:

```bash
npx playwright install
```

Y luego nuevamente ejecuta el comando:

```bash
npm test
```


Esto ejecuta la prueba y genera un reporte HTML en la carpeta `playwright-report`.

Para abrir el reporte:

```bash
npm run report
```

## ⚙ Descripción

Automatiza:
- Login en Netflix
- Navegación y maximización de pantalla
- Extracción de títulos de 3 películas de suspenso

## 📂 Estructura

- `config/credentials.json`: credenciales y perfil
- `src/actors/`: actor principal
- `src/tasks/`: tareas (login, navegar, imprimir títulos)
- `src/questions/`: preguntas (URL actual)
- `src/tests/`: test principal
- `playwright.config.js`: config de Playwright