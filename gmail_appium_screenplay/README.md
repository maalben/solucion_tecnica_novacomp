# 📱 Gmail App Automation - Appium + Screenplay

## Contexto

Para interactuar con una app nativa como Gmail en Android, Playwright no es la herramienta adecuada porque:

    Playwright está diseñado para automatización de navegadores web (aunque emule dispositivos móviles).	
    
    No tiene soporte directo para interactuar con apps nativas (apk).

Por esa razón se usará una alternativa "cercana" a Playwright, en este caso, WebdriverIO, el cual, también usa nodeJS y el lenguaje es basado en Javascript.



## 🛠 Herramientas necesarias

- Node.js >= 16
- npm >= 8
- Java JDK (para Android SDK)
- Android Studio (para emulador y SDK tools)
- Appium Server (GUI o `appium` por npm)

## 🚀 Instalación

1️⃣ Instala dependencias del proyecto:
```bash
npm install
```

2️⃣ Instala Appium server si no lo tienes:
```bash
npm install -g appium
```

## 📲 Configura el entorno

- Abre Android Studio y ejecuta un emulador Android o conecta un dispositivo real con depuración USB activa.
- Inicia Appium server:
```bash
appium
```

## ▶ Ejecución de la prueba

```bash
npm test
```

Esto:

✅ Iniciará Appium  
✅ Abrirá la app de Gmail  
✅ Realizará login  
✅ Validará acceso a la bandeja  

## 📊 Reporte

Cada vez que se ejecute la prueba, se crea un archivo report.html, es un archivo sencillo que indica en qué estado finalizó la prueba. Este archivo se encuentra en la raíz del proyecto.  

## ⚠ Notas

- Ajusta `deviceName` o `platformVersion` si lo necesitas.
- Verifica permisos del dispositivo para evitar bloqueos.