<div style="margin: auto; width: 81px;"><img src="src/assets/img/logo.png" style="margin: auto; width: 81px;"></div>

# Material Light

**Material Designt UI components for Angular 2 +**

This library of components has been carefully designed to create light, easy of use and fast Angular 2 + user interfaces
(mostly for mobile interfaces).

## Author

Yago López:

- Website: <a href="https://yagolopez.github.io" target="_blank">https://yagolopez.github.io</a>
- Email: yago.lopez ([at]) gmail.com

## Demo

- <a href="http://yagolopez.github.io/material-light/iframe/iframe.html" target="_blank">Desktop PC</a>
- <a href="https://yagolopez.github.io/material-light/dist/index.html" target="_blank">Mobile (full screen)</a>

## Use

- This project is meant to be used with **angular-cli**
- Clone or download the repository.
- Copy the `ml` folder (where the components are) into your project
- Copy and paste the `assets` folder contents into the **exact same path** in your angular-cli project
- Use the components following the examples in the `pages` directory. The components use `ml` as namespace. For example: `<ml-icon>email</ml-icon>` places an email icon component in a template.
- There is two ways of use the components:
  - **Importing components**. For examle, if you want to put a button with an icon in your template you can import `MlButton` and `MlIcon` components directily in your component.
  - **Impoting modules**: Following the previous example, you will need to import `MlButtonMod` and `MlIconMod`. Use modules if you want to implement lazy-loading.
- Note: At this moment AOT compilation is not supported.
AOT code must be statically analizable which impose a lot of restrictions on the angular/typescript code.

## Requirements:

- Angular 2 +
- Angular Command Line (angular-cli)
- Typescript
- Webpack
- Systemjs
- Npm

## Disclaimers:

- This project is based on <a href="http://getmdl.io" target="_blank">Material Design Lite from Google</a>
- Material Design is a Google's registered trade mark probably.
- License: <a href="LICENSE.txt">MIT</a>.
- This is an open source project without commercial or profit intentions.