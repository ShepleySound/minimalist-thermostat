# Minimalist Thermostat by [@ShepleySound](https://www.github.com/shepleysound)

A super-simple thermostat for Home Assistant's Lovelace. The goal is to create a thermostat interface that clearly shows both current and target temperatures. This style of display works particularly well in tablet-mounted applications, when the status of a climate device may want to be viewed from a distance.

![Version][version-shield]
[![License][license-shield]](LICENSE.md)
[![hacs_badge][hacs-shield]](https://github.com/hacs/integration)
[![GitHub Activity][commits-shield]][commits]

## Installation

1. In Home Assistant, make sure you have HACS installed.
2. In HACS, go to the "frontend" section
3. Select "Custom Repositories"
4. Add the URL of this repository.
5. Select "Lovelace" under "Category"
6. Click the "Add" Button.
7. The plugin should appear as a new repository. Click the "Download" button.
8. Reload your browser.
9. Add to resources:

```yaml
url: /hacsfiles/minimalist-thermostat/minimalist-thermostat.js
type: module
```

## Examples

### Default Configuration

![Multiple Example](./images/Multiple-Dark.png)

### Panel Configuration (Using Card-Mod)

![Fullscreen Example](./images/Fullscreen-Dark.png)

## CSS Variables

This card uses the following CSS variables.\
You can configure these globally using a Lovelace theme or on each card individually using [Card-Mod](https://github.com/thomasloven/lovelace-card-mod).

| Variable Name                  | Default Value | Use                                                                                       |
| ------------------------------ | ------------- | ----------------------------------------------------------------------------------------- |
| --mt-header-font-size          | 24px          | Set the font size of the card's title header.                                             |
| --mt-temp-header-font-size     | 2em           | Set the font size of the "Current" and "Target" temperature headers.                      |
| --mt-temp-header-margin-bottom | 0px           | Set the margin between the temperature headers and their numeric values.                  |
| --mt-number-font-size          | 4em           | Set the font size of the temperature numeric values.                                      |
| --mt-unit-font-size            | 0.5em         | Set the font size of the temperature unit.                                                |
| --mt-target-button-spacing     | 2px           | Set the spacing between the temperature control buttons and the target temperature value. |

### Full-Screen Panel Configuration (Card-Mod)

```yaml
type: 'custom:minimalist-thermostat'
panel: true
style: |
  ha-card {
  --mt-header-font-size: 2em;
  --mt-number-font-size: 12vmax;
  --mt-temp-header-font-size: 2em;
  --mt-header-margin-bottom: 24px;
  }
```

## To-do

- Add testing.
- Move mode buttons to new custom element.
- Add optional fan mode buttons.
- Add optional vane mode buttons.
- Add optional layout options (Column, row, -/+ buttons, hiding / showing elements)
- Add better support for Celcius / 0.5 degree steps.
- Add localization / language translations.
- Add more CSS variables for better customization.
- Implement "hold" action to quickly change temperature.
- Implement temperature memory to store last set temperature for each mode.
- Implement default temperature to store an optional default temperature for each mode.

---

## Credit

_This custom Lovelace card was inspired by [simple-thermostat](https://github.com/nervetattoo/simple-thermostat). Boilerplate code for basic card implementation was provided by [@custom-cards/boilerplate-code](https://github.com/custom-cards/boilerplate-card)_

[commits-shield]: https://img.shields.io/github/commit-activity/y/shepleysound/minimalist-thermostat?style=for-the-badge
[commits]: https://github.com/shepleysound/minimalist-thermostat/commits/main
[license-shield]: https://img.shields.io/github/license/shepleysound/minimalist-thermostat?style=for-the-badge
[hacs-shield]: https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge
[version-shield]: https://img.shields.io/github/package-json/v/shepleysound/minimalist-thermostat?style=for-the-badge
[version]: https://github.com/custom-cards/minimalist-thermostat/releases
