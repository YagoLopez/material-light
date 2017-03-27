<!-- todo: poner los incoveninets de otras alternativas como que son mas lentas, complicadas, etc. -->
<p align="center"><img src="src/assets/img/logo.png" style="margin: auto; width: 81px;"></p>

<h1><p align="center">Material Light</p></h1>

**Material Designt UI components for Angular 2 +**

This library of components has been carefully designed to create light, easy of use and fast Angular 2 + user interfaces
(Both for web and mobile apps).

If you find this project useful and are going to use it, please give a star and credits to the author in your work.
Terms of use under <a href="LICENSE.txt">MIT</a> license.

## Author

Yago López:

- Website: <a href="https://yagolopez.github.io" target="_blank">https://yagolopez.github.io</a>
- Email: yago.lopez ([at]) gmail.com

## Demo

<!-- - <a href="http://yagolopez.github.io/material-light/iframe/iframe.html" target="_blank">Desktop PC</a> -->
- <a href="http://mobt.me/Xf27" target="_blank">Mobile Simulator (For Desktop)</a>
- <a href="https://yagolopez.github.io/material-light/dist/index.html" target="_blank">Full Screen (For Mobile)</a>

## Use

- This project is meant to be used with **angular-cli**
- Clone or download the repository.
- Copy the `ml` folder (where the components are) into your project
- Copy and paste the `assets` folder contents into the **exact same path** in your angular-cli project
- Use the components following the examples in the `pages` directory. The components use `ml` as namespace. For example: `<ml-icon>email</ml-icon>` places an email icon component in a template.
- There are two ways of using the library:
  1 - **As components**. For example, import `MlButton` and `MlIcon` in your component and put `<ml-button>` and `<ml-icon>` in your template.
  2 - **As modules**: Following the previous example, you will need to import the modules `MlButtonMod` and `MlIconMod` in your own module. The use of modules allows to implement lazy-loading.
- Note: At this moment AOT compilation is not supported.
AOT-ready code must be statically analizable which impose several restrictions on the typescript code.

## Testing

<div>E2E tests with the colaboration of:</div>
<a href="https://www.browserstack.com/" target="_blank"><img src="browserstack-logo.png" height="90px"></a>

## Requirements:

- Angular 2 +
- Angular Command Line (angular-cli)
- Typescript
- Webpack
- SystemJS (recommended)
- Node/Npm

## Disclaimers:

- This project is based on <a href="http://getmdl.io" target="_blank">Material Design Lite from Google</a>
- Material Design is a Google's registered trade mark probably.
- This is an open source project without commercial or profit intentions.
- Tested on Angular version 2.4.7.
