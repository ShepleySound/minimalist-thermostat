# Obvious Thermostat by [@ShepleySound](https://www.github.com/shepleysound)

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
url: /hacsfiles/obvious-thermostat/obvious-thermostat.js
type: module
```

---

## Examples

### Default Configuration

![Multiple Example](./images/Multiple-Dark.png)

### Panel Configuration (Using Card-Mod)

![Fullscreen Example](./images/Fullscreen-Dark.png)

# CSS Variables

---

This card uses the following CSS variables:
You can configure these globally using a Lovelace theme or on each card individually using [Card-Mod](https://github.com/thomasloven/lovelace-card-mod).

| Variable Name                  | Default Value | Use                                                                                       |
|--------------------------------|---------------|-------------------------------------------------------------------------------------------|
| --ot-header-font-size          | 24px          | Set the font size of the card's title header.                                             |
| --ot-temp-header-font-size     | 2em           | Set the font size of the "Current" and "Target" temperature headers.                      |
| --ot-temp-header-margin-bottom | 0px           | Set the margin between the temperature headers and their numeric values.                  |
| --ot-number-font-size          | 4em           | Set the font size of the temperature numeric values.                                      |
| --ot-unit-font-size            | 0.5em         | Set the font size of the temperature unit.                                                |
| --ot-target-button-spacing     | 2px           | Set the spacing between the temperature control buttons and the target temperature value. |

### Full-Screen Panel Configuration (Card-Mod)

```yaml
panel: true
style: |
  ha-card {
  --ot-header-font-size: 2em;
  --ot-number-font-size: 12vmax;
  --ot-temp-header-font-size: 2em;
  --ot-header-margin-bottom: 24px;
  }
```

## To-do



[commits-shield]: https://img.shields.io/github/commit-activity/y/shepleysound/obvious-thermostat?style=for-the-badge
[commits]: https://github.com/shepleysound/obvious-thermostat/commits/main
[license-shield]: https://img.shields.io/github/license/shepleysound/obvious-thermostat?style=for-the-badge
[hacs-shield]: https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge
[version-shield]: https://img.shields.io/github/package-json/v/shepleysound/obvious-thermostat?style=for-the-badge
[version]: https://github.com/custom-cards/obvious-thermostat/releases
