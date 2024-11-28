import { expect, fixture, html } from '@open-wc/testing';
import '../src/components/auth/register.js';
import sinon from 'sinon';

describe('RegisterComponent', () => {
  let element: any;

  beforeEach(async () => {
    element = await fixture(
      html`<ui-register-component></ui-register-component>`,
    );
  });

  it('renders the registration form correctly', () => {
    const formContainer = element.shadowRoot.querySelector('.form-container');
    expect(formContainer).to.exist;

    const emailInput = element.shadowRoot.querySelector(
      'styled-lion-input-email',
    );
    const firstNameInput =
      element.shadowRoot.querySelector('[name="firstName"]');
    const lastNameInput = element.shadowRoot.querySelector('[name="lastName"]');
    const passwordInput = element.shadowRoot.querySelector('[name="password"]');
    const confirmPasswordInput = element.shadowRoot.querySelector(
      '[name="confirmPassword"]',
    );
    const signUpButton = element.shadowRoot.querySelector('styled-lion-button');

    expect(emailInput).to.exist;
    expect(firstNameInput).to.exist;
    expect(lastNameInput).to.exist;
    expect(passwordInput).to.exist;
    expect(confirmPasswordInput).to.exist;
    expect(signUpButton).to.exist;
  });

  it('updates properties on input', async () => {
    const firstNameInput =
      element.shadowRoot.querySelector('[name="firstName"]');
    const emailInput = element.shadowRoot.querySelector(
      'styled-lion-input-email',
    );

    firstNameInput.value = 'John';
    firstNameInput.dispatchEvent(new Event('input', { bubbles: true }));

    emailInput.value = 'test@example.com';
    emailInput.dispatchEvent(new Event('input', { bubbles: true }));

    await element.updateComplete;

    await expect(element.firstName).to.equal('John');
    await expect(element.emailAddress).to.equal('test@example.com');
  });

  it('shows error when required fields are missing', async () => {
    element.handleLogin();
    await element.updateComplete;

    const errorMessage = element.shadowRoot.querySelector(
      'div[style*="color: red"]',
    );
    expect(errorMessage).to.exist;
    expect(errorMessage.textContent).to.include(
      'Please fill in all required fields.',
    );
  });

  it('shows error when passwords do not match', async () => {
    element.firstName = 'John';
    element.lastName = 'Doe';
    element.nationality = 'American';
    element.emailAddress = 'test@example.com';
    element.phoneNumber = '1234567890';
    element.password = 'password123';
    element.confirmPassword = 'password321';

    element.handleLogin();
    await element.updateComplete;

    const errorMessage = element.shadowRoot.querySelector(
      'div[style*="color: red"]',
    );
    expect(errorMessage).to.exist;
    expect(errorMessage.textContent).to.include('Passwords do not match.');
  });

  it('saves user to localStorage on successful registration', async () => {
    localStorage.setItem('registeredUsers', JSON.stringify([]));

    const navigateSpy = sinon.spy();
    element.addEventListener('navigate', navigateSpy);

    element.firstName = 'John';
    element.lastName = 'Doe';
    element.nationality = 'American';
    element.emailAddress = 'test@example.com';
    element.phoneNumber = '1234567890';
    element.password = 'password123';
    element.confirmPassword = 'password123';

    element.handleLogin();
    await element.updateComplete;

    const storedUsers = JSON.parse(
      <any>localStorage.getItem('registeredUsers'),
    );
    expect(storedUsers).to.be.an('array');
    await expect(storedUsers[0].emailAddress).to.equal('test@example.com');
    expect(navigateSpy).to.have.been.calledOnce;
    await expect(navigateSpy.firstCall.args[0].detail).to.equal('login');
  });

  it('emits navigate event when the login button is clicked', async () => {
    const loginButton = element.shadowRoot.querySelector('button.footer-link');
    const navigateSpy = sinon.spy();
    element.addEventListener('navigate', navigateSpy);

    loginButton.click();

    expect(navigateSpy).to.have.been.calledOnce;
    await expect(navigateSpy.firstCall.args[0].detail).to.equal('login');
  });
});
