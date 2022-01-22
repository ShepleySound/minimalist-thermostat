/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  LitElement,
  html,
  TemplateResult,
  css,
  PropertyValues,
  CSSResultGroup,
} from 'lit';
import { customElement, property, query, state } from "lit/decorators";
import {
  HomeAssistant,
  hasConfigOrEntityChanged,
  LovelaceCardEditor,
  fireEvent,
} from 'custom-card-helpers'; // This is a community maintained npm module with common helper functions/types

import './editor';

import type { BoilerplateCardConfig, ClimateEntity } from './types';
import { CARD_VERSION, MODE_ICONS, MODE_TEXT } from './const';
import { localize } from './localize/localize';
import './custom-elements/custom-climate';
import './custom-elements/current-temperature';

/* eslint no-console: 0 */
console.info(
  `%c  minimalist-thermostat \n%c  ${localize('common.version')} ${CARD_VERSION}    `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

// Places card into the UI card picker dialog
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'minimalist-thermostat',
  name: 'Minimalist Thermostat',
  description: 'A large-text Thermostat for Home Assistant\'s Lovelace UI.',
});

@customElement('minimalist-thermostat')
export class BoilerplateCard extends LitElement {
  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    return document.createElement('minimalist-thermostat-editor');
  }

  public static getStubConfig(): object {
    return {};
  }
  @property({ attribute: false }) public hass!: HomeAssistant;

  @state() private config!: BoilerplateCardConfig;

  @query('ha-card') private _card?


  // https://lit-element.polymer-project.org/guide/properties
  // https://lit-element.polymer-project.org/guide/properties#accessors-custom
  public setConfig(config: BoilerplateCardConfig): void {
    // TODO Check for required fields and that they are of the proper format
    if (!config) {
      throw new Error(localize('common.invalid_configuration'));
    }

    if (!config.entity || config.entity.split(".")[0] !== "climate") {
      throw new Error("Specify an entity from within the climate domain.")
    }

    this.config = {
      name: 'Thermostat',
      ...config,
    };
  }

  // https://lit-element.polymer-project.org/guide/lifecycle#shouldupdate
  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (!this.config) {
      return false;
    }

    return hasConfigOrEntityChanged(this, changedProps, false);
  }

  // https://lit-element.polymer-project.org/guide/templates
  protected render(): TemplateResult | void {
    if (!this.hass || !this.config) {
      return html``;
    }
    const stateObj = this.hass.states[this.config.entity] as ClimateEntity

    // TODO Check for stateObj or other necessary things and render a warning if missing

    const name = this.config?.name
    const targetTemp =
      stateObj.attributes.temperature !== null &&
      Number.isFinite(Number(stateObj.attributes.temperature))
        ? stateObj.attributes.temperature
        : stateObj.attributes.min_temp
    const tempController =
      html`
        <custom-climate-control
          .value=${targetTemp}
          .units=${this.hass.config.unit_system.temperature}
          .min=${stateObj.attributes.min_temp}
          .max=${stateObj.attributes.max_temp}
          @change=${this._setTemperature}
          ></custom-climate-control>`

    const currentTemp =
      html`
        <current-temperature
          .value=${stateObj.attributes.current_temperature}
          .units=${this.hass.config.unit_system.temperature}></current-temperature>`
    // TODO: Move mode buttons to new custom element
    return html`
      <ha-card
        .label=${`Thermostat: ${this.config.entity || 'No Entity Defined'}`}
      >
      <header>
        <div style="display:flex" class="clickable header-div" @click=${this._handleMoreInfo}>
          <h1 class="header-title">${name}</h1>
        </div>
        <ha-icon-button class="more-info" @click=${this._handleMoreInfo}>
          <ha-icon class="info-icon" icon="mdi:dots-vertical"></ha-icon>
        </ha-icon-button>
    </header>
      <section class="body">
        <div class="temp-container current">
          ${currentTemp}
        </div>
        <div class="temp-container target">
          ${tempController}
        </div>
      </section>
      <div class="modes">
      ${stateObj.attributes.hvac_modes.map((mode) => {
        let active;
        if (mode === stateObj.state) {
          active = "active"
        }
        return html`
        <div
          id=${mode}
          class="mode-item ${active} ${mode}"
          @click=${this._setMode}>

          <ha-icon id=${mode} class="mode-icon" icon=${MODE_ICONS[mode]}></ha-icon>
          ${MODE_TEXT[mode]}
      </div>`
      })}
      </div>
      </ha-card>
    `;
  }

  private _handleMoreInfo(): void {
    fireEvent(this, "hass-more-info", {
      entityId: this.config?.entity
    })
  }
  private _setTemperature(e): void {
    const newTemp = e.detail.newValue
    this.hass?.callService("climate", "set_temperature", {
      entity_id: this.config?.entity,
      temperature: newTemp
    })
  }

  private _setMode(e): void {
    const modes = this._card?.querySelectorAll('.mode-item')
    modes?.forEach(mode => {
      mode.classList.remove('active')
    })
    e.target.classList.add('active')
    this.hass?.callService("climate", "set_hvac_mode", {
      entity_id: this.config.entity,
      hvac_mode: e.target.id
    })


  }

  // https://lit-element.polymer-project.org/guide/styles
  static get styles(): CSSResultGroup {
    return css`
    :host {
      font-family: Roboto, Noto, sans-serif;
    }

    ha-card {
      font-size: 1em;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    header {
      display: grid;
      grid-template-columns: 1fr 6fr 1fr;
      justify-items: center;
      margin-bottom: 36px;
    }

    .header-div{
      grid-column-start: 2;
      align-items: center;
      margin: auto;
    }

    .header-title{
      margin: 0;
      font-weight: normal;
      padding: 12px;
      line-height: 1;
      font-size: var(--mt-header-font-size, 24px);
    }


    .more-info{
      margin-left: auto;
      flex: 1;
    }

    ha-icon.info-icon{
      margin-bottom: 8px;
      color: var(--secondary-text-color)
    }

    ha-card h3{
      font-size: 3em;
    }

    .body{
      display: grid;
      /* grid-auto-flow: row; */
      grid-template-columns: 1fr 1fr;
      align-items: center;
      height: 100%;
      margin: auto;
      width: 100%;
    }
    @media screen and (max-width: 440px){
      .body{
        grid-template-columns: 1fr;
      }
    }

    .modes {
      display: grid;
      grid-auto-flow: column;
      /* grid-template-columns: min-content; */
      padding: 4px;
      gap: 2px;
      margin-top: auto;
    }

    /* Set colors for each available mode */
    .auto,
    .heat_cool {
      --mode-color: var(--state-climate-auto-color);
    }

    .cool {
      --mode-color: var(--state-climate-cool-color);
    }
    .heat {
      --mode-color: var(--state-climate-heat-color);
    }
    .eco {
      --mode-color: var(--state-climate-eco-color);
    }
    .dry {
      --mode-color: var(--state-climate-dry-color);
    }
    .manual {
      --mode-color: var(--state-climate-manual-color);
    }
    .fan_only {
      --mode-color: var(--state-climate-fan_only-color);
    }
    .idle {
      --mode-color: var(--state-climate-idle-color);
    }
    .off {
      --mode-color: var(--state-climate-off-color);
    }
    .unknown-mode {
      --mode-color: var(--state-climate-unknown-color);
    }
    .mode-item {
      font-size: 1em;
      background-color: var(--secondary-background-color);
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      text-align: center;
      align-items: center;
      justify-content: center;
      min-height: 24px;
      padding: 6px 0px;
      flex: 1;
      border-radius: 8px;
      color: var(--secondary-text-color);
      cursor: pointer;
    }
    .mode-item:hover {
      color: var(--primary-text-color);

    }
    .mode-item.active {
      color: var(--primary-text-color)
    }

    .mode-item.active {
      background-color: var(--mode-color)
    }

    .clickable {
      cursor: pointer;
    }

    .mode-icon {
      pointer-events: none;
    }
    `;
  }
}
