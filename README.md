# <img src="src/assets/img/logo.png" style="vertical-align:middle">       

# Material Light      

**Material Designt UI components for Angular 2.**

This library of components has been carefully designed to be as light as possible and to bring high performance and optimization to Angular 2 user interfaces.

## Author

Developed by Yago López:

- Website: <a href="https://yagolopez.github.io" target="_blank">https://yagolopez.github.io</a>
- Email: yago.lopez ([at]) gmail.com

## Demo

- <a href="http://yagolopez.github.io/material-light/iframe/iframe.html" target="_blank">Desktop PC</a>
- <a href="https://yagolopez.github.io/material-light/dist/" target="_blank">Mobile (full screen)</a>

## Use

- Clone or download the repository.
- Copy the `ml` folder (where the components are) to your project and
  import `ml_module.ts` in your root module.
- Copy and paste the `assets` folder in the exact path in your project.
- Use the components following the examples in the `pages` directory. The components use `ml` as namespace. For example: `<ml-icon>email</ml-icon>`places an email icon component in a template.
- For **WEBPACK**: Load the demo using the angular-cli command`npm ng serve`. This should serve`index.html` at `localhost://4600`.
- For **SYSTEMJS**: Load the demo pointing a web server to`index-systemjs.html`. (Systemjs can be used as module loader during development instead of compile all files width Webpack)





## Requirements:

- Angular 2
- Angular 2 Command Line (angular-cli)
- Typescript (included in Angular 2)
- Webpack (included as a dependency using angular-cli projects)
- Systemjs (included as dependency in this project)
- Npm

## Credits:

This project is based on <a href="http://getmdl.io" target="_blank">Material Design Lite from Google</a>

Material Design is a Google's registered trade mark, likely.

License: <a href="LICENSE.txt">MIT</a>.

*Disclaimer: This is an open source project without commercial or profit intentions.*