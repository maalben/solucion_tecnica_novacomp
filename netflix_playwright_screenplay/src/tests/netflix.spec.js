const { test } = require('@playwright/test');
const { User } = require('../actors/User');
const { Login } = require('../tasks/Login');
const { NavigateSuspense } = require('../tasks/NavigateSuspense');
const { PrintTitles } = require('../tasks/PrintTitles');
const { CurrentUrl } = require('../questions/CurrentUrl');
const credentials = require('../../config/credentials.json');

test('Netflix Suspense Movies Automation', async ({ page }) => {
  const user = new User(page);

  await Login.withCredentials(user, credentials);
  await page.context().pages()[0].bringToFront();
  await page.setViewportSize({ width: 1920, height: 1080 });

  await CurrentUrl.value(user);
  await NavigateSuspense.toSuspense(user);
  await PrintTitles.ofFirstThree(user);
});