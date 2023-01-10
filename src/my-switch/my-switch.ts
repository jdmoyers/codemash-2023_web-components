import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './my-switch.styles';

/**
 * Switches allow the user to toggle an option on or off.
 *
 * @tag my-switch
 *
 * @event switchchange - Emitted whenever the switch is toggled
 */
@customElement('my-switch')
export class MySwitch extends LitElement {
  static styles = styles;

  /** This is used to describe the switch */
  @property() label?: string;

  /** Indicates if the switch is checked or unchecked */
  @property({ type: Boolean }) checked: boolean = false;

  public toggle() {
    this.checked = !this.checked;
    this.emitChange();
  }

  private emitChange() {
    this.dispatchEvent(new CustomEvent('switchchange', { detail: { checked: this.checked }, bubbles: true }));
  }

  render() {
    return html`
      <label id="switch-label">${this.label}</label>
      <button
        role="switch"
        class="control"
        aria-labelledby="switch-label"
        @click=${this.toggle}
        aria-checked="${this.checked}"
      >
        <div class="track">
          <div class="switch"></div>
        </div>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-switch': MySwitch;
  }
}
