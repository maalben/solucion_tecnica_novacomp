class Login {
  static async withCredentials(user, credentials) {
    const { driver } = user;

    // Si aparece "GOT IT"
    const gotItBtn = await driver.$('android=new UiSelector().textContains("GOT IT")');
    if (await gotItBtn.isExisting()) {
      await gotItBtn.click();
    }

    // Si aparece "SKIP"
    const gotItSkip = await driver.$('android=new UiSelector().textContains("SKIP")');
    if (await gotItSkip.isExisting()) {
      await gotItSkip.click();
    }

    // Si aparece "Add an email address"
    const addEmailBtn = await driver.$('android=new UiSelector().textContains("Add an email address")');
    if (await addEmailBtn.isExisting()) {
      await addEmailBtn.click();
    }

    // Seleccionar Google
    const googleOption = await driver.$('android=new UiSelector().textContains("Google")');
    if (await googleOption.isExisting()) {
      await googleOption.click();
    }

    // Esperar "Sign in"
    const signInTitle = await driver.$('android=new UiSelector().textContains("Sign in")');
    await signInTitle.waitForDisplayed({ timeout: 10000 });

    // Ingresar correo
    const emailField = await driver.$('android=new UiSelector().className("android.widget.EditText")');
    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(credentials.username);

    // NEXT (correo)
    const nextBtnEmail = await driver.$('android=new UiSelector().textContains("NEXT")');
    await nextBtnEmail.waitForEnabled({ timeout: 5000 });
    await nextBtnEmail.click();

    // Confirmar pantalla de contraseña
    const forgotPwdText = await driver.$('android=new UiSelector().textContains("FORGOT PASSWORD?")');
    await forgotPwdText.waitForDisplayed({ timeout: 10000 });

    // Ingresar contraseña
    const pwdField = await driver.$('android=new UiSelector().className("android.widget.EditText")');
    await pwdField.waitForDisplayed({ timeout: 5000 });
    await pwdField.click();
    await pwdField.setValue(credentials.password);

    // NEXT (contraseña)
    const nextBtnPwd = await driver.$('android=new UiSelector().textContains("NEXT")');
    await nextBtnPwd.waitForEnabled({ timeout: 10000 });
    await nextBtnPwd.click();

    // I agree
    const iAgreeBtn = await driver.$('android=new UiSelector().text("I agree")');
    await iAgreeBtn.waitForDisplayed({ timeout: 50000 });
    await iAgreeBtn.click();

    // Esperar Back up device data
    await driver.waitUntil(
      async () => {
        const backupTextEl = await driver.$('android=new UiSelector().textContains("Back up device data")');
        return await backupTextEl.isExisting();
      },
      {
        timeout: 300000,
        interval: 1000,
        timeoutMsg: 'La pantalla de Google services con Back up device data no apareció en el tiempo esperado'
      }
    );

    // Desactivar el backup si está activo
    const backupSwitch = await driver.$('android=new UiSelector().className("android.widget.Switch")');
    if (await backupSwitch.isExisting()) {
      const attr = await backupSwitch.getAttribute("checked");
      if (attr === "true") {
        await backupSwitch.click();
      }
    }

    // Accept
    const acceptBtn = await driver.$('android=new UiSelector().text("ACCEPT")');
    await acceptBtn.waitForDisplayed({ timeout: 10000 });
    await acceptBtn.click();

    // Esperar pantalla de "TAKE ME TO GMAIL"
    const takeMeBtn = await driver.$('android=new UiSelector().textContains("TAKE ME TO GMAIL")');
    await takeMeBtn.waitForDisplayed({
      timeout: 60000,
      timeoutMsg: 'La pantalla final con TAKE ME TO GMAIL no apareció a tiempo'
    });
    await takeMeBtn.click();

    // Aceptar notificaciones de Gmail si aparece
    try {
      const allowNotifBtn = await driver.$('android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_button")');
      await allowNotifBtn.waitForDisplayed({
        timeout: 5000, // espera hasta 5 segundos
        interval: 500, // revisa cada 0.5 segundos
        timeoutMsg: 'El botón Allow no apareció en el tiempo esperado'
      });
      await allowNotifBtn.click();
    } catch (err) {
      // No pasa nada si no aparece, continuamos
      console.log('Botón Allow no apareció, continuamos el flujo.');
    }

     // Cerrar ventana informativa
    try {
      const closeNotifBtn = await driver.$('android=new UiSelector().resourceId("com.google.android.gm:id/dismiss_button")');
      await closeNotifBtn.waitForDisplayed({
        timeout: 5000, // espera hasta 5 segundos
        interval: 500, // revisa cada 0.5 segundos
        timeoutMsg: 'El botón de cerrar notificación de ayuda no apareció en el tiempo esperado'
      });
      await closeNotifBtn.click();
    } catch (err) {
      // No pasa nada si no aparece, continuamos
      console.log('No se muestra botón para cerrar notificación de ayuda, continuamos el flujo.');
    }

    // Abrir perfil
    const profileImg = await driver.$('android=new UiSelector().resourceId("com.google.android.gm:id/og_apd_internal_image_view")');
    await profileImg.waitForDisplayed({ timeout: 10000 });
    await profileImg.click();

    // Fin del flujo
  }
}

module.exports = { Login };