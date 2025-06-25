class NavigateSuspense {
  static async toSuspense(user) {
    const { page } = user;

    // Esperar a que se cargue el home
    await page.waitForSelector('[data-uia="search-box-launcher"]', { timeout: 10000 });

    // Click en la lupa (ícono de buscar)
    await page.click('[data-uia="search-box-launcher"]');

    // Escribir Suspenso y buscar
    await page.fill('input[data-uia="search-box-input"]', 'Suspenso');
    await page.keyboard.press('Enter');

    // Esperar resultados
    await page.waitForTimeout(3000);
  }
}
module.exports = { NavigateSuspense };