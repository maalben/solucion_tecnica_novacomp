class PrintTitles {
  static async ofFirstThree(user) {
    const { page } = user;

    // Capturar los primeros resultados de búsqueda
    const titles = await page.$$eval('.slider-refocus', elements =>
      elements.slice(0, 3).map(el => el.getAttribute('aria-label'))
    );

    titles.forEach((title, index) => {
      console.log(`🎬 Título ${index + 1}: ${title || 'No disponible'}`);
    });
  }
}
module.exports = { PrintTitles };