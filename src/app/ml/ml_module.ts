//todo: revisar el funcionamiento de las fuentes y si no funcionan usar las del proyecto ng1.5-F7-components

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MlComponentsList} from "./components/ml_components_list";
import {MlLayout} from "./components/layout/ml_layout";

@NgModule({

imports: [
  BrowserModule,
  FormsModule,
  ReactiveFormsModule
],

declarations: [
    MlComponentsList
],
  
exports: [
  MlComponentsList,
  MlLayout
]

})
export class MlModule{}