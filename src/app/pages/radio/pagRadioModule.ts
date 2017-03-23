import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MlRippleMod} from "../../ml/components/ripple/mlRippleMod";
import {MlRadioMod} from "../../ml/components/controls/radio/mlRadioMod";
import {MlButtonMod} from "../../ml/components/controls/button/mlButtonMod";
import {DebugFormMod} from "../../ml/lib/debug_form/debugFormMod";
import {ViewSourceMod} from "../view-source/viewSourceMod";
import {PagRadio} from "./pagRadio";
@NgModule({
imports: [MlRippleMod, FormsModule, ReactiveFormsModule, MlButtonMod, MlRadioMod, DebugFormMod, ViewSourceMod,
RouterModule.forChild([{path: '', component: PagRadio}])],
declarations: [PagRadio]}) export default class PagRadioModule{}
