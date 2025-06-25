class SeeLoggedEmail {
  static async isVisible(user, expectedEmail) {
    const { driver } = user;

    const emailDisplayed = await driver.$(`android=new UiSelector().text("${expectedEmail}")`);
    await emailDisplayed.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: `El correo ${expectedEmail} no se mostró en el perfil`
    });

    return true;
  }
}

module.exports = { SeeLoggedEmail };