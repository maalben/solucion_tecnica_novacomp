const { remote } = require('webdriverio');
const { User } = require('../actors/User');
const { Login } = require('../tasks/Login');
const { SeeLoggedEmail } = require('../questions/SeeLoggedEmail');
const { Logger } = require('../utils/logger');
const credentials = require('../../config/credentials.json');

(async () => {
  Logger.initReport();
  Logger.append('Inicio de la prueba de Gmail');

  const driver = await remote({
    path: '/',
    port: 4723,
    capabilities: {
      platformName: "Android",
      "appium:deviceName": "Android Emulator",
      "appium:appPackage": "com.google.android.gm",
      "appium:appActivity": "com.google.android.gm.ConversationListActivityGmail",
      "appium:automationName": "UiAutomator2"
    }
  });

  try {

    const user = new User(driver);

    Logger.append('Iniciando login');
    await Login.withCredentials(user, credentials);
    Logger.append('Login exitoso', 'ok');

    Logger.append('Validando correo cargado');
    await SeeLoggedEmail.isVisible(user, credentials.username);
    Logger.append('Correo validado correctamente', 'ok');

    Logger.append('Prueba completada exitosamente', 'ok');
  } catch (error) {
    Logger.append(`Error durante la prueba: ${error.message}`, 'error');
    throw error;
  } finally {
    await driver.deleteSession();
    Logger.append('Session cerrada');
    Logger.endReport();
  }
})();