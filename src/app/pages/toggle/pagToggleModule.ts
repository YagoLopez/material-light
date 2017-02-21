//todo: ripple
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MlToggleMod} from "../../ml/components/controls/toggle/mlToggleMod";
import {MlRippleMod} from "../../ml/components/ripple/mlRippleMod";
import {MlIconMod} from "../../ml/components/icon/mlIconMod";
import {DebugFormMod} from "../../ml/lib/debug_form/debugFormMod";
import {PagToggle} from "./pagToggle";
@NgModule({
imports: [MlRippleMod, ReactiveFormsModule, MlIconMod, MlToggleMod, DebugFormMod,
RouterModule.forChild([{path: '', component: PagToggle}])],
declarations: [PagToggle]})
export default class PagToggleModule{}