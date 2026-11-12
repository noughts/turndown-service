# Turndown Service

A Chrome extension that turns down the lights on major work sites that don't offer a dark mode.

Bright white pages are hard on your eyes when you stare at them all day. Turndown Service darkens them so you can keep working in comfort. On displays with mini-LED backlights or OLED panels, such as recent MacBook Pro models, darker screens draw less power, so it may also help your battery last longer.

## Supported sites

| Site | What changes |
| --- | --- |
| Google Docs | The editor and the file list |
| Google Sheets | The editor and the file list |
| Google Slides | The file list only. The editor is left alone so slide designs keep their real colors |
| Google Play Console | All pages |
| Okta | All pages on `*.okta.com` |
| Gmail | Only the parts that stay white in Gmail's own dark theme: the loading screen and the opened-message view |

For Gmail, turn on one of Gmail's dark themes first. The extension then fills in the parts that theme leaves white.

## How it works

- Page colors are inverted with a CSS filter, and the hue is rotated back so links and highlights keep colors close to the original.
- Photos, videos, logos and file-type icons are inverted a second time so they show their original colors.
- Google Docs and Sheets draw document content and cell images on a canvas. Images drawn there are pre-inverted so they also keep their original colors.
- Dialog backdrops stay dark instead of turning bright.

## Installation

1. Clone this repository.
   ```sh
   git clone https://github.com/noughts/turndown-service.git
   ```
2. Open `chrome://extensions` in Chrome.
3. Turn on **Developer mode** in the top right corner.
4. Click **Load unpacked** and select the cloned folder.

To update, pull the latest changes, click the reload button on the extension's card in `chrome://extensions`, and reload any open pages.

## Known limitations

- Because colors are inverted, highly saturated colors in images can look slightly paler than the original.
- Chart and highlight colors are shown with inverted brightness. For example, a light yellow becomes a dark yellow.
- Logos with dark text on a transparent background can be hard to read.
- The page's main scrollbar may stay light on some pages.

## License

[MIT](LICENSE)
