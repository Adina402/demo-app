import { fixture, html, expect } from '@open-wc/testing';
import '../src/components/auth/user-details.js';

describe('UserInfoCard', () => {
  let element: any;

  beforeEach(async () => {
    const mockUser = {
      firstName: 'John',
      lastName: 'Doe',
      emailAddress: 'john.doe@example.com',
      nationality: 'American',
      phoneNumber: '123-456-7890',
    };
    localStorage.setItem('currentUser', JSON.stringify(mockUser));

    element = await fixture(html`<user-info-card></user-info-card>`);
  });

  afterEach(() => {
    localStorage.removeItem('currentUser');
  });

  it('should render user details from localStorage', async () => {
    await element.updateComplete;

    await expect(element.firstName).to.equal('John');
    await expect(element.lastName).to.equal('Doe');
    await expect(element.email).to.equal('john.doe@example.com');
    await expect(element.nationality).to.equal('American');
    await expect(element.phoneNumber).to.equal('123-456-7890');

    expect(
      element.shadowRoot.querySelector('.info-value').textContent,
    ).to.include('John');
    expect(
      element.shadowRoot.querySelectorAll('.info-value')[1].textContent,
    ).to.include('Doe');
    expect(
      element.shadowRoot.querySelectorAll('.info-value')[2].textContent,
    ).to.include('john.doe@example.com');
    expect(
      element.shadowRoot.querySelectorAll('.info-value')[3].textContent,
    ).to.include('American');
    expect(
      element.shadowRoot.querySelectorAll('.info-value')[4].textContent,
    ).to.include('123-456-7890');
  });

  it('should render initials correctly in the user icon', async () => {
    await element.updateComplete;

    const userIcon = element.shadowRoot.querySelector('.user-icon');
    await expect(userIcon.textContent).to.equal('JD');
  });

  it('should not crash when there is no user data in localStorage', async () => {
    localStorage.removeItem('currentUser');
    element = await fixture(html`<user-info-card></user-info-card>`);

    await element.updateComplete;

    await expect(element.firstName).to.equal('');
    await expect(element.lastName).to.equal('');
    await expect(element.email).to.equal('');
    await expect(element.nationality).to.equal('');
    await expect(element.phoneNumber).to.equal('');

    await expect(
      element.shadowRoot.querySelector('.info-value').textContent,
    ).to.equal('');
  });
});
