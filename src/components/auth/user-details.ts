import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { UserRegistration } from '../../models/user.model.js';

@customElement('user-info-card')
export class UserInfoCard extends LitElement {
  @property({ type: String }) lastName = '';

  @property({ type: String }) firstName = '';

  @property({ type: String }) email = '';

  @property({ type: String }) nationality = '';

  @property({ type: String }) phoneNumber = '';

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      padding: 80px 40px;
      border-radius: 16px;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
      background-color: #fff;
      min-height: 60vh;
      width: 100%;
    }

    .user-header {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 25px;
      gap: 15px;
    }

    .user-icon {
      width: 60px;
      height: 60px;
      background-color: #362855;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      font-weight: 600;
    }

    h2 {
      color: #333;
      margin: 0;
      font-size: 24px;
      font-weight: 600;
    }

    .info-grid {
      display: grid;
      gap: 15px;
      background-color: white;
      border-radius: 10px;
      padding: 20px;
    }

    .info-label {
      color: #774181;
      font-weight: 600;
      opacity: 0.8;
    }

    .info-value {
      color: #333;
      font-weight: 500;
    }
  `;

  firstUpdated() {
    this.loadSavedRegistration();
  }

  private loadSavedRegistration() {
    const savedRegistration = localStorage.getItem('currentUser');
    if (savedRegistration) {
      const parsedRegistration: UserRegistration =
        JSON.parse(savedRegistration);
      this.firstName = parsedRegistration.firstName;
      this.lastName = parsedRegistration.lastName;
      this.nationality = parsedRegistration.nationality;
      this.email = parsedRegistration.emailAddress;
      this.phoneNumber = parsedRegistration.phoneNumber;
      this.requestUpdate();
    }
  }

  render() {
    const initials = `${this.firstName[0] || ''}${this.lastName[0] || ''}`;

    return html`
      <div class="user-header">
        <div class="user-icon">${initials}</div>
        <h2>Your details</h2>
      </div>
      <div class="info-grid">
        <span class="info-label">First Name 👤</span>
        <span class="info-value">${this.firstName}</span>

        <span class="info-label">Last Name 👥</span>
        <span class="info-value">${this.lastName}</span>

        <span class="info-label">Email ✉️</span>
        <span class="info-value">${this.email}</span>

        <span class="info-label">Nationality 🌍</span>
        <span class="info-value">${this.nationality}</span>

        <span class="info-label">Phone Number 📱</span>
        <span class="info-value">${this.phoneNumber}</span>
      </div>
    `;
  }
}
