import { LitElement, html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './my-switch.styles';

/**
 * Switches allow the user to toggle an option on or off.
 *
 * @tag my-switch
 *
 * @event switchchange - Emitted whenever the switch is toggled
 * @cssvar [--size=1rem] - Controls the size of the switch
 * @slot checked - Displayed when switch is checked
 * @slot uncheck - Displayed when switch is unchecked
 * @csspart control - Controls the styles of the button element
 * @csspart track - Controls the styles of the track
 * @csspart switch - Controls the styles of the switch
 */

@customElement('my-switch')
export class MySwitch extends LitElement {
  static styles = styles;

  /** This is used to describe the switch */
  @property() label?: string;

  /** Indicates if the switch is checked or unchecked */
  @property({ type: Boolean }) checked: boolean = false;

  /** Disables the switch */
  @property({ type: Boolean }) disabled: boolean = false;

  @property({ attribute: 'label-position' }) labelPosition: 'top' | 'start' | 'end' | 'bottom' = 'top';

  public toggle() {
    if (this.disabled) {
      return;
    }

    this.checked = !this.checked;
    this.emitChange();
  }

  private emitChange() {
    this.dispatchEvent(new CustomEvent('switchchange', { detail: { checked: this.checked }, bubbles: true }));
  }

  private positionMapper() {
    return (
      {
        top: 'column',
        start: 'row',
        end: 'row-reverse',
        bottom: 'column-reverse',
      }[this.labelPosition] || 'column'
    );
  }

  render() {
    return html`
      <div
        class="base"
        style="${styleMap({
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: this.positionMapper(),
        })}"
      >
        <label id="switch-label">${this.label}</label>
        <button
          role="switch"
          class="control"
          aria-labelledby="switch-label"
          @click=${this.toggle}
          aria-checked="${this.checked}"
          aria-disabled="${this.disabled}"
          ?disabled="${this.disabled}"
          part="control"
        >
          <slot name="${this.checked ? 'checked' : 'unchecked'}">
            <div class="track" part="track">
              <div class="switch" part="switch"></div>
            </div>
          </slot>
        </button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-switch': MySwitch;
  }
}
