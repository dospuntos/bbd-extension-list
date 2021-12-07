# Extension List

Extension List is a Chrome/Edge plugin that generates and copies to the clipboard a list of available extension updates in Joomla and WordPress.

## Installation

- Download or clone this repository to any local folder
- Go to chrome://extensions/ and check the box for Developer mode in the top right.
- On the chrome://extensions/ page, click the Load unpacked extension button and select the repository folder to install the extension.

## Usage

Visit the admin area of a Joomla (https://example.com/**administrator**) or WordPress (https://example.com/**wp-admin**) website, and go to the list of available extension updates.

A formatted list of the updates will be copied to the clipboard. **No notification or message will be displayed.** The result can be pasted into any text editor.

### Example output:

```
example.com
===12/01/21===
* Akeeba Backup Professional package 8.0.13
```

## Known issues

- The extension does not work for sites hosted in sub-directories (e.g. https://example.com/site)
- The extension only works if the page with the updates **is in focus** when being loaded. Switching to another window or another tab will disable the ability to copy to the clipboard.
- Some extensions will not correctly include the name and version, e.g. when the name includes a number but not the full version number.
- The extension does not report on available core Joomla/WordPress updates. These must be added manually.

## Version history

**0.0.7** - Now works in some common sub-folder installations

**0.0.6** - Initial release

## Contributing

Pull requests and suggestions are welcome.

## License

[MIT](https://choosealicense.com/licenses/mit/)
