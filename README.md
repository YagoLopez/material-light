<p align="center"><img src="src/assets/img/logo.png" style="margin: auto; width: 81px;"></p>

<h1><p align="center">Material Light</p></h1>

**Material Designt UI components for Angular (versions 2 +, 4 +)**

There are other adaptations of Material Design Lite and other UI frameworks like the official Material Design 2, 
but this library has the following features:

- 100% Free forever.
- Light
- Fast
- Easy and fun to use
- True library of componentes encapsulating typescipt code, CSS and HTML as atomic units
- Easy and quick form validation
- Great performance on mobile UI interfaces.
- Responsive content adaptable to desktop and mobile
- Components available also as Angular Modules allowing Code-Splitting/Lazy-loading. This implies loading only the components needed at runtime
- Ready for Ahead of Time Compilation (AOT)
- Tested in main desktop/mobile browsers: Chrome (Android, IOS, desktop), FF, Edge, IE, Opera.
- No dependencies of other libraries like JQuery or Bootstrap.

## Objective

The main goal was to achieve minimalism and performance, not to encompass all posible kind of options or UI components (this is the philosophy of
Material Design Light too). You can always add other components from other sources.

If you find this project useful and are going to use it, please give a star in the repo and credits to the author 
and to <a href="http://getmdl.io" target="_blank">Material Design Lite from Google</a>

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

- This project is meant to be used with the **angular-cli** although not mandatory.
- Until it will be available as an NPM package, clone or download the repository.
- Copy the `ml` folder (where the components are) into your project
- Copy and paste the contents of the `assets` folder into the **exact same path** in your angular-cli project
- If you are cloning this project to run it, adjust the path in `app.module.ts`
- Use the components following the examples in the `pages` directory. The components use `ml` as namespace. For example: `<ml-icon>email</ml-icon>` places an email icon component in a template.
- There are two ways of using this library:
  1. **As components**. For example, import `MlButton` and `MlIcon` in your component and put `<ml-button>` and `<ml-icon>` in your template.
  2. **As modules**: You will need to import the modules `MlButtonMod` and `MlIconMod` into your own module. The use of modules is indicated for lazy-loading.


## Testing

<div>Tests with the colaboration of:</div>
<a href="https://www.browserstack.com/" target="_blank"><img src="browserstack-logo.png" height="90px"></a>

## Used for running this demo:

- Angular 4.0.0
- Angular Command Line (angular-cli)
- Typescript
- Webpack for production builds
- SystemJS as module loader during development time
- Node/Npm latest versions

## Disclaimers:

- This project is based on <a href="http://getmdl.io" target="_blank">Material Design Lite from Google</a>. It is an adaptation of Javascript MDL components to Angular Typscript components with the permission of the MDL team.
- Material Design is a Google's registered trade mark probably.
- This is an open-source project without commercial or profit intention.
