import { test, expect, Locator, Page } from '@playwright/test';

// 1. EMBEDDED PAGE OBJECT MODEL CLASS (Bypasses the Node path resolution bug)
class LoginPage {
  private readonly page: Page;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, pass: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }

  async getErrorMessage() {
    return this.errorMessage;
  }
}

// 2. EMBEDDED TEST DATA
const testData = {
  validUser: {
    username: "standard_user",
    password: "secret_sauce"
  },
  invalidUser: {
    username: "locked_out_user",
    password: "secret_sauce",
    expectedError: "Epic sadface: Sorry, this user has been locked out."
  }
};

// 3. THE TEST RUNNER EXECUTION
test.describe('SauceDemo E2E Authentication Suite', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Should log in successfully with valid credentials', async ({ page }) => {
    await loginPage.login(testData.validUser.username, testData.validUser.password);
    await expect(page).toHaveURL(/inventory.html/);
  });

  test('Should display error message for locked out user', async ({ page }) => {
    await loginPage.login(testData.invalidUser.username, testData.invalidUser.password);
    
    const errorLocator = await loginPage.getErrorMessage();
    await expect(errorLocator).toBeVisible();
    await expect(errorLocator).toHaveText(testData.invalidUser.expectedError);
  });
});