const { expect } = require('@playwright/test');

class Login {
  static async withCredentials(user, credentials) {
    const { page } = user;
    await page.goto('https://www.netflix.com/login');
    await page.fill('input[name="userLoginId"]', credentials.username);
    await page.fill('input[name="password"]', credentials.password);
    await page.click('button[type="submit"]');
    await page.waitForLoadState('networkidle');

    // Esperar la pantalla de perfiles
    await page.waitForSelector('text=¿Quién está viendo ahora?', { timeout: 10000 });

    // Click en el perfil indicado
    await page.click(`text=${credentials.profile}`);

    // Esperar a que desaparezca la pantalla de selección de perfil
    await page.waitForSelector('text=¿Quién está viendo ahora?', { state: 'detached' });
  }
}
module.exports = { Login };