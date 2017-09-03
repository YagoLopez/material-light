<p align="center"><img src="src/assets/img/logo.png" style="margin: auto; width: 81px;"></p>

<h1><p align="center">Material Light</p></h1>

<div align="center">**Material Designt UI components for Angular (versions 4 +)**</div>

There are other adaptations of Material Design Lite and other UI frameworks like the official Material Design 2, 
but this library has the following features:

- 100% Free forever.
- Fast
- Light
- Easy and fun to use
- Library of true componentes encapsulating typescipt code, CSS and HTML as atomic units
- Easy and quick form validation
- Great performance on mobile apps.
- Responsive content adaptable to desktop and mobile
- Components available also as Angular Modules allowing Code-Splitting/Lazy-loading. This implies loading only the components needed at runtime
- Ready for Ahead of Time Compilation (AOT)
- Tested in main desktop/mobile browsers: Chrome (Android, IOS, desktop), FF, Edge, IE, Opera. <a href="https://angular.io/docs/ts/latest/guide/browser-support.html" target="_blank">(Browsers supported)</a>
- No dependencies from other libraries like JQuery or Bootstrap.

## Objective

The main goal was to achieve minimalism and performance, not to encompass all posible kind of options or UI components (this is the philosophy of
Material Design Light too). You can always add other components from other sources.

If you find this project useful and are going to use it, please **give a star in the repo** and credits to the author 
and to <a href="http://getmdl.io" target="_blank">Material Design Lite from Google</a>

Terms of use under <a href="LICENSE.txt">MIT</a> license.

## Author

Yago López:

- Website: <a href="https://yagolopez.github.io" target="_blank">https://yagolopez.github.io</a>
- Email: yago.lopez ([at]) gmail.com

## Demo

- <a href="http://mobiletest.me/htc_one_m7/5189093" target="_blank">Mobile Simulator (For Desktop)</a>. <b>Warning:</b> Content in 
external iframes may have javascript restrictions for security reasons (i. e. alert dialogs). Run the full screen 
version for unrestricted features.
- <a href="https://yagolopez.github.io/material-light/dist" target="_blank">Full Screen (For Mobile)</a>


## Insallation and Use

- Using Node/Npm/Yarn, in a project generated with Angular-CLI, run: `npm install YagoLopez/material-light --save`
-  Whitout Node/Npm: Clone or fork the repository
-  Install dependencies with `npm install`
-  <b>IMPORTANT</b>: Adjust the `basePath` in <a href="https://github.com/YagoLopez/material-light/blob/master/src/app/mlDemoAppMod.ts#L50" target="_blank">
  mlDemoAppMod.ts</a> to your environment
-  Run: `ng serve` from project directory

## Notes

- This project can be used with the **angular-cli** although not mandatory.
- Material Icons must be included from `{project-folder}/src/assets/fonts/mlIcons.css` into your `index.html`
- To have AOT working you must execute the following steps:
  - Copy `{project-folder}/node_modules/material-light/src/app/ml/` folder to your `/src/app` folder
  - Copy `{project-folder}/node_modules/material-light/src/assets/` folder to your `/src/` folder
- Import the component modules from `{project-folder}/src/app/ml/components` in your own module. Component modules have `*Mod.ts` file name
- For example, if you want to use `MlButton`, import `MlButtonMod.ts` in your module and place `<ml-button>my button</ml-button>` in your template
- Use the components following the examples in the `{project-folder}/node_modules/material-light/src/app/pages` directory.
- Use `<ml-layout>` as base component to place inside it all other components
- This project does not work in full strict Typescript mode. (`strict` flag must be `false` in `tsconfig.json`)

## Theming

Basisc theming can be achieved using Angular special selectors in the root component:

```CSS
<style>
  /* Header theme */
  :host /deep/ ml-header {
    background: cornflowerblue;
    color: yellow;
   }
   
  /* Content theme */
  :host /deep/ ml-content {
    background: lightblue;
  }
</style>
```

For advanced theming, CSS selectors must be used. Inspect the DOM using developer tools. For example:

```CSS
<style>
  /* Button colored theme */
  :host /deep/ ml-button.mdl-button--raised.mdl-button--colored {
    background: brown;
  }
  
  /* Button accent theme */
  :host /deep/ ml-button.mdl-button--raised.mdl-button--accent {
    background: green;
  }
</style>  
```

## Running the demo

You can run the compiled demo pointing a web server to `{project-folder}/node_modules/material-light/dist/index.html`
If you want to compile the project:
- Clone or download the repo
- Inside the project folder run `npm install`
- Adjust the `basePath` in `mlDemoAppMod.ts` to your environment and run it with `ng serve`

## Testing

<div>Tests with the colaboration of:</div>
<a href="https://www.browserstack.com/" target="_blank"><img src="browserstack-logo.png" height="90px"></a>

## Disclaimers:

- This project is based on <a href="http://getmdl.io" target="_blank">Material Design Lite from Google</a>. It is an adaptation of MDL JavaScript components to Angular components with the permission of the MDL team.
- Material Design is a Google's registered trade mark probably.
- This is an open-source project without commercial or profit intention.

<p><a href="#">Back to top</a>
