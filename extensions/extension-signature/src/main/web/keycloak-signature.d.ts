/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement, nothing } from 'lit';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class KeycloakSignature extends LitElement {
    static styles: import("lit").CSSResult;
    private signEndpoint;
    private payload;
    private titleText;
    private acceptText;
    private rejectText;
    private maxNumberOfFailedAttempts;
    private attemptIndex;
    private lastSignCallResultedInAuthenticationFailed;
    private messageToShow;
    private passwordInput?;
    render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private handleAcceptButtonClick;
    private handleRejectButtonClick;
    private createAndDispatchAcceptEvent;
    private createAndDispatchFailureEvent;
    private createAndDispatchRejectEvent;
}
declare global {
    interface HTMLElementTagNameMap {
        'keycloak-signature': KeycloakSignature;
    }
}
//# sourceMappingURL=keycloak-signature.d.ts.map