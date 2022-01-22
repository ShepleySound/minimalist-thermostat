/* eslint-disable @typescript-eslint/no-explicit-any */
import { LitElement, html, TemplateResult, css, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators';
import { debounce } from 'custom-card-helpers';

type Step = 1 | 0.5;
@customElement('custom-climate-control')
export class CustomClimateControl extends LitElement {
  @property({ type: Number }) value;
  @property({ type: String }) units;
  @property({ type: Number }) min;
  @property({ type: Number }) max;
  @property({ type: Number }) step: Step = 1;

  protected render(): TemplateResult {
    return html`
      <div class="wrapper">
        <div class="temp-header">Target</div>
        <div class="control-center">
          <div>
            <ha-icon-button class="up" @click=${this._increment}>
              <ha-icon icon="mdi:plus"></ha-icon>
            </ha-icon-button>
          </div>
          <div id="target-temperature">
            <div class="number">${this.value}</div>
            <div class="unit">${this.units}</div>
          </div>
          <div>
            <ha-icon-button class="down" @click=${this._decrement}>
              <ha-icon icon="mdi:minus"></ha-icon>
            </ha-icon-button>
          </div>
        </div>
      </div>
    `;
  }

  protected firstUpdated(): void {
    this._forceFormat();
  }

  private _forceFormat(): void {
    if (this.step === 1 && this.value % 1 === 0.5) {
      if (this.value - 0.5 < this.min) {
        this.value += 0.5;
      } else {
        this.value -= 0.5;
      }
    }
  }

  private _increment(): void {
    this._forceFormat();
    if (this.value === this.max) {
      return this.value;
    }
    if (this.value) this.value += this.step;
    this._debouncedSet(this.value);
  }

  private _decrement(): void {
    this._forceFormat();
    if (this.value === this.min) {
      return this.value;
    }
    this.value -= this.step;
    this._debouncedSet(this.value);
  }

  _debouncedSet = debounce(value => {
    const event = new CustomEvent('change', {
      detail: { newValue: value },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }, 2000);

  static get styles(): CSSResultGroup {
    return css`
      .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .temp-header {
        font-size: var(--mt-temp-header-font-size, 2em);
        color: var(--secondary-text-color);
        margin-bottom: var(--mt-temp-header-margin-bottom);
      }
      .control-center {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: center;
        width: auto;
        padding: 12px;
        flex-shrink: 0;
        overflow: visible;
      }

      #target-temperature {
        font-size: var(--mt-number-font-size, 4em);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      #target-temperature .number {
        line-height: 1;
      }
      #target-temperature .unit {
        font-size: var(--mt-unit-font-size, 0.5em);
        line-height: 1;
      }

      ha-icon-button.up {
        margin-left: var(--mt-target-button-spacing, 2px);
      }

      ha-icon-button.down {
        margin-right: var(--mt-target-button-spacing, 2px);
      }

      ha-icon {
        margin-bottom: 6px;
      }
    `;
  }
}
