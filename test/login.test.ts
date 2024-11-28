import { fixture, html, expect } from '@open-wc/testing';
import '../src/components/auth/login.js';
import sinon from 'sinon';

describe('LoginComponent', () => {
  let element: any;

  beforeEach(async () => {
    element = await fixture(html`<ui-login-component></ui-login-component>`);
  });

  it('renders the login form correctly', () => {
    const formContainer = element.shadowRoot.querySelector('.form-container');
    expect(formContainer).to.exist;

    const emailInput = element.shadowRoot.querySelector(
      'styled-lion-input-email',
    );
    const passwordInput = element.shadowRoot.querySelector('styled-lion-input');
    const signInButton = element.shadowRoot.querySelector('styled-lion-button');

    expect(emailInput).to.exist;
    expect(passwordInput).to.exist;
    expect(signInButton).to.exist;
  });

  it('updates emailAddress and password properties on input', async () => {
    const emailInput = element.shadowRoot.querySelector(
      'styled-lion-input-email',
    );
    const passwordInput = element.shadowRoot.querySelector('styled-lion-input');

    emailInput.value = 'test@example.com';
    passwordInput.value = 'password123';

    emailInput.dispatchEvent(new Event('input', { bubbles: true }));
    passwordInput.dispatchEvent(new Event('input', { bubbles: true }));

    await element.updateComplete;

    await expect(element.emailAddress).to.equal('test@example.com');
    await expect(element.password).to.equal('password123');
  });

  it('shows login error if no users are found in localStorage', async () => {
    localStorage.removeItem('registeredUsers');

    element.handleLogin();
    await element.updateComplete;

    const errorMessage = element.shadowRoot.querySelector(
      'div[style*="color: red"]',
    );
    expect(errorMessage).to.exist;
    expect(errorMessage.textContent).to.include('No registered users found.');
  });

  it('shows login error if email/password combination is incorrect', async () => {
    const users = [
      { emailAddress: 'user1@example.com', password: 'password1' },
    ];
    localStorage.setItem('registeredUsers', JSON.stringify(users));

    element.emailAddress = 'user1@example.com';
    element.password = 'wrongpassword';

    element.handleLogin();
    await element.updateComplete;

    const errorMessage = element.shadowRoot.querySelector(
      'div[style*="color: red"]',
    );
    expect(errorMessage).to.exist;
    expect(errorMessage.textContent).to.include('No account found');
  });

  it('navigates to userInfo view on successful login', async () => {
    const users = [
      { emailAddress: 'user1@example.com', password: 'password1' },
    ];
    localStorage.setItem('registeredUsers', JSON.stringify(users));

    element.emailAddress = 'user1@example.com';
    element.password = 'password1';

    const navigateSpy = sinon.spy();
    element.addEventListener('navigate', navigateSpy);

    element.handleLogin();
    await element.updateComplete;

    expect(navigateSpy).to.have.been.calledOnce;
    await expect(navigateSpy.firstCall.args[0].detail).to.equal('userInfo');
  });

  it('displays an error if localStorage data is malformed', async () => {
    localStorage.setItem('registeredUsers', 'malformed JSON');

    element.handleLogin();
    await element.updateComplete;

    const errorMessage = element.shadowRoot.querySelector(
      'div[style*="color: red"]',
    );
    expect(errorMessage).to.exist;
    expect(errorMessage.textContent).to.include('Error processing user data');
  });

  it('emits navigate event when the register button is clicked', async () => {
    const registerButton =
      element.shadowRoot.querySelector('button.footer-link');
    const navigateSpy = sinon.spy();
    element.addEventListener('navigate', navigateSpy);

    registerButton.click();

    expect(navigateSpy).to.have.been.calledOnce;
    await expect(navigateSpy.firstCall.args[0].detail).to.equal('register');
  });
});
