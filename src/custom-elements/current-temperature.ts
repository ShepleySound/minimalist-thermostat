/* eslint-disable @typescript-eslint/no-explicit-any */
import { LitElement, html, TemplateResult, css, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators';

@customElement('current-temperature')
export class CurrentTemperature extends LitElement {
  @property({ type: Number }) value;
  @property({ type: String }) units;

  protected render(): TemplateResult {
    return html`
      <div class="wrapper">
        <div class="temp-header">Current</div>
        <div class="current-wrapper">
          <div class="number">${this.value}</div>
          <div class="unit">${this.units}</div>
        </div>
      </div>
    `;
  }

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
      .current-wrapper {
        display: flex;
        font-size: var(--mt-number-font-size, 4em);
        width: auto;
        padding: 12px;
        align-items: center;
        justify-content: center;
      }
      .current-wrapper .number {
        line-height: 1;
      }
      .current-wrapper .unit {
        font-size: var(--mt-unit-font-size, 0.5em);
        line-height: 1;
      }
    `;
  }
}
