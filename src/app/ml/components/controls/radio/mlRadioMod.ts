import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MlRadio} from "./mlRadio";
@NgModule({
imports: [CommonModule, FormsModule, ReactiveFormsModule],
declarations: [MlRadio],
exports: [MlRadio]})
export class MlRadioMod{}