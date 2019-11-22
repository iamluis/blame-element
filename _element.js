import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `blame-element`
 * Blame table for versioned git data.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class BlameElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'blame-element',
      },
    };
  }
}

window.customElements.define('blame-element', BlameElement);
