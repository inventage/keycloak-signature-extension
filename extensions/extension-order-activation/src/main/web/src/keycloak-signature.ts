/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('keycloak-signature')
export class KeycloakSignature extends LitElement {
  static override styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  @property()
  keycloakSignEndpoint = '/realms/master/activate_order/sign';

  override render() {
    return html`
      <p>
      <h1>Title</h1>
      <slot>This is the body</slot>
      <button id="acceptButton" @click="${this.handleAcceptButtonClick}">accept</button>
      <button id="rejectButton" @click="${this.handleRejectButtonClick}">reject</button>
      </p>
    `;
  }

  override firstUpdated() {
    const rejectButton = this.shadowRoot!.getElementById('rejectButton');

    rejectButton!.addEventListener('click', () => {
      console.log('Reject Button pressed');
    });
  }

  async handleAcceptButtonClick() {
    console.log("handleAcceptButtonClick: Accept Button clicked!")

    try {
      // const url = '/realms/koerber/activate_order/sign?redirect_uri=http%3A%2F%2Fgoogle.com%3Ftest1%3D1%26test2%3D2&description=this_is_an_order'; // Replace with your API endpoint
      const url = this.keycloakSignEndpoint;
      const data = {
        // Define the data you want to send in the request body
        key1: 'value1',
        key2: 'value2',
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set the appropriate content type
        },
        body: JSON.stringify(data), // Convert the data to JSON format
      });

      if (response.ok) {
        // The POST request was successful
        console.log('POST request successful');
        console.log("headers: " + response.headers)
        const bodyJson = await response.json();
        console.log("JWT: " + bodyJson.signedPayload);

        const eventAccepted = new CustomEvent('keycloak-signed-payload', {
          detail: {
            signedPayload: bodyJson.signedPayload,
          },
          bubbles: true, // Allow the event to bubble up the DOM tree
          composed: true, // Allow the event to cross shadow DOM boundaries
        });

        this.dispatchEvent(eventAccepted);

      } else {
        // Handle errors here, e.g., display an error message
        console.error('POST request failed');
      }
    } catch (error) {
      // Handle any exceptions that may occur during the request
      console.error('Error:', error);
    }
  }

  handleRejectButtonClick() {
    console.log('Reject Button pressed');

    const eventRejected = new CustomEvent('rejected', {
      detail: {
        message: "Signing Process has been rejected"
      },
      bubbles: true, // Allow the event to bubble up the DOM tree
      composed: true, // Allow the event to cross shadow DOM boundaries
    });

    this.dispatchEvent(eventRejected);
  }

  /**
   * Formats a greeting
   * @param name The name to say "Hello" to
   */
  sayHello(name: string): string {
    return `Hello, ${name}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'keycloak-signature': KeycloakSignature;
  }
}
