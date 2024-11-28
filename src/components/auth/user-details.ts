import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('user-info-card')
export class UserInfoCard extends LitElement {
  @property({ type: String }) lastName = '';

  @property({ type: String }) firstName = '';

  @property({ type: String }) email = '';

  @property({ type: String }) nationality = '';

  @property({ type: String }) dateOfBirth = '';

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 80px 40px;
      border-radius: 16px;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
      background-color: #fff;
      min-height: 60vh;
      width: 100%;
    }

    .card h2 {
      text-align: center;
      color: #774181;
      font-size: 48px;
      font-weight: bold;
    }

    .card-content {
      font-size: 1rem;
      color: #202124;
    }

    .info-row {
      margin-bottom: 10px;
    }

    .label {
      font-weight: bold;
      color: #873999;
    }

    .value {
      margin-left: 10px;
      color: #808c8d;
    }
  `;

  render() {
    return html`
      <div class="card">
        <h2>User Information</div>
        <div class="card-content">
          <div class="info-row">
            <span class="label">First Name:</span>
            <span class="value">${this.firstName}</span>
          </div>
          <div class="info-row">
            <span class="label">Last Name:</span>
            <span class="value">${this.lastName}</span>
          </div>
          <div class="info-row">
            <span class="label">Email:</span>
            <span class="value">${this.email}</span>
          </div>
          <div class="info-row">
            <span class="label">Nationality:</span>
            <span class="value">${this.nationality}</span>
          </div>
          <div class="info-row">
            <span class="label">Date of Birth:</span>
            <span class="value">${this.dateOfBirth}</span>
          </div>
        </div>
      </div>
    `;
  }
}
