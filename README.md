# <img src="src/assets/img/logo.png" style="vertical-align:middle">       

# Material Light      

**Material Designt UI components for Angular 2 +.**

This library of components has been carefully designed to create light and fast Angular 2 + user interfaces, mainly for mobile Angular user interfaces.

## Author

Developed by Yago López:

- Website: <a href="https://yagolopez.github.io" target="_blank">https://yagolopez.github.io</a>
- Email: yago.lopez ([at]) gmail.com

## Demo

- <a href="http://yagolopez.github.io/material-light/iframe/iframe.html" target="_blank">Desktop PC</a>
- <a href="https://yagolopez.github.io/material-light/dist/" target="_blank">Mobile (full screen)</a>

## Use

- This project is meant to be used with a angular-cli generated project
- Clone or download the repository.
- Copy the `ml` folder (where the components are) to your project
- Copy and paste the `assets` content in the exact same path in your project
- Use the components following the examples in the `pages` directory. The components use `ml` as namespace. For example: `<ml-icon>email</ml-icon>`places an email icon component in a template.
- If you are **not going** to use **lazy-loading modules**, import directily the components into your component. For example, if you are going to use a button with an icon you will need to import `MlButton` and `MlIcon` components.
- If you are **going** to use **lazy-loading modules**, in this case you will need to import the modules. For example, `MlButtonMod` and `MlIconMod`, following the before mentioned case.





## Requirements:

- Angular 2 or above
- Angular Command Line (angular-cli)
- Typescript
- Webpack
- Systemjs
- Npm

## Disclaimers:

- This project is based on <a href="http://getmdl.io" target="_blank">Material Design Lite from Google</a>
- Material Design is a Google's registered trade mark, likely.
- License: <a href="LICENSE.txt">MIT</a>.
- This is an open source project without commercial or profit intentions.