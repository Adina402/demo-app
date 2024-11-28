import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import type { DemoApp } from '../src/demo-app.js';
import '../src/demo-app.js';

describe('DemoApp', () => {
  let element: DemoApp;
  beforeEach(async () => {
    element = await fixture(html`<demo-app></demo-app>`);
  });

  it('renders the initial view (login)', async () => {
    const loginComponent =
      element.shadowRoot!.querySelector('ui-login-component');
    expect(loginComponent).to.exist;
  });

  it('renders the header and footer components', async () => {
    const header = element.shadowRoot!.querySelector('ui-header');
    const footer = element.shadowRoot!.querySelector('ui-footer');
    expect(header).to.exist;
    expect(footer).to.exist;
  });

  it('renders the register view when currentView is set to "register"', async () => {
    element.currentView = 'register';
    await element.updateComplete;

    const registerComponent = element.shadowRoot!.querySelector(
      'ui-register-component',
    );
    expect(registerComponent).to.exist;
  });

  it('renders the userInfo view when currentView is set to "userInfo"', async () => {
    element.currentView = 'userInfo';
    await element.updateComplete;

    const userInfoCard = element.shadowRoot!.querySelector('user-info-card');
    expect(userInfoCard).to.exist;
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
