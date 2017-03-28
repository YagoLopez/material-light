import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {MlCheckboxMod} from "../../ml/components/controls/checkbox/mlCheckboxMod";
import {DebugFormMod} from "../../ml/lib/debug_form/debugFormMod";
import {MlRippleMod} from "../../ml/components/ripple/mlRippleMod";
import {ViewSourceMod} from "../view-source/viewSourceMod";
import {PagCheckbox} from "./pagCheckbox";
@NgModule({
imports: [MlRippleMod, FormsModule, ReactiveFormsModule, MlCheckboxMod, DebugFormMod, ViewSourceMod,
RouterModule.forChild( [{path: '', component: PagCheckbox}] )],
declarations: [PagCheckbox]})
export class PagCheckboxMod{}
