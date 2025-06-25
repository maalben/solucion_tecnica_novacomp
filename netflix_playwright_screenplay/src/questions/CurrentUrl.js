class CurrentUrl {
  static async value(user) {
    const { page } = user;
    console.log(`🌐 URL actual: ${page.url()}`);
  }
}
module.exports = { CurrentUrl };